## node.js __ mysite 만들기

### node란?

오픈소스, 크로스 플랫폼이며, 개발자가 모든 종류의 서버 사이드 도구들과 어플리케이션을 `JavaScript`로 만들수 있도록 해주는 런타임 환경



### npm이란?

Node.js 전용 패키지가 올라가 있는 서버, 패키지 업로드/다운로드 및 버전관리 기능을 제공



#### Node의 웹프레임워크

- **Express**:  NodeJS를 사용하여 서버를 개발하고자 하는 개발자들을 위하여 서버를 쉽게 구성할 수 있게 만든 프레임워크

  - npm i express

- **ejs**: **E**mbedded **J**ava**S**cript의 약자로, 자바스크립트가 내장되어 있는 html 파일이다.

  - npm i ejs

- **mysql2**: MySQL과 MySQL2의 차이점은 바로 promise이다. mysql은 callback기반이기 때문에 promise를 사용하지 못하고 npm에 있는 promise-mysql 모듈을 따로 설치해서 사용해야한다. 

  - promise란 promise로 구현된 비동기 처리 함수는 콜백을 예측 가능한 패턴으로 사용하도록 도와준다.
  - npm i mysql2

- **express-session**: 세션은 쿠키를 업그레이드 한것으로 쿠키와 달리 서버에 데이터를 저장하고 웹 브라우저는 Session ID만을 가지고 있기 때문에 비교적 안전하다.

  - 1) 서버는 웹 브라우저에게 세션 값을 보내줍니다
    2) 클라이언트는 접속할 때 자신이 가지고 있는 sid를 서버에게 전달합니다.
    3) 서버는 클라이언트가 보내준 sid를 가지고, 해당 유저를 식별합니다.
  - npm i express-session

- **sequelize**: 

  - nodeJS에서 mysql을 사용할 때 raw Query문을 사용하지 않고 더욱 쉽게 다룰 수 있도록 도와주는 라이브러리이다.
  - DB 작업을 쉽게 할 수 있도록 도와주는 ORM 라이브러리
  - ORM(Object-Relational Mapping)은 객체지향 패러다임을 활용하여 관계형 데이터베이스(RDB)의 데이터를 조작하게 하는 기술, 객체와 관계형 데이터베이스의 관계를 매핑 해주는 도구
  - npm i sequelize

- **dotenv**: 환경 변수를 파일에 저장할 수 있도록 해주는 `dotenv` 라이브러리

  - `dotenv` 라이브러리는 디폴트로 현재 디렉토리에 위치한 `.env` 파일로 부터 환경 변수를 읽어냅니다.
  - npm i dotenv

- **multer**:  이미지를 업로드 및 폼데이터를 처리

  - npm i multer

- **winston**: Log를 남기고 관리하는 모듈

  - npm i winston

- **winston-daily-rotate-file**: 로그 파일을 관리해주는 모듈, 하루 단위로 새 로그 파일을 생성해주고, 로그 파일의 최대 크기와 최대 저장 파일 개수 등을 설정할 수 있습니다.

  - npm i winston-daily-rotate-file 

- **moment**:  날짜 라이브러리

  - npm i moment

- **nodemon**: `node monitor`의 약자, 노드가 실행하는 파일이 속한 디렉터리를 감시하고 있다가 파일이 수정되면 자동으로 노드 애플리케이션을 재시작하는 확장 모듈

  - npm i -D nodemon

  -     1) 전역(global) 설치: 여러 프로젝트에서 공통으로 사용하는 도구 설치
            $ npm i -g  
        2) 지역(project local) 설치: 특정 프로젝트에만 종속적인 도구나 라이브러리들
           $ npm i
           $ npm i -D 

- **mocha**:  테스트가 가능한 프레임워크

  - npm i -D mocha

- **chai** : 단언 라이브러리(assertion library)'

  - 자주 사용되는 단언문
    - expect(결과값).to.equal(기대값);
    - expect(결과값_객체).to.deep.equal(기대값객체);
    - expect(결과값).to.be.a(기대되는 타입);
    - expect(예외던지는 함수).to.throw(예외);
  - npm i -D chai

  

