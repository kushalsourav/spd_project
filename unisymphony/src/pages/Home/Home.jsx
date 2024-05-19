import React from 'react';
import Overview from '../../components/Overview/Overview';
import StudentDashboard from '../../components/StudentDashboard/StudentDashboard';
import Tree from '../../components/Tree/Tree';
import TrainModel from '../../components/TrainModel/TrainModel';
import HomeBoard from '../../components/HomeBoard/HomeBoard';

const Home = () => {
    return (
        <div>
            <HomeBoard />
            <StudentDashboard />
           <Tree />
   
        </div>
    );
}

export default Home;
