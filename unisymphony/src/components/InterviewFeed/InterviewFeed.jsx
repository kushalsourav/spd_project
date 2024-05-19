import React from 'react';
import "./InterviewFeed.css";
import Feeds from '../Feeds/Feeds';

const InterviewFeed = ({data}) => {
    return (
        <div className='interviewfeed'>
            <h1 className='heading_primary'>Interview  Insights</h1>
            <Feeds data={data}/>
        </div>
    );
}

export default InterviewFeed;
