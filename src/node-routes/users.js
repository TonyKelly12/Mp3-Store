/**
 * Created by toned_000 on 8/17/2017.
 */
var express = require('express');
var router = express.Router();
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var path = require('path')
var multer  = require('multer')
var User = require('../../models/User');
const Storage = require('@google-cloud/storage');
const gStorage = Storage();
var jwt = require('jsonwebtoken');
//TODO: hide secret in different file
const JWT_SECRET = 'J5bn&vwMW1%vRP1x';

// Instantiates a client
//const storage = Storage();
var fs = require('fs');



router.get('/login', function(req, res){
    res.json({login: 'login working correctly'})
});

router.get('/register', function(req, res){
    res.json({register: 'register working correctly'})
});

router.get('/upload', function(req, res){ 
    res.json({upload: 'upload working correctly'})
})
// Register User
router.post('/register', function(req, res){
    //this gets all the fields from the register request and runs 
    //validation on them
    var firstName = req.body.firstName;
    var lastName = req.body.lastName;
    var email = req.body.email;
    var username = req.body.username;
    var password = req.body.password;
    var confirmPassword = req.body.password2;

    // Validation using body parser to check html fields posted
    // first param is var second is error message
    req.checkBody('firstName', 'First name is required').notEmpty();
    req.checkBody('lastName', 'Last name is required').notEmpty();
    req.checkBody('email', 'Email is required').notEmpty();
    req.checkBody('email', 'Email is not valid').isEmail();
    req.checkBody('username', 'Username is required').notEmpty();
    req.checkBody('password', 'Password is required').notEmpty();
    req.checkBody('confirmPassword', 'Passwords do not match').equals(req.body.password);

    var errors = req.validationErrors();

    if(errors){
        // TODO: connect correct errors to react layout
        res.send(errors)
        }
    else {
        //Creates new user
        var bucketId = Math.floor(Math.random() * 5000);
        var newUser = new User({
            firstName: firstName,
            lastName: lastName,
            email:email,
            username: username,
            password: password,
            isAuthenticated: false,
            bucketName: bucketId + username
        });
        //passes newUser to the createUser function which generates a hashed salted pwrd
        User.createUser(newUser, function(err, user){
            if(err) throw err;
            console.log(user);
        });
       
        // Creates a new google storage bucket
        gStorage.createBucket(newUser.bucketName)
        .then(() => {
          console.log(`Bucket ${newUser.bucketName} created.`);
        })
        .catch((err) => {
          console.error('ERROR:', err);
        });


        //success message
        res.json({
            success_msg: 'You are registered and can now login',
            admin: newUser
    })
        
      
    }
});

passport.use(new LocalStrategy(
    function(username, password, done) {
        User.getUserByUsername(username, function(err, user){
            if(err) throw err;
            if(!user){
                return res.json({error: "No user by that name"});
                 
            }else{

            User.comparePassword(password, user.password, function(err, isMatch){
                if(err) throw err;
                if(isMatch){
                   const token = jwt.sign({
                       //WIll encrypt and data from results and send it over in token
                       //TODO: figure out what data you want to send over in token or all in
                       id: user.entityKey,
                       admin: user.entityData
                   },JWT_SECRET)
                   user.token  = token;
                    console.log(user.token);
                    console.log("above is the user below is the error");
                    return done(null, user);
                    
                } else {
                    console.log("Invallid Password");
                    return done(null, false, {message: 'Invalid password'});
                }
            });
        }});
    }));

// Writing user section
passport.serializeUser(function(user, done) {
    console.log("Log in worked")
    return done(null, user.entityKey.id);
});
// reading from user session
passport.deserializeUser(function(id, done) {
    User.getUserById(id, function(err, user) {
        console.log("deserialized is being ran");
        done(err, user);
    });
});
process.on('unhandledRejection', error => {
    // Prints "unhandledRejection woops!"
    console.log("Handling rejected promise in a terrible way for now");
  });
// login function 
//TODO: Fix unhandled promise fro when a user logs in but user exist in database
router.post('/login',
passport.authenticate('local'),

function(req, res) {
   //responds with the user token
    res.json(req.user.token);
});
// Logout Function
router.get('/logout', function(req, res){
    console.log("logout ran")
    req.logout();

    res.json({logout_msg: 'You are logged out'});

   
});


const storage = multer.diskStorage({
    
    destination: function (req, file, cb){
       
        cb(null ,'uploads/')},
        filename: function(req, file, callback) {
            console.log(file)
            callback(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
        }
    
  } ); 
  
  var upload = multer({ storage:storage}).single('song');
  //const cpUpload = upload.fields([{ name: 'files', maxCount: 1 }, { name: 'bucketName',maxCount: 1 }])


//TODO: Below multer not working correctly file not saving to storage.
router.post('/upload', function (req,res)  {
    upload(req, res, function (err){
        if (err){
            res.json({error: true, message: "error in uploading"})
        }
        console.log('before upload function')
       
            if (!req.body) {
                console.log("No file received");
                return res.send({
                  success: false
                });
            }
        
        const file = req.file; // file passed from client
        const meta = req.body; //all other values passed from the client, like name, etc..
        
        console.log(meta);

        // do whatever you want with the file content
  /*
        gStorage.bucket('45tonytone')
    .upload(file.path)
   .then(() => {
     console.log('uploaded to bucket');
    })
    .catch((err) => {
      console.error('ERROR:', err);
    });
    */ 

        res.json({success:true, message:"upload function ran",  meta:file})


    })

   
       
});

 module.exports = router;  
    // Imports the Google Cloud client library
    // var newpath = 'http://localhost:9000/tempFiles'
    //fs.writeFile(fileName, song, function (err) {
     // if (err) throw err;
     
   // });
    
    
    
    //console.log(song)
   // req.body.files.forEach(file => {
   
   // });       
            
    // do whatever you want with the file content
   /* gStorage.bucket(meta.bucket)
    .upload('../../tempFiles/')
   .then(() => {
     console.log(`${filename} uploaded to ${bucketName}.`);
    })
    .catch((err) => {
      console.error('ERROR:', err);
    }); */

   
    


