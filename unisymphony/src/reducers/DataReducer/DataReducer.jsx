

const DataReducer = (state, action) => {
      
   switch(action.type) {

   case "JOB_INPUT":
         return {...state, jobPostData: {...state.jobPostData ,[action.name] :action.input } }
   case "MODAL":
         return {...state, modal:action.modal}
   case "SET_PATH" :
    
         return {...state,  currentPath: action.currentPath} 
   case "JOB":

         return {...state, jobPostData: {...state.jobPostData , jobTitle: '',
         jobDescription: '',
         jobRequirements: '',
         jobLocation: '',
         jobType: '',
         jobSalary: ''} }
    case "SETUP":
          return {...state, userProfile: {...state.userProfile , role:action.role, interests: action.interests,
          skills: action.skills,
          about: action.about,
          experience: action.experience,
          website: action.website
        }}
    case "GET_WEEKDATA": 
      return {...state,  currentWeekData : action.weekData}
      // events_dates:    state.events_dates.map((e, i) => {return{...e, date : action.weekData[i]}})
      case 'SET_EVENT_FORM':
      return {
        ...state,
        eventForm: action.eventForm
      };
      // case 'GET_EVENTS':
       
      //       return {...state , events_dates: action.events,
      //       events_dates:    state.events_dates.map((e, i) => {
      //             console.log(action.events[i].events)
      //             return{...e, date : "22", events: e.events.map((e,i) => {
      //         return {...e, title: "title", start:"22", end: "11"}

      //       })}})

      // }
      case 'GET_EVENTS':
            return {
                ...state,
                events_dates: state.events_dates.map((e, i) => {
                    const newEventData = action.events.find(event => event?.day?.substring(0,3).toLowerCase() === e?.day?.substring(0,3));
                
                    if (newEventData) {
                        return {
                            ...e,
                            
                            events: newEventData.events.map(newEvent => ({
                                ...newEvent,
                                date:newEvent.date,
                                title: newEvent.title,
                                start: newEvent.start,
                                end: newEvent.end
                            }))
                        };
                    } else {
                        return e; // Return unchanged if there's no corresponding event data
                    }
                })
            };
    
      case "GET_INSIGHTS":
            return {...state, insights: action.insights}
      case "GET_POSTS": 
      return {...state , posts: action.posts}
     case "ONE_TO_ONE":

        return {...state, oneToOne: {...state.oneToOne,  receiverId: action.receiverId,senderId:action.senderId , message: action.message}}
    case "LOAD_CHAT" :
  
        return {...state, messages: action.message}
    case "USER":
        return {...state, user:action.user}
        case "COURSES":
            return {...state, courses:action.courses}
    case "COURSES_LIST":
        return {...state, courses_list: action.course}
    case "TOAST":
            return {...state, toast: {...state.toast , toastType: action.toastType, toastMessage:action.toastMessage}};
    default : return state;
   }
 
}

export default DataReducer;
