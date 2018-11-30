const fs = require("fs");
const http = require("http");
const url = require("url");

const json = fs.readFileSync(`${__dirname}/data/data.json`, "utf-8");
const laptopData = JSON.parse(json);

const server = http.createServer((req, res) => {
  const pathname = url.parse(req.url, true).pathname;
  const query = url.parse(req.url, true).query;

  if (pathname === "/products" || pathname === "") {
    res.writeHead(200, { "Conten-type": "text/html" });
    res.end("This is the products page");
  } else if (pathname === "/laptop") {
    res.writeHead(200, {
      "Content-type": "text/html"
    });
    res.end("This is the LAPTOP page");
  } else {
    res.writeHead(200, { "Content-type": "text/html" });
    res.end("This is the response!");
  }
});

server.listen(1337, "127.0.0.1", () => {
  console.log("Server is now on port 1337");
});
