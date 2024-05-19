import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faArrowLeftLong} from '@fortawesome/free-solid-svg-icons';
import  Form from  "../../components/Form/Form";
import AuthBox from "../../components/AuthBox/AuthBox";
import { Link, useNavigate, his, useLocation } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext/AuthContext';
import axios from 'axios';

import useToast from '../../hooks/useToast';

const SignIn = () => {
const {authState ,authDispatch} = useAuth();
const location = useLocation()
const navigate = useNavigate()
const token  = localStorage.getItem("token")
const postToast = useToast()
    const SigninHandler =  async (e) => {
        e.preventDefault()
        // try {
        //     const result = await axios.post('http://localhost:8000/api/user/signin', {
        //         email: authState.email,
        //         password: authState.password
        //     });
        
        //     if (result.data.success === false) {
        //         postToast("warning", result.data.error);
        //     } else {
        //         console.log(result.data);
        //         const { token, user } = result.data;
        //         authDispatch({ type: "SET_USER", username: user.username });
        //         localStorage.setItem("token", token);
        //         authDispatch({ type: "LOGIN", login: true });
        //         authDispatch({ type: "SET_USER", user });
        //         authDispatch({ type: "CLEAR_INPUTS", email: "", password: "" });
        //         navigate('/');
        //     }
        // } catch (error) {
        //     console.log(error);
        //     postToast("error", "An error occurred");
        // }
        try {
            const { email, password } = authState;
        
            // Client-side validation
            if (!email || !password) {
                postToast("warning", "Please provide email and password");
                return;
            }
           
        
            const result = await axios.post('http://localhost:8000/api/user/signin', { email, password });
        
            if (result.data.success === false) {
                if (result.data.error === "User does not exist") {
                    postToast("warning", "User does not exist");
                } else if (result.data.error === "Incorrect password") {
                    postToast("warning", "Incorrect password");
                } else {
                    postToast("warning", "Something went wrong");
                }
            } else {
                console.log(result.data);
                const { token, user } = result.data;
                authDispatch({ type: "SET_USER", username: user.username });
                localStorage.setItem("token", token);
                authDispatch({ type: "LOGIN", login: true });
                authDispatch({ type: "SET_USER", user });
                authDispatch({ type: "CLEAR_INPUTS", email: "", password: "" });
                navigate('/Home');
            }
        } catch (error) {
            console.log(error);
            if (error.response.data.error === "User does not exist") {
                postToast("warning", "User does not exist");
            } else if (error.response.data.error === "Incorrect password") {
                postToast("warning", "Incorrect password");
            } else if(error.response.data.error === "Invalid email format")
                postToast("warning", "Invalid email format");
             
            else {
                postToast("warning", "Something went wrong");
            }
            
        }
        

    }
    return(
        <>
        <AuthBox>
        <div className="box-1">
                <Link to="/auth/signup" className='box-round'>
                  <FontAwesomeIcon icon={faArrowLeftLong} className='icon-center' />
                </Link>
                <h4 className='box-header'>Login</h4>
                <Link to="/" className='box-round'>
                <FontAwesomeIcon icon={faXmark} className='icon-center' />
                </Link>
        </div>
            <Form handleForm={SigninHandler} authDispatch={authDispatch} />
        </AuthBox>
        </>
    )
}
export default SignIn;