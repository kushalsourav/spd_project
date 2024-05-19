import React from 'react';
import "./HomeBoard.css";
import Sidebar from "../Sidebar/Sidebar";
import BoardOne from '../BoardOne/BoardOne';
const HomeBoard = () => {
    return (
        <div className='homeboard'>
            <BoardOne />
        </div>
    );
}

export default HomeBoard;
