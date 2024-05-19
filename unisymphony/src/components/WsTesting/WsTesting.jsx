import React, { useState, useEffect } from 'react';

function WsTesting() {
  const [ws, setWs] = useState(null);
  const [message, setMessage] = useState('');
  const [receivedMessage, setReceivedMessage] = useState('');
const arr = [1,2,3,4,5,6,7,8,9]
  useEffect(() => {
    // Establish WebSocket connection
    const newWs = new WebSocket('ws://localhost:8000');

    // WebSocket event listeners
    newWs.onopen = () => {
      console.log('Connected to WebSocket server');
      console.log("called")
      const add = () => {
        console.log(2+2)

      }
      add()
    };

    // newWs.onmessage = (event) => {
    //   console.log('Received message from server:', event.data);
    //   // Convert Blob to string

    //   const reader = new FileReader();
    //   reader.onload = () => {
    //     const text = reader.result;
    //     setReceivedMessage(text);
    //   };
    //   reader.readAsText(event.data);
    // };
    newWs.onmessage = (event) => {
      console.log('Received message from server:', event.data);
      setReceivedMessage(event.data); // Directly set the received message as the state
    };
    newWs.onerror = (error) => {
      console.error('WebSocket error:', error);
     
    };

    newWs.onclose = () => {
      console.log('Connection to WebSocket server closed');
    };

    setWs(newWs);

    // Cleanup function
    return () => {
      if (ws) {
        ws.close();
      }
    };
  }, []);

  const sendMessage = () => {
    if (ws) {
      ws.send(arr);
      console.log('Sent message:');
      
    }
  };

  return (
    <div className="WsTesting">
      <h1>Real-time Chat</h1>
      {/* <input type="text" value={message} onChange={(e) => setMessage(e.target.value)} /> */}
      <button onClick={sendMessage}>Send</button>
      <div>
        <h2>Received Message:</h2>
        <p>{receivedMessage}</p>
      </div>
    </div>
  );
}

export default WsTesting;
