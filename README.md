# PWABuilder
Hey, everybody!

The project is https://www.pwabuilder.com/, helping to build a progressive app. You can also test any site https://www.pwabuilder.com/reportcard?site=https://griarsvah.github.io/PWABuilder, but I want to make a project that will give the best results for all tests. pwabuilder 100%

---

## Manifest

### Required

- [x] [Manifest has icons field](https://developer.mozilla.org/en-US/docs/Web/Manifest/icons)
```
"icons": [
  {
    "src": "images/favicons/favicon.ico",
    "sizes": "64x64 32x32 24x24 16x16",
    "type": "image/x-icon"
  },
  {
      "src": "images/vector.svg",
      "type": "image/svg+xml",
      "sizes": "667x667"
  },
{
      "src": "images/android/launchericon-512.png",
      "type": "image/png",
      "sizes": "512x512"
    },
    {
      "src": "images/android/launchericon-192.png",
      "type": "image/png",
      "sizes": "192x192"
},
    {
      "src": "images/maskable/icon_x48.png",
      "type": "image/png",
      "sizes": "48x48"
},
    {
      "src": "images/maskable/icon_x72.png",
      "type": "image/png",
      "sizes": "72x72"
},
    {
      "src": "images/maskable/icon_x96.png",
      "type": "image/png",
      "sizes": "96x96"
},
    {
      "src": "images/maskable/icon_x128.png",
      "type": "image/png",
      "sizes": "128x128"
},
    {
      "src": "images/maskable/icon_x192.png",
      "type": "image/png",
      "sizes": "192x192"
},
    {
      "src": "images/maskable/icon_x384.png",
      "type": "image/png",
      "sizes": "384x384",
      "purpose": "maskable"
},
    {
      "src": "images/maskable/icon_x512.png",
      "type": "image/png",
      "sizes": "512x512",
      "purpose": "any"
}
],

```
- [x] [Manifest has name field](https://developer.chrome.com/docs/extensions/mv2/manifest/name?hl=ru)
```
"name": "Vahe PWA",
```

- [x] [Manifest has a short_name field](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/short_name)
```
"short_name": "Vahe",

```
- [x] [Manifest has start_url field](https://developer.mozilla.org/en-US/docs/Web/Manifest/start_url)
```
"start_url": "https://griarsvah.github.io/PWABuilder/index.html",
```


### Recommended

- [x] [Manifest has hex encoded background_color](https://developer.mozilla.org/en-US/docs/Web/Manifest/background_color)
```
"background_color": "#ffffff",
```

- [x] [Manifest has description field](https://developer.mozilla.org/en-US/docs/Web/Manifest/description)
```
"description": "My portfolio, my page, portfolio about me, my works, my skills",
```

- [x] [Manifest has display field](https://developer.mozilla.org/en-US/docs/Web/Manifest/display)
```
"display": "fullscreen" ,
```

- [x] [Icons have at least one icon with purpose any]()
```
    {
      "src": "images/maskable/icon_x384.png",
      "type": "image/png",
      "sizes": "384x384",
      "purpose": "maskable"
},
    {
      "src": "images/maskable/icon_x512.png",
      "type": "image/png",
      "sizes": "512x512",
      "purpose": "any"
}
```

- [x] [Manifest has an app ID](https://developer.mozilla.org/en-US/docs/Web/Manifest/id)
```
"id": "index.html",
```

- [x] [Manifest has launch_handler field](https://developer.mozilla.org/en-US/docs/Web/Manifest/launch_handler)
```
"launch_handler": {
  "client_mode": ["focus-existing", "auto"]
},
```

- [x] [Manifest has orientation field](https://developer.mozilla.org/en-US/docs/Web/Manifest/orientation)
```
"orientation": "any",
```

- [x] [Manifest has screenshots field](https://developer.mozilla.org/en-US/docs/Web/Manifest/screenshots)
```
"screenshots" : [
  {
    "src": "screenshot1.webp",
    "sizes": "1280x720",
    "type": "image/webp",
    "form_factor": "wide",
    "label": "Homescreen of Awesome App"
  },
  {
    "src": "screenshot2.webp",
    "sizes": "1280x720",
    "type": "image/webp",
    "form_factor": "wide",
    "label": "List of Awesome Resources available in Awesome App"
  }
]
```

- [x] [Manifest has hex encoded theme_color](https://developer.mozilla.org/en-US/docs/Web/Manifest/theme_color)
```
"theme_color": "#ffffff",
```

### Optional

- [x] Manifest has categories field
- [x] Manifest specifies a default direction of text
- [x] Manifest has iarc_rating_id field
- [x] Manifest specifies a language
- [x] Manifest properly sets prefer_related_applications field
- [x] Manifest has related_applications field
- [x] Manifest has scope field
- [x] Manifest has scope_extensions field

---

## App Capabilities

**display_override**
```
"display_override": ["fullscreen", "standalone", "minimal-ui", "standalone", "window-controls-overlay"],
```

**edge_side_panel**
```
"edge_side_panel": {
  "preferred_width": 480
},
```

**file_handlers**
```
"file_handlers": [
  {
    "action": "index.html",
    "accept": {
      "text/html": [".htm", ".html"]
    }
  }
],
```

**handle_links**
```
"handle_links": "auto",
```

**protocol_handlers**
```
"protocol_handlers": [
  {
    "protocol": "web+jngl",
    "url": "/lookup?type=%s"
  },
  {
    "protocol": "web+jnglstore",
    "url": "/shop?for=%s"
  }
],
```

**share_target**
```
"share_target": {
      "action": "handle-shared-song",
      "method": "POST",
      "enctype": "multipart/form-data",
      "params": {
          "title": "title",
          "files": [
              {
                  "name": "audioFiles",
                  "accept": [
                      "audio/wav",
                      "audio/x-wav",
                      "audio/mpeg",
                      "audio/mp4",
                      "audio/aac",
                      "audio/ogg",
                      "application/ogg",
                      "audio/webm",
                      "audio/flac"
                  ]
              }
          ]
      }
  },
```

**shortcuts**
```
"shortcuts": [
  {
    "name": "Open Play Later",
    "short_name": "Play Later",
    "description": "View the list of podcasts you saved for later",
    "url": "index.html",
    "icons": [{ "src": "images/vector.svg", "sizes": "667x667" }]
  },
  {
    "name": "View Subscriptions",
    "short_name": "Subscriptions",
    "description": "View the list of podcasts you listen to",
    "url": "index.html",
    "icons": [{ "src": "images/vector.svg", "sizes": "667x667" }]
  }
],
```

**widgets**
```
"widgets": [
      {
          "name": "PWAmp mini player",
          "short_name": "PWAmp",
          "description": "Widget to control the PWAmp player",
          "tag": "pwamp",
          "ms_ac_template": "widgets/mini-player.json",
          "data": "widgets/mini-player-data.json",
          "screenshots": [
              {
                  "src": "screenshot-widget.png",
                  "sizes": "600x400",
                  "label": "The PWAmp mini-player widget"
              }
          ],
          "icons": [
              {
                  "src": "favicon-48.png",
                  "sizes": "48x48"
              },
              {
                  "src": "favicon-96.png",
                  "sizes": "96x96"
              },
              {
                  "src": "favicon-128.png",
                  "sizes": "128x128"
              },
              {
                  "src": "favicon-256.png",
                  "sizes": "256x256"
              },
              {
                  "src": "favicon-512.png",
                  "sizes": "512x512"
              }
          ],
          "backgrounds": [
              {
                  "src": "widgets/background.png",
                  "sizes": "600x400"
              }
          ]
      }
  ]
```

----

## Service Worker

* has service worker
> [!TIP]
> Для выполнения этого условия нужно иметь в корне сайта файла sw.js
> ```
> <script>if (typeof navigator.serviceWorker !== 'undefined') {
>		navigator.serviceWorker.register('sw.js')
> }</script>```

* background sync
* periodic sync
* push notifications
* offline support
