"use strict";var precacheConfig=[["/bootstrap-4-react/index.html","ff9c26e6fcd2c60a4791266ae7883066"],["/bootstrap-4-react/static/css/main.1a396dd8.css","be29c97cf2921fd6ee2c3bd2dbb83630"],["/bootstrap-4-react/static/js/main.4f9b1c22.js","e9901dbb29996556bf75c669ef4ae8ab"],["/bootstrap-4-react/static/media/README.9591bdf5.md","9591bdf5b3f71f4843291e507e1091e7"],["/bootstrap-4-react/static/media/alert.9f85a600.md","9f85a600dac3ce325616041d3c4ffee0"],["/bootstrap-4-react/static/media/badge.52a68566.md","52a68566220313b1542dd8cb84302367"],["/bootstrap-4-react/static/media/blockquote.70697793.md","706977930c9c9aad10359046270e407c"],["/bootstrap-4-react/static/media/button-group.eaffdfd6.md","eaffdfd6da2dbce478cf54bed76b0f92"],["/bootstrap-4-react/static/media/button.09f46271.md","09f462719f6b0ee66cc1a109ed13c935"],["/bootstrap-4-react/static/media/card.9fbca1cc.md","9fbca1cc0884a4fa879d8dce995f11d2"],["/bootstrap-4-react/static/media/carousel.030b6d86.md","030b6d8684533d55962017bea09004e3"],["/bootstrap-4-react/static/media/collapse.ed185406.md","ed18540623918ee093259b3439f109b1"],["/bootstrap-4-react/static/media/display.e5e6eb8e.md","e5e6eb8e8089edeb8f87f334fc570c07"],["/bootstrap-4-react/static/media/dropdown.d6901267.md","d6901267bd10f30dc1d6a1013aae781d"],["/bootstrap-4-react/static/media/figure.1e15e3e0.md","1e15e3e0f7218c02660e42e8ab7d6062"],["/bootstrap-4-react/static/media/flex.aa8f9cf3.md","aa8f9cf3b28a6f84ada6922940cd3454"],["/bootstrap-4-react/static/media/float.f5005f29.md","f5005f29a133223dbce852affbb9bd26"],["/bootstrap-4-react/static/media/form.20b8bd3f.md","20b8bd3fcc33a54b58c8e77d439c98f6"],["/bootstrap-4-react/static/media/grid.acd0ce8b.md","acd0ce8b41257b50daf6e818cbaa5f91"],["/bootstrap-4-react/static/media/input-group.38c3050d.md","38c3050d044c8ca31849e2a2075cac15"],["/bootstrap-4-react/static/media/introduction.e678163e.md","e678163e6068aa52f2c8fd0230ea3752"],["/bootstrap-4-react/static/media/jumbotron.0f950498.md","0f95049833fe2d2474c8a1c8eee92e81"],["/bootstrap-4-react/static/media/lead.96d15a42.md","96d15a4201d8439d92f4767d687a3de8"],["/bootstrap-4-react/static/media/list-group.afe4d68f.md","afe4d68fc5852ac20450664d9714b128"],["/bootstrap-4-react/static/media/list.86f2bb97.md","86f2bb9757de384be8a795c792befb9d"],["/bootstrap-4-react/static/media/media.9ccf1b79.md","9ccf1b79f5cf84af11d98d1132118f18"],["/bootstrap-4-react/static/media/modal.381a4956.md","381a495617a825b24e247a349ef28fcf"],["/bootstrap-4-react/static/media/nav.23bd116b.md","23bd116be4ee7cf72b9a471b97671801"],["/bootstrap-4-react/static/media/navbar.4fb3a74f.md","4fb3a74f878bb1c6620270b767c32bbf"],["/bootstrap-4-react/static/media/popover.2e52e455.md","2e52e4559e3f22558889f2343361b703"],["/bootstrap-4-react/static/media/quick-start.ab97e54b.md","ab97e54b2042aeb218c6dc67fd741f98"],["/bootstrap-4-react/static/media/tooltip.16c1c1c0.md","16c1c1c0689fcec6c1184fe93d24f1a3"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,c){var r=new URL(e);return c&&r.pathname.match(c)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],c=new URL(t,self.location),r=createCacheKey(c,hashParamName,a,/\.\w{8}\./);return[c.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(c){return setOfCachedUrls(c).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return c.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),c="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,c),e=urlsToCacheKeys.has(a));var r="/bootstrap-4-react/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});