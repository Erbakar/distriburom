import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// SPA: Alt sayfalarda yenileme yapıldığında sunucu index.html döndürür, router doğru sayfayı açar.
function historyFallback() {
  const fallback = (req: { url?: string; method?: string }, _res: unknown, next: () => void) => {
    const url = req.url ?? '';
    // Dosya uzantılı istekleri (modül, asset) index.html'e yönlendirme – Vite /index.tsx vb. istiyor
    const hasExtension = /\.[a-z0-9]+(\?|$)/i.test(url);
    const isViteInternal = url.startsWith('/@') || url.startsWith('/node_modules');
    if (req.method === 'GET' && !hasExtension && !isViteInternal) {
      req.url = '/index.html';
    }
    next();
  };
  return {
    name: 'history-fallback',
    enforce: 'pre' as const,
    configureServer(server: { middlewares: { use: (fn: typeof fallback) => void } }) {
      server.middlewares.use(fallback);
    },
    configurePreviewServer(server: { middlewares: { use: (fn: typeof fallback) => void } }) {
      server.middlewares.use(fallback);
    },
  };
}

export default defineConfig({
  server: {
    port: 3000,
    host: '0.0.0.0',
  },
  plugins: [react(), historyFallback()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '.'),
    },
  },
  preview: {
    port: 3000,
    host: '0.0.0.0',
  },
});
