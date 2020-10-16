// REACT DEPENDENCIES
import React, { useState, useEffect } from 'react';
import "./styles.css";
import moment from 'moment';

// API FUNCTIONS
import API from '../../utils/API.js';

function Newest_Scores() {

    const [ allScores, setAllScores] = useState([]);

    const loadAllScores = async () => {
        const data = await API.getAllScoresWhere();
        const holderArray = [];
        const holder = data.data.forEach(score => {
            const dateString = score.date.toString().slice(0,10);
            const dateMoment = moment(dateString);
            const measureMoment= moment().subtract(1, 'days').format('YYYY-MM-DD');
            if (dateMoment.isSameOrAfter(measureMoment)) {
                console.log(typeof score)
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

    // newestScores.forEach(score => console.log(JSON.stringify(score)))
    // console.log(`all scores hook: ${JSON.stringify(allScores)}`);
    // console.log(`newest scores hook: ${Array.isArray(newestScores)}`);

    if (allScores.length > 0 ) {
        return (
            <div className="newestScores-wrapper">
                <div className="newestScores-container">
                    <div className="newestScores-title">
                        <div className="newestScores-heading">
                            Name
                        </div>
                        <div className="newestScores-heading">
                            Course
                        </div>
                        <div className="newestScores-heading">
                            Score
                        </div>
                        <div className="newestScores-heading">
                            AW Strokes
                        </div>
                    </div>
                    {allScores.map((round, index) => (
                        <div className='newestScores-data' key={index}>
                            {round.course}
                            <div className='newestScores-datapoint'>
                                USER NAME HERE
                            </div>
                            <div className='newestScores-datapoint'>
                                {round.course}
                            </div>
                            <div className='newestScores-datapoint'>
                                {round.totalScore}
                            </div>
                            <div className='newestScores-datapoint'>
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

export default Newest_Scores;
