var http = require("http");

http
  .createServer(function (req, res) {
    if (req.url === "/slow-response") {
      setTimeout(() => {
        const msg = {
          msg: "I am as slow as a snail",
        };
        res.writeHead(200, { "Access-Control-Allow-Origin": "*" });
        res.write(JSON.stringify(msg));
        res.end();
      }, 3000);
    } else if (req.url.includes("/weather")) {
      console.log(req.url);
      setTimeout(() => {
        const msg = {
          msg: "I am as slow as a snail",
        };
        res.writeHead(200, { "Access-Control-Allow-Origin": "*" });
        res.write(JSON.stringify(msg));
        res.end();
      }, 3000);
    } else {
      const msg = {
        msg: "Hello World",
      };
      res.write(JSON.stringify(msg));
      res.end();
    }
  })
  .listen(8080);
