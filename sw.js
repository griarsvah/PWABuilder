importScripts("https://storage.googleapis.com/workbox-cdn/releases/6.6.1/workbox-sw.js");


const CACHE = 'cool-cache';


const PRECACHE_ASSETS = [
    '/images/'
]


const offlineFallbackPage = "index.html";

self.addEventListener('install', async (event) => {
  event.waitUntil(      
    cache.addAll(PRECACHE_ASSETS);
    caches.open(CACHE)
      .then((cache) => cache.add(offlineFallbackPage))
  );
});





if (workbox.navigationPreload.isSupported()) {
  workbox.navigationPreload.enable();
}

workbox.routing.registerRoute(
  new RegExp('/*'),
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: CACHE
  })
);

self.addEventListener('fetch', (event) => {
  if (event.request.mode === 'navigate') {
    event.respondWith((async () => {
      try {
        const preloadResp = await event.preloadResponse;

        if (preloadResp) {
          return preloadResp;
        }

        const networkResp = await fetch(event.request);
        return networkResp;
      } catch (error) {

        const cache = await caches.open(CACHE);
        const cachedResp = await cache.match(offlineFallbackPage);
        return cachedResp;
      }
    })());
  }
});

self.addEventListener("message", (event) => {
  if (event.data && event.data.type === "SKIP_WAITING") {
    self.skipWaiting();
  }
});






self.addEventListener('notificationclick', (event) => {
    event.notification.close(); 
    var fullPath = self.location.origin + event.notification.data.path; 
    clients.openWindow(fullPath); 
});
