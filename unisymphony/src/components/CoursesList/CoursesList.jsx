import React, { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import CourseCard from '../CourseCard/CourseCard';
import "./CoursesList.css"
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useData } from '../../contexts/DataContext/DataContext';
import { searchCourses } from '../../apis/apis';

const CoursesList = () => {
    const [val, setVal] = useState('')
    const {dataState,dataDispatch} = useData()
    return (
        <div className='course-list'>
            <Sidebar />
            <div className='courses-list'>

            <div className='user-search'>
           <input
        type="text"
        placeholder="Type your message..."
        value={val}
        onChange={(e) => setVal(e.target.value)}
    
      />
      <button onClick={  () =>{
            searchCourses(val,dataDispatch)
        }} >
        <FontAwesomeIcon icon={faSearch} />
      </button>
      </div>
      <div className='courses_items'>
        {dataState.courses_list.map((course) => {
            return <span className='courses-list-items'>{course}</span>
        })}
      </div>
      <div className='course-items'>
      {dataState.courses.map((course) => {
        return   <CourseCard title={course['Course Name']} link={course['Course URL']} description={course['Course Description']} difficulty={course[
            'Difficulty Level']} uni={course['University']} rating={course['Course Rating']} />
      })}
      </div>

          
            </div>
        </div>
    );
}

export default CoursesList;
