// const express = require('express');
// const router = express.Router();
// const JobPosting = require('../models/JobPost');
// const checkToken = require('../checkToken');
// const User = require('../models/User');


// router.post("/jobposts", checkToken, async (req, res) => {
//     const { jobTitle, jobDescription, jobRequirements, jobLocation, jobType, jobSalary } = req.body;
//     try {
  
//       const jobPost = await JobPosting.create({
//         jobTitle,
//         jobDescription,
//         jobRequirements,
//         jobLocation,
//         jobType,
//         jobSalary,
//         postedBy: req.token.id 
//       });
//       await User.findByIdAndUpdate(
//         req.token.id,
//         { $push: { jobPosts: jobPost._id } },
//         { new: true }
//       );
//       res.status(201).json({ success: true, message: "Job post created successfully", jobPost });
//     } catch (error) {
//       res.status(500).json({ success: false, error: "Internal server error" });
//     }
//   });
  
  

// router.get('/jobposts', async (req, res) => {
//     try {
//         const jobposts = await JobPosting.find();
//         res.json(jobposts);
//     } catch (error) {
//         console.error("Error fetching events:", error);
//         res.status(500).json({ error: 'Internal server error' });
//     }
// });

// router.delete("/jobposts/:jobPostId", checkToken, async (req, res) => {
//     try {
    
//       const { jobPostId } = req.params;
  
//       const deletedJobPost = await JobPost.findByIdAndDelete(jobPostId);
  
//       if (!deletedJobPost) {
//         return res.status(404).json({ success: false, error: "Job post not found" });
//       }
  
//       if (deletedJobPost.postedBy.toString() !== req.token.id) {
//         return res.status(403).json({ success: false, error: "Unauthorized to delete this job post" });
//       }
  
//       await User.findByIdAndUpdate(
//         req.token.id,
//         { $pull: { jobPosts: jobPostId } },
//         { new: true }
//       );
//       res.json({ success: true, message: "Job post deleted successfully" });
//     } catch (error) {
//       console.error("Error deleting job post:", error);
//       res.status(500).json({ success: false, error: "Internal server error" });
//     }
//   });
  

// module.exports = router;



const express = require('express');
const router = express.Router();
const JobPosting = require('../models/JobPost');
const checkToken = require('../checkToken');
const User = require('../models/User');
const WebSocket = require('ws');

module.exports = (wss) => {
    const broadcastJobPost = (newJobPost) => {
        wss.clients.forEach((client) => {
            if (client.readyState === WebSocket.OPEN) {
                client.send(JSON.stringify({type: 'jobPost', data: newJobPost}));
            }
        });
    };

    // Create job post
    router.post('/jobposts', checkToken, async (req, res) => {
        const { jobTitle, jobDescription, jobRequirements, jobLocation, jobType, jobSalary } = req.body;
        try {
            const jobPost = await JobPosting.create({
                jobTitle,
                jobDescription,
                jobRequirements,
                jobLocation,
                jobType,
                jobSalary,
                postedBy: req.token.id 
            });
            await User.findByIdAndUpdate(
                req.token.id,
                { $push: { jobPosts: jobPost._id } },
                { new: true }
            );


            res.status(201).json({ success: true, message: 'Job post created successfully', jobPost });
        } catch (error) {
            console.error('Error creating job post:', error);
            res.status(500).json({ success: false, error: 'Internal server error' });
        }
    });

    // Fetch all job posts
    router.get('/jobposts', async (req, res) => {
        try {
            const jobposts = await JobPosting.find();
            res.json(jobposts);
            broadcastJobPost(jobposts);
        } catch (error) {
            console.error('Error fetching job posts:', error);
            res.status(500).json({ error: 'Internal server error' });
        }
    });

    // Delete job post
    router.delete('/jobposts/:jobPostId', checkToken, async (req, res) => {
        try {
            const { jobPostId } = req.params;

            const deletedJobPost = await JobPosting.findByIdAndDelete(jobPostId);

            if (!deletedJobPost) {
                return res.status(404).json({ success: false, error: 'Job post not found' });
            }

            if (deletedJobPost.postedBy.toString() !== req.token.id) {
                return res.status(403).json({ success: false, error: 'Unauthorized to delete this job post' });
            }

            await User.findByIdAndUpdate(
                req.token.id,
                { $pull: { jobPosts: jobPostId } },
                { new: true }
            );

            // Broadcast job post deletion to all connected clients
            broadcastJobPost({ _id: jobPostId, deleted: true });

            res.json({ success: true, message: 'Job post deleted successfully' });
        } catch (error) {
            console.error('Error deleting job post:', error);
            res.status(500).json({ success: false, error: 'Internal server error' });
        }
    });

    return router; // Return the router object
};
