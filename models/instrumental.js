/**
 * Created by toned_000 on 5/28/2017.
 */
var gstore = require('gstore-node');
var bcrypt = require('bcryptjs');


const Schema =gstore.Schema;
// User Schema
var InstrumentalSchema = new Schema({
    
    beatKey:{
        type: 'string',
        required: true
    },
    
    catlog:{
        type: 'string',
    }, 
    
    mp3:{
        type: 'object',
        required: true
    }, 
    
    wav:{
        type:'string',
    }, 
    
    price:{
        type:'double',
        required: true
    }, 
    
    contract:{
        type:'object',
        optional: true
    } ,
    
    ownerId:{
        type: 'int',
        required: true
    },
    
    owenrName:{
        type:'string',
        required: true
    } ,
    
    available:{
        type:'boolean',
        required: true
    }, 
    
    exclusive:{
        type:'boolean',
        required: true
    },
    createdOn: { 
        type: 'datetime', 
        default: gstore.defaultValues.NOW ,
        required: true
    },

});

var Instrumental = module.exports = gstore.model('Instrumental', InstrumentalSchema);

/*module.exports.createUser = function(newUser, callback){
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
};*/
