importScripts("/precache-manifest.836e38eaff1ab4c7991fc5b710417560.js", "/workbox-v4.3.1/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "/workbox-v4.3.1"});
/* eslint-disable no-undef */

console.log("Hello from custom-sw.js!");

if (workbox) {
    console.log(`Yay! Workbox is loaded 🎉`);
} else {
    console.log(`Boo! Workbox didn't load 😬`);
}


self.addEventListener('install', event => event.waitUntil(self.skipWaiting()));
self.addEventListener('activate', event => event.waitUntil(self.clients.claim()));

// We need this in Webpack plugin (refer to swSrc option): https://developers.google.com/web/tools/workbox/modules/workbox-webpack-plugin#full_injectmanifest_config
workbox.precaching.precacheAndRoute(self.__precacheManifest);

// app-shell
workbox.routing.registerRoute("/", new workbox.strategies.StaleWhileRevalidate({
    cacheName: 'static-data'
}));

// JSON data
workbox.routing.registerRoute(/.*disease.*/, new workbox.strategies.NetworkFirst({
    cacheName: 'app-data'
}));
