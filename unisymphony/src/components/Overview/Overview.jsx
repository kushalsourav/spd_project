import React from 'react';
import "./Overview.css"
import PeriodCard from '../PeriodCard/PeriodCard';
import TimeBar from '../TimeBar/TimeBar';
import SubmitBox from '../SubmitBox/SubmitBox';
import SubjectCard from '../SubjectCard/SubjectCard';
import ExamCard from '../ExamCard/ExamCard';
import GradeCard from '../GradeCard/GradeCard';

const Overview = () => {
    return (
        <>
        <h2 className="overview_heading">overview <span className='overview_date'>jan 20</span></h2>
         <div className='overview'>
            <div className='overview_body-1'>
            <TimeBar />
            <div className='overview_card-1'>
            <PeriodCard />
            <PeriodCard />
            <div className="overview_card-2">
                <div className='overview_subcard-1'>
                 <PeriodCard />
                 <PeriodCard />
                 <PeriodCard />
                </div>
                <div className='overview_subcard-2'>
                    <SubmitBox />
                </div>
            </div>
            </div>
            </div>
            <div className='overview_body-2'>
                 <div className="subjects_list">
                    <SubjectCard />
                    <SubjectCard />
                    <SubjectCard />
                    <SubjectCard />
                    <SubjectCard />
                    <SubjectCard />
                 </div>
                 <div className='overview_performance'>
                     <ExamCard />
                     <GradeCard />
                 </div>
            </div>
        </div>
        </>
    );
}

export default Overview;
