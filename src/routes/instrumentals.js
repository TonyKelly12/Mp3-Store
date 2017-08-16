/**
 * Created by toned_000 on 5/29/2017.
 */
var express = require('express');
var router = express.Router();
var passport = require('passport');
var mongoose = require('mongoose');
var User = require('../models/user');
var Location = require('../models/savedLocation');

passport.deserializeUser(function (id, done) {
    User
        .getUserById(id, function (err, user) {
            done(err, user);
        });
});

// Get Homepage
router.get('/', ensureAuthenticated,function (req, res) {
   
    console.log(req.user);
    console.log(req.isAuthenticated);
 res.render('index');
 
});

router.get('/index', function (req, res) {
   
var userId = req.user.id;
    console.log(userId);
 
});

    function ensureAuthenticated(req, res, next) {
        if (req.isAuthenticated()) {
            return next();
        } else {
            //req.flash('error_msg','You are not logged in');
            res.redirect('/users/login');
        }
    };

    module.exports = router;
