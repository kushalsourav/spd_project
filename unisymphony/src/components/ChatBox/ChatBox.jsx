import React, { useDebugValue, useEffect } from 'react';
import "./ChatBox.css";
import { getChats, getMessages, sendMessage } from '../../apis/apis';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { useAuth } from '../../contexts/AuthContext/AuthContext';
import {useData} from "../../contexts/DataContext/DataContext";


const ChatBox = () => {
    const token = localStorage.getItem("token")
    const {authState, authDispatch} = useAuth();
    const {dataState, dataDispatch} = useData();
    const senderId = authState.user
    let message = dataState.oneToOne.message
    const {messages} =dataState

    console.log(authState.chats)

    useEffect(() => {
// getChats(authDispatch, "661cfeeb846ed7ff6ef7307b", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2M…A0OX0._WlTk9tDhO2OEFVLGuZxdTyQhvzN-RZtAp3vKgEuOq0")
    
    getChats(authDispatch, token)
    },[])
    return (

    <div className="chat-app">
    <div className="chat-users">
  
        {authState.chats.map(({_id, username}) => {
            return(
                <>
                <div className='chat-block' key={_id} onClick={() => {
                  dataDispatch({...dataState.oneToOne ,
                    type:"ONE_TO_ONE", receiverId: _id, 
                    senderId: authState.user._id})
                  getMessages(authState.user._id, _id,token)
            }}>
                  <img src='https://imgs.search.brave.com/mR-qTglzpGl8uw83n_ErbMNuZKXcqnfulrRGN17nsn0/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvZmVhdHVy/ZWQvY29vbC1wcm9m/aWxlLXBpY3R1cmUt/ODdoNDZnY29iamw1/ZTR4dS5qcGc' alt={username} className='chat-user_img' />
                  <h6 className='chat-username'>{username}</h6>
                    
                </div>
                </>
            )
        })}
    </div>
    <div className='chat-block-2'>
    <div className="chat-messages">
      {console.log(messages)}
 
           <ul className='gg-list'>
                {
                    messages?.map((itm) => {
                        return(<><li className='gg-items text' style={itm.senderId === authState.user._id ? { textAlign : 'right' } : {textAlign : 'left'}}>
                            {itm.message}
                            
                        </li>
                        
                        </>)
                    })
                }
                </ul>
    </div>
    <div className="chat-input">
      <input
        type="text"
        placeholder="Type your message..."
        value={dataState.oneToOne.message}
        onChange={(e) => dataDispatch({...dataState.oneToOne ,type:"ONE_TO_ONE", message: e.target.value})}
      />
      <button onClick={() =>{
        console.log(authState.oneToOne, senderId)
        sendMessage({sender: senderId, receiver:dataState.oneToOne.receiverId, message:message}, token)
        dataDispatch({...dataState.oneToOne ,type:"ONE_TO_ONE", message: ''})
    }
           
    } >
        <FontAwesomeIcon icon={faPaperPlane} />
      </button>
    </div>
    </div>
  </div>
    );
}

export default ChatBox;
