var crypto = require('crypto');

var hashPassword = function(password){
    return new Promise(function(resolve, reject){
        var salt = crypto.randomBytes(16).toString('base64');
        var iterations = 10000;
        var hash = null;
        crypto.pbkdf2(password, salt, iterations, 512, 'sha256',
            function(err, key) {
                if (err) throw err;
                hash = (key.toString('hex'));

                var ret = {
                    hashedPassword: hash,
                    iterations: iterations,
                    salt: salt
                };

                resolve(ret)
            });
    });
};

var verifyPassword = function (savedHash, savedSalt, savedIterations, passwordAttempt) {
    return new Promise(function(resolve, reject){
        crypto.pbkdf2(passwordAttempt, savedSalt, savedIterations, 512, 'sha256',
            function(err, key){
                if (err) throw err;
                hash = (key.toString('hex'));

                resolve(savedHash == hash);
            });
    });
};

var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    if ('OPTIONS' === req.method) {
        res.sendStatus(200);
    } else {
        next();
    }
};

module.exports = {
    allowCrossDomain: allowCrossDomain,
    verifyPassword: verifyPassword,
    hashPassword: hashPassword
};