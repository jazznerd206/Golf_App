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
                    <p>Average score: </p>
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
                    <p>Average putts: </p>
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
                    <p>Average mistakes: </p>
                </div>
                <div className="value">
                    {average}
                </div>
            </div>
        )
    }

    const totalRounds = () => {
        return (
            <div className="lower-row">
                <div className="title">
                    <p>Total rounds: </p>
                </div>
                <div className="value">
                    {user.rounds.length}
                </div>
            </div>
        )
    }

    if (user === undefined) {
        return (
            <div className="averages-wrapper">
                no rounds yet
            </div>
        )
    } else if (user.rounds.length === 0 ) {
        return (
            <div className="averages-wrapper">
                {totalRounds()}
                {averageScore()}
                {averagePutts()}
                {averageMistakes()}
            </div>
        )    
    }

}

export default RoundAverages;
