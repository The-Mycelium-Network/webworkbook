(function () {
  console.log("inside frame");
  window.addEventListener(
    "message",
    function (event) {
      console.log("recieved message", event.data.message);
      const output = document.getElementById("message");
      output.textContent = event.data.message;
      event.source.postMessage({ message: "Hello from the frame" }, "*");
    },
    false
  );
})();
