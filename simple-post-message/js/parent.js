(function () {
  const button = document.getElementById("send");

  button.addEventListener("click", function () {
    const frame = document.getElementById("frame");
    frame.contentWindow.postMessage({ message: "Hello from parent" }, "*");
  });

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
