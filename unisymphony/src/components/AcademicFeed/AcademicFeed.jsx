import React from 'react';
import "./AcademicFeed.css";
import Thread from '../Thread/Thread';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faChain, faFaceSmile, faPaperPlane,  faPaperclip,  faUser } from '@fortawesome/free-solid-svg-icons';

const AcademicFeed = () => {
    return (
        <div className='academicfeed'>
            <h3 className="academicfeed_heading">Academic Discussions</h3>
            <div className="academicfeed_box">
                <Thread />
                <Thread />
                <Thread />
            </div>
            <div className="academicfeed_post">
                {/* <div className="thread_avatar avatar-1 left-10">
                    <FontAwesomeIcon className='thread_avatar-icons' icon={faUser} />
                </div> */}
                    {/* <div className="post_details">
                        <h6 className="post_username">Ashborn</h6>
                        <button className="post_post">post</button>
                    </div> */}
                    <label htmlFor="" className='post_label'>
                      <input type="text" className="post_form" placeholder='start here...' />
                      <FontAwesomeIcon icon={faPaperPlane} className='post_icon post_icon-send' />
                      <FontAwesomeIcon icon={faFaceSmile} className='post_icon post_icon-smile' />
                      <FontAwesomeIcon icon={faPaperclip} className='post_icon post_icon-paperclip' />
                    </label>
                 
            </div>

            {/* <div className="academicfeed_post">
                <div className="thread_avatar avatar-1 left-10">
                    <FontAwesomeIcon className='thread_avatar-icons' icon={faUser} />
                </div> 
                 <div className="post_details">
                        <h6 className="post_username">Ashborn</h6>
                        <button className="post_post">post</button>
                    </div>
                    <input type="text" className="post_form" placeholder='start here...' />
            </div> */}
        </div>
    );
}

export default AcademicFeed;
