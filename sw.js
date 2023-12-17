importScripts("https://storage.googleapis.com/workbox-cdn/releases/6.6.1/workbox-sw.js");

const CACHE = 'cool-cache';

const PRECACHE_ASSETS = [
    '/images/'
]


self.addEventListener('install', event => {
    event.waitUntil((async () => {
        const cache = await caches.open(CACHE);
        cache.addAll(PRECACHE_ASSETS);
    })());
});


self.addEventListener('push', (event) => {
  event.waitUntil(
    self.registration.showNotification('Notification Title', {
      body: 'Notification Body Text',
      icon: '/images/vector.svg',
    });
  );
});


self.addEventListener('notificationclick', (event) => {
    event.notification.close(); 
    var fullPath = self.location.origin + event.notification.data.path; 
    clients.openWindow(fullPath); 
});
