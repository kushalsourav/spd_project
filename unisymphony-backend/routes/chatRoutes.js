// // routes/chatRoutes.js
// const express = require('express');
// const router = express.Router();
// const Chat = require('../models/Chat');
// const User = require('../models/User');
// const { connect } = require('mongoose');
// const checkToken = require('../checkToken');

// router.post('/send-message',checkToken, async (req, res) => {
//     const { sender, receiver, message } = req.body;

//     if (!sender || !receiver || !message) {
//         return res.status(400).json({ message: "Sender, receiver, and message are required." });
//     }

//     try {
//         // Check if sender and receiver exist and are valid users
//         const senderExists = await User.exists({ _id: sender });
//         const receiverExists = await User.exists({ _id: receiver });

//         if (!senderExists || !receiverExists) {
//             return res.status(404).json({ message: "Sender or receiver not found." });
//         }

//         // Send message only if the sender and receiver are valid and exist
//         // Check if the sender and receiver have a conversation
//         const conversationExists = await Chat.exists({
//             $or: [
//                 { sender, receiver },
//                 { sender: receiver, receiver: sender }
//             ]
//         });

//         // If conversation doesn't exist, create a new one
//         if (!conversationExists) {
//             const newConversation = new Chat({ sender, receiver, messages: [{  message }] });
//             await newConversation.save();
//         } else {
//             // If conversation exists, add message to existing conversation
//             await Chat.findOneAndUpdate(
//                 {
//                     $or: [
//                         { sender, receiver },
//                         { sender: receiver, receiver: sender }
//                     ]
//                 },
//                 {
//                     $push: {
//                         messages: {
//                             $each: [{ message: message, timestamp: new Date() }]
                            
//                         }
//                     },
                    
//                 }
//             );
//         }

//         res.status(201).json({ message: "Message sent successfully." });
//     } catch (err) {
//         res.status(500).json({ message: err.message });
//     }
// });



// router.get('/messages/:senderId/:receiverId',checkToken, async (req, res) => {
//     const { senderId, receiverId } = req.params;

//     try {
//         // Retrieve messages from the database
//         const messages = await Chat.find({
//             $or: [
//                 { sender: senderId, receiver: receiverId },
//                 { sender: receiverId, receiver: senderId }
//             ]
//         }).populate('sender receiver', 'username');

//         res.status(200).json(messages);
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// });

// router.get('/chats',checkToken, async (req, res) => {
//     try {
//         const  userId  = req.token.id;


//         // Check if the user exists
//         const user = await User.findById(userId);
//         if (!user) {
//             return res.status(404).json({ error: "User not found" });
//         }

//         // Find all the chats where the user is either sender or receiver
//         const chats = await Chat.find({
//             $or: [
//                 { sender: userId },
//                 { receiver: userId }
//             ]
//         }).populate('sender receiver', 'username email'); // Only populate sender and receiver fields with username and email

//         // Extract the list of users from the chats
//         const users = chats.reduce((acc, chat) => {
//             if (chat.sender._id.toString() !== userId) {
//                 acc.push(chat.sender);
//             }
//             if (chat.receiver._id.toString() !== userId) {
//                 acc.push(chat.receiver);
//             }
//             return acc;
//         }, []);

//         // Remove duplicate users
//         const uniqueUsers = Array.from(new Set(users.map(user => user._id.toString())))
//             .map(userId => users.find(user => user._id.toString() === userId));

//         res.json(uniqueUsers);
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ error: "Internal Server Error" });
//     }
// });


// router.get('/chats/:userId1/:userId2', async (req, res) => {
//     try {
//         const { userId1, userId2 } = req.params;

//         // Check if both users exist
//         const user1 = await User.findById(userId1);
//         const user2 = await User.findById(userId2);
//         if (!user1 || !user2) {
//             return res.status(404).json({ error: "One or both users not found" });
//         }

