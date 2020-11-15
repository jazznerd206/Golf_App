// REACT DEPENDENCIES
import React, { useState, useEffect, useContext } from 'react';

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

    return (
        
        <div className="dataBoard-wrapper">
            {user.rounds ? 
            (
                <div>
                    <div className="best-round">
                        {lowRound.map((score, index) => (
                            <div key={index}>
                                {score.totalScore}
                            </div>
                        ))}
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