### package.json 파일

- **dependencies**: 설치된 패키지를 관리한다.

```json
"dependencies": {
    "dotenv": "^10.0.0",
    "ejs": "^3.1.6",
    "express": "^4.17.1",
    "express-session": "^1.17.2",
    "moment": "^2.29.1",
    "multer": "^1.4.3",
    "mysql2": "^2.3.3",
    "sequelize": "^6.9.0",
    "winston": "^3.3.3",
    "winston-daily-rotate-file": "^4.5.5"
  },
```

- 설치한 패키지는 **node-modules 폴더**에 실제로 저장된다.

- **package-lock.json 파일**: 설치한 패키지 + 의존하는 패키지 항목을 모두 관리한다.

- #### package.json > scripts 실행 명령어

  - package.json 파일의 scripts 항목에 다양한 명령어를 설정해두고 콘솔에서 실행할 수 있다.

    ```json
     "scripts": {
        "start": "node index.js",
        "debug": "nodemon index.js",
        "test": "npx mocha"
      },
    ```

    **1. start 명령어에 설정된 코드는 npm start 로 실행할 수 있다.**

      \- ***npm stop*** 으로 start한 걸 멈출 수 있다.

      \- **npm restart** 으로 stop된 걸 재실행할 수 있다.

      \- start 명령어를 별도 설정하지 않은 경우***, node server.js*** 가 실행된다.

    **2. test 명령어에 설정된 코드는 npm test 로 실행할 수 있다.**

    **3. 그 외 명령어에 설정된 코드는는 npm run 명령어 로 실행해야 한다.**

    (mysite에서는 **npm run debug를 통해 서버실행**)





## project file structure and function

아직 board(게시판), 갤러리에서의 delete 등등 미구현된 기능들 있음

**mysite/index.js**

```js
const http = require('http');
const path = require('path');
const express = require('express');
const session = require('express-session');
const dotenv = require('dotenv');
const multer = require('multer');

// 1. Environment Variables
dotenv.config({path: path.join(__dirname, 'config/app.env') });
dotenv.config({path: path.join(__dirname, 'config/db.env') });

// 2. Application Routers
const { applicationRouter } = require('./routes');
const { SIGTERM } = require('constants');

// 3. Logger
const logger = require('./logging');

// 4. Application Setup
const application = express()
    // 4-1. Session Environment
    .use(session({
        secret: "mysite-session",
        resave: false 
    })) 
    // 4-2. request body parser
    .use(express.urlencoded({extended: true}))  // application/x-www-form-urlencoded
    .use(express.json())                        // application/json
    // 4-3. Multipart
    .use(multer({
        dest: path.join(__dirname, process.env.MULTER_TEMPORARY_STORE)
    }).single('file'))
    // 4-4. static resources
    .use(express.static(path.join(__dirname, process.env.STATIC_RESOURCES_DIRECTORY)))
    // 4-5. view engine setup
    .set('views', path.join(__dirname, 'views'))
    .set('view engine', 'ejs');

// 5. Application Router Setup
applicationRouter.setup(application);

// 6. Server Setup
http.createServer(application)
    .on('listening', function(){
        logger.info(`http server runs on ${process.env.PORT}`);
    })
    .on('error', function(error){
        switch(error.code) {
            case 'EACCESS':
                logger.error(`${process.env.PORT} requires privileges`);
                process.exit(1);
                break;
            case 'EADDRINUSE':
                logger.error(`${process.env.PORT} is already in use`);
                process.exit(1);
                break;
            default:
                throw error;        
        }
    })
    .listen(process.env.PORT);
```

- mysite에서 사용할 모듈 초기화 및 설정(setup),  createServer를 통한 서버설정 및 생성

-  **npm run debug** 를 통해 실행



### 1. orm(sequelize) 

