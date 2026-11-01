const C="bromb-v6",F=["./","index.html","manifest.json","icon-180.png","icon-192.png","icon-512.png","hero.jpg"];
self.addEventListener("install",e=>{e.waitUntil(caches.open(C).then(c=>c.addAll(F)));self.skipWaiting()});
self.addEventListener("activate",e=>e.waitUntil(clients.claim()));
self.addEventListener("fetch",e=>{e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request).then(res=>{if(res.ok&&(e.request.url.startsWith(self.location.origin)||e.request.url.includes("cdnjs"))){const cp=res.clone();caches.open(C).then(c=>c.put(e.request,cp))}return res}).catch(()=>r)))});
