const mongoose = require('mongoose');


const userSchema =  new mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
        lowercase: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
    },
    role :{
        type:String,
      
    },
    user_number_of_posts: {
        type: Number,
        default: 0
      },
      user_number_of_followers: {
        type: Number,
        default: 0
      },
      user_number_of_following: {
        type: Number,
        default: 0
      },
    followers: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],
    following: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],
    interests: [String],
    skills: [String],
    about: String,
    experience: String,
    website: String,
      jobPosts: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'JobPost' // Reference to the JobPost model
  }]
},
{collection :"users"}
);


module.exports = mongoose.model('User', userSchema);