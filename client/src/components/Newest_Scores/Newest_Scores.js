// REACT DEPENDENCIES
import React, { useState, useEffect } from 'react';
import "./styles.css";

// API FUNCTIONS
import API from '../../utils/API.js';

function Newest_Scores() {

    const [ allScores, setAllScores] = useState([]);


    const loadAllScores = () => {
        console.log(`load all scores`);
    }
    useEffect(() => {
        loadAllScores();
    }, [])


    return (
        <div className="newestscores-wrapper">
            <h3>Newest Scores</h3>
            <div className="top-row">
                <div className="playerName">
                    <p>Name</p>
                </div>
                <div className="courseName">
                    <p>Course</p>
                </div>
                <div className="playerScore">
                    <p>Score</p>
                </div>
                <div className="anywaysStroke">
                    <p>Anyways</p>
                </div>  
            </div>
            <div className="single-row">
                <div className="playerName">
                    <p>Andrew</p>
                </div>
                <div className="courseName">
                    <p>Interbay</p>
                </div>
                <div className="playerScore">
                    <p>79</p>
                </div>
                <div className="anywaysStroke">
                    <p>17</p>
                </div>
            </div>
            <div className="single-row">
                <div className="playerName">
                    <p>Andrew</p>
                </div>
                <div className="courseName">
                    <p>Interbay</p>
                </div>
                <div className="playerScore">
                    <p>79</p>
                </div>
                <div className="anywaysStroke">
                    <p>17</p>
                </div>
            </div>
            <div className="single-row">
                <div className="playerName">
                    <p>Andrew</p>
                </div>
                <div className="courseName">
                    <p>Interbay</p>
                </div>
                <div className="playerScore">
                    <p>79</p>
                </div>
                <div className="anywaysStroke">
                    <p>17</p>
                </div>
            </div>
            <div className="single-row">
                <div className="playerName">
                    <p>Andrew</p>
                </div>
                <div className="courseName">
                    <p>Interbay</p>
                </div>
                <div className="playerScore">
                    <p>79</p>
                </div>
                <div className="anywaysStroke">
                    <p>17</p>
                </div>
            </div>
        </div>
    )
}

export default Newest_Scores;
