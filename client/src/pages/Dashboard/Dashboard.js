import React from 'react';
import './styles.css';
import { Route, Switch, Link } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';

import DataBoard from '../../components/Data_Board/DataBoard';

function Dashboard(props) {

        return (
        <div className="background-wrapper">
            <div className="dashboard-wrapper">
                {/* <Navbar /> */}
                <div className="dataBoard-wrapper">
                    {/* <DataBoard data={props.data} /> */}
                </div>

            </div>
        </div>
        )
    }

export default Dashboard;


