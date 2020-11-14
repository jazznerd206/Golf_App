// REACT DEPENDENCIES
import React, { useState, useEffect, useContext } from 'react';

// USER CONTEXT
import { UserContext } from '../../UserContext.js';
import API from '../../utils/API.js';
import ViewRounds from '../View_Rounds/ViewRounds.js';

function DataBoard(props) {

    const { user } = useContext(UserContext);
    const [ lowRound, setLowRound ] = useState({});

    const bestRound = () => {
        if (user.rounds) {
            API.getLowRound()
                .then((data) => {
                    console.log(data)
                    setLowRound(data.data)
                })
                .catch(err => console.log(err));
        }
    }
    useEffect(() => {
        bestRound();
    }, [user]);

    return (
        
        <div className="dataBoard-wrapper">
            {user.rounds ? 
            (
                <div>
                    <div className="best-round">
                        {lowRound[0].totalScore}
                        {console.log(lowRound)}
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