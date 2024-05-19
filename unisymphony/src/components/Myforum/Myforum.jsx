import { faBuildingColumns, faChalkboard, faComments, faLinesLeaning, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import "./Myforum.css";


const Myforum = () => {
    return (
        <div className="myforum">
            <label className="myforum_label">
            <input className="myforum_form" />
                <FontAwesomeIcon icon={faSearch} className='myforum_icon-search' />
                
            </label>
            <ul className="myforum_list">
                <li className="myforum_items">Academic Advice</li>
                <li className="myforum_items">Career Advice</li>
                <li className="myforum_items">Interview Trends</li>
            </ul>
        </div>
    );
}

export default Myforum;
