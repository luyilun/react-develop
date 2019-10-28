let http = require("http");
let path = require("path");
let fs = require("fs");
let url = require("url");

let server = http.createServer(function(req, res) {
  let staticPath = path.join(__dirname, "dist");
  let pathObj = url.parse(req.url, true);
  if (pathObj.pathname === "/") {
    // 如果没有后缀，默认他显示是index.html
    pathObj.pathname += "index.html";
  }
  let filePath = path.join(staticPath, pathObj.pathname);
  // 异步读取文件数据
  fs.readFile(filePath, "binary", function(err, fileContent) {
    if (err) {
      // 如果报错，显示404，不会导致服务器崩溃了。
      res.writeHead(404, "Not Found");
      res.end("<h1>404 Not Found!</h1>");
    } else {
      res.writeHead(200, "ok");
      res.write(fileContent, "binary");
      res.end();
    }
  });
});

server.listen(8080);
/*eslint no-console:0*/
console.log("服务器已打开, 可以运行 http://localhost:8080");
