// ProfileBlocks.js
import React from 'react';
import './ProfileBlock.css';

const ProfileBlock = ({data, setData}) => {
    
    return (
        <div className="profile-container">
            {
              
                data.roles.map((role) => {
                    return(
                        <span className="profile-block" onClick={() => {
                            setData({
                                ...data.userProfile,
                                type: "SETUP",
                                role: role
                            });
                         setData({type:"SET_PATH" , currentPath:"interests"})
                   
                        //   setData({type:"SETUP" , role: role, interests: data.userProfile.interests})

                    
                            }
                        
                        }
                            
                            
                            >
                                
                        {role}
                    </span>
                    )
                })
            }
        
        </div>
    );
};

export default ProfileBlock;
