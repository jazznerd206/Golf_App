import React from 'react';
import './styles.css';

function Message(props) {


    // const getAverage = attr => {
    //     console.log(attr)
    //     let count = 0;
    //     props.user.rounds.forEach(round =>
    //         count += round.attr
    //         )
    //     return count / props.user.rounds.length
    // }

    if (props.user.rounds.length === 0 ) {
        return (
            <div className="message-block">
                <h1>Welcome {props.user.username}</h1>
                <p>Rare Bird Society. Designed by a golfer, for golfers.</p>
                <p>After entering one round, you can start receiving basic statistics in your dashboard.</p>
                <p>After 5 rounds, gain access to graph data and round trends.</p>
                <p>After 20 rounds, get an estimated handicap.</p>
            </div>
        )
    } else {
        return (
            null
            // <div className="message-block">
            //     <div className="message-title">
            //         <h1>Welcome {props.user.username}</h1>
            //     </div>
            //     <div className="round-count">
            //         <p>{props.user.rounds.length} rounds tracked.</p>
            //     </div>
            // </div>
        )
    }
}

export default Message;