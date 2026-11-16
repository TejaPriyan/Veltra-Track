const CACHE_NAME = 'veltra-track-v1';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './manifest.json',
  './favicon.svg',
  './favicon.png',
  './icon-192.png',
  './icon-512.png',
  './icon-maskable-512.png',
  './apple-touch-icon.png'
];

// Install: pre-cache static shell assets
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(ASSETS_TO_CACHE);
    }).then(() => self.skipWaiting())
  );
});

// Activate: clean up old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.map(key => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch: Stale-While-Revalidate strategy for optimal offline experience
self.addEventListener('fetch', event => {
  const req = event.request;
  
  // Only handle GET requests
  if (req.method !== 'GET') return;

  event.respondWith(
    caches.match(req).then(cachedResponse => {
      // Return cached response immediately if present
      const fetchPromise = fetch(req).then(networkResponse => {
        // Cache valid responses for same-origin or fonts
        if (
          networkResponse &&
          networkResponse.status === 200 &&
          (req.url.startsWith(self.location.origin) || req.url.includes('fonts.googleapis.com') || req.url.includes('fonts.gstatic.com'))
        ) {
          const clone = networkResponse.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(req, clone));
        }
        return networkResponse;
      }).catch(async () => {
        // Network failed (offline): always resolve to a valid Response
        if (req.mode === 'navigate') {
          return (await caches.match('./index.html')) || new Response('Offline', { status: 503, headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
        }
        return (await caches.match(req)) || Response.error();
      });

      return cachedResponse || fetchPromise;
    })
  );
});
