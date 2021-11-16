
const model = require('../models/emaillist');

//여기서 async와 await 의 역할 중요
module.exports = {
    index: async function(req, res) { 
        const results = await model.findAll(function(){});
        console.log(results);
        res.render('index', {
            list: results || []
        });
    }
}


