import './AuthBox.css'

const AuthBox = ({children}) => {
    
    return (
        <div className="auth-box">
            {children}
        </div>
    );
}

export default AuthBox;
