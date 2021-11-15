const http = require('http'); //http모듈을 가져온다.
const fs = require('fs'); //File System 모듈 //기초로 파일 읽기와 쓰기 기능이 있다.


const port = 8080;
const server = http.createServer(function(req, resp){ 
    console.log(req.url);
    if(req.url === '/'){
        req.url = '/index.html'; //url을 설정
    }

    //fs.readFile(path[,option], callback)
    fs.readFile(`${__dirname}/public${req.url}`, function(error, data){
        //__dirname은 현재 실행중인 폴더 경로 
        // /helloweb-ex01/public/index.html의 파일을 읽는다.
        resp.writeHead(200,{ 
        //response.writeHead()은 요청에 응답 헤더를 보내는 ‘http’ 모듈의 내장 속성이다.
            'Content-Type': 'text/html' //내용 타입
        });
        resp.end(data);
    });
});

server.listen(port,function(){
    console.log(`http server running on ${port}`);
})