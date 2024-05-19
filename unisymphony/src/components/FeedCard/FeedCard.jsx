import React from 'react';
import './FeedCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAirFreshener } from '@fortawesome/free-solid-svg-icons';

const FeedCard = ({data}) => {
    return (
        <>{
            data.insights.map((insights) => {
                console.log(insights)
                return(

                    <div className='feedcard'>
                    <span className="feedcard_logo">
                    <FontAwesomeIcon icon={faAirFreshener} className='feedcard_icon' />
                    </span>
                    <div className="feedcard_body">
                        <h5 className="feedcard_head">{insights.interviewRole}</h5>
                        <ol className="feedcard_list">
                            {
                                insights.questions.map((q) => {
                                    console.log(q)
                                    return <li className='feedcard_item'>{q}</li>
                                })
                            }
                        </ol>
                    </div>
                    <button className="feedcard_button">view interview</button>
                </div>
                )
            })
        }

        
        </>

    );
}

export default FeedCard;
