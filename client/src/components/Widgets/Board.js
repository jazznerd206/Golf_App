import React from 'react';
import User from './User.js';
import RoundLevel from './RoundLevel.js';
import './styles.css'

function Board(props) {
    return (
        <div className="widget-board">
            <User user={props.user}/>
            <RoundLevel user={props.user}/>
        </div>
    )
}

export default Board
