import React, { useState } from 'react';
import './JobPostForm.css'; 
import { postOpportunities } from '../../apis/apis';

const JobPostForm = ({formData, setData}) => {

const token = localStorage.getItem("token")
  return (
    <div className="job-posting-form-container">
      <h2>Post a Job</h2>
      <form onSubmit={(e) => {
        e.preventDefault()
        }}>
        <label htmlFor="jobTitle">Job Title:</label>
        <input type="text" id="jobTitle" name="jobTitle" className="job-input" value={formData.jobTitle}  onChange={(e) => setData({type:"JOB_INPUT", name:e.target.name, input:e.target.value})} />
        
        <label htmlFor="jobDescription">Job Description:</label>
        <textarea id="jobDescription" name="jobDescription" className="job-textarea" value={formData.jobDescription} onChange={(e) => setData({type:"JOB_INPUT", name:e.target.name, input:e.target.value})} />
        
        <label htmlFor="jobRequirements">Job Requirements:</label>
        <textarea id="jobRequirements" name="jobRequirements" className="job-textarea" value={formData.jobRequirements} onChange={(e) => setData({type:"JOB_INPUT", name:e.target.name, input:e.target.value})} />
        
        <label htmlFor="jobLocation">Job Location:</label>
        <input type="text" id="jobLocation" name="jobLocation" className="job-input" value={formData.jobLocation} onChange={(e) => setData({type:"JOB_INPUT", name:e.target.name, input:e.target.value})} />
        
        <label htmlFor="jobType">Job Type:</label>
        <select id="jobType" name="jobType" className="job-select" value={formData.jobType} onChange={(e) => setData({type:"JOB_INPUT", name:e.target.name, input:e.target.value})}>
          <option value="">Select Type</option>
          <option value="Full-time">Full-time</option>
          <option value="Part-time">Part-time</option>
          <option value="Internship">Internship</option>
          <option value="Research">Research</option>
        </select>
        
        <label htmlFor="jobSalary">Job Salary:</label>
        <input type="text" id="jobSalary" name="jobSalary" className="job-input" value={formData.jobSalary} onChange={(e) => setData({type:"JOB_INPUT", name:e.target.name, input:e.target.value})} />
        
        <button type="submit" className="submit-button" onClick={() => {
           console.log(formData)
          postOpportunities(formData, token, setData)
          setData({type:"JOB"})}}>Post Job</button>
      </form>
    </div>
  );
}

export default JobPostForm;
