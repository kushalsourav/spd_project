import { useLocation } from "react-router-dom";
import Input from "../Input/Input";
import"./Form.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";




const Form = ({authDispatch, handleForm}) => {
    const location = useLocation();
    let form;
    if(location.pathname === '/Auth/Signin') {
         form = <>
         <Input name={"email"} inputType={"text"} placeholder={"Enter mail"} labelText={"Enter your email"} setInput={authDispatch} />
         <Input name={"password"} inputType={"password"} placeholder={"Enter password"} labelText={"Enter your password"} setInput={authDispatch} />
         </>
    } 
    if(location.pathname === '/auth/signup') {
        form = <>
         <Input name={"username"} inputType={"text"} placeholder={"Enter username"} labelText={"Enter username"} setInput={authDispatch} />
        <Input name={"email"} inputType={"text"} placeholder={"Enter mail"} labelText={"Enter your email"} setInput={authDispatch} />
        <Input name={"password"} inputType={"password"} placeholder={"Enter password"} labelText={"Enter your password"} setInput={authDispatch} />
    
        </>
    }
    return (
        <>
        <form onSubmit={handleForm} className="form">
        {form}
          <button  className="form-button" onClick={() => console.log("click")}>Continue 
          <FontAwesomeIcon icon={faArrowRightLong} />
          </button>
        </form>
        
        </>
    );
}

export default Form;
