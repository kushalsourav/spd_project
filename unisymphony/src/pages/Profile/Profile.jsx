import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "./Profile.css"
import Sidebar from '../../components/Sidebar/Sidebar';


import avatar from "../../assets/img/7408.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightDots, faPlus } from '@fortawesome/free-solid-svg-icons';
import { useAuth } from '../../contexts/AuthContext/AuthContext';
import UserProfile from '../../components/UserProfile/UserProfile';
const Profile = () => {
    const {authState} = useAuth();
    const {_id, username, email, about, skills, interests, experience, role, website} = authState.user
//     const [experience, setExperience] = useState('');
//   const [about, setAbout] = useState('');

  const handleInput = (event, setter) => {
    const { target } = event;
    target.style.height = 'auto'; 
    target.style.height = `${target.scrollHeight}px`; 
 
  };
    useEffect(() => {

    },[])

    return (
      <UserProfile id={_id} username={username} role={role} email={email} skills={skills} website={website} experience={experience} about={about} frId={_id} />
    );
}

export default Profile;


