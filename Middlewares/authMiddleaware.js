const jwt = require('jsonwebtoken');

const requireAuth = (req,res,next)=> {
    const token = req.cookies.jwt;

    if(token) {
        jwt.verify(token, process.env.JWT_SECRET, (err, decodedToken) => {
            if (err) {
                console.log(err.message);
                res.render('login');
            } else {
                //console.log(decodedToken);
                next();
            }
        } )
    } else {
        res.render('login')
    }
}

module.exports = requireAuth;