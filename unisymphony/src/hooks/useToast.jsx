import { useData } from "../contexts/DataContext/DataContext";



const useToast = () => {
    const {dataDispatch} = useData();
    const postToast =(type, message) => {
        console.log(type, message)
    dataDispatch({type:"TOAST", toastType:type, toastMessage:message });
        setTimeout(() => {
            dataDispatch({type:"TOAST", toastType:'', toastMessage:'' });
        }, 5000)
    };
    return postToast;
};

export default useToast;