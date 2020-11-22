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
        // console.log(user.rounds)
        user.rounds.forEach(round => {
            // datas.push({score: round.totalScore, par: round.coursePar, putts:round.putts});
            datas.push({name:round.id, date:round.date, score:+round.totalScore, par:round.coursePar, putts:+round.putts});
        })
        // console.log(datas)
    }

    useEffect(() => {
        roundData();
        changeData();
    }, []);

    const changeData = () => {
        setData(datas);
        // if(i === datas.length) i = 0;
    }


    return (
        <div className="hole-data">
            <h2>ALL ROUNDS</h2>
            <button onClick={changeData}>Change Data</button>
            <BarChart width={300} height={200} data={data} />
        </div>
    );
}

export default RoundData