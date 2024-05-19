import { Link } from 'react-router-dom';
import Sidebar from '../../components/Sidebar/Sidebar';
import avatar from "../../assets/img/7408.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightDots, faPlus } from '@fortawesome/free-solid-svg-icons';
import { getConnt, getConntected, getFollowers, getFollowing } from '../../apis/apis';


const UserProfile = ({id,username, skills, experience, role, website, email, about,frId}) => {
    const token = localStorage.getItem("token")
    const handleInput = (event, setter) => {
        const { target } = event;
        target.style.height = 'auto'; 
        target.style.height = `${target.scrollHeight}px`; 
     
      };
    return (
        <div className='profile'>
            <Sidebar />
            <div className='profile_block-1'>
            <div className='profile_coverImage'>

            </div>
            <div className='profile_header'>
                <img src={avatar} className='profile_avatar' alt="" />
                 <div className='profile_header-body'>
                    <h2 className='profile_username'>{username}</h2>
                    <p className='profile_info'>{role}</p>
                 </div>
                 
        
              { <button className='profile_header-btn' onClick={() => {
                getConnt()
              }}>
                    <span><FontAwesomeIcon icon={faPlus} /></span>
                    follow</button> }
            </div>
            <div className='profile_info'>
                 <div className="profile_info-1">
                     <div className="profile_info-experience">
                        <h4>Experince</h4>
                                <textarea className='textarea-experience' name="experience" id="experience" 
                                      rows="3" // Set initial number of visible rows
                                      value={experience}
                                      onInput={(event) => handleInput(event)}
                                      disabled
                                ></textarea>
                     </div>
                     <div className="profile_info-about">
                        <h4>About</h4>
                        <textarea className='textarea-about' name="about" id="about" 
                          rows="3" // Set initial number of visible rows
                          value={about}
                          onInput={(event) => handleInput(event, about)}
                          disabled
                        >

                        </textarea>
                     </div>
                 </div>
                 <div className="profile_info-2">
                    <div className="profile_info-skills">
                        <h4>skills</h4>
                        <ul className="profile_info-list">
                            {
                                skills.map((skills) => {
                                    return <li className="profile_info-items">{skills}</li>
                                })
                            }
                     
                        </ul>
                    </div>
                    <div className="profile_info-location">
                        <h4>Location</h4>
                        <span>state, country</span>
                    </div>
                    <div className="profile_info-website">
                        <h4>Website</h4>
                        <Link className='profile_info-links'><span>{website}<FontAwesomeIcon icon={faArrowUpRightDots} /></span></Link>
                    </div>
                    <div className="profile_info-email">
                        <h4>Email</h4>
                        <Link className='profile_info-links'><span>{email}<FontAwesomeIcon icon={faArrowUpRightDots} /></span></Link>
                    </div>
                </div>
            </div>
            <div>  
            </div>
            </div>
        </div>
    );
}

export default UserProfile;
