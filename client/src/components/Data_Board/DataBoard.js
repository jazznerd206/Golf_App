// REACT DEPENDENCIES
import React, { useState, useEffect, useContext } from 'react';
import API from '../../utils/API.js';

// USER CONTEXT
import { UserContext } from '../../UserContext.js';

function DataBoard(props) {

    const { user } = useContext(UserContext);

    console.log(user.rounds);

    const getHoles = () => {
        const options = '{where:{id:1}}'
        API.getAllHolesWhere(options)
            .then(res => console.log(res))
            .catch(err => console.log(err));
    }
    useEffect(() => {
        getHoles();
    }, [])

    return (
        
        <div className="dataBoard-wrapper">
            {user.rounds ? 
            (
                <div>
                    {user.rounds.map(round => (
                        <div key={round.id}>
                            {round.totalScore}
                        </div>
                    ))}
                </div>
            ) : (
                null
            )}
            
            

        </div>
    )
}

export default DataBoard;