self.addEventListener('install', (e) => {
  console.log('Zenflow Service Worker Installed');
});

self.addEventListener('fetch', (e) => {
  // This allows the app to work offline later if you add caching
});
