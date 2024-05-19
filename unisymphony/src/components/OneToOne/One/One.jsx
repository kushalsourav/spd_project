import React, { useState } from 'react';

const One = ({send}) => {
    const [state, setState] = useState({id: 2,message: '', time: ''})
    const time = new Date().toLocaleTimeString()
    console.log(time)
    return (
        <div>
        <input type="text" onChange={(f) => setState(e => ({id: 2,message: f.target.value, time:time}))} />
        <button onClick={() => send(state)}>send</button>
    </div>
    );
}

export default One;
