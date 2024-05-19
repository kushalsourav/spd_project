import React, { useCallback } from 'react';
import "./Calendar.css";
import CalendarHead from '../../components/CalendarHead/CalendarHead';
import CalendarBody from '../../components/CalendarBody/CalendarBody';
import TimeBar from '../../components/TimeBar/TimeBar';
import PeriodCard from '../../components/PeriodCard/PeriodCard';
import Sidebar from '../../components/Sidebar/Sidebar';
import { useData } from '../../contexts/DataContext/DataContext';
import Modal from '../../components/Modal/Modal';
import useClose from '../../hooks/useClose';
import EventForm from '../../components/EventForm/EventForm';
import { useAuth } from '../../contexts/AuthContext/AuthContext';

const Calendar = () => {
    const {dataState, dataDispatch} = useData()
    const [openmodal, setCloseModal] = useClose()
    const {authState} = useAuth()

    console.log(authState)
    return (
        <div className='calendar'>
            <div className="calendar_abs">
            <CalendarHead  setData={dataDispatch}data={dataState} setCloseModal={setCloseModal} />
            <CalendarBody data={dataState} openModal={openmodal} setCloseModal={setCloseModal} setData={dataDispatch} />
       
            </div>
        </div>
    );
}

export default Calendar;
