const passport = require('passport');
const mongoose = require('mongoose');
const keys = require('../config/keys');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const User = mongoose.model('users')

passport.serializeUser((user, done ) => {
    done(null, user.id)
});

passport.deserializeUser((id, done) => {
    User.findById(id)
        .then(user => {
            done(null, user);
        });
});


//Configure Google OAuth
passport.use(
    new GoogleStrategy({
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: '/auth/google/callback',
        proxy: true
    }, 
    //Async function
    async (accessToken, refreshToken, profile, done) => {
        console.log(profile.id);

        //This returns a promise
        const existingUser = await User.findOne({ googleId: profile.id })
            if(existingUser) {
                //Already a use exists
                return done(null, existingUser);
            } else {
              //Register a new user
              const user = await new User({googleId: profile.id}).save()
              done(null, user);
            }
        }
    )
);
