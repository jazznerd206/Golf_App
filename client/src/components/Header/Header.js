import React, { useState, useEffect } from 'react';
import API from '../../utils/API';
import './styles.css';

function Header() {

    const [ holes, setHoles ] = useState([]);

    const holeFetch = () => {
        const options = JSON.stringify({where:{anywayStroke:0,scoreType:-1,}})
        API.getAllHolesWhere(options).then(response => {
            // console.log(response.data)
            setHoles(response.data);
        })
    }
    useEffect(() => {
        holeFetch();
    }, [])

    return (
        <div className="header-wrapper">
            <h1>This space will be filled with metrics</h1>
            <h2>these charts will be individual components with their own chart builder and search params</h2>
        </div>
    )
}

export default Header
