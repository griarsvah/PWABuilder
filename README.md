# PWABuilder
Hey, everybody!

The project is https://www.pwabuilder.com/, helping to build a progressive app. You can also test any site https://www.pwabuilder.com/reportcard?site=https://griarsvah.github.io/PWABuilder, but I want to make a project that will give the best results for all tests. pwabuilder 100%

---

## Manifest

### Required

- [x] Manifest has icons field
- [x] Manifest has name field
- [x] Manifest has a short_name field
- [x] Manifest has start_url field


### Recommended

- [x] Manifest has hex encoded background_color
- [x] Manifest has description field
- [x] Manifest has display field
- [x] Icons have at least one icon with purpose any
- [x] Manifest has an app ID
- [x] Manifest has launch_handler field
- [x] Manifest has orientation field
- [x] Manifest has screenshots field
- [x] Manifest has hex encoded theme_color

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
* background sync
* periodic sync
* push notifications
* offline support
