import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Calendar from '../pages/Calendar/Calendar';
import Forums from '../pages/Forums/Forums';
import Learning from '../pages/Learning/Learning';
import HomeBoard from '../components/HomeBoard/HomeBoard';
import Chat from '../pages/Chat/Chat';
import StudentProfile from '../pages/StudentProfile/StudentProfile';
import InterviewInsights from '../components/InterviewInsights/InterviewInsights';
import Explore from '../pages/Explore/Explore';
import SignIn from '../Views/SignIn/SignIn';
import SignUp from '../Views/SignUp/SignUp';
import RequireAuth  from '../contexts/AuthContext/RequireAuth/RequireAuth';
import { useAuth } from '../contexts/AuthContext/AuthContext';
import FacultyDashboard from '../components/FacultyDashboard/FacultyDashboard';
import OneToOne from '../components/OneToOne/OneToOne';
import Profile from '../pages/Profile/Profile';
import SearchUsers from '../pages/SearchUsers/SearchUsers';
import Users from '../pages/Users/Users';
import CoursesList from '../components/CoursesList/CoursesList';
import Toast from "../components/Toast/Toast";
import { useData } from '../contexts/DataContext/DataContext';
import LandingPage from '../pages/LandingPage/LandingPage';


const Router = () => {
    
    const {authState} = useAuth()
    const [role, setRole] = useState('')
    const {dataState} = useData()
    console.log(authState.user)
    return (
        <>
        <Routes>
            <Route path='/' element={<LandingPage />} />
            <Route path='/Home' element={<RequireAuth><Home /></RequireAuth>} />
            <Route path='/calendar' element={<RequireAuth><Calendar /></RequireAuth>} />
            <Route path='/forums' element={<RequireAuth><Forums /></RequireAuth>} />
            <Route path='/learning' element={<RequireAuth><HomeBoard /></RequireAuth>} />
            <Route path='/chat' element={<RequireAuth><Chat /></RequireAuth>} /> 
            <Route path='/insights' element={<RequireAuth><InterviewInsights /></RequireAuth>} />
            <Route path='/explore' element={<RequireAuth><Explore /></RequireAuth>} />
            <Route path='/faculty' element={<RequireAuth><FacultyDashboard /></RequireAuth>} />
            <Route path='/profile' element={<RequireAuth><Profile /></RequireAuth>} />
            <Route path="/Auth/Signin" element={<SignIn />} />
            <Route path="/auth/signup" element={<SignUp />} />
            <Route path='/OneTo' element={<OneToOne />} />
            <Route path='/Search' element={<SearchUsers />} />
            <Route path="/profile/:userId" element={<Users />} />
            <Route path="/Courses" element={<CoursesList />} />
        </Routes>
        <Toast type={dataState.toast.toastType} message={dataState.toast.toastMessage} />
    </>
    );
}

export default Router;
