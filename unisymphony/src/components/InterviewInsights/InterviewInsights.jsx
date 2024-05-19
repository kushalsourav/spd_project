import React from 'react';
import "./InterviewInsights.css";
import Sidebar from '../Sidebar/Sidebar';
import FeedCard from '../FeedCard/FeedCard';
import InterviewInsightForm from '../InterviewInsightForm/InterviewInsightForm';
import Modal from "../Modal/Modal";
import useClose from '../../hooks/useClose';
import { useData } from '../../contexts/DataContext/DataContext';
const InterviewInsights = () => {
 const [openModal, closeModal] = useClose();
 const {dataState, dataDispatch} = useData()
    return (
        <div className='interviewinsights'>
            <Sidebar />
            <div className="interviewinsights_body">
            <h2 className='interviewinsights_header'>Interview Insights</h2>
            <div className="interviewinsights_filters">
                <button className="interviewinsights_filter-btns">All</button>
                <button className="interviewinsights_filter-btns">Google</button>
                <button className="interviewinsights_filter-btns">Facebook</button>
                <button className="interviewinsights_filter-btns">Microsoft</button>
                <button className="interviewinsights_filter-btns">Apple</button>
                <button className="interviewinsights_filter-btns add-experince" onClick={() => closeModal()}>Add Experince</button>
            </div>
            <div className="scroll-action">
            <FeedCard data={dataState}/>
        
            </div>
            </div>
            <Modal  openModal={openModal} setCloseModal={closeModal} >
                <InterviewInsightForm setData={dataDispatch} />
            </Modal>
        </div>
    );
}

export default InterviewInsights;
