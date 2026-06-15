const CACHE_NAME = 'rotina-magica-v1';
const ARQUIVOS = [
  '/rotina-infantil/',
  '/rotina-infantil/index.html',
  '/rotina-infantil/manifest.json',
  '/rotina-infantil/icon-192.png',
  '/rotina-infantil/icon-512.png'
];

// Instalar e guardar arquivos
self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(ARQUIVOS)));
});

// Usar arquivos salvos para funcionar sem internet
self.addEventListener('fetch', e => {
  e.respondWith(caches.match(e.request).then(res => res || fetch(e.request)));
});
