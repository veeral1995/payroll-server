const express = require('express');
const keys = require('./config/keys');
const cookieSession = require('cookie-session');
const passport = require('passport');
const mongoose = require('mongoose');
require('./models/User');
require('./services/passport');

mongoose.connect(keys.mongoURI);
const app = express();

app.use(
    cookieSession({
         //30 days * 24hrs * 60 mins * 60 seconds * 1000 Miliseconds
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [keys.cookieKey]
    })
);

app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);
//require('./routes/localAuthRoutes')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);