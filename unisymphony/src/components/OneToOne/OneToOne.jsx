import React, { useState } from 'react';
import One from './One/One';
import Two from './Two/Two';
import "./OneToOne.css"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

const OneToOne = () => {
    const [state, setState] = useState([])
     const send = (data) => {
       console.log(data)
      
       setState(e => [...e, data])
     }
     let stateD = state.sort((a,b) => a.time < b.time)
     console.log(stateD)
     console.log("hello")
    return (
        <div className='onetoone'>
             <Two send={send} />
            <One send={send} />
  
            {
               <div className='chatbox-xx'>
                <ul className='gg-list'>
                {/* {stateD.filter((id) => {return id.id == 1}).map((itm) => {
                    return(<li>
                        {itm.message}
                    </li>)
                })}
                </ul>
            
                <ul>
                {stateD.filter((id) => {return id.id == 2}).map((itm) => {
                    return(<li>
                        {itm.message}
                    </li>)
                })} */}
                {
                    stateD.map((itm) => {
                        return(<><li className='gg-items' style={itm.id === 2 ? { textAlign : 'right' } : {textAlign : 'left'}}>
                            {itm.message}
                            <small>{itm.time}</small>
                        </li>
                        
                        </>)
                    })
                }
                </ul>
                <div className="chat-input">
      <input
        type="text"
        placeholder="Type your message..."
    
      />
      <button >
        <FontAwesomeIcon icon={faPaperPlane} />
      </button>
    </div>
                </div>
            }
        </div>
    );
}

export default OneToOne;
