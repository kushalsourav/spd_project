import React from 'react';
import "./Explore.css";
import Sidebar from '../../components/Sidebar/Sidebar';
import ExploreCard from '../../components/ExploreCard/ExploreCard';
import SearchBar from '../../components/SearchBar/SearchBar';
import { useData } from '../../contexts/DataContext/DataContext';
import Modal from "../../components/Modal/Modal";
import useClose from '../../hooks/useClose';
import JobPostForm from '../../components/JobPostForm/JobPostForm';
const Explore = () => {
    const {dataState, dataDispatch} = useData()
    const [openModal, setCloseModal] = useClose()
    console.log(openModal)
    return (
        <div className='explore'>
            <Sidebar />
            <div className="explore_content">
                <SearchBar modal={setCloseModal}  />
                
               <ExploreCard data={dataState} />
               <Modal
               openModal={openModal}
               setCloseModal={setCloseModal}
               >
                 <JobPostForm formData={dataState.jobPostData}  setData={dataDispatch} />
               </Modal>
            
            </div>
        </div>
    );
}

export default Explore;
