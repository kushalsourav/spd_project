import {useAuth} from "../../contexts/AuthContext/AuthContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faArrowLeftLong} from '@fortawesome/free-solid-svg-icons';
import  Form from  "../../components/Form/Form";
import AuthBox from "../../components/AuthBox/AuthBox";
import { Link, useNavigate } from 'react-router-dom';
import "./SignUp.css"
import axios from "axios";
import ProfileBlock from "../../components/ProfileBlock/ProfileBlock";
import InterestSelection from "../../components/InterestSelection/InterestSelection";
import { useData } from "../../contexts/DataContext/DataContext";
import SkillSelection from "../../components/SkillSelection/SkillSelection";
import UserInfoInput from "../../components/UserInfoInput/UserInfoInput";
import ExperienceInput from "../../components/ExperienceInput/ExperienceInput";
import WebsiteInput from "../../components/WebsiteInput/WebsiteInput";
 import useToast from "../../hooks/useToast";

const SignUp = () => {
const {authState, authDispatch} = useAuth()
 const postToast = useToast()
let path ;
const {dataState, dataDispatch} = useData();
const {currentPath} = dataState;
const navigate = useNavigate()
const signupHandler = async (e) => {
    console.log("function calling")
    e.preventDefault();
    // if(authState.email !== '' && authState.username !== '' && authState.password !== '' &&  authState.role !== '')  {
        console.log("function calling")
        try {
            await axios.post('http://localhost:8000/api/user/signup', {email: authState.email, username: authState.username, password: authState.password}).then((response) => {
                        if (response.data.success === false) {
                            postToast("error", response.data.error);
                        } else {
                            console.log("function calling yesss", response.data);
                            dataDispatch({ type: "SET_PATH", currentPath: "category" });
                            localStorage.setItem("token", response.data.token);
                            authDispatch({ type: "CLEAR_INPUTS", email: "", username: "", password: "" });
                            console.log("cleared");
                        }
                    })
                } catch (error) {
                    // Handle other errors
                    console.log("Error:", error.response);
                    switch (error.response.data.error) {
                        case "Please fill all required fields":
                            // Display error message for missing fields
                            postToast("warning", "Please fill all required fields");
                            break;
                        case "Invalid email format":
                            // Display error message for invalid email format
                            postToast("warning", "Invalid email format");
                            break;
                        case "Password must be at least 6 characters long":
                            // Display error message for short password
                            postToast("warning", "Password must be at least 6 characters long");
                            break;
                        case "Username must be alphanumeric":
                            // Display error message for non-alphanumeric username
                            postToast("warning", "Username must be alphanumeric");
                            break;
                        case "Email already exists":
                            // Display error message for existing email
                            postToast("warning", "Email already exists");
                            break;
                        case "Username already exists":
                            // Display error message for existing username
                            postToast("warning", "Username already exists");
                            break;
                        default:
                            // Handle other errors
                            postToast("warning", "Something went wrong");
                            break;
                    }
                    // postToast("error", "An error occurred");
                }
                
        // } else {
        //     // !authState.password && postToast("warning", "please enter yout password");
        //     // !authState.email && postToast("warning", "please enter your email");
        //     // !authState.username && postToast("warning", "please enter your username");
        // }
        
// } else {
//     // !authState.password && postToast("warning", "please enter yout password");
//     // !authState.email && postToast("warning", "please enter your email");
//     // !authState.username && postToast("warning", "please enter your username");
// }


   
}
if(currentPath == "registration") {
   path = <>
           <div className="signup_view">
        <AuthBox>
        <div className="box-1">
                <Link to="/Auth" className='box-round'>
                  <FontAwesomeIcon icon={faArrowLeftLong} className='icon-center' />
                </Link>
                <h4 className='box-header'>Create your Account</h4>
                <Link to="/" className='box-round'>
                <FontAwesomeIcon icon={faXmark} className='icon-center' />
                </Link>
        </div>
            <Form authDispatch={authDispatch} handleForm={signupHandler} />
           <div className="signup-box" onClick={() => {
            
            console.log(currentPath,dataState, authState)
         
           }}>
           <p className='signup-text'>Already have an account?</p><Link to="/Auth/Signin" className='signup-link'>Sign in</Link>
            </div>
        </AuthBox>
        </div>
   </>
} else if(currentPath === "category") {
    path = <>
    <ProfileBlock  data={dataState}  setData={dataDispatch} />
    </>
}else if(currentPath === "interests") {
    path = <>
    <InterestSelection data={dataState} setData={dataDispatch} />
    </>
} else if(currentPath === "skills") {
path = <>
  <SkillSelection data={dataState} setData={dataDispatch} />
</>
} else if(currentPath === "about") {
    path = <>
    <UserInfoInput data={dataState} setData={dataDispatch} />
    </>
} else if(currentPath === "experience") {
    path = <>
    <ExperienceInput data={dataState} setData={dataDispatch} />
    </>
} else if (currentPath === "website") {
    path = <>
    <WebsiteInput data={dataState} setData={dataDispatch} setAuth={authDispatch} />
    </>
}



    return(
        <>
  {path}
      
        </>
    )
}
export default SignUp;