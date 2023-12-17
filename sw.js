importScripts("https://storage.googleapis.com/workbox-cdn/releases/6.6.1/workbox-sw.js");


const CACHE = 'cool-cache';


const PRECACHE_ASSETS = [
    '/images/'
]


const offlineFallbackPage = "index.html";


self.addEventListener('install', event => {
    event.waitUntil((async () => {
        cache.addAll(PRECACHE_ASSETS);
        caches.open(CACHE)
        .then((cache) => cache.add(offlineFallbackPage))
    })());
});

self.addEventListener('notificationclick', (event) => {
    event.notification.close(); 
    var fullPath = self.location.origin + event.notification.data.path; 
    clients.openWindow(fullPath); 
});
