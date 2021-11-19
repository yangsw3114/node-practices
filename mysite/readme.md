## mysite powered by node.js(express)

#### 설치패키지

```bash
[mysite] $ npm i express o
[mysite] $ npm i ejs     o
[mysite] $ npm i mysql2 o
[mysite] $ npm i express-session o
[mysite] $ npm i sequelize o
[mysite] $ npm i dotenv  o
[mysite] $ npm i multer
[mysite] $ npm i winston o
[mysite] $ npm i winston-daily-rotate-file o
[mysite] $ npm i moment

[mysite] $ npm i -D nodemon o
[mysite] $ npm i -D mocha
[mysite] $ npm i -D chai

```

#### scripts in package.json

```json
  "scripts": {
    "start": "node index.js",
    "debug": "nodemon index.js",
    "test" : "npx mocha"
  }
```

#### project structure
<pre>
/mysite
    |--- index.js
    |--- package.json
    |--- package-lock.json
    |--- [node-modules]
    |--- test
    |--- logging
    |--- [logs]
    |       |--- [error]
    |--- [multer-temporary-store]
    |--- config
    |--- public
    |       |--- [upload-images]
    |       |--- assets
    |               |--- css
    |               |--- images
    |               |--- js
    |--- routes
    |--- controllers
    |       |--- admin
    |--- models
    |--- views
            |--- main
            |--- user
            |--- board
            |--- guestbook
            |--- gallery
            |--- includes
            |--- admin
                    |--- includes        
</pre>