- 모델 생성해서 데이터베이스에 반영하기

  **mysite/models/guestbook.js**

  ```js
  const { Sequelize, DataTypes } = require('sequelize');
  
  module.exports = function(sequelize) {
      return sequelize.define('Guestbook', { //define는 sequelize에서 제공하는 메서드
          no: { 
              field: 'no',
              type: DataTypes.BIGINT(11),
              primaryKey: true,
              autoIncrement: true 
          },
          name: {
              field: 'name',
              type: DataTypes.STRING(45),
              allowNull: false
          },
          password: {
              field: 'password',
              type: DataTypes.STRING(45),
              allowNull: false
          },
          message: {
              field: 'message',
              type: DataTypes.TEXT,
              allowNull: false
          },
          regDate: {
              field: 'reg_date',
              type: DataTypes.DATE,
              allowNull: false,
              defaultValue: Sequelize.NOW
          }
      }, {
          underscored: true,    
          freezeTableName: true,
          timestamps: true,
          createdAt: false,
          updatedAt: false,
          tableName: 'guestbook'
      });
  }
  
  ```

  모델에 있는 필드들의 타입을 정의한다.



- 테이블의 **CRUD 실행**

  **mysite/controllers/guestbook.js**

  ```js
  const moment = require('moment');
  const models = require('../models');
  
  module.exports = {
      index: async function(req, res, next) {
          try { 
              const results = await models.Guestbook.findAll({
                  //findAll은 Sequelize에서 제공하는 메서드 - select
                  attributes: ['no', 'name', 'message', 'regDate'],
                  order: [
                      ['no', 'DESC']
                  ]
              });
              res.render('guestbook/index', {
                  guestbooks: results,
                  moment: moment
              });
          } catch(e) { 
              next(e);
          }         
      },
      spalanding: function(req, res, next){
          res.render('guestbook/spa-landing');
      },
      delete: function(req, res) {
          res.render('guestbook/delete');
      },
      _delete: async function(req, res, next) {
          try { 
              await models.Guestbook.destroy({
                  where: req.body
              });
              res.redirect('/guestbook');
          } catch(e) {
              next(e);
          }   
      },
      add: async function(req, res, next) {
          try {        
              await models.Guestbook.create(req.body);
              res.redirect('/guestbook');
          } catch(e) {
              next(e);
          }        
      },
      spalanding: function(req, res) {
          res.render('guestbook/index-spa');
      }
  }
  
  ```

  - **Create**: models.Guestbook.create(생성 및 add)
  - **Read**: models.Guestbook.findAll(select)
  - **Update**: models.Guestbook.findOne
  - **Delete**: models.Guestbook.destroy





### 2. user(session, 인증, 접근제어), jQuery(ajax) + API

- role이라는 Column을 통해 user, admin 을 구분

  **mysite/models/User.js**

  ```js
  ///생략
  
          role: {
              field: 'role',
              type: DataTypes.ENUM('USER', 'ADMIN'),
              allowNull: false,
              defaultValue: 'USER'            
          }  
  
  ///
  ```

- 세션처리

  **mysite/controllers/user.js**

  ```js
  ///생략
  
  _login: async function(req, res, next) {
          try {
              const user = await models.User.findOne({
                attributes: ['no', 'name', 'role'],
                where: {
                    email: req.body.email,
                    password: req.body.password
                }  
              });
              
              if(user == null) {
                  res.render('user/login', Object.assign(req.body, {result: 'fail'}));
                  return;
              }
  
              // 세션처리
              req.session.authUser = user;
  
              res.redirect('/');
          } catch(e) {
              next(e);
          }
      },
       logout: async function(req, res, next) {
          try {
              await req.session.destroy();
              res.redirect('/');
          } catch(e) {
              next(e);
          }
      },
      update: async function(req, res, next) {
          try {
              const user = await models.User.findOne({
                  attributes: ['no', 'email', 'name', 'gender'],
                  where: {
                      no: req.session.authUser.no
                  }
              });
              res.render('user/update', {user})
          } catch(e) {
              next(e);
          }        
      },
          
  ///
  ```

  - req.session.authUser = user: 세션처리
  - req.session.destroy();
  - req.session.authUser.no



- authorized

**mysite/routes/authorized.js**

