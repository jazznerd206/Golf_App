import React, { useContext } from 'react';
import { UserContext } from '../../UserContext';
import Message from './Message.js';
import HeaderBelow from '../Header_Below/HeaderBelow';
// import HoleAverages from '../../components/Data_Board/Averages/HoleAverages';
// import RoundAverages from '../../components/Data_Board/Averages/RoundAverages';
import './styles.css';

function Welcome() {

    const { user } = useContext(UserContext);

    return (
    <div>
        <div className="header-wrapper">
            <div>
                <Message user={user} />
            </div>
        </div>
    </div>
    )
}

export default Welcome;
