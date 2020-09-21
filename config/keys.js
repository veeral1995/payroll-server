//keys.js - figure out what set of credentials to return
if (process.env.NODE_ENV === 'production') {
    //We are in Prod, return Prod Keys
    module.exports = require('./prod');
} else {
    //We are in Dev, return Dev Keys
    module.exports = require('./dev');
}