const express = require('express');

const router = express.Router();
router.route("").get(function(req, res){  //이 소스가 컨트롤러 
    res.render('main/index');
})