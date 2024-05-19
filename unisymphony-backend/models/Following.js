const mongoose = require('mongoose');

const following = new mongoose.Schema({
  following_id: [{
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

module.exports = mongoose.model('UserFollowing', following);