//         // Find the chat between these users
//         const chat = await Chat.findOne({
//             $or: [
//                 { sender: userId1, receiver: userId2 },
//                 { sender: userId2, receiver: userId1 }
//             ]
//         }).populate('messages');

//         if (!chat) {
//             return res.status(404).json({ error: "Chat not found" });
//         }

//         res.json(chat);
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ error: "Internal Server Error" });
//     }
// });

// module.exports = router;
const express = require('express');
const router = express.Router();
const Chat = require('../models/Chat');
const User = require('../models/User');
const checkToken = require('../checkToken');

let wss; 


const setWebSocketServer = (webSocketServer) => {
    wss = webSocketServer;
}

router.post('/send-message',checkToken, async (req, res) => {
    const { sender, receiver, message } = req.body;

    if (!sender || !receiver || !message) {
        return res.status(400).json({ message: "Sender, receiver, and message are required." });
    }

    try {
        // Check if sender and receiver exist and are valid users
        const senderExists = await User.exists({ _id: sender });
        const receiverExists = await User.exists({ _id: receiver });

        if (!senderExists || !receiverExists) {
            return res.status(404).json({ message: "Sender or receiver not found." });
        }

        // Send message only if the sender and receiver are valid and exist
        // Check if the sender and receiver have a conversation
        const conversation = await Chat.findOne({
            $or: [
                { sender, receiver },
                { sender: receiver, receiver: sender }
            ]
        });

        // If conversation doesn't exist, create a new one
        if (!conversation) {
            const newConversation = new Chat({ sender, receiver, messages: [{ senderId: sender, message }] });
            await newConversation.save();
        } else {
            // If conversation exists, add message to existing conversation
            conversation.messages.push({ senderId: sender, message, createdAt: new Date() });
            await conversation.save();
        }

        res.status(201).json({ message: "Message sent successfully." });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});



router.get('/messages/:senderId/:receiverId',checkToken, async (req, res) => {
    const { senderId, receiverId } = req.params;

    try {
        // Retrieve messages from the database
        const conversation = await Chat.findOne({
            $or: [
                { sender: senderId, receiver: receiverId },
                { sender: receiverId, receiver: senderId }
            ]
        });

        if (!conversation) {
            return res.status(404).json({ message: "Conversation not found." });
        }

        res.status(200).json(conversation.messages);
        wss.clients.forEach(client => {
            client.send(JSON.stringify({type: 'messages', data: conversation.messages}));
        })
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.get('/chats',checkToken, async (req, res) => {
    try {
        const  userId  = req.token.id;

        // Check if the user exists
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        // Find all the chats where the user is either sender or receiver
        const chats = await Chat.find({
            $or: [
                { sender: userId },
                { receiver: userId }
            ]
        }).populate('sender receiver', 'username email'); // Only populate sender and receiver fields with username and email

        // Extract the list of users from the chats
        const users = chats.reduce((acc, chat) => {
            if (chat.sender._id.toString() !== userId) {
                acc.push(chat.sender);
            }
            if (chat.receiver._id.toString() !== userId) {
                acc.push(chat.receiver);
            }
            return acc;
        }, []);

        // Remove duplicate users
        const uniqueUsers = Array.from(new Set(users.map(user => user._id.toString())))
            .map(userId => users.find(user => user._id.toString() === userId));

        res.json(uniqueUsers);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});


router.get('/chats/:userId1/:userId2', async (req, res) => {
    try {
        const { userId1, userId2 } = req.params;

        // Check if both users exist
        const user1 = await User.findById(userId1);
        const user2 = await User.findById(userId2);
        if (!user1 || !user2) {
            return res.status(404).json({ error: "One or both users not found" });
        }

        // Find the chat between these users
        const chat = await Chat.findOne({
            $or: [
                { sender: userId1, receiver: userId2 },
                { sender: userId2, receiver: userId1 }
            ]
        }).populate('messages.senderId', 'username');

        if (!chat) {
            return res.status(404).json({ error: "Chat not found" });
        }

        res.json(chat);

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

module.exports = {
    router,
    setWebSocketServer
};