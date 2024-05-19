import React from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';
import UserLists from '../../components/UserLists/UserLists';
import "./SearchUsers.css";

const SearchUsers = () => {
    return (
        <div className='search_users'>
           <Sidebar />
           <UserLists />
        </div>
    );
}

export default SearchUsers;
