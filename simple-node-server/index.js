import http from "http";
import fetch from "node-fetch";

async function getWeatherData(city) {
  const weatherDBBaseURL = "https://weatherdbi.herokuapp.com/data/weather";
  const response = await fetch(`${weatherDBBaseURL}/${city}`);
  return response.json();
}

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
      const requestURL = new URL(req.url, `http://${req.headers.host}`);
      const searchParams = requestURL.searchParams;
      const city = searchParams.get("city");
      const delay = searchParams.get("delay") || 0;

      const weatherData = await getWeatherData(city).catch((err) => {
        res.writeHead(200, { "Access-Control-Allow-Origin": "*" });
        res.write(`Error getting weather data: ${err.message}`);
        res.end();
      });

      setTimeout(() => {
        res.writeHead(200, { "Access-Control-Allow-Origin": "*" });
        res.write(
          JSON.stringify({
            region: weatherData.region,
            currentConditions: weatherData.currentConditions,
          })
        );
        res.end();
      }, delay);
    } else {
      const msg = {
        msg: "Hello World",
      };
      res.write(JSON.stringify(msg));
      res.end();
    }
  })
  .listen(8080);
