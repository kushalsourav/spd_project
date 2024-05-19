import React, { useEffect } from 'react';
import "./BoardOne.css";
import welcomeimage from "../../assets/img/output-onlinepngtools.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faGreaterThan } from '@fortawesome/free-solid-svg-icons';
import ActiveCourse from '../ActiveCourse/ActiveCourse';
import FeaturedCourse from '../FeaturedCourse/FeaturedCourse';
import { useData } from '../../contexts/DataContext/DataContext';
import { getRcourses } from '../../apis/apis';
import { useAuth } from '../../contexts/AuthContext/AuthContext';
import { Link } from 'react-router-dom';

const BoardOne = () => {
    const {authState} = useAuth();
    const {dataState,dataDispatch} = useData();
    console.log(dataState.courses) 
useEffect(() => {
    getRcourses(authState.user._id, dataDispatch) 
},[])

console.log(dataState.courses.map((data) => console.log(data['Course Description'])))
    
    return (
        <div className='boardone'>
            <div className="boardone-header">
              <div className="boardone-info">
                <h2 className="heading-secondary">Welcome Back</h2>
                <h1 className="heading-primary">{authState.user.username}</h1>
                <small className="grey-text">ready to embark on your learning journey?</small>
              </div>
            </div>

            <div className="boardone_stats">
                <div className="boardone_stats-course">
                    <h4 className="course_header">Course Stats</h4>
                    <span>view all <FontAwesomeIcon icon={faArrowRight} /> </span>
                </div>
                <div className="boardone_course">
                   {dataState.courses.slice(5,9).map((data) => {
                    return <ActiveCourse title={data['Course Name']} />
                   })}
                
                </div>
            </div>

            <div className="boardtwo_stats">
            <div className="boardone_stats-course">
                    <h4 className="course_header">Featured Courses</h4>
                    <Link to={'/Courses'} className='gg-link'>view all <FontAwesomeIcon icon={faArrowRight} /> </Link>
                </div>
                <div className="boardone_course">
                   {dataState.courses.slice(0,5).map((data) => {
                    return <FeaturedCourse title={data['Course Name']} rating={data['Course Rating']} description={data['Course Description'].slice(0,40)} />
                   })}
                </div>
            </div>
        </div>
    );
}

export default BoardOne;
