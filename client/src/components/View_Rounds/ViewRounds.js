// REACT DEPENDENCIES
import React, { useState, useContext } from 'react';
import './styles.css';

// API FUNCTIONS
import API from '../../utils/API.js';

// USER CONTEXT
import { UserContext } from '../../UserContext.js';

function ViewRounds() {

    // unnecesary?
    // ROUND HOOKS
    const [ rounds, setRounds ] = useState([]);

    const { user, applyUser } = useContext(UserContext)


    
    return (
            <div className="viewRound-wrapper">
                {/* {rounds.map(round => (
                    <div className="round-container" key={round.id}>
                        <div className="round-date">
                            Date: {round.date}
                        </div>
                        <div className="round-course">
                            Course: {round.course}
                        </div>
                        <div className="round-coursePar">
                            Par: {round.coursePar}
                        </div>
                        <div className="round-courseRating">
                            Rating: {round.courseRating}
                        </div>
                        <div className="round-score">
                            Score: {round.totalScore}
                        </div>
                        <div className="round-AWstrokes">
                            Anyway Score:{round.totalAWstrokes}
                        </div>
                    </div>
                ))} */}
            </div>
    )
}

export default ViewRounds;


            