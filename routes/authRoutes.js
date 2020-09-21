const passport = require('passport');


module.exports = app => {

    //Dissolves Google Signin Strategy
    //Scope defines what are asking Google to give us about the user, Current = profile + email
    app.get(
        '/auth/google', 
        passport.authenticate('google', {
            scope: ['profile', 'email']
        })
    );

    //Google Call Back Strategy
    app.get('/auth/google/callback', passport.authenticate('google'));

};