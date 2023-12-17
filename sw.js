importScripts("https://storage.googleapis.com/workbox-cdn/releases/6.6.1/workbox-sw.js");

const CACHE_NAME = 'cool-cache';

const PRECACHE_ASSETS = [
    '/images/'
]

self.addEventListener('install', event => {
    event.waitUntil((async () => {
        const cache = await caches.open(CACHE);
        cache.addAll(PRECACHE_ASSETS);
    })());
});
