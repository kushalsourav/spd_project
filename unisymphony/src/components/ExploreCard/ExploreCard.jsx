import React from 'react';
import "./ExploreCard.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const ExploreCard = ({data}) => {
    console.log(data)
    return (
        <>
        <div className="explore_list">
        {
           
            data.posts.map((post) => {
                return(
                    <div class="explore_card">
                    <div className="explore_header">
                      <h2 class="explore_title">{post.jobTitle}</h2>
                     {/* <p class="explore_date">{post.createdAt?.substring(0,10)}</p> */}
                    </div>
            <p class="explore_description">{post.jobDescription}</p>
            <p class="explore_type">{post.jobType}</p>
        
            <div className="explore_footer">
                
            <div className="explore_avatar">
                <FontAwesomeIcon className='thread_avatar-icons' icon={faUser} />
            </div>
            <a href="#" class="explore_button">Apply Now</a>
            </div>
        </div>
                )
            })
        }
        </div>
        
        </>

    );
}

export default ExploreCard;
