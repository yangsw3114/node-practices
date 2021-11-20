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