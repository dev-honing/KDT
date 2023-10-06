const http = require("http");
const fs = require("fs");
http.createServer(function (request, response) {
  console.log(request.method);
  console.log(request.url);
});
