// Fetch events, on registration of Service Worker...
self.addEventListener('fetch', (event) => {
    event.respondWith(caches.open('cache').then((cache) => {
        return cache.match(event.request).then((response) => {
            console.log("cache request: " + event.request.url);
            var fetchPromise = fetch(event.request).then((networkResponse) => {
                // Update the cache...                   
                console.log("fetch completed: " + event.request.url, networkResponse);
                if (networkResponse) {
                    console.debug("updated cached page: " + event.request.url, networkResponse);
                    cache.put(event.request, networkResponse.clone());
                }
                return networkResponse;
            }, event => {
                // Rejected promise - just ignore it, we're offline...  
                console.log("Error in fetch()", event);
                event.waitUntil(
                    // Name the *cache* in the caches.open()...
                    caches.open('cache').then((cache) => {
                        // Take a list of URLs, then fetch them from the server and add the response to the cache...
                        return cache.addAll([
                            './index.html',
                            './styles/style.css',
                            './main.js',
                            './images/*',
                            './app.webmanifest'
                        ]);
                    })
                );
            });
            // Respond from the cache, or the network...
            return response || fetchPromise;
        });
    }));
});

// Always updating i.e latest version available...
self.addEventListener('install', (event) => {
    self.skipWaiting();
    console.log("Latest version installed!");
});