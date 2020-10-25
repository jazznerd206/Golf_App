// REACT DEPENDENCIES
import React, { useState, useEffect, useContext } from 'react';
import API from '../../utils/API.js';

// USER CONTEXT
import { UserContext } from '../../UserContext.js';

function DataBoard() {

    const { user } = useContext(UserContext);
    const [ rounds, setRounds ] = useState([]);

    const roundFetch = (userId) => {
        API.getRounds(userId).then(response => {
            // console.log(response.data)
            setRounds(response.data);
        })
    }

    useEffect(() => {
        roundFetch(user.id);
    }, [])

    return (
        <div className="dataBoard-wrapper">
            <div></div>
        </div>
    )
}

export default DataBoard;