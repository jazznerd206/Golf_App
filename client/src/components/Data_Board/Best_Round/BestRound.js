import React, { useState, useEffect, useContext } from 'react';
import API from '../../../utils/API.js';
import { UserContext } from '../../../UserContext.js';


function BestRound(props) {

    const [ lowRound, setLowRound ] = useState([]);
    const { user } = useContext(UserContext);

    const bestRound = async () => {
        const dataHolder = await API.getLowRound(user.id);
        const d = await dataHolder.data;
        console.log(d)
        setLowRound(d);
    }
    useEffect(() => {
        bestRound();
    }, []);


    return (
        <div>
            <h1> best round here 
                {lowRound.map((score, index) => (
                    <div className="user-data" key={index - 2}>
                        <p>BEST ROUND</p>
                        {score.totalScore}
                    </div>
            ))}</h1>
        </div>
    )
}

export default BestRound;