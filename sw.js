"use strict";

// Code in the global scope of the service is
// initialised when the service worker is first
// installed. It is reinitialised should the
// service worker be killed and then restarted
// by the browser. Therefore, be careful what
// you place in the global scope.

const VERSION = 5;
const cacheName = `online-status-tracker-${VERSION}`;

const cacheItems = ["/", "/js/index.js", "/css/main.css"];

let isOnline = true;

self.addEventListener("install", onInstall);
self.addEventListener("activate", onActivate);
self.addEventListener("message", onMessage);
self.addEventListener("fetch", onFetch);

// ran everytime the service worker is started
// even if it has already been installed.
init().catch(console.error);

async function init() {
  await sendMessage({ requestStatusUpdate: true });
  await cacheFiles();
}

// will receive an event object
async function onInstall() {
  console.info(`Service worker (${VERSION}) installed.`);
  // this is where you can prompt the user that there
  // is a new version available.
  // Here we just skip waiting and let the new service
  // worker take over.
  self.skipWaiting();
}

async function sendMessage(msg) {
  const allClients = await clients.matchAll({ includeUncontrolled: true });
  return Promise.all(
    allClients.map((client) => {
      const channel = new MessageChannel();
      channel.port1.onmessage = onMessage;
      return client.postMessage(msg, [channel.port2]);
    })
  );
}

function onMessage({ data }) {
  if (data.statusUpdate) {
    ({ isOnline } = data.statusUpdate);
    console.info(
      `Service worker (${VERSION}) status update , isOnline: ${isOnline}`
    );
  }
}

function onFetch(event) {
  event.respondWith(router(event.request));
}

async function router(req) {
  const url = new URL(req.url);
  const reqURL = url.pathname;
  const cache = await caches.open(cacheName);

  if (url.origin === location.origin) {
    let res;

    if (isOnline) {
      try {
        const fetchOptions = {
          method: req.method, // use the same method as the inbound request
          headers: req.headers, // send along any request headers
          credentials: "omit",
          cache: "no-store",
        };

        //   file deepcode ignore Ssrf: <please specify a reason of ignoring this>
        res = await fetch(req.url, fetchOptions);
        if (res && res.ok) {
          await (await cache).put(reqURL, res.clone());
          return res;
        }
      } catch (error) {
        console.error(`Error during fetch in router: ${error.toString()}`);
      }
    }

    // file deepcode ignore reDOS: <please specify a reason of ignoring this>
    res = await cache.match(reqURL);
    if (res) {
      // we want to be able to reuse the request in the cache
      // multiple times so, we return a clone and not the
      // original.
      return res.clone();
    }
  }
}

// will receive an event object
function onActivate(event) {
  // this essentially tells the browser, please do
  // not shut down the service worker until this
  // work has completed.
  // ----------------------------------------------------------------
  // NOTE: This is not a guarantee, but is a strong hint to browser.
  // If your handleActivation function takes a really long time
  // to complete, the browser might still decide to shut down
  // the service worker before the work is complete.
  event.waitUntil(handleActivation());
}

async function handleActivation() {
  // we can safely clear the old caches here because,
  // if we reached the code here, it means a new
  // version of the service worker has taken
  // control, and there is no older version
  // that might still be using files that was
  // in the cache.
  await clearCaches();
  await cacheFiles(/* forceReload= */ true);
  // tells all connected clients that the new
  // service worker has taken control.
  await clients.claim();
  console.info(`Service worker (${VERSION}) active.`);
}

async function clearCaches() {
  // get a list of all caches
  const cacheNames = await caches.keys();
  const oldCacheNames = cacheNames.filter((cacheName) => {
    if (/^online-status-tracker-\d+$/.test(cacheName)) {
      let [, cacheVersion] = cacheName.match(/^online-status-tracker-(\d+)$/);
      cacheVersion = cacheVersion != null ? Number(cacheVersion) : cacheVersion;
      return cacheVersion > 0 && cacheVersion !== VERSION;
    }
  });
  return Promise.all(
    oldCacheNames.map((cacheName) => {
      return caches.delete(cacheName);
    })
  );
}

async function cacheFiles(forceRelead = false) {
  let cache = await caches.open(cacheName);

  return Promise.all(
    cacheItems.map(async (url) => {
      try {
        let res;

        // first check if the file is already cached
        if (!forceRelead) {
          res = await cache.match(url);
          if (res) {
            return res;
          }
        }

        // if not, let’s fetch it and cache it!
        let fetchOptions = {
          method: "GET",
          cahce: "no-cache",
          credentials: "omit",
        };

        res = await fetch(url, fetchOptions);

        if (res.ok) {
          await cache.put(url, res.clone());
        }
      } catch (error) {
        console.error(`Error caching resource: ${error.toString()}`);
      }
    })
  );
}
