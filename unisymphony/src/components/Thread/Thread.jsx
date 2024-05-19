import React from 'react';
import "./Thread.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faComment, faHeart, faUser } from '@fortawesome/free-solid-svg-icons';


const Thread = () => {
    return (

        <div className="thread">
            <div className="thread_post">
                <div className="thread_avatar avatar-1">
                    <FontAwesomeIcon className='thread_avatar-icons' icon={faUser} />
                </div>
                <div className="thread_avatar avatar-2">
                    <FontAwesomeIcon  className='thread_avatar-icons icon-2' icon={faUser} />
                </div>
                <div className="thread_user-info">
                        <p className="thread_username">Ashborn</p>
                        <p className="thread_timestamp">2h</p>
                </div>
                <div className="thread_content">
                    <p className="thread_topic">Study Techniques for Exams</p>
                    <p className="thread_description">Great discussion on effective study methods!
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit nam itaque ullam quisquam excepturi. Repudiandae dolor accusantium nemo facilis. Fugit hic ipsum, atque quam dolorem commodi accusamus eos dolor iste.
                    </p>
                </div>
                <div className="thread_btns">
                    <button className="thread_btn btn_like" >
                        <FontAwesomeIcon className='' icon={faHeart} />
                    </button>
                    <button className="thread_btn btn_comment">
                        <FontAwesomeIcon icon={faComment}/>
                    </button>
                </div>
                <small className="thread_accs">
                    <span>0 replies</span> 
                    <FontAwesomeIcon className="thread_icon" icon={faCircle} /> 
                    <span>245 likes</span>
                </small>
            </div>
        </div>

    );
}

export default Thread;
