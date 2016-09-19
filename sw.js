const CACHE_NAME = 'myrestaurant-v1'
const cache_urls = ["/offline/view.html","/offline/style.css","/offline/map.jpg"]

self.addEventListener("install", function(ev){
  console.log("service worker instalada")

  caches.open(CACHE_NAME)
        .then(function (cache) {
          console.log("cache opened")

          return cache.addAll(cache_urls)
        })
})