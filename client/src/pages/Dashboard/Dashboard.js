import React from 'react';
import './styles.css';
import { Route, Switch, Link } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';

import DataBoard from '../../components/Data_Board/DataBoard';

function Dashboard(props) {

    // const { isLoggedIn, setLoggedIn } = useContext(UserContext);
    // const { user, applyUser } = useContext(UserContext);
    // console.log(`user rounds ${user.rounds}`)
    // const [ rounds, setRounds ] = useState([]); 
    
    // const roundFetch = async () => {
    //     const roundsToSet = user.rounds;
    //     console.log(`rounds to set ${roundsToSet}`)
    //     setRounds(roundsToSet)
    // }
    // useEffect(() => {
    //     roundFetch();
    // }, [])

        return (
        <div className="background-wrapper">
            <div className="dashboard-wrapper">
                <Navbar />
                <div className="dataBoard-wrapper">
                    <DataBoard data={props.data} />
                </div>

            </div>
        </div>
        )
    }

export default Dashboard;


