import React, { useState, useEffect, useContext } from 'react';
import { drawChart, initChart } from '../../../Charts/First.js';
import BarChart from '../../../Charts/BarChart.js';
import { UserContext } from '../../../UserContext.js';

const datas = [
]
var i = 0;

function RoundData() {

    const { user } = useContext(UserContext);
    const [data, setData] = useState([]);

    const roundData = () => {
        let allHoles = [];
        user.rounds.forEach(round => {
            datas.push([round.totalScore, round.coursePar, round.totalAWstrokes, round.putts])
        })
        
    }

    useEffect(() => {
        roundData();
        changeData();
    }, []);

    const changeData = () => {
        setData(datas[i++]);
        if(i === datas.length) i = 0;
    }


    return (
        <div className="App">
            <h2>Hole Data</h2>
            <button onClick={changeData}>Change Data</button>
            <BarChart width={300} height={400} data={data} />
        </div>
    );
}

export default RoundData