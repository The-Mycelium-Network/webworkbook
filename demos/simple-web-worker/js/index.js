(function () {
  "use strict";

  const message = document.getElementById("message");
  const outputContainer = document.getElementById("output");
  const sendButton = document.getElementById("send-message");
  const startButton = document.getElementById("start-worker");
  const stopButton = document.getElementById("stop-worker");

  let worker = null;

  function startWorker() {
    worker = new Worker("/js/worker.js");
    worker.addEventListener("message", (event) => {
      console.log(event.data);
    });
  }

  if (startButton) {
    startButton.addEventListener("click", () => {
      if (!worker) {
        startWorker();
      }
    });
  }

  if (stopButton) {
    stopButton.addEventListener("click", () => {
      worker.terminate();
      worker = null;
    });
  }

  if (sendButton) {
    sendButton.addEventListener("click", () => {
      if (worker) {
        outputContainer.textContent = "";
        worker.postMessage({ message: message.value });
      } else {
        outputContainer.textContent = "No worker 😱";
      }
    });
  }

  startWorker();
})();
