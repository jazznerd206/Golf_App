import React, { useEffect, useState, useContext } from 'react';
import '../styles.css';
// import API from '../../../utils/API.js';
import { UserContext } from '../../../UserContext.js';

function Averages() {

    const { user } = useContext(UserContext);
    const [ three, setThree ] = useState([]);
    const [ four, setFour ] = useState([]);
    const [ five, setFive ] = useState([]);
    const [ average, setAverage ] = useState([]);

    const averageScore = array => {
        let count = 0;
        let length = array.length;
        array.forEach(hole => {
            count += parseInt(hole.score);
        })
        const scoreAve = (count / length).toFixed(1);
        // console.log(typeof scoreAve);
        return scoreAve;
    }

    const averagePutts = array => {
        let count = 0;
        let length = array.length;
        array.forEach(hole => {
            count += parseInt(hole.putts);
        })
        const scoreAve = (count / length).toFixed(1);
        // console.log(typeof scoreAve);
        return scoreAve;
    }

    const highScore = array => {
        return Math.max.apply(Math, array.map(function(o) { return o.score; }));
    }

    const lowScore = array => {
        return Math.min.apply(Math, array.map(function(o) { return o.score; }));
    }

    const dataRetrieve = () => {
        user.rounds.forEach(round => {
            if (round.userHoles.length > 0){
                round.userHoles.forEach(hole => {
                    if (hole.par === 3) {
                        setThree(three => [...three, hole]);
                    } else if (hole.par === 4) {
                        setFour(four => [...four, hole]);
                    } else if (hole.par === 5) {
                        setFive(five => [...five, hole]);
                    }
                })
            }
        })
    }

    useEffect(() => {
        dataRetrieve();
    }, [])

    return (
        <div className="averages-wrapper">
            <div className="par-count">
                <div className="averages-title">
                    <h2>Par 3</h2>
                </div>
                <div className="averages-block">
                    <div className="lower-row score">
                        <div className="title">
                            <p>Score: </p>
                        </div>
                        <div className="value">
                            {averageScore(three)}
                        </div>
                    </div>
                    <div className="lower-row putts">
                        <div className="title">
                            <p>Putts: </p>
                        </div>
                        <div className="value">
                            {averagePutts(three)}
                        </div>
                    </div>
                    <div className="lower-row">
                        <div className="low lower-row">
                            <div className="title">
                                <p>Low: </p>
                            </div>
                            <div className="value">
                                {lowScore(three)}
                            </div>
                        </div>
                        <div className="lower-row high">
                            <div className="title">
                                <p>High: </p>
                            </div>
                            <div className="value">
                                {highScore(three)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="par-count">
                <div className="averages-title">
                    <h2>Par 4</h2>
                </div>
                <div className="averages-block">
                    <div className="lower-row score">
                        <div className="title">
                            <p>Score: </p>
                        </div>
                        <div className="value">
                            {averageScore(four)}
                        </div>
                    </div>
                    <div className="lower-row putts">
                        <div className="title">
                            <p>Putts: </p>
                        </div>
                        <div className="value">
                            {averagePutts(four)}
                        </div>
                    </div>
                    <div className="lower-row">
                        <div className="low lower-row">
                            <div className="title">
                                <p>Low: </p>
                            </div>
                            <div className="value">
                                {lowScore(four)}
                            </div>
                        </div>
                        <div className="lower-row high">
                            <div className="title">
                                <p>High: </p>
                            </div>
                            <div className="value">
                                {highScore(four)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="par-count">
                <div className="averages-title">
                    <h2>Par 5</h2>
                </div>
                <div className="averages-block">
                    <div className="lower-row score">
                        <div className="title">
                            <p>Score: </p>
                        </div>
                        <div className="value">
                            {averageScore(five)}
                        </div>
                    </div>
                    <div className="lower-row putts">
                        <div className="title">
                            <p>Putts: </p>
                        </div>
                        <div className="value">
                            {averagePutts(five)}
                        </div>
                    </div>
                    <div className="lower-row">
                        <div className="low lower-row">
                            <div className="title">
                                <p>Low: </p>
                            </div>
                            <div className="value">
                                {lowScore(five)}
                            </div>
                        </div>
                        <div className="lower-row high">
                            <div className="title">
                                <p>High: </p>
                            </div>
                            <div className="value">
                                {highScore(five)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Averages;
