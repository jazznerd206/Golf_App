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
        console.log(typeof data)
        data.data.forEach(round => 
            setRounds(rounds => [...rounds, round])
            )
    }
    useEffect(() => {
        roundFetch();
    }, [])

    console.log(user.id);
    console.log(`these are the rounds ${rounds}`);

    


    if (rounds.length > 0) {
        return (
            <div className="viewRound-wrapper">
                {rounds.map((round, index) => (
                    // console.log(`round id ${round.id}`),
                    <div className="round-container" key={index}>
                        <div className="round-date">
                            <span className="round-data-point">{round.date}</span>
                        </div>
                        <div className="round-course">
                            <p>Course: <span className="round-data-point">{round.course}</span></p>
                        </div>
                        <div className="round-coursePar">
                        <p>Par: <span className="round-data-point">{round.coursePar}</span></p>
                        </div>
                        <div className="round-courseRating">
                        <p>Rating: <span className="round-data-point">{round.courseRating}</span></p>
                        </div>
                        <div className="round-score">
                        <p>Score: <span className="round-data-point">{round.totalScore}</span></p>
                        </div>
                        <div className="round-AWstrokes">
                        <p>Anyway: <span className="round-data-point">{round.totalAWstrokes}</span></p>
                        </div>
                    </div>
                ))}
            </div>
        )
    }{
        return (
            <div><h1>No Datas</h1></div>
        )
    }
    
}

export default ViewRounds;


            