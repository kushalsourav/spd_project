// SkillSelection.js
import React, { useState } from 'react';
import './SkillSelection.css';
// import { createProfile } from '../../apis/apis';
import { useNavigate } from 'react-router-dom';

const SkillSelection = ({ data, setData }) => {
    const [selectedSkills, setSelectedSkills] = useState([]);
    const skills = [
        'JavaScript',
        'Python',
        'Java',
        'C++',
        'HTML/CSS',
        'React',
        'Node.js',
        'SQL',
        'Git',
        'Linux',
        'AWS',
        'Docker'
    ];

    const toggleSkill = skill => {
        if (selectedSkills.includes(skill)) {
            setSelectedSkills(selectedSkills.filter(item => item !== skill));
        } else {
            setSelectedSkills([...selectedSkills, skill]);
        }
    };

    return (
        <div className="skills-container prof-item-center">
            <p className="skill-header">Select your skills:</p>
            <div className="skills-list">
                {skills.map(skill => (
                    <div
                        key={skill}
                        className={`skill-item ${selectedSkills.includes(skill) ? 'selected' : ''}`}
                        onClick={() => {
                            toggleSkill(skill);
                        }}
                    >
                        {skill}
                    </div>
                ))}
            </div>

            <button className='submit-prf-btn' onClick={() => {
                
                setData({...data.userProfile, type: "SETUP",  skills: selectedSkills });
                setData({type:"SET_PATH" , currentPath:"about"})
               
                // createProfile(data.userProfile, token);
                // navigate("/");
            }}>Submit</button>
        </div>
    );
};

export default SkillSelection;
