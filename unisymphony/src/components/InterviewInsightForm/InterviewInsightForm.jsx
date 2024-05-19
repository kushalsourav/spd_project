// InterviewInsightForm.js
import React, { useState } from 'react';
import './InterviewInsightForm.css';
import { postInsights } from '../../apis/apis';


const InterviewInsightForm = ({setData}) => {
    const token = localStorage.getItem("token")
    const [formData, setFormData] = useState({
        interviewCompanyName: '',
        interviewRole: '',
        interviewInsights: '',
        questionInput: '',
        questions: []
    });

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleAddQuestion = () => {
        const { questionInput, questions } = formData;
        if (questionInput.trim() !== "") {
            setFormData(prevState => ({
                ...prevState,
                questionInput: '',
                questions: [...questions, questionInput.trim()]
            }));
        }
    };

    const handleSubmit = e => {
        e.preventDefault();
        console.log(formData); 
        postInsights(formData, token, setData)
        setFormData({
            interviewCompanyName: '',
            interviewRole: '',
            interviewInsights: '',
            questionInput: '',
            questions: []
        });
    };

    return (
        <div className="interviewinsightsform">
        <h2 className="interviewinsightsform__title">Interview Insights Form</h2>
        <form className="interviewinsightsform__form" onSubmit={handleSubmit}>
            <div className="interviewinsightsform__formGroup">
                <label htmlFor="interviewCompanyName">Company Name:</label>
                <input type="text" id="interviewCompanyName" name="interviewCompanyName" value={formData.interviewCompanyName} onChange={handleChange} required />
            </div>
            <div className="interviewinsightsform__formGroup">
                <label htmlFor="interviewRole">Role :</label>
                <input type="text" id="interviewRole" name="interviewRole" value={formData.interviewRole} onChange={handleChange} required />
            </div>
            <div className="interviewinsightsform__formGroup">
                <label htmlFor="interviewInsights">Interview Insights:</label>
                <textarea id="interviewInsights" name="interviewInsights" value={formData.interviewInsights} onChange={handleChange} required></textarea>
            </div>
            <div className="interviewinsightsform__formGroup">
                <label htmlFor="questionInput">Add Question:</label>
                <input type="text" id="questionInput" name="questionInput" value={formData.questionInput} onChange={handleChange} />
            </div>
            <button type="button" className="interviewinsightsform__addButton" onClick={handleAddQuestion}>Add Question</button>
            <button type="submit" className="interviewinsightsform__submitButton interviewinsightsform__addButton">Submit</button>
        </form>
        <div className="interviewinsightsform__questionsList">
            <h3>Questions:</h3>
            <ol>
                {formData.questions.map((question, index) => (
                    <li key={index}>{question}</li>
                ))}
            </ol>
        </div>
    </div>
    );
};

export default InterviewInsightForm;
