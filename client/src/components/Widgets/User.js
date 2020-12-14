import React from 'react';
import { Fade } from 'react-reveal';
import './styles.css';

function User(props) {

    const averageOffPar = () => {
        let offParArray = [];
        props.user.rounds.forEach(round => {
            offParArray.push(round.coursePar - round.totalScore)
        })
        return (offParArray.reduce((a, b) => a + b) / offParArray  .length).toFixed(1);
    }

    const averagePutts = () => {
        let count = 0;
        props.user.rounds.forEach(round => {
            count += round.putts
        })
        return (count / props.user.rounds.length).toFixed(1);
    }

    return (
        <div className="widget">
            <h1>{props.user.username}</h1>
            <p className="data-point">
                <Fade delay={150}>
                    <span className="data-span">{props.user.rounds.length}
                    </span>
                </Fade> rounds tracked
            </p>
            <p className="data-point">
                <Fade delay={300}>
                    <span className="data-span">{averagePutts()}
                    </span>
                </Fade> putts per round
            </p>
            <p className="data-point">
                <Fade delay={450}>
                    <span className="data-span">{averageOffPar()}
                    </span>
                </Fade> strokes off par
            </p>
        </div>
    )
}

export default User
