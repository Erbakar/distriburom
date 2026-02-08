# Distriburom — Design de Mobilier Modern

Mobilier modern kataloğu ve web sitesi. Yerel ortamda veya istediğiniz platformda çalıştırıp yayına alabilirsiniz.

## Gereksinimler

- Node.js (LTS önerilir)

## Yerel Çalıştırma

1. Bağımlılıkları yükleyin:
   ```bash
   npm install
   ```

2. Geliştirme sunucusunu başlatın:
   ```bash
   npm run dev
   ```
   Uygulama varsayılan olarak http://localhost:3000 adresinde açılır.

## Build ve Önizleme

- Production build:
  ```bash
  npm run build
  ```

- Build çıktısını yerel önizleme:
  ```bash
  npm run preview
  ```

## Proje Yapısı

- `App.tsx` — Ana uygulama ve dil yönetimi
- `components/` — Navbar, Footer, Chatbot
- `pages/` — Sayfa bileşenleri (Home, Products, Contact, vb.)
- `services/geminiService.ts` — Chatbot için yerel asistan yanıtları (harici API yok)

Tamamen frontend projesidir; harici API veya backend gerekmez.
