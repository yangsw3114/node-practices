## node.js 실습



#### require()함수

: Node.JS 에서는 require 메서드를 통해 외부 모듈을 가져올 수 있습니다.



#### 웹애플리케이션 만들어보기2

##### helloweb-ex02 

1)
[helloweb-ex02] $npm init -y



2)
[helloweb-ex02] $npm i express
[helloweb-ex02] $npm i ejs
[helloweb-ex02] $npm i -D nodemon

3)

package.json 스크립트  => package.json에 추가
  "scripts":{
    "start": "node index.js",
    "debug": "nodemon index.js"
}



[helloweb-ex02] $npm start      (운용시)
[helloweb-ex02] $npm run debug  (개발시)  //서버 가동



**디렉토리 생성**

[helloweb-ex02] $mkdir public
[helloweb-ex02] $mkdir routes
[helloweb-ex02] $mkdir controllers
[helloweb-ex02] $mkdir models
[helloweb-ex02] $mkdir views



소스보는순서: index.js파일 -> routes ->  view 

index.js

```js
const http = require('http');
const path = require('path');
const express = require('express');

const mainRouter = require('./routes/main');
const helloRouter = require('./routes/hello');
const userRouter = require('./routes/user');

const port = 8080;

// Application Setup
const application = express()
    // 1. static resources
    .use(express.static(path.join(__dirname, 'public')))
    // 2. request body parser
    .use(express.urlencoded({extended: true}))  // application/x-www-form-urlencoded
    .use(express.json())                       // application/json
    // 3. view engine setup
    .set('views', path.join(__dirname, 'views'))
    .set('view engine', 'ejs')
    // 4. request router
    .all('*', function(req, res, next){
        res.locals.req = req;
        res.locals.res = res;
        next();
    })
    .use('/', mainRouter)
    .use('/hello', helloRouter)
    .use('/user', userRouter);

// Server Setup
http.createServer(application)
    .on('listening', function(){
        console.info(`http server runs on ${port}`);
    })
    .on('error', function(error){
        switch(error.code) {
            case 'EACCESS':
                console.error(`${port} requires privileges`);
                process.exit(1);
                break;
            case 'EADDRINUSE':
                console.error(`${port} is already in use`);
                process.exit(1);
                break;
            default:
                throw error;        
        }
    })
    .listen(port);
```

routes/user.js

```js
const express = require('express');

const router = express.Router();

// user?no=10
router.route("").get(function(req, res){
    res.render('user/info', {
        no: req.query.no || 0  //no 값이 없으면 0 반환
        //req.query.no은 url의 no=10값을 받아온다.
    });
});
// user?no=10
router.route("/info/:no").get(function(req, res){
    res.render('user/info', {
        no: req.params.no || 0
    });

});

router.route("/join").get(function(req, res){
    res.render('user/join'); // /views/main/index.ejs 파일 렌더링
});

router.route("/join").post(function(req, res){ //post
    console.log(req.body);
    res.redirect("/");
});



router.route("/api").get(function(req, res){
    const vo = {
        no:10,
        name: '둘리',
        email: 'dooly@gmail.com',
        gender: 'male'
    };

    res.send(vo);
});

module.exports = router; //이 객체 자체를 모듈로 리턴해준다.

```

/views/user/join.ejs

```ejs
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form method="post" action="/user/join">
        <label>이름</label>
        <input name="name" type="text" />
        <br/><br/>

        <label>이메일</label>
        <input name="email" type="text" />
        <br/><br/>

        <label>패스워드</label>
        <input name="password" type="password" />
        <br/><br/>        
        
        <input type="submit" value="가입하기" />
    </form>    
</body>
</html>
```

/views/user/info.ejs

```ejs
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Hello web</h1>
    <h3>user no: <%=no %></h3>

</body>
</html>
```



### EJS란?

- ` Embedded JavaScript`

- Node.js 및 Express.js를위한 가장 인기있는 템플릿보기 엔진 중 하나입니다.
- `ejs`는 기존의 `HTML` 문법에 한해서 `<% %>`를 사용하여 크게 벗어나지 않아
  더욱 쉽게 서버의 데이터를 사용하거나 코드를 실행할 수 있는 장점이있다.
