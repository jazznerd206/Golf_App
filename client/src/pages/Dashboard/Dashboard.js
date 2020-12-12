import React, { useContext } from 'react';
import './styles.css';
// import { Route, Switch, Link } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import Loader from '../../components/Loader/Loader.js'
import DataBoard from '../../components/Data_Board/DataBoard';
import { UserContext } from '../../UserContext';

function Dashboard(props) {

        const { user } = useContext(UserContext)

        if (props.loading === true) {
            console.log('loading')
            return (
              <Loader />
            )
          }

        return (
        <div className="background-wrapper">
            <Navbar />
            <div className="dashboard-wrapper">
                {/* <Navbar /> */}
                <div className="dataBoard-wrapper">
                    <DataBoard data={props.data} />
                </div>

            </div>
        </div>
        )
    }

export default Dashboard;


