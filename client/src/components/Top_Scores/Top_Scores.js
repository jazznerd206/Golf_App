// REACT DEPENDENCIES
import React, { useState, useEffect } from 'react';
import "./styles.css";
import moment from 'moment';

// API FUNCTIONS
import API from '../../utils/API.js';

function Top_Scores() {

    const [ allScores, setAllScores ] = useState([]);

    const loadAllScores = async () => {
        const data = await API.getAllScoresWhere();
        const holderArray = [];
        const holder = data.data.forEach(score => {
            if (score.totalScore <= 75) {
                setAllScores(allScores => [...allScores, score])
                return score;
            } else {
                return 'No scores available';
            }
            });
            console.log('holder array: ' + holderArray);
    }
    useEffect(() => {
        loadAllScores();
    }, [])

    if (allScores.length > 0 ) {
        return (
            <div className="topscore-wrapper">
                <div className="topScores-container">
                    <div className="topScores-title">
                        <div className="topScores-heading">
                            Name
                        </div>
                        <div className="topScores-heading">
                            Course
                        </div>
                        <div className="topScores-heading">
                            Score
                        </div>
                        <div className="topScores-heading">
                            AW Strokes
                        </div>
                    </div>
                    {allScores.map((round, index) => (
                        <div className='topScores-data' key={index}>
                            <div className='topScores-datapoint'>
                                USER NAME HERE
                            </div>
                            <div className='topScores-datapoint'>
                                {round.course}
                            </div>
                            <div className='topScores-datapoint'>
                                {round.totalScore}
                            </div>
                            <div className='topScores-datapoint'>
                                {round.totalAWstrokes}
                            </div>
                        </div>
                    ))}
                    
                </div>
            </div>
        )
    }
    return(
        <div className="no-results">
            <h1>No results to display</h1>
        </div>
    )
}

export default Top_Scores;
