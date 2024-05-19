import React from 'react';
import "./Sidebar.css";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faBriefcase, faComment, faPaperPlane, faPeopleArrows, faSearch,faUserCircle,faUserTie } from '@fortawesome/free-solid-svg-icons';


const Sidebar = () => {
    return (
        <div className='sidebar'>
            <h4>Unisymphony</h4>
            <ul className="sidebar_list">
                <li className="sidebar_items">
                 <Link to='/insights' className='sidebar_link'>
                    <FontAwesomeIcon icon={faUserTie} className='sidebar_icon' /> Insights
                 </Link>
                </li>
                <li className="sidebar_items">
                <Link to={'/profile'} className='sidebar_link'>
                    <FontAwesomeIcon icon={faUserCircle} className='sidebar_icon' /> Profile
                </Link>
                </li>
                <li className="sidebar_items">
                <Link className='sidebar_link'>
                    <FontAwesomeIcon icon={faComment} className='sidebar_icon' /> Channels
                </Link>
                </li>
                <li className="sidebar_items">
                <Link  to='/explore' className='sidebar_link'>
                    <FontAwesomeIcon icon={faBriefcase} className='sidebar_icon' /> Job Postings
                </Link>
                </li>
                <li className="sidebar_items">
                <Link to='/chat' className='sidebar_link'>
                    <FontAwesomeIcon icon={faPaperPlane} className='sidebar_icon' /> Chat
                </Link>
                </li>
                <li className="sidebar_items">
                <Link to='/Search' className='sidebar_link'>
                    <FontAwesomeIcon icon={faSearch} className='sidebar_icon' /> Search
                </Link>
                </li>
            </ul>
        </div>
    );
}

export default Sidebar;
