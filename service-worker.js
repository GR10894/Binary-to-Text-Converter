self.addEventListener('install', event => {
    event.waitUntil(
      caches.open('binary-cache').then(cache => {
        return cache.addAll([
          './',
          './binary-converter.html',
          './manifest.json',
          './icon.png'
        ]);
      })
    );
  });
  
  self.addEventListener('fetch', event => {
    event.respondWith(
      caches.match(event.request).then(resp => {
        return resp || fetch(event.request);
      })
    );
  });
  