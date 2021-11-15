const connect = require('connect');
// npm i connect
const serveStatic = require('serve-static');
//npm i serve-static
const connectRoute = require('connect-route');
// npm i connect-route

const port = 8080;
const app = connect();

// 추가적인 url확장이 가능하다.
app.use(connectRoute(function(router) {
    //GET - /
    router.get("/", function(req, resp) {
        resp.writeHead(200, {
            'Content-Type': 'text/html'
        });
        resp.end('<h1>Main</h1>');
    });
    //GET - http://localhost:8080/user?no=3
    router.get("/user", function(req, resp){
        console.log(req._parsedUrl.query);

        req.query = {};
        params = (req._parsedUrl.query || '').split('&');
        params.forEach(function(param){
            tokens = param.split('=');
            req.query[tokens[0]] = tokens[1];
        });

        resp.writeHead(200, {
            'Content-Type': 'text/html'
        });
        resp.end(`<h1>User No: ${req.query.no}</h1>`);   
        //User No: 3 으로 출력된다.     
    });

    //GET - http://localhost:8080/guestbook
    router.get("/guestbook", function(req, resp){
        resp.writeHead(200, {
            'Content-Type': 'text/html'
        });
        resp.end('<h1>Guestbook List</h1>');
    });
    
    //GET - http://localhost:8080/board
    router.get("/board", function(req, resp){
        resp.writeHead(200, {
            'Content-Type': 'text/html'
        });
        resp.end('<h1>Board List</h1>');
    });    

    //GET - http://localhost:8080/board/3
    router.get("/board/:no", function(req, resp){
        resp.writeHead(200, {
            'Content-Type': 'text/html'
        });
        resp.end(`<h1>Board View: ${req.params.no}</h1>`);
        //Board View:3
    });    

}));
app.use(serveStatic(__dirname + "/public"));
//특정 경로에 있는 폴더(public 폴더)를 요청에 의해서 
//바로 파일을 가져올 수 있는 기능을 제공 해주는 모듈 "serve-static"
//helloweb-ex01/public

app.listen(port, function(){
    console.log(`http server running on ${port}`);
});