```js
module.exports = function(role) {
    return function(req, res, next) {
        if(req.session.authUser && (role !== 'ADMIN' || req.session.authUser.role === 'ADMIN')) {
            next();
            return;
        }
        //입력받은 컨텐츠 타입이 accept 헤더에 설정된 컨텐츠 형식에 포함되는지 여부를 리턴한다.
        if(req.accepts('html')) {
            res.redirect(req.session.authUser ? '/' : '/user/login');
            return;
        }

        res.status(403).send({
            result: 'fail',
            data: null,
            message: 'Access Denied'
        });
    }
}
```





- jQuery(ajax) + API

**mysite/views/guestbook/index-spa.ejs**

```js
/// 생략

	<script>
		/* guestbook spa application */
		var startNo = 0;
		var isEnd = false;

		var listItemTemplate = new EJS({
			url: "/assets/js/ejs/list-item-template.ejs"
		});

		var listTemplate = new EJS({
			url: "/assets/js/ejs/list-template.ejs"
		});

		var messageBox = function(title, message, callback){
			$("#dialog-message p").text(message);
			$("#dialog-message")
					.attr("title", title)
					.dialog({
						modal: true,
						buttons: {
							"확인": function() {
								$(this).dialog( "close" );
							}
						},
						close: callback
					});
		}

		var render = function(vo, mode){
			var html =
					"<li data-no='" + vo.no + "'>" +
					"   <strong>" + vo.name + "</strong>" +
					"   <p>" + vo.message.replace(/\n/gi, "<br>") + "</p>" +
					"   <strong></strong>" +
					"   <a href='' data-no='" + vo.no + "'>삭제</a>" +
					"</li>";

			if(mode){
				$("#list-guestbook").prepend(html);
			} else {
				$("#list-guestbook").append(html);
			}
			//	$("#list-guestbook")[mode ? "prepend" : "append"](html);
		}

		var fetchList = function(){
			if(isEnd){
				return;
			}

			$.ajax({
				url: '/api/guestbook?sno=' + startNo,
				async: true,
				type: 'get',
				dataType: 'json',
				data: '',
				success: function(response){
					if(response.result != "success"){
						console.error(response.message);
						return;
					}

					// detect end
					if(response.data.length == 0){
						isEnd = true;
						$(".btn-fetch").prop("disabled", true);
						return;
					}

					// redering
					// $.each(response.data, function(index, vo){
					//	render(vo);
					// });
					var html = listTemplate.render(response);
					$("#list-guestbook").append(html);

					startNo = $('#list-guestbook li').last().data('no') || 0;
				},
				error: function(xhr, status, e){
					console.error(status + ":" + e);
				}
			});
		}

		$(function(){
			// 삭제 다이알로 객체 만들기
			var dialogDelete = $("#dialog-delete-form").dialog({
				autoOpen: false,
				width: 400,
				height: 300,
				modal: true,
				buttons: {
					"삭제": function(){
						var no = $("#hidden-no").val();
						var password = $("#password-delete").val();

						$.ajax({
							url: '/api/guestbook/' + no,
							async: true,
							type: 'delete',
							dataType: 'json',
							data: 'password=' + password,
							success: function(response){
								if(response.result != "success"){
									console.error(response.message);
									return;
								}

								if(response.data != -1){
									$("#list-guestbook li[data-no=" + response.data + "]").remove();
									dialogDelete.dialog('close');
									return;
								}

								// 비밀번호가 틀린경우
								$("#dialog-delete-form p.validateTips.error").show();
							},
							error: function(xhr, status, e){
								console.error(status + ":" + e);
							}
						});
					},
					"취소": function(){
						$(this).dialog('close');
					}
				},
				close: function(){
					$("#hidden-no").val("");
					$("#password-delete").val("");
					$("#dialog-delete-form p.validateTips.error").hide();
				}
			});

			// 가져오기 버튼 Click 이벤트
			$('.btn-fetch').click(fetchList);

			// 입력폼 submit 이벤트
			$('#add-form').submit(function(event){
				event.preventDefault();

				var vo = {};
				vo.name = $("#input-name").val();
				if(vo.name == ''){
					messageBox("방명록 글 남기기", "이름은 필수 항목 입니다.", function(){
						$("#input-name").focus();
					});
					return;
				}

				vo.password = $("#input-password").val();
				if(vo.password == ''){
					messageBox("방명록 글 남기기", "비밀번호는 필수 항목 입니다.", function(){
						$("#input-password").focus();
					});
					return;
				}

				vo.message = $("#tx-content").val();
				if(vo.message == ''){
					messageBox("방명록 글 남기기", "내용은 필수 항목 입니다.", function(){
						$("#tx-content").focus();
					});
					return;
				}

				$.ajax({
					url: '/api/guestbook',
					async: true,
					type: 'post',
					dataType: 'json',
					contentType: 'application/json',
					data: JSON.stringify(vo),
					success: function(response){
						if(response.result != "success"){
							console.error(response.message);
							return;
						}

						// rendering
						// render(response.data, true);
						var html = listItemTemplate.render(response.data);
						$("#list-guestbook").prepend(html);

						// form reset
						$("#add-form")[0].reset();
					},
					error: function(xhr, status, e){
						console.error(status + ":" + e);
					}
				});
			});

			// 창 스크롤 이벤트
			$(window).scroll(function(){
				var $window = $(this);
				var windowHeight = $window.height();
				var scrollTop = $window.scrollTop();
				var documentHeight = $(document).height();
				if(scrollTop + windowHeight + 10 > documentHeight){
					fetchList();
				}
			});

			$(document).on('click', '#list-guestbook li a', function(event){
				event.preventDefault();

				var no = $(this).data('no');
				$("#hidden-no").val(no);
				dialogDelete.dialog("open");
			});

			// 처음 리스트 가져오기
			fetchList();
		});
	</script>

///
```



