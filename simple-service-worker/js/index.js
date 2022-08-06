(function main() {
  "use strict";

  const isServiceWorkerSupported = "serviceWorker" in navigator;
  let isOnline = "onLine" in navigator ? navigator.onLine : true;
  let swRegistration;
  let serviceWorker;

  if (!isServiceWorkerSupported) {
    return;
  }

  initServiceWorker().catch(console.error);

  if (!isOnline) {
    // show offline
    document.documentElement.classList.add("offline");
    isOnline = false;
  }

  window.addEventListener("online", () => {
    // we are now online
    document.documentElement.classList.remove("offline");
    isOnline = true;
    sendStatusUpdate();
  });

  window.addEventListener("offline", () => {
    // we are now offline
    document.documentElement.classList.add("offline");
    isOnline = false;
    sendStatusUpdate();
  });

  async function initServiceWorker() {
    // starts up and installs the service worker
    swRegistration = await navigator.serviceWorker.register("/sw.js", {
      updateViaCache: "none",
    });

    // installing: first time the service worker is installed
    // waiting: new service worker waiting to take control
    // you can bypass the above with SKIP_WAITING
    // active: installed and in control
    serviceWorker =
      swRegistration.installing ||
      swRegistration.waiting ||
      swRegistration.active;

    sendStatusUpdate(serviceWorker);

    // new service worker is installed and has taken control
    navigator.serviceWorker.addEventListener("controllerchange", () => {
      serviceWorker = navigator.serviceWorker.controller;
      sendStatusUpdate(serviceWorker);
    });

    navigator.serviceWorker.addEventListener("message", onServiceWorkerMessage);
  }

  function onServiceWorkerMessage(event) {
    const { data } = event;

    if (data.requestStatusUpdate) {
      console.info(
        "Received status update request from service worker, responding..."
      );
      // we specify the target using event.ports
      // TODO: @see https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerMessageEvent/ports
      sendStatusUpdate(event.ports && event.ports[0]);
    }
  }

  function sendStatusUpdate(target) {
    sendServiceWorkerMessage({ statusUpdate: { isOnline } }, target);
  }

  function sendServiceWorkerMessage(msg, target) {
    if (target) {
      target.postMessage(msg);
    } else if (serviceWorker) {
      serviceWorker.postMessage(msg);
    } else {
      navigator.serviceWorker.controller.postMessage(msg);
    }
  }
})();
