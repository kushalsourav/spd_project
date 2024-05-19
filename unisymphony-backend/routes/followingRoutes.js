const express = require('express');
const router =  express.Router();
const UserFollowing = require('../models/Following');
const checkToken = require("../checkToken");
const User = require("../models/User");

router.post('/addFollowing', checkToken, async (req, res) => {
    try {
        const { followingID } = req.body;

        let userFollowing = await UserFollowing.findOne({ user_id: req.token.id });

        if (!userFollowing) {
            userFollowing = await UserFollowing.create({ following_id: [followingID], user_id: req.token.id });
        } else {
        
            userFollowing.following_id.push(followingID);
            await userFollowing.save();
        }
       
       
        res.status(201).json({ success: true, data: userFollowing });
    } catch (error) {
        res.status(400).json({success:false, error:error})
    }
})

router.get("/followings", checkToken, async (req,res, next) => {
    try{
        let user = await UserFollowing.findOne({user_id: req.token.id})

        if(!user) {
            res.status(404).json({success:false, error: user, message:"user not found"})
        }
      
       const users = await User.find({_id : {$in : user.following_id}})
    
       const updatedUser = await User.findByIdAndUpdate(req.token.id, {$inc: {user_number_of_followings: users.length}}, {new: true})
       updatedUser.save()
       res.json({success:true, users:users, length : users.length})

    }catch(error) {
        res.status(500).json({error:error})
    }

})


module.exports = router