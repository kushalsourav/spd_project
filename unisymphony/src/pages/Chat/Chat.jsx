import React, { useEffect } from 'react';
import "./Chat.css";
import Sidebar from '../../components/Sidebar/Sidebar';
import ChatBox from '../../components/ChatBox/ChatBox';
import WsTesting from '../../components/WsTesting/WsTesting';
import { useData } from '../../contexts/DataContext/DataContext';
import { getMessages } from '../../apis/apis';

const Chat = () => {
const {dataState, dataDispatch} = useData()
const {oneToOne} = dataState;
const token = localStorage.getItem("token")
    useEffect(() =>{
 
          
     const socket = new WebSocket('ws://localhost:8000');
  
    //  getMessages(oneToOne.senderId, oneToOne.receiverId, token)
     socket.onopen =() => {
        
     } 
     socket.onmessage = (event) => {
         const message = JSON.parse(event.data);
         const type = message.type;
         const data = message.data;
 
         console.log(type,data)
     
         switch(type) {
             case 'jobPost':
                 dataDispatch({type:"GET_POSTS", posts: data})
                 break;
             case 'event':
                 dataDispatch({type:"GET_EVENTS", events: data})
                 break;
             case 'messages':
                 console.log(data)
                 dataDispatch({type:"LOAD_CHAT", message: data})
             default:
                 console.log('Received message of unknown type:', message);
         }
       };

     },[])
    return (
        <div className='chat'>
            <Sidebar />
            <ChatBox />
            
        </div>
    );
}

export default Chat;
