import React, { useContext } from 'react';
import '../styles.css';
import { UserContext } from '../../../UserContext.js';

function RoundAverages() {

    const { user } = useContext(UserContext);

    const averageScore = () => {
        let count = 0;
        user.rounds.forEach(round => {
            count += round.totalScore;
        })
        const average = (count / user.rounds.length).toFixed(1);
    }

    return (
        <div className="averages-wrapper">
            {averageScore()}
        </div>
    )
}

export default RoundAverages;
