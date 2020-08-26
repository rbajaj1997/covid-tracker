importScripts("/covid-tracker/precache-manifest.3c13af274a4a57a2e524992ec14b43cf.js", "/covid-tracker/workbox-v4.3.1/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "/covid-tracker/workbox-v4.3.1"});
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
