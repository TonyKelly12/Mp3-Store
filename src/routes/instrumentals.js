/**
 * Created by toned_000 on 5/29/2017.
 */
var express = require('express');
var router = express.Router();
var passport = require('passport');
var gstore = require('gstore-node');
var User = require('../../models/user');


passport.deserializeUser(function (id, done) {
    User
        .getUserById(id, function (err, user) {
            done(err, user);
        });
});

/* Get Homepage
router.get('/', ensureAuthenticated,function (req, res) {
   
    console.log(req.user);
    console.log(req.isAuthenticated);
 res.render('index');
 
}); */

router.get('/', function (req, res) {
   
var userId = "test 123";
    console.log(userId);
 
});

   /* function ensureAuthenticated(req, res, next) {
        if (req.isAuthenticated()) {
            return next();
        } else {
            //req.flash('error_msg','You are not logged in');
            res.redirect('/');
        }
    };
*/
    module.exports = router;
