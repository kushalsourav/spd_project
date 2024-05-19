const express = require('express');
const router =  express.Router();
const UserFollower = require('../models/Followers');
const checkToken = require("../checkToken");
const User = require("../models/User");

router.post('/addFollower', checkToken, async (req, res) => {
    try {
        const { followerID } = req.body;

        let userFollower = await UserFollower.findOne({ user_id: req.token.id });

        if (!userFollower) {
            userFollower = await UserFollower.create({ follower_id: [followerID], user_id: req.token.id });
        } else {
        
            userFollower.follower_id.push(followerID);
            await userFollower.save();
        }
       
       
        res.status(201).json({ success: true, data: userFollower });
    } catch (error) {
        res.status(400).json({success:false, error:error})
    }
})

router.get("/followers", checkToken, async (req,res, next) => {
    try{
        let user = await UserFollower.findOne({user_id: req.token.id})

        if(!user) {
            res.status(404).json({success:false, error: user, message:"user not found"})
        }
      
       const users = await User.find({_id : {$in : user.follower_id}})
    
       const updatedUser = await User.findByIdAndUpdate(req.token.id, {$inc: {user_number_of_followers: users.length}}, {new: true})
       updatedUser.save()
       res.json({success:true, users:users, length : users.length})

    }catch(error) {
        res.status(500).json({error:error})
    }

})


module.exports = router