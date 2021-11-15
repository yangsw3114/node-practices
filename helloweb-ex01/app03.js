const connect = require('connect'); //connect 모듈 추출 // npm i connect
const serveStatic = require('serve-static'); //npm i serve-static

const port = 8080;
const app = connect();
//public디렉토리에 포함된 이미지, CSS 파일 및 JavaScript 파일을 제공?로드?
app.use(serveStatic(__dirname + "/public")); 
//helloweb-ex01/public
app.listen(port, function(){
    console.log(`http server running on ${port}`);
});