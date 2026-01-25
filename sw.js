/**
 * Service Worker - TaHa Travel Agency
 * Caching strategy for better performance
 */

const CACHE_NAME = 'taha-travel-v5';
const urlsToCache = [
    '/',
    '/index.html',
    '/tour-detail.html',
    '/css/base.css',
    '/css/variables.css',
    '/css/animations.css',
    '/css/responsive.css',
    '/css/components/header.css',
    '/css/components/footer.css',
    '/css/components/hero.css',
    '/css/components/about.css',
    '/css/components/bestsale.css',
    '/css/components/services.css',
    '/css/components/destinations.css',
    '/css/components/tours.css',
    '/css/components/testimonials.css',
    '/css/components/contact.css',
    '/css/components/tour-detail.css',
    '/css/components/regions.css',
    '/css/components/central.css',
    '/css/components/south.css',
    '/css/components/phuquoc.css',
    '/js/main.js',
    '/js/loader.js',
    '/js/tour-detail.js',
    '/js/components/header.js',
    '/js/components/footer.js',
    '/js/components/hero.js',
    '/js/components/about.js',
    '/js/components/bestsale.js',
    '/js/components/services.js',
    '/js/components/destinations.js',
    '/js/components/regions.js',
    '/js/components/central.js',
    '/js/components/south.js',
    '/js/components/phuquoc.js',
    '/js/components/tours.js',
    '/js/components/testimonials.js',
    '/js/components/contact.js',
    '/data/tours.json',
    '/data/central-tours.json',
    '/data/south-tours.json',
    '/data/phu-quoc-tours.json'
];

// Install event - cache all static resources
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                console.log('Opened cache');
                return cache.addAll(urlsToCache);
            })
    );
});

// Fetch event - serve from cache, fallback to network
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                // Cache hit - return response
                if (response) {
                    return response;
                }

                // Clone the request
                const fetchRequest = event.request.clone();

                return fetch(fetchRequest).then(response => {
                    // Check if valid response
                    if (!response || response.status !== 200 || response.type !== 'basic') {
                        return response;
                    }

                    // Clone the response
                    const responseToCache = response.clone();

                    caches.open(CACHE_NAME)
                        .then(cache => {
                            cache.put(event.request, responseToCache);
                        });

                    return response;
                });
            })
    );
});

// Activate event - clean up old caches
self.addEventListener('activate', event => {
    const cacheWhitelist = [CACHE_NAME];
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    if (cacheWhitelist.indexOf(cacheName) === -1) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});
