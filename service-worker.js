importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.5.1/workbox-sw.js');

if(workbox){
  const cacheName = 'v1';
  const offlineUrl = '/html/offline.html';

  workbox.precaching.precacheAndRoute([
    { url: "/css/styles.css", revision: null },
    { url: '/js/main.js', revision: null },
    { url: offlineUrl, revision: null }, // para cuando estemos offline
    {url: '/js/tienda.js', revision: null},
    {url: '/js/serie.js', revision: null},
    {url: '/js/producto.js', revision: null},
    {url: '/js/libro.js', revision: null},
    {url: '/js/disco.js', revision: null},

  ])
  workbox.routing.setDefaultHandler(new workbox.strategies.NetworkFirst());
  workbox.recipes.offlineFallback({pageFallback: offlineUrl});
  workbox.routing.registerRoute(
    /\.(?:css|js)$/,
    new workbox.strategies.StaleWhileRevalidate({
        cacheName: cacheName
    })
);



  

  // const addResourcesToCache = async (resources) => {
  //   const cache = await caches.open(cacheName);
  //   await cache.addAll(resources);
  //   /* Incluir la siguiente linea para evitar el siguiente error:
  //     "The FetchEvent for resulted in a network error response: a redirected response was used 
  //     for a request whose redirect mode is not "follow"."
  //   */
  //   fetch(offlineUrl).then(response => cache.put(offlineUrl, new Response(response.body)));
  // };


  // const putInCache = async (request, response) => {
  //     const cache = await caches.open(cacheName);
  //     await cache.put(request, response);
  // };

  // const cacheFirst = async ({ request, fallbackUrl }) => {
  //     const responseFromCache = await caches.match(request);
  //     if (responseFromCache) {
  //         return responseFromCache;
  //     }

  //     try {
  //         const responseFromNetwork = await fetch(request);
  //         // Descomentar esta linea si queremos meter en cache cualquier recurso que nos descarguemos
  //         putInCache(request, responseFromNetwork.clone());
  //         return responseFromNetwork;
  //     } catch (error) {
  //         const fallbackResponse = await caches.match(fallbackUrl); 
  //         if (fallbackResponse) {
  //             return fallbackResponse;
  //         }
  //         return new Response("Network error happened", {status: 408, headers: { "Content-Type": "text/plain" }});
  //     }
  // };

  // this.addEventListener('fetch', event => {
  //   event.respondWith( cacheFirst({
  //     'request': event.request,
  //     'fallbackUrl': offlineUrl
  //   }));
  // });
};