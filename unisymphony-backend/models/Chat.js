// // models/Chat.js
// const mongoose = require('mongoose');

// const chatSchema = new mongoose.Schema({
//     sender: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: 'User'
//     },
//     receiver: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: 'User'
//     },
//     messages: [{
//         message: String
//     }],
//     createdAt: { type: Date, default: Date.now }
// });


// module.exports = mongoose.model('Chat', chatSchema);


const mongoose = require('mongoose');

const chatSchema = new mongoose.Schema({
    sender: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    receiver: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    messages: [{
        senderId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
        message: String,
        createdAt: { type: Date, default: Date.now }
    }]
});

module.exports = mongoose.model('Chat', chatSchema);

