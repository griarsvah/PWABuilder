importScripts("https://storage.googleapis.com/workbox-cdn/releases/6.6.1/workbox-sw.js");


const CACHE = 'cool-cache';


const PRECACHE_ASSETS = [
    '/images/'
]


const offlineFallbackPage = "index.html";

self.addEventListener('install', async (event) => {
  event.waitUntil(
    caches.open(CACHE)
      .then((cache) => cache.add(offlineFallbackPage))
  );
});




/* Test */
// Query the user for permission.
const periodicSyncPermission = await navigator.permissions.query({
  name: 'periodic-background-sync',
});

// Check if permission was properly granted.
if (periodicSyncPermission.state == 'granted') {

  // Register a new periodic sync.
  await registration.periodicSync.register('fetch-new-content', {
    // Set the sync to happen no more than once a day.
    minInterval: 24 * 60 * 60 * 1000
  });
} 


// Listen for the `periodicsync` event.
self.addEventListener('periodicsync', event => {

  // Check for correct tag on the periodicSyncPermissionsync event.
  if (event.tag === 'fetch-new-content') {

    // Execute the desired behavior with waitUntil().
    event.waitUntil(

      // This is just a hypothetical function for the behavior we desire.
      fetchNewContent();
    );
  }
});
/* /Test */










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









self.addEventListener('push', function (event) {
    if (Notification.permission === "granted") {
        let notification_data = JSON.parse(event.data.text());
        const notificationText = notification_data["description"];
        const notification_title = notification_data["notifier_DisplayName"];
        let notificaiotn_timestampt = notification_data["CreatedAt"];
        let notification_timestamp = new Date(notificaiotn_timestampt * 1000);
        let notification_timestamp_string = notification_timestamp.toLocaleString();
        let notificaiton_sid = notification_data["sid"];


        const showNotification = self.registration.showNotification(notification_title, {
            // title: notification_title,
            body: notificationText,
            icon: '/images/vector.svg',
            tag: notificaiton_sid,
            data: {
                url: notification_data["url"]
            },
            // actions: [
            //     { action: 'actionName', title: 'Mark as read', icon: '/images/vector.svg' },
            //     { action: 'actionName', title: 'Mark as unread', icon: '/images/vector.svg' },
            // ],
            timestamp: notification_timestamp_string,
        });
        event.waitUntil(showNotification);
    }
});



self.addEventListener('notificationclick', function (event) {
    event.notification.close();
    event.waitUntil(
        clients.openWindow(event.notification.data.url)
    );
});
