"use strict";

self.onmessage = (event) => {
  if (event.data.message) {
    self.postMessage(
      `Received the following message from page: ${event.data.message}`
    );
  }
};
