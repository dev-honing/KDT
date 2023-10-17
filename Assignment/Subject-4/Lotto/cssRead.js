const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  
  if (req.url === '/') {
    if (res.statusCode !== 200){
      console.error("접속 오류!");
    } 
    else {
      console.log("정상적인 접근입니다.");
      function typeHTML() { 
        res.writeHead(200, {'Content-Type' : 'text/html'});
        const htmlData = fs.readFile("index.html", "utf-8");
        res.write(htmlData)};
        setTimeout(typeHTML, 1000);
        
        function typeCSS() { 
          res.writeHead(200, {'Content-Type': 'text/css'});
          const cssData = fs.readFile("output-style.css", "utf-8");
        res.end(cssData)};
      setTimeout(typeCSS, 2000);
    }
  }
})
.listen(3000, () => {
console.log('Server running on port 3000')})