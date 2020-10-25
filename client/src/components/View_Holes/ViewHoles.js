import React, { useState, useEffect } from 'react';
import './styles.css';

export default function ViewHoles() {

    const [ roundData, setRoundData ] = useState({});



    const roundLoad = () => {
        console.log(`this is the load round page`)
    }
    useEffect(() => {
        roundLoad();
    }, [])

    return (
        <div>
            <h1>hole view</h1>
        </div>
    )
}
