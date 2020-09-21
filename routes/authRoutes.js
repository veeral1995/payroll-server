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

    //Google Original Call Back Strategy
    app.get('/auth/google/callback', passport.authenticate('google'));

    //Google Call Back Strategy
    /*
    app.get('/auth/google/callback',
        passport.authenticate('google'), // complete the authenticate using the google strategy
        (err, req, res, next) => { // custom error handler to catch any errors, such as TokenError
            if (err.name === 'TokenError') {
            res.redirect('/auth/google'); // redirect them back to the login page
            } else {
            // Handle other errors here
            }
        },
        (req, res) => { // On success, redirect back to '/'
            res.redirect('/');
        }
    );
    */

    //Logs out user
    app.get('/api/logout', (req, res) => {
        req.logout();
        res.send(req.user);
    });

    //Gets current user info
    app.get('/api/current_user', (req, res) => {
        res.send(req.user);
    });

};