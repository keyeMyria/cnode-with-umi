"use strict";var precacheConfig=[["/cnode-with-umi/static/0.c8b40094.async.js","efa7aa98e220cd515ada3be3564fc406"],["/cnode-with-umi/static/1.f2cd5f0f.async.js","4c07758817ff9a0d9d690bd0c9048c43"],["/cnode-with-umi/static/2.137b6fd3.async.js","5a95c2fac6e79fe66af6ea1486361266"],["/cnode-with-umi/static/3.4498248a.async.js","870f75b6a6cc227c54541485e78275f8"],["/cnode-with-umi/static/4.28003ec6.async.js","b08d3d037d890c1d191cfc85b97f6e80"],["/cnode-with-umi/static/5.6b9e8901.async.js","164c8e80d08181cde66ab142fe3dec92"],["/cnode-with-umi/static/6.bc2b29ab.async.js","e1681d1770293dff2fc20d4f43ab684c"],["/cnode-with-umi/static/7.303b79f9.async.js","a5e320a10fd8fce88e331cd5f8bb1cf4"],["/cnode-with-umi/static/index.html","1985f0e9224b660d22497455489b0e3c"],["/cnode-with-umi/static/static/iconfont.7074246f.ttf","7074246f279f76e7357ac95b124d296a"],["/cnode-with-umi/static/static/iconfont.cc5250e7.eot","cc5250e7e9094f1ada4897973ba2bafb"],["/cnode-with-umi/static/umi.7bf2d276.js","90a319dfa1a6da80ba1989ba6661ac7d"],["/cnode-with-umi/static/umi.b56ba215.css","b56ba215e79e2dfd2f47b0d1ab6614e4"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=t),n.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,n,a){var c=new URL(e);return a&&c.pathname.match(a)||(c.search+=(c.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(n)),c.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var n=new URL(t).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,t){var n=new URL(e);return n.hash="",n.search=n.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),n.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],n=e[1],a=new URL(t,self.location),c=createCacheKey(a,hashParamName,n,!1);return[a.toString(),c]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(n){if(!t.has(n)){var a=new Request(n,{credentials:"same-origin"});return fetch(a).then(function(t){if(!t.ok)throw new Error("Request for "+n+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(n,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(n){return Promise.all(n.map(function(n){if(!t.has(n.url))return e.delete(n)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,n=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,"index.html"),t=urlsToCacheKeys.has(n));0,t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});