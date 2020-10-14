// REACT DEPENDENCIES
import React, { useState, useContext, useEffect } from 'react';
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



    const roundFetch = async () => {
        const userID = user.id
        const data = await API.getRounds(userID);
        console.log(data.data);
        setRounds([...rounds, data.data])
    }
    useEffect(() => {
        roundFetch();
    }, [])

    console.log(user.id);
    console.log(`these are the rounds ${JSON.stringify(rounds)}`);

    


    
    return (
            <div className="viewRound-wrapper">
                {rounds.map((round, index) => (
                    // console.log(`round id ${round.id}`),
                    <div className="round-container" key={index}>
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
                ))}
            </div>
    )
}

export default ViewRounds;


            