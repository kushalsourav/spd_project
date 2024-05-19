import axios from "axios"
export const sendMessage = async (message, token) => {
    await axios.post("http://localhost:8000/api/send-message", message, {headers:{Authorization:token}}).then((res) => {
     
        getMessages(message.sender._id, message.receiver, token)

       
    })
}

export const createProfile = async (userProfile, token, setAuth) => {
    await axios.post("http://localhost:8000/api/user/update", userProfile, {headers:{Authorization:token}}).then((res) => {
        setAuth({type:"SET_USER",user:res.data.user})
        
    })
}

export const postEvent = async (events, token) => {
    await axios.post("http://localhost:8000/api/events", events, {headers:{Authorization:token}}).then((res) => {
        getEvent()
    })
}


export const getEvent = async () => {
    await axios.get("http://localhost:8000/api/events").then((res) => {
    })
}


export const postInsights = async (insights, token,setData) => {
    await axios.post("http://localhost:8000/api/interviews", insights, {headers:{Authorization:token}}).then((res) => {
        getInsights(setData)
        console.log(res)
    })
}

export const getInsights = async (setData) => {
    await axios.get("http://localhost:8000/api/interviews").then((res) => {
        setData({type:"GET_INSIGHTS", insights:res.data.data})
    })
}


export const postOpportunities = async (opportunties, token,setData) => {
    await axios.post("http://localhost:8000/api/jobposts", opportunties, {headers:{Authorization:token}}).then((res) => {
        getOpportunities()
    })
}

export const getOpportunities = async (setData) => {
    await axios.get("http://localhost:8000/api/jobposts").then((res) => {
    })
}

export const getUsers = async (loadUsers,token) => {
     await axios.get("http://localhost:8000/api/users", {headers:{Authorization:token}}).then((res) => {
        console.log(res)
             loadUsers({type:"GET_USERS", users: res.data})
     })
}


export const getChats = async (loadChats,token) => {
    await axios.get(`http://localhost:8000/api/chats`, {headers:{Authorization:token}}).then((res) => {
       console.log(res)
       loadChats({type:"GET_CHATS", chats: res.data})
    })
}

export const getMessages = async (senderId, receiverId,token) => {
    console.log(senderId,receiverId)
    await axios.get(`http://localhost:8000/api/messages/${senderId}/${receiverId}`,{headers:{Authorization:token}}).then((res) => {console.log(res)
            //  loadMessages({type:"LOAD_CHAT", message:res.data})
    }
)
}

export const getChatsTwo = async (loadChats,senderId,receiverId,token) => {
    await axios.get(`http://localhost:8000/api/chats/${senderId}/${receiverId}`, {headers:{Authorization:token}}).then((res) => {
       console.log(res)
       loadChats({type:"GET_CHATS", chats: res.data})
    })
}

export const getUsersBySearch = async (user,token) => {
   return await axios.get(`http://localhost:8000/api/users/search/${user}`, {headers:{Authorization:token}}).then((res) => {
       return res
    })
}

export const getUserById = async (userId, token) => {
    return await axios.get(`http://localhost:8000/api/users/${userId}`, {headers:{Authorization:token}}).then((res) => {
        return res
     })
}

export const getRcourses = async (userId,setData) => {
    return await axios.get(`http://127.0.0.1:5000/api/recommendations/${userId}`).then((res) => {
        console.log(res)
              setData({type:"COURSES", courses:res.data})
     })
}

export const searchCourses = async (userInput,setData) => {
    return await axios.get(`http://localhost:5500/api/recommendations/?input=${userInput}`).then((res) => {
        console.log(res)
              setData({type:"COURSES_LIST", course:res.data})
     })
}



export const getConntected = async (userId,currentUserID ,token) => {
    console.log(token)
    await axios.post(`http://localhost:8000/api/user/follow/${userId}/${currentUserID}`,  {headers:{Authorization:token}}).then((res) => {
        console.log(res)
    })
}

export const getFollowing = async(userId) => {
    await axios.get(`http://localhost:8000/api/user/following/${userId}`,  ).then((res) => {
        console.log(res)
    })
}

export const getFollowers = async(userId) => {
    await axios.get(`http://localhost:8000/api/user/followers/${userId}`,  ).then((res) => {
        console.log(res)
    })
}

// http://localhost:8000/api/user/follow/661d011b846ed7ff6ef731a2/661cfeeb846ed7ff6ef7307b



export const getConnt = async () => {

    await axios.post(`http://localhost:8000/api/user/follow/661d011b846ed7ff6ef731a2/661cfeeb846ed7ff6ef7307b`).then((res) => {
        console.log(res)
    })
}