import React from 'react';
import "./ProfileImgCard.css";

const ProfileImgCard = () => {
    return (
        <div className='profile_img_card'>
            <div className="profile_img_card-body">
                <div className="profile_img_card-avatar">
                <img src='https://imgs.search.brave.com/M9aN83oriB4W8fFGBXDRjNipoNMPgNiAXIMuhEDmcH4/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzg3L2Q1/LzI1Lzg3ZDUyNTcx/MjdlYjVmOTg2OTU4/ZjAwMTgyZTE1OGFh/LmpwZw' alt='profile-img' className="profile_img_card-img" />
                <button className="profile_img_card-add_btn">
                +
                </button>
                </div>
                <h6 className="profile_img_card-name">roronoa zoro</h6>
                <span className="profile_img_card-type">student</span>
            </div>
        </div>
    );
}

export default ProfileImgCard;
