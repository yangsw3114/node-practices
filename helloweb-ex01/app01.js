const http = require('http'); //http모듈을 가져온다.

const port = 8080; //포트 번호
//Creating http Server
const server = http.createServer(function(req, resp){ 
    resp.writeHead(200,{ 
    //response.writeHead()은 요청에 응답 헤더를 보내는 ‘http’ 모듈의 내장 속성이다.
        'Content-Type': 'text/html'  //내용 타입
    });

    //body 내용
    resp.end('<h1>Hello World</h1>');

});

server.listen(port,function(){
    console.log(`http server running on ${port}`);
})