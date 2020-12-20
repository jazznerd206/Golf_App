// REACT DEPENDENCIES
import React, { useState, useContext, useEffect } from 'react';
// import { Link } from 'react-router-dom';
import './styles.css';

// API FUNCTIONS
import API from '../../utils/API.js';

// USER CONTEXT
import { UserContext } from '../../UserContext.js';

function ViewRounds() {

    // ROUND HOOKS
    const [ round, setRound ] = useState([]);
    const [ individualRound, setIndividualRound ] = useState({});
    const [ viewHoles, setViewHoles ] = useState(false);

    const { user } = useContext(UserContext)

    const roundFetch = async () => {
        console.log(`user.id ${user.id}`)
        const userID = user.id;
        const response = await API.getRounds(userID);
        // console.log(data.data);
        if (response === null) {
            return;
        } else  {
            const d = await response.data;
            d.forEach(newRound => {
                setRound(round => [...round, newRound])
            })
        }

    }
    useEffect(() => {
        roundFetch();
    }, [])

    const renderTable = () => {
        return round.map((round, index) => {
            if (round.userHoles.length === 0) {
                return (
                    <tr key={round.id}>
                        <td>{round.date.slice(0,10)}</td>
                        <td>{round.course}</td>
                        <td>{round.coursePar}</td>
                        {/* <td>{round.par}</td> */}
                        <td>{round.totalScore}</td>
                        <td>{round.putts}</td>
                        <td>{round.totalAWstrokes}</td>
                    </tr>
                )
            } 
            else if (round.userHoles.length > 0) {
                return (
                    <tr key={round.id}>
                        <td>{round.date.slice(0,10)}</td>
                        <td>{round.course}</td>
                        <td>{round.coursePar}</td>
                        <td>{round.totalScore}</td>
                        <td>{round.putts}</td>
                        <td>{round.totalAWstrokes}</td>
                        <td>
                            <button 
                                type="submit"
                                value={round.id}
                                onClick={askForRoundData} 
                                className="button">
                                    Scorecard
                            </button>
                        </td>
                    </tr>
                )
            }
        })
    }

    const renderTableHead = () => {
            return (
                <>
                <th>DATE</th>
                <th>COURSE</th>
                <th>PAR</th>
                <th>SCORE</th>
                <th>PUTTS</th>
                <th>AW STROKES</th>
                <th>SCORECARD</th>
                </>
            )    
    }

    const backToRounds = event => {
        event.preventDefault();
        setViewHoles(false);
    }

    const askForRoundData = async (event) => {
        event.preventDefault();
        console.log(`ask for round data ${event.target.value}`);
        const roundToSet = await API.getRound(event.target.value);
        console.log(roundToSet)
        setIndividualRound(roundToSet.data[0])
        setViewHoles(true);
    }

    if (round.length > 0 && viewHoles === false) {
        return (
            <div>
            <h1 id='title'>MY ROUNDS</h1>
            <table id='rounds'>
                <tbody>
                    <tr>{renderTableHead()}</tr>
                    {renderTable()}
                </tbody>
            </table>
            </div>
        )
    } else if (round.length === 0 && viewHoles == false) {
        return (
            <div>
                <h1>NO ROUND DATA AVAILABLE</h1>
                <h3>Add Round here</h3>
            </div>
        )
    }
    if (viewHoles === true) {
        return (
        <div className="singleRound-wrapper" key={individualRound.id}>
            <div className="scorecard">
                <div className="hole-container">
                    <div className="course-data-point">{individualRound.course}</div>
                    <div className="course-data-point">{individualRound.coursePar}</div>
                    <div className="course-data-point">{individualRound.courseRating}</div>
                </div>
                <div className="scoreCard-wrapper">
                    <div className="course-data-column">
                        <div className="hole-data-point">Hole</div>
                        <div className="hole-data-point">Par</div>
                        <div className="hole-data-point">{individualRound.userName}</div>
                        <div className="hole-data-point">Putts</div>
                        <div className="hole-data-point">AW Strokes</div>
                    </div>
                    {individualRound.userHoles.map((hole, index) => (
                        <div className="holes-container" key={hole.id}>
                            <div className="hole-data-point darkest">{index + 1}</div>
                            <div className="hole-data-point dark">{hole.par}</div>
                            <div className="hole-data-point">{hole.score}</div>
                            <div className="hole-data-point">{hole.putts}</div>
                            <div className="hole-data-point">{hole.anywayStroke}</div>
                        </div>
                    ))}
                    <div className="course-data-column">
                        <div className="hole-data-point">Out</div>
                        <div className="hole-data-point">{individualRound.coursePar}</div>
                        <div className="hole-data-point">{individualRound.totalScore}</div>
                        <div className="hole-data-point">{individualRound.putts}</div>
                        <div className="hole-data-point">{individualRound.totalAWstrokes}</div>
                    </div>
                </div>
                <div>
                    <button onClick={backToRounds}>
                        Back To Rounds
                    </button>
                </div>
            </div>
        </div>
        )
    }
}

export default ViewRounds;


            