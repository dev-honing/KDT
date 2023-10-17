from http.server import BaseHTTPRequestHandler, HTTPServer

class SimpleHTTPRequestHandler(BaseHTTPRequestHandler):
  def do_GET(self):
    print("URL로 최초접속하는 트랜잭션 확인하기")
    print(self.path) # 접속 URL 확인
    print("URL로 최초접속하는 요청 유형 확인하기")
    print(self.command) # 요청 유형 확인

    self.send_response(200)
    self.end_headers()
    self.wfile.write(b'Hello, World!')