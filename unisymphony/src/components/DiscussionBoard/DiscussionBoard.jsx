import React from 'react';
import "./DiscussionBoard.css";
import Sidebar from '../Sidebar/Sidebar';
import Thread from '../Thread/Thread';
import AcademicFeed from '../AcademicFeed/AcademicFeed';
import Myforum from '../Myforum/Myforum';


const DiscussionBoard = () => {
    return (
        <div className='discussionboard'>
            <Sidebar />
            <Myforum />
            <AcademicFeed />
        </div>
    );
}

export default DiscussionBoard;


