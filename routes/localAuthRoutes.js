const passport = require('passport');


module.exports = app => {

    app.post('/loginlocal',
    passport.authenticate('local', { successRedirect: '/',
                                   failureRedirect: '/login',
                                   failureFlash: true })
);
};