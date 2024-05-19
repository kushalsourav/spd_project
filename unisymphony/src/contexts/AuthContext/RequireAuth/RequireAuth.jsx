import { useLocation, Navigate} from 'react-router-dom';
import { useAuth } from '../AuthContext';


const RequireAuth = ({children}) => {
    const location = useLocation()
    const {authState} = useAuth();
    return authState.login ? children: <Navigate to='/Auth/Signin' state={{from : location}} replace /> 
}

export default RequireAuth;
