// I need to create node.js server
// const http = require("http");
const fs = require("fs");
const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  handleRequest(res, "index");
});

app.get("/about", (req, res) => {
  handleRequest(res, "about");
});

app.get("/contact-me", (req, res) => {
  handleRequest(res, "contact-me");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
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
