const express = require('express');

const router = express.Router(); //express의 router 객체를 불러온다.

router.route("").get(function(req, res){ //router 객체의 일부 속성을 변경한다.
    res.render('main/index'); // /views/main/index.ejs 파일 렌더링
});

module.exports = router; //이 객체 자체를 모듈로 리턴해준다.