(function () {
  console.log("sending postmessage");
  const frame = document.getElementById("frame");
  frame.contentWindow.postMessage({ message: "Hello from parent" }, "*");

  window.addEventListener(
    "message",
    function (event) {
      console.log("recieved message from iframe", event.data.message);
      const output = document.getElementById("message");
      output.textContent = event.data.message;
    },
    false
  );
})();
