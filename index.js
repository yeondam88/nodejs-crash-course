const fs = require("fs");
const http = require("http");
const url = require("url");

const json = fs.readFileSync(`${__dirname}/data/data.json`, "utf-8");
const laptopData = JSON.parse(json);

const server = http.createServer((req, res) => {
  const pathname = url.parse(req.url, true).pathname;
  const id = url.parse(req.url, true).query.id;

  if (pathname === "/products" || pathname === "/") {
    res.writeHead(200, { "Conten-type": "text/html" });
    res.end("This is the products page");
  } else if (pathname === "/laptop" && id < laptopData.length) {
    res.writeHead(200, {
      "Content-type": "text/html"
    });
    res.end(`This is the LAPTOP page for laptop ${id}`);
  } else {
    res.writeHead(404, { "Content-type": "text/html" });
    res.end("URL was not found on the server!");
  }
});

server.listen(1337, "127.0.0.1", () => {
  console.log("Server is now on port 1337");
});
