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
        return (
            <div className="lower-row">
                <div className="title">
                    <p>Average: </p>
                </div>
                <div className="value">
                    {average}
                </div>
            </div>
        )
    }
    const averagePutts = () => {
        let count = 0;
        user.rounds.forEach(round => {
            count += round.putts;
        })
        const average = (count / user.rounds.length).toFixed(1);
        return (
            <div className="lower-row">
                <div className="title">
                    <p>Putts: </p>
                </div>
                <div className="value">
                    {average}
                </div>
            </div>
        )
    }
    const averageMistakes = () => {
        let count = 0;
        user.rounds.forEach(round => {
            count += round.totalAWstrokes;
        })
        const average = (count / user.rounds.length).toFixed(1);
        return (
            <div className="lower-row">
                <div className="title">
                    <p>Mistakes: </p>
                </div>
                <div className="value">
                    {average}
                </div>
            </div>
        )
    }

    return (
        <div className="averages-wrapper">
            {averageScore()}
            {averagePutts()}
            {averageMistakes()}
        </div>
    )
}

export default RoundAverages;
