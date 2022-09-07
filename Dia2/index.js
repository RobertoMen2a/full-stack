const http = require("http");
const url = require("url");
const axios = require("axios");
const extraFunction = require("./modules/ExtraFunction.js");

const server = http.createServer((req, res) => {
  const { query, pathname } = url.parse(req.url, true);
  const response = {
    success: true,
    message: "API Working",
  };

  res.writeHead(200, {
    "Content-type": "application/json",
  });
  extraFunction();
  res.end(JSON.stringify(response));
});

server.listen(3030, "127.0.0.1", () => {
  console.log("Listening to requests on port 3030");
  extraFunction();
});

console.log("after server");

//POSTMAN ======> SERVER (NODE)