-  `npm/yarm`을 사용하여 ejs설치

```
$ npm install ejs 
or
$ yarn add ejs
```







### async 비동식 처리 예제



#### new Promise()

- 프로미스는 자바스크립트 비동기 처리에 사용되는 객체
- 프로미스는 주로 서버에서 받아온 데이터를 화면에 표시할 때 사용
- `new Promise()`, `resolve()`, `then()`와 같은 프로미스 API를 사용



#### 프로미스의 3가지 상태

- Pending(대기) : 비동기 처리 로직이 아직 완료되지 않은 상태

```js
new Promise();
```

```js
new Promise(function(resolve, reject) {
  // ...
}); //콜백 함수를 선언할 수 있고, 콜백 함수의 인자는 `resolve`, `reject`이다.
```



- Fulfilled(이행) : 비동기 처리가 완료되어 프로미스가 결과 값을 반환해준 상태

```js
new Promise(function(resolve, reject) {
  resolve(); //콜백 함수의 인자 resolve를 아래와 같이 실행하면 이행(Fulfilled) 상태가 됩니다.
});
```

그리고 이행 상태가 되면 `then()`을 이용하여 처리 결과 값을 받을수 있다.



- Rejected(실패) : 비동기 처리가 실패하거나 오류가 발생한 상태

```js
new Promise(function(resolve, reject) {
  reject(); //reject를 아래와 같이 호출하면 실패(Rejected) 상태가 됩니다.
});
```

그리고 실패 상태가 되면 실패한 이유를 `cach()`로 받을 수 있다.



ex02.js

```js
const ex02 = function(param) {
    return new Promise(function(resolve, reject){
        //
        // 비동기 코드
        // 파일 시스템 접근, 네트 워크 통신, SQL to DB, setTimeout
        //
        setTimeout(function(){
            if(param === 'param-data') {
                resolve('ok');
            } else {
                reject(new Error('fail'));    
            }
        }, 2000);
    });
}

if(require.main == module) {
    // test01: success
    ex02('param-data').then(function(res){
        console.log(res);
    });

    // test03: fail
    ex02('param-data').catch(function(error){
        console.error(error);
    });

    // 일반적으로...
    // ex02('....')
    //     .then(res => {

    //     })
    //     .catch(err => {

    //     });

    console.log('wait......');
} else {
    module.exports = ex02;
}
```





#### async와 await를 사용하여 비동기 프로그래밍을 쉽게 만들기

- async함수로 만들기 위하여 function()앞에 async 키워드를 추가, async function()은 await 키워드가 비동기 코드를 호출할 수 있게 해주는 함수이다.

- `async` 를 함수와 같이 사용하면 결과를 직접 반환하는게 아니라 Promise를 반환하게 합니다

- `await` 연산자는 Promise를 기다리기 위해 사용
- `await`문은 `Promise`가 fulfill되거나 `reject` 될 때까지 `async` 함수의 실행을 일시 정지하고, `Promise`가 fulfill되면 `async` 함수를 일시 정지한 부분부터 실행합니다. 이때 `await` 문의 반환값은 `Promise` 에서 fulfill된 값이 됩니다.

#### async & await 예제

```js
function fetchItems() {
  return new Promise(function(resolve, reject) {
    var items = [1,2,3];
    resolve(items)
  });
}

async function logItems() {
  var resultItems = await fetchItems();
  console.log(resultItems); // [1,2,3]
}
```

1)  fetchItem()함수는 프로미스 객체를 반환하는 함수, `fetchItems()` 함수를 실행하면 프로미스가 이행(Resolved)되며 결과 값은 `items` 배열이 된다.
2)  `logItems()` 함수를 실행하면 `fetchItems()` 함수의 결과 값인 `items` 배열이 `resultItems` 변수에 담깁니다.
3)  콘솔에는 `[1,2,3]`이 출력..
4) `await`를 사용하지 않았다면 데이터를 받아온 시점에 콘솔을 출력할 수 있게 콜백 함수나 `.then()`등을 사용해야 했을 겁니다. 하지만 async await 문법 덕택에 비동기에 대한 사고를 하지 않아도 됨

