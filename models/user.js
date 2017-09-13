/**
 * Created by toned_000 on 5/28/2017.
 */
var gstore = require('gstore-node');
var bcrypt = require('bcryptjs');


const Schema =gstore.Schema;
// User Schema
var UserSchema = new Schema({
    firstName: {
        type: 'string',
        required: true
    },
    lastName:{
        type: 'string',
        required: true
    },
    username: {
        type: 'string',
        required: true

    },
    password: {
        type: 'string',
        required: true
    },
    email: {
        type: 'string',
        validate: 'isEmail',
        required: true
    },
    
    createdOn: { 
        type: 'datetime', 
        default: gstore.defaultValues.NOW,
        required: true 
    },

    isAuthenticated:{
        type: 'boolean',
        required:true
    },

    bucketName:{
        type: 'string',
        required:true
    }
});

var User = module.exports = gstore.model('User', UserSchema);


//generates hased password for the newUser that was created
module.exports.createUser = function(newUser, callback){
    bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash(newUser.password, salt, function(err, hash) {
            newUser.password = hash;
            newUser.save(callback);
        });
    });
};

module.exports.getUserByUsername = function(username, callback){
    var query = {username: username};
    User.findOne(query, callback);
};


module.exports.getUserById = function(id, callback){
    User.findById(id, callback);
};

module.exports.comparePassword = function(candidatePassword, hash, callback){
    bcrypt.compare(candidatePassword, hash, function(err, isMatch) {
        if(err) throw err;
        callback(null, isMatch);
    });
};
