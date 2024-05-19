const mongoose = require('mongoose');

const jobPostSchema = new mongoose.Schema(
    {
      jobTitle: {
        type: String,
        required: true,
      },
      jobDescription: {
        type: String,
        required: true,
      },
      jobRequirements: {
        type: String,
        required: true,
      },
      jobLocation: {
        type: String,
        required: true,
      },
      jobType: {
        type: String,
        required: true,
      },
      jobSalary: {
        type: String,
        required: true,
      },
      postedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
      }
    },
    { timestamps: true }
  );

const JobPosting = mongoose.model("JobPost", jobPostSchema);
  module.exports = JobPosting