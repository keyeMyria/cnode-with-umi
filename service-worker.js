"use strict";var precacheConfig=[["/cnode-with-umi/static/0.c8b40094.async.js","efa7aa98e220cd515ada3be3564fc406"],["/cnode-with-umi/static/1.3d2023b0.async.js","767f329b277114030e10fabf2432269a"],["/cnode-with-umi/static/2.c93d2010.async.js","e29c675841751155402e84b0783ad3b4"],["/cnode-with-umi/static/3.b811b731.async.js","7e7592df378eb34f1b6813271bbe38ad"],["/cnode-with-umi/static/4.58cd8715.async.js","4208f3ed72f02e2528fa5e163ce0a08a"],["/cnode-with-umi/static/5.2a3c6fca.async.js","e504d57c25d2a3ea77202fda72bb6e80"],["/cnode-with-umi/static/6.2481e765.async.js","a053c7f55c50ea3c3c336734f67b904a"],["/cnode-with-umi/static/7.303b79f9.async.js","a5e320a10fd8fce88e331cd5f8bb1cf4"],["/cnode-with-umi/static/index.html","1985f0e9224b660d22497455489b0e3c"],["/cnode-with-umi/static/static/iconfont.7074246f.ttf","7074246f279f76e7357ac95b124d296a"],["/cnode-with-umi/static/static/iconfont.cc5250e7.eot","cc5250e7e9094f1ada4897973ba2bafb"],["/cnode-with-umi/static/umi.55ae943a.css","55ae943a6e9c2e338e821a860b6fd417"],["/cnode-with-umi/static/umi.dec5a8c6.js","37d340e870b36edb113d5c8c4737db8a"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=t),n.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,n,a){var c=new URL(e);return a&&c.pathname.match(a)||(c.search+=(c.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(n)),c.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var n=new URL(t).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,t){var n=new URL(e);return n.hash="",n.search=n.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),n.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],n=e[1],a=new URL(t,self.location),c=createCacheKey(a,hashParamName,n,!1);return[a.toString(),c]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(n){if(!t.has(n)){var a=new Request(n,{credentials:"same-origin"});return fetch(a).then(function(t){if(!t.ok)throw new Error("Request for "+n+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(n,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(n){return Promise.all(n.map(function(n){if(!t.has(n.url))return e.delete(n)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,n=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,"index.html"),t=urlsToCacheKeys.has(n));0,t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});