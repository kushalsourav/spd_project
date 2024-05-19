const mongoose = require('mongoose');

const interviewInsightsSchema = new mongoose.Schema({
    interviewCompanyName: {
        type: String,
        required: true
    },
    interviewRole: {
        type: String,
        required: true
    },
    interviewInsights: {
        type: String,
        required: true
    },
    questions: {
        type: Array,
        default: []
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
}, { timestamps: true });

const Interview = mongoose.model('Interview', interviewInsightsSchema);

module.exports = Interview;
