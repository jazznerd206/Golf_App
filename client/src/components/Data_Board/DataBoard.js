// REACT DEPENDENCIES
import React, { useState, useEffect, useContext } from 'react';
import './styles.css';

// USER CONTEXT
import { UserContext } from '../../UserContext.js';
import API from '../../utils/API.js';
import ViewRounds from '../View_Rounds/ViewRounds.js';

function DataBoard(props) {

    const { user } = useContext(UserContext);
    const [ lowRound, setLowRound ] = useState([]);

    const bestRound = async () => {
        const dataHolder = await API.getLowRound();
        const d = await dataHolder.data;
        setLowRound(d);        
    }
    useEffect(() => {
        bestRound();
    }, []);

    const avgAw = function () {
        let num = 0;
        user.rounds.forEach(round => {
            num += round.totalAWstrokes;
        })
        num = Math.floor(num / user.rounds.length);
        return (
            <div>
                {num}
            </div>
        )
    }

    const avgScore = function () {
        let num = 0;
        user.rounds.forEach(round => {
            num += round.totalScore;
        })
        num = Math.floor(num / user.rounds.length);
        return (
            <div>
                {num}
            </div>
        )
    }

    return (
        
        <div className="dataBoard-wrapper">
            {user.rounds ? 
            (
                <div>
                    <div className="best-round">
                        <div className="user-data total-rounds">
                            <p>ROUNDS</p>
                            {user.rounds.length}
                        </div>
                        <div className=" user-data avg-score">
                            <p>AVERAGE</p>
                            {avgScore()}
                        </div>
                        {lowRound.map((score, index) => (
                            <div className="user-data" key={index - 2}>
                                <p>BEST</p>
                               {score.totalScore}
                            </div>
                        ))}
                        <div className="user-data avg-aw">
                            <p>AW/round</p>
                            {avgAw()}
                        </div>
                        {/* {console.log(lowRound)} */}
                    </div>
                    <ViewRounds />
                </div>
            ) : (
                null
            )}
            
            

        </div>
    )
}

export default DataBoard;