import React from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';
import UserProfile from '../../components/UserProfile/UserProfile';
import "./Users.css"
import { useData } from '../../contexts/DataContext/DataContext';
import { useAuth } from '../../contexts/AuthContext/AuthContext';

const Users = () => {
    const {dataState} = useData();
    const {user} = dataState;
    const {authState} = useAuth()
    console.log(user, user._id)
    return (
        <div className='users'>
            <UserProfile id={authState.user._id} username={user?.username} role={user?.role} skills={user?.skills} experience={user?.experience} about={user?.about} website={user.website} email={user.email} frId={user._id} />
        </div>
    );
}

export default Users;
