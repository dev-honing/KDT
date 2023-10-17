const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  // 요청 URL이 /이고, 요청 메서드가 GET일 때
  if (req.url === '/' && req.method === 'GET'){
    fs.readFile('./index.html', 'utf-8', (err, data) => {
      if (err) {
        console.log("오류입니다.");
      }
      res.writeHead(200, {'Content-Type' : 'text/html'});
      res.end(data);
    })
  }





  // ? 내가 이전에 하려던 방식을 분석하기
  // 무엇이 틀렸나?
  // ! 스타일 시트를 link까진 했지만 응답을 조회해서 HTML이 스타일 시트를 가져오는 URL을 요청했을 때의 대응을 작성하지 않았다!
  // 때문에 css를 요청함이 콘솔에는 찍혔지만 css를 불러오지는 못했던 것이었다.
   
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