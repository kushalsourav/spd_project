import { createContext, useContext, useEffect, useReducer} from "react"
import DataReducer from "../../reducers/DataReducer/DataReducer";
import { getEvent, getInsights, getMessages, getOpportunities, getRcourses } from "../../apis/apis";
import { useAuth } from "../AuthContext/AuthContext";

const initialDataState = {
    name: '',
    modal:false,
    jobPostData : {
        jobTitle: '',
        jobDescription: '',
        jobRequirements: '',
        jobLocation: '',
        jobType: '',
        jobSalary: '',
      },
    userProfile: {
        role: '',
        interests: [],
        skills: [],
        about: '',
        experience: '',
        website: '',
    },
    currentPath: "registration",
    roles: ['student','faculty', 'alumni'], 
    events_dates : [
        { day: 'mon', date:'', events: [{date: '',title: '', start: '', end: ''}]},
        { day: 'tues', date:'', events: [{date: '',title: '', start: '', end: ''}]},
        { day: 'wed', date:'', events: [{date: '',title: '', start: '', end: ''}]},
        { day: 'thurs', date:'', events: [{date: '',title: '', start: '', end: ''}]},
        { day: 'fri', date:'', events: [{date: '',title: '', start: '', end: ''}]}
    ],
    currentWeekData : [],
    eventForm: {
      day: '',
      date: '',
      events: [
        {
            title: '',
            start: '',
            end: '',
        }
      ]
    },
    insights: [],
    posts:[],
    oppFilters: [
        'parttime', 'fulltime', 'internship', 'research'
    ],
    oneToOne: {
        message: '',
        receiverId:'',
        senderId: ''
    },
    messages: [],
    user:{},
    courses:[],
    courses_list : [],
    toast: {
        toastType: '',
        toastMessage: ''
    },
    
}

const DataContext = createContext(null);

const useData = () => useContext(DataContext);

const DataProvider = ({children}) => {
  
    const [dataState, dataDispatch] = useReducer(DataReducer, initialDataState);
  
    
    useEffect(() =>{
       getEvent()
       getInsights(dataDispatch)
       getOpportunities();

    
  
     
        // dataDispatch({type:"COURSES", courses:course.data})

         // Establish WebSocket connection to receive real-time updates
    const socket = new WebSocket('ws://localhost:8000');
    // const eventSoc = new WebSocket('ws://localhost:8000');

    socket.onopen =() => {
        getOpportunities()
    }
    socket.onmessage = (event) => {
        // let posts = JSON.parse(event.data)
        // console.log(posts)
        // dataDispatch({type:"GET_POSTS", posts: JSON.parse(event.data)})
        const message = JSON.parse(event.data);
        const type = message.type;
        const data = message.data;

        console.log(type,data)
    
        switch(type) {
            case 'jobPost':
                dataDispatch({type:"GET_POSTS", posts: data})
                break;
            case 'event':
                dataDispatch({type:"GET_EVENTS", events: data})
                break;
            case 'messages':
                console.log(data)
                // dataDispatch({type:"LOAD_CHAT", message: data})
            default:
                console.log('Received message of unknown type:', message);
        }
      };
    },[])
   
    return(
        <DataContext.Provider value={{dataState, dataDispatch}}>
            {children}
        </DataContext.Provider>
    )
}

export {DataProvider, useData};
