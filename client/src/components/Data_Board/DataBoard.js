// REACT DEPENDENCIES
import React, { useState, useEffect, useContext } from 'react';
import API from '../../utils/API.js';

// USER CONTEXT
import { UserContext } from '../../UserContext.js';

function DataBoard(data) {

    const { user } = useContext(UserContext);
    const [ rounds, setRounds ] = useState([]);
    console.log(user.rounds);

    const getHoles = () => {
        const options = '{where: {id: 1}}'
        API.getAllHolesWhere(options)
            .then(res => console.log(res))
            .catch(err => console.log(err));
    }

    return (
        <div className="dataBoard-wrapper">
            {/* {data.data.map(round => (
                <div key={round.id}>
                    {round.totalScore}
                </div>
            ))} */}

        </div>
    )
}

export default DataBoard;