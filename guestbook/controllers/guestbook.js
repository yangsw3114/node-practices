
const model = require('../models/guestbook');
//model모듈 가져옴

module.exports = { //module.exports를 통해 모듈화 시킬수 있다.
    index: async function(req, res) {
        const results = await model.findAll();
        console.log(results);
//res.render("ejs파일경로", {데이터이름표: 전송할 데이터})
        res.render('index', {
            list: results || []
        });
    }, 
    add: async function(req, res){
        const results = await model.insert(req.body); 
        //insert 매개변수로  req(요청) 값들을 받아온다 -> req.body
        //request body'에 'key-value'의 데이터가 담긴 객체 프로퍼티이다
        res.redirect("/");
    }, 
    form: function(req, res){
        //res.send(req.query.no); //url의 no 값을 send한다.
        res.render('deleteform', {no:req.query.no || 0});
    },
    delete: async function(req, res){
        const results = await model.delete(req.body);
    }
}


