const express = require('express');

const router = express.Router();

// user?no=10
router.route("").get(function(req, res){
    res.render('user/info', {
        no: req.query.no || 0
    });
});

router.route("/info/:no").get(function(req, res){
    res.render('user/info', {
        no: req.params.no || 0
    });

});

router.route("/join").get(function(req, res){
    res.render('user/join'); // /views/user/join.ejs 파일 렌더링
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
