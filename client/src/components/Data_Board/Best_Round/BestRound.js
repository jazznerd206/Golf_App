import React, { useState, useEffect } from 'react';
import API from '../../../utils/API.js';


function BestRound(props) {

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
        <div>
            <h1> best round here {lowRound.map((score, index) => (
                            <div className="user-data" key={index - 2}>
                                <p>BEST</p>
                               {score.totalScore}
                            </div>
                        ))}</h1>
        </div>
    )
}

export default BestRound;