
const AuthReducer = (state, action) => {
    switch (action.type) {
        case "INPUT":
             return {...state, [action.name] :action.input}
        case "LOGIN": 
             return {...state, login:true}
       case "CLEAR_INPUTS" :
             return {...state, email:"", username:"", password:""}
       case  "GET_USERS" :
           return {...state, users: action.users}
        case  "GET_CHATS" :
            return {...state, chats: action.chats}
        case "SET_USER":
           return {
                ...state, user: action.user}
 
    
        default :
            return state;
    }
 
}

export default AuthReducer;
