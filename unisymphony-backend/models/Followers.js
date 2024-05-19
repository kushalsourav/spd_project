const mongoose = require('mongoose');

const follower = new mongoose.Schema({
  follower_id: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', 
    required: true
  }],
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', 
    required: true
  }
});

module.exports = mongoose.model('UserFollower', follower);
