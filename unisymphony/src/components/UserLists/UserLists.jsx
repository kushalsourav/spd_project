import React, { useState } from 'react';
import UserSmallCard from '../UserSmallCard/UserSmallCard';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./UserLists.css"
import { getUsersBySearch } from '../../apis/apis';

const UserLists = () => {
    const token = localStorage.getItem("token");
    const [val, setVal] = useState('');
    const [data, setData] = useState([]);
    return (
        <div className='user-lists'>
           <div className='user-search'>
           <input
        type="text"
        placeholder="Type your message..."
        value={val}
        onChange={(e) => setVal(e.target.value)}
    
      />
      <button onClick={ async () =>{
       const res = await getUsersBySearch(val,token)
       console.log(res)
       setData(res.data)
      }} >
        <FontAwesomeIcon icon={faSearch} />
      </button>
    </div>
    <div className='users-list'>
    {data?.map((user) => {
        return  <UserSmallCard id={user._id} profileImage="https://media.istockphoto.com/id/1125595211/photo/profile-view-of-young-female-programmer-working-on-computer-software-in-the-office.webp?s=2048x2048&w=is&k=20&c=rsAciExnLENmgZeHBbs8FhRu-VD3xaSf_HCV5AJx2bA=" name={user.username} role={user.role} about={user.about}/>
    })}
    </div>
        </div>
    );
}

export default UserLists;
