
const model = require('../models/emaillist');
//model모듈 가져옴

module.exports = { //module.exports를 통해 모듈화 시킬수 있다.
    index: async function(req, res) {
        const results = await model.findAll();
        console.log(results);
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


