const express = require('express');
const router = express.Router();
const Interview = require('../models/interviewInsights');
const checkToken = require('../checkToken');

router.post('/interviews', checkToken,async (req, res) => {
    try {
        const { interviewCompanyName, interviewRole, interviewInsights,  questions } = req.body;

      
        const interview = await Interview.create({ interviewCompanyName, interviewRole, interviewInsights,  questions, user: req.token.id });
        
        res.status(201).json({ success: true, data: interview });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
});

router.get('/interviews', async (req, res) => {
    try {
        const interviews = await Interview.find();
        
        res.status(200).json({ success: true, data: interviews });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
});

module.exports = router;
