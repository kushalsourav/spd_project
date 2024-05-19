import React from 'react';
import "./Feeds.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserAlt } from '@fortawesome/free-solid-svg-icons';

const Feeds = ({data}) => {
    return (
        // <div className='feeds'>
        //     <div className="feed_card">

        //         <div className="feed_header">
        //             <div className="feed_avatar">
        //                 <FontAwesomeIcon icon={faUserAlt} />
        //             </div>
        //             <div className="feed_about">
        //                 <h4 className="feed_username">user</h4>
        //                 <span className="feed_timestamp">Posted 2 hrs ago</span>
        //             </div>
        //             <h3 className="feed_companyname">
        //                 IVM
        //             </h3>
        //         </div>

        //         <div className="feed_body">
        //             <ul className="feed_content">
        //                 <li className="feed_content-list">
        //                     <p className="feed_description">
        //                         Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia obcaecati voluptate fuga illo maiores repellat soluta ratione quasi dolorum itaque.
        //                     </p>
        //                 </li>
        //                 <li className="feed_content-list">
        //                     <strong>Role :</strong> developer
        //                 </li>
        //                 <li className="feed_content-list">
        //                     <strong>Date :</strong> 22/01/2024
        //                 </li>
        //                 <li className="feed_content-list">
        //                     <strong>Questions:</strong>
        //                     <ol className="questions">
        //                         <li className="question_list">Tell me about yourself?</li>
        //                         <li className="question_list">How do you handle challenges?</li>
        //                     </ol>
        //                 </li>
        //             </ul>

        //         </div>
        //     </div>
        // </div>
      <>
      
      {
        data.insights.map((ing) => {
            return(
                <div className='feeds'>
                <div className="feed_card">
        
                    <div className="feed_header">
                        <div className="feed_about">
                            <FontAwesomeIcon icon={faUserAlt} className="feed_avatar" />
                            <h4 className="feed_username">user</h4>
                        </div>
                        <span className="feed_timestamp">{ing.createdAt}</span>
                    </div>
        
                    <div className="feed_body">
                    <p className="feed_description">
                        {ing.interviewInsights}
                    </p>
                    
                      <span className="feed_type">
                        {ing.interviewRole}
                      </span>
                    </div>
                </div>
            </div>
            )
        })
      }
      </>

    );
}

export default Feeds;