### 3. views -> include(ejs)

mysite/views/include

​	---|	footer.ejs

​	---|	header.ejs

​	---|	navigation.ejs



mysite/views/include/header.ejs

```js
<div id="header">
    <h1><%=req.app.siteTitle %></h1>
    <ul>
        <% if(req.session.authUser == null) { %>
            <li><a href="/user/login">로그인</a><li>
            <li><a href="/user/join">회원가입</a><li>
        <%
            } else {     
        %>
            <li><a href="/user/update">회원정보수정</a><li>
            <li><a href="/user/logout">로그아웃</a><li>
            <li><%=req.session.authUser.name %>님 안녕하세요 ^^;</li>
        <%
            }
        %>    
    </ul>
</div>
```

<%-include('../includes/header') %> 를 작성함으로써 모든뷰의 공통된 부분을 사용할수 있다.



### 4. dotenv(configuration: DB connection, port, static directory)

- config(.env) 설정

  **mysite/config/db.env**

```env
DB_HOST=127.0.0.1
DB_PORT=3306
DB_NAME=webdb
DB_USER=webdb
DB_PASSWORD=webdb
TABLE_CREATE_ALWAYS=false
TABLE_ALTER_ALWAYS=false
```

​	**mysite/config/app.env**

```env
PROFILE=dev
LOG_LOCATION=logs
PORT=8080
STATIC_RESOURCES_DIRECTORY=public
MULTER_TEMPORARY_STORE=multer-temporary-store
UPLOADIMAGE_STORE_LOCATION=/upload-images
```



- DB connection

  **mysite/models/index.js**

```js
const {Sequelize} = require('sequelize');

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'mysql'
});

///중략///



// DB에 반영(DDL)
User.sync({
    force: process.env.TABLE_CREATE_ALWAYS === 'true',
    alter: process.env.TABLE_ALTER_ALWAYS === 'true'
});

Guestbook.sync({
    force: process.env.TABLE_CREATE_ALWAYS === 'true',
    alter: process.env.TABLE_ALTER_ALWAYS === 'true'
});

Gallery.sync({
    force: process.env.TABLE_CREATE_ALWAYS === 'true',
    alter: process.env.TABLE_ALTER_ALWAYS === 'true'
});

Board.sync({
    force: process.env.TABLE_CREATE_ALWAYS === 'true',
    alter: process.env.TABLE_ALTER_ALWAYS === 'true'
});

// Export Mapping Object
module.exports = {User, Guestbook, Gallery, Board};
```



