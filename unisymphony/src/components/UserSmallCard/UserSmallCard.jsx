import React from 'react';
import "./UserSmallCard.css"
import { useNavigate } from 'react-router-dom';
import { getUserById } from '../../apis/apis';
import { useData } from '../../contexts/DataContext/DataContext';
const UserSmallCard = ({id, profileImage,name,role, about}) => {
  const {dataDispatch} = useData();
  const token = localStorage.getItem("token")
  const navigate = useNavigate();
    return (
        <div  key={id} className="user_small_card" onClick={ async () => {
         const res = await getUserById(id, token)
          dataDispatch({type:"USER", user:res.data})
          navigate(`/profile/${id}`)
          }}>
        <img className="user_small_card-profile-image" src={profileImage} alt="Profile" />
        <h2 className="user_small_card-name">{name}</h2>
        <p className="user_small_card-role">{role}</p>
        <p className="user_small_card-about">{about}</p>
      </div>
    );
}

export default UserSmallCard;
