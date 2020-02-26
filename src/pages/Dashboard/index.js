import React from 'react';
import Header from '../../components/Header';
import VSlider from '../../components/VSlider';
import BetInput from '../../components/BetInput';
import BetTable from '../../components/BetTable';
import Clam from '../../components/Clam';

import './styles.css';

const Dashboard = () => {
  return (
    <div>
        <Header/>
        <div className="container">
            <div className="slider-section">
                <VSlider min={0} max={100} decimal={2}/>
                <BetInput/>
            </div>
            <div className="table-section">
                <div className="table-container">
                <BetTable />
                </div>
            </div>
            <div className="bet-section">
                <div className="bet-scontainer">
                <Clam/>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Dashboard;