import { createContext, useContext, useEffect, useReducer } from "react";
import AuthReducer from "../../reducers/AuthReducer/AuthReducer";
import { redirect, useNavigate , Navigate, useLocation} from "react-router-dom";
import { getChats, getUsers, getRcourses } from "../../apis/apis";

const initialAuthState = {
  user : {

  },
  users: [],
  chats: [],
    username: "",
    email: "",
    password: "",
    login: false,
    userProfile :{
     userId: '',
     username: '',
     email: '',
     skills: [],
     interests: [],
     about: '',
     experience: '',
     role: ''
    },
    
}


const AuthContext = createContext();

const useAuth = () => useContext(AuthContext);

const AuthProvider = ({children}) => {
    
    const [authState, authDispatch] = useReducer(AuthReducer, initialAuthState)
    const location = useLocation()
    const navigate = useNavigate()
    const token = localStorage.getItem("token")
    console.log(initialAuthState, authState.userProfile)
useEffect( () => {
getUsers(authDispatch, token)
 getChats(authDispatch,token)


},[])
      return(
        <AuthContext.Provider value={{authState, authDispatch}} >
            {children}
        </AuthContext.Provider>
      )
}

export {AuthProvider, useAuth}