### 5. log(winston)

- logging

  mysite/logging/index.js

  ```js
  
  const winston = require('winston');
  const winstonDaily = require('winston-daily-rotate-file');
  const path = require('path');
  
  // Log Level
  // error: 0, warn: 1, info: 2, http: 3, verbose: 4, debug: 5, silly: 6
  
  const { combine, timestamp, printf } = winston.format;
  
  const logDirectory = path.join(path.dirname(require.main.filename), process.env.LOG_LOCATION);
  const logFormat = printf(log => `${log.timestamp} ${log.level}: ${log.message}`);
  
  const logger = winston.createLogger({
    format: combine(timestamp({
      format: 'YYYY-MM-DD HH:mm:ss',
    }), logFormat),
  
    transports: [
      // log file for info level
      new winstonDaily({
        level: 'info',
        datePattern: 'YYYY-MM-DD',
        dirname: logDirectory,
        filename: `%DATE%.log`,
        maxFiles: 30,
        zippedArchive: true
      }),
  
      // log file for error level
      new winstonDaily({
        level: 'error',
        datePattern: 'YYYY-MM-DD',
        dirname: path.join(logDirectory, 'error'),
        filename: `%DATE%.error.log`,
        maxFiles: 30,
        zippedArchive: true
      })]
  });
  
  process.env.PROFILE === 'dev' && logger.add(new winston.transports.Console({
    format: winston.format.combine(winston.format.colorize(), winston.format.simple())
  }));
  
  module.exports = logger;
  ```

  

### 6. fileupload(multer) 

mysite/controllers/gallery.js

```js
///생략

upload: async function(req, res, next) {
        try {
            const file = req.file;
            if(file) {
                const contents = fs.readFileSync(file.path);

                const storeDirectory = path.join(path.dirname(require.main.filename), process.env.STATIC_RESOURCES_DIRECTORY, process.env.UPLOADIMAGE_STORE_LOCATION);
                const storePath = (path.join(storeDirectory, file.filename)) + path.extname(file.originalname);
                const url = path.join(process.env.UPLOADIMAGE_STORE_LOCATION, file.filename) + path.extname(file.originalname);

                fs.existsSync(storeDirectory) || fs.mkdirSync(storeDirectory);
                fs.writeFileSync(storePath, contents, {flag: 'w+'});
                fs.unlinkSync(file.path);

                await models.Gallery.create({
                    url: url.replace(/\\/gi, '/'),
                    comment: req.body.comment || ''
                });
            }

            res.redirect('/gallery');

        } catch(e) {
            next(e);
        }
    }
```



### 7. error 처리

- error 뷰

  mysite/views/error/404.ejs

  ```js
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
  </head>
  <body>
      <h1>Ooops</h1>
      <h4>Not Found</h4>
  </body>
  </html>
  ```

- error 발생 조건 설정 및 모듈 생성

  mysite/routes/error.js

  ```js
  const logger = require('../logging');
  
  module.exports = {
      error404: function(req, res) {
          if(req.accepts('html')) {
              res.status(404).render('error/404');
              return;
          }
  
          res.status(404).send({
              result: 'fail',
              data: null,
              message: 'unknown request'
          });
      },
      error500: function(err, req, res, next) {
          logger.error(err.stack);
  
          if(req.accepts('html')) {
              res.status(500).send(`<pre>${err.stack}</pre>`);
              return;
          }
  
          res.status(500).send({
              result: 'fail',
              data: null,
              message: err.stack
          });        
      }
  }
  ```

  이 후 routes_index.js 의 application 에 

  ​      .use(errorRoute.error404)

  ​      .use(errorRoute.error500)

  를 작성함으로써 장착(?)한다.











## ajax랑 authorized (로그인, 로그아웃, 업데이트 등 User 인증)부분 설명이 미흡하고 이해를 못한 부분이 있음

## 추후에 추가 수정
