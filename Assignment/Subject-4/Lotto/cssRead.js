const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
  const htmlData = fs.readFileSync("index.html", "utf-8");
  const cssData = fs.readFileSync("output-style.css", "utf-8");

  if (req.url === '/') {
    if (res.statusCode === 200){
      console.log("정상적인 접근입니다.");
    }
    else {
      console.error("접속 에러");
    }
  }
  if (req.url === '/start'){
    if (res.statusCode === 200) {
      console.log("서브 페이지 접속");
    } else {
      console.error("접속 에러");
    }
  }
})
.listen(3000, () => {
  console.log('Server running on port 3000')})

  
  
  
    // res.writeHead(200, { 'Content-Type': 'text/html' });
    // res.write(htmlData);
    // res.end(cssData);

    