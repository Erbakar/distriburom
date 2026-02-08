
import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, Send, X, Bot, User } from 'lucide-react';
import { getFurnitureAdvice } from '../services/geminiService';
import { ChatMessage } from '../types';

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'assistant', content: 'Merhaba! Ben Distriburom asistanı. Mobilya seçimi veya dekorasyon konusunda size nasıl yardımcı olabilirim?' }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setIsLoading(true);

    const history = messages.map(m => ({ role: m.role, content: m.content }));
    const aiResponse = await getFurnitureAdvice(userMsg, history);

    setMessages(prev => [...prev, { role: 'assistant', content: aiResponse }]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[60]">
      {isOpen ? (
        <div className="bg-white w-80 sm:w-96 h-[500px] shadow-2xl rounded-2xl flex flex-col border border-stone-200 overflow-hidden animate-in zoom-in-95 duration-200 origin-bottom-right">
          {/* Header */}
          <div className="bg-stone-900 text-white p-4 flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-amber-600 rounded-full flex items-center justify-center">
                <Bot size={18} />
              </div>
              <div>
                <h4 className="font-semibold text-sm">Distriburom Asistan</h4>
                <p className="text-[10px] text-stone-400">Çevrimiçi</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:text-amber-500 transition-colors">
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-stone-50">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                  msg.role === 'user' 
                  ? 'bg-amber-600 text-white rounded-tr-none' 
                  : 'bg-white text-stone-800 border border-stone-200 rounded-tl-none'
                }`}>
                  {msg.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white border border-stone-200 p-3 rounded-2xl rounded-tl-none flex space-x-1">
                  <span className="w-2 h-2 bg-stone-300 rounded-full animate-bounce"></span>
                  <span className="w-2 h-2 bg-stone-300 rounded-full animate-bounce delay-75"></span>
                  <span className="w-2 h-2 bg-stone-300 rounded-full animate-bounce delay-150"></span>
                </div>
              </div>
            )}
            <div ref={chatEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t border-stone-200 bg-white flex items-center space-x-2">
            <input 
              type="text" 
              placeholder="Mesajınızı yazın..." 
              className="flex-1 bg-stone-100 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-amber-500"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            />
            <button 
              onClick={handleSend}
              className="bg-amber-700 text-white p-2 rounded-full hover:bg-amber-800 transition-colors disabled:opacity-50"
              disabled={isLoading}
            >
              <Send size={18} />
            </button>
          </div>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="bg-stone-900 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform active:scale-95 group"
        >
          <MessageSquare className="group-hover:rotate-12 transition-transform" />
        </button>
      )}
    </div>
  );
};

export default Chatbot;
