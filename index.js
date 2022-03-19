// I need to create node.js server
const http = require("http");
const fs = require("fs");

const port = 8080;

const server = http.createServer((req, res) => {
  switch (req.url) {
    case "/":
      handleRequest(res, "index");
      break;
    case "/about":
      handleRequest(res, "about");
      break;
    case "/contact-me":
      handleRequest(res, "contact-me");
      break;
    default:
      handleRequest(res);
  }
});

server.listen(port, () => {
  console.log(`Server running at port ${port}`);
});

function handleRequest(res, pageName = "404") {
  fs.readFile(`${pageName}.html`, "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return;
    }

    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.end(data);
  });
}
