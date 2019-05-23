var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var User = require('./models/user');

/**
 * if you are not using passport-local-mongoose when you set up a mongoose plugin,  
 * then you need to write your own user authentication function here.
 */
exports.local = passport.use(new LocalStrategy(User.authenticate()));

//Session for passport
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());  