[](https://joshua1988.github.io/web-development/javascript/js-async-await/)



ex03.js

```js
const ex02 = require('./ex02');

const ex03 = async function(param) {
    try {
        const res = await ex02(param);
        console.log(res);
    } catch(err) {
        console.error(err);
    }
}

ex03("param-data");
ex03("param-error");

console.log('wait...');
```





#### emaillist 만들기

소스보는순서: index.js파일 -> routes -> controller -> model -> view

index.js

```js
const http = require('http');
const path = require('path');
const express = require('express');

const emaillistRouter = require('./routes/emaillist');
const port = 8080;

// Application Setup
const application = express()
    // 1. static resources
    .use(express.static(path.join(__dirname, 'public')))
    // 2. request body parser
    .use(express.urlencoded({extended: true}))  // application/x-www-form-urlencoded
    .use(express.json())                       // application/json
    // 3. view engine setup
    .set('views', path.join(__dirname, 'views'))
    .set('view engine', 'ejs')
    // 4. request router
    .all('*', function(req, res, next){
        res.locals.req = req;
        res.locals.res = res;
        next();
    })
    .use('/', emaillistRouter);


// Server Setup
http.createServer(application)
    .on('listening', function(){
        console.info(`http server runs on ${port}`);
    })
    .on('error', function(error){
        switch(error.code) {
            case 'EACCESS':
                console.error(`${port} requires privileges`);
                process.exit(1);
                break;
            case 'EADDRINUSE':
                console.error(`${port} is already in use`);
                process.exit(1);
                break;
            default:
                throw error;        
        }
    })
    .listen(port);
```



routes/emaillist.js

```js
const express = require('express');
const controller = require('../controllers/emaillist'); 
//컨트롤러 모듈 가져옴

const router = express.Router();
router.route('').get(controller.index);
router.route('/add').get(controller.form);
router.route('/add').post(controller.add);

module.exports = router;

```



controllers/emaillist.js

```js

const model = require('../models/emaillist');
//model모듈 가져옴

module.exports = { //module.exports를 통해 모듈화 시킬수 있다.
    index: async function(req, res) {
        const results = await model.findAll();
        res.render('index', {
            list: results || []
        });
    },
    form: function(req, res) {
        res.render('form');
    },
    add: async function(req, res) {
        const results = await model.insert(req.body);
        res.redirect("/");
    }
}
```



models/dbconn.js

```js
//DB는 공용으로 쓰이므로 따로 빼서 모듈로 생성
const mysql = require('mysql2');

module.exports = function(){
    return mysql.createConnection({
        host: '127.0.0.1',
        port: 3306,
        user: 'webdb',
        password: 'webdb',
        database: 'webdb' 
    });
}

```

- DB Connection 설정

models/emaillist.js

```js
const mysql = require('mysql2');
const dbconn = require('./dbconn');
const util = require('util');

module.exports = {
    findAll: async function(callback) {

        const conn = dbconn();

        // const query = function(sql, data) {
        //     return new Promise(function(resolve, reject){
        //         conn.query(sql, [], function(error, results, field){
        //             return error ? reject(error) : resolve(results);
        //         })
        //     })
        // }

        // const query = (sql, data) => new Promise((resolve, reject) => conn.query(sql, [], (error, results, field) => (error ? reject(error) : resolve(results))))
        
        const query = util.promisify(conn.query).bind(conn);
        //promisify: 일반적인 error-first callback style을 따르는 콜백함수를 가져다 promise를 반환하는 함수를 반환
        

        try {
            return await query(
                'select no, first_name as firstName, last_name as lastName, email from emaillist order by no desc', 
                []
            );
        } catch(e) {
            console.error(e);
        } finally {
            conn.end();
        }
    },
    insert: async function(emaillist){
        const conn = dbconn();
        const query = util.promisify(conn.query).bind(conn);

        try {
            return await query(
                'insert into emaillist(first_name, last_name, email) values (?, ?, ?)',
                Object.values(emaillist)
            );
        } catch(e) {
            console.error(e);
        } finally {
            conn.end();
        }       
    }
}
```

