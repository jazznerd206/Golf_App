// REACT DEPENDENCIES
import React, { useState, useEffect, useContext } from 'react';
import './styles.css';

// API FUNCTIONS
import API from '../../utils/API.js';

// USER CONTEXT AND HISTORY
import { UserContext } from '../../UserContext.js';
// import createHistory from './components/History/index';

function AddRound() {

    const { user } = useContext(UserContext);

    const [ formIndex, setFormIndex ] = useState(0);
    const [ holeFormIndex, setholeFormIndex ] = useState(0);
    const [ holeIndex, setholeIndex ] = useState(0);
    const [ objIndex, setObjIndex ] = useState(0);
    const [ courses, setCourses ] = useState([]);
    const [ courseSelected, setCourseSelected ] = useState({});
    const [ fullRound, setFullRound ] = useState(false);
    const [ holeByHole, setHoleByHole ] = useState(false);
    const [ fullRoundScore, setFullRoundScore ] = useState(0);
    const [ anywayStrokes, setAnywayStrokes ] = useState(0);
    const [ holeByHoleScore, setHoleByHoleScore ] = useState(0);
    const [ holeByHoleAWstrokes, setHoleByHoleAWstrokes ] = useState(0);
    const [ holeByHoleAWstrokeType, setHoleByHoleAWstrokeType ] = useState('');
    const [ arrayOfHoleByHole, setArrayOfHoleByHole ] = useState([]);

    const loadCourses = () => {
        API.getCourses().then(response => {
            setCourses(response.data)
        })
    }
    useEffect(() => {
        loadCourses()
    }, [])

    const selectCourse = async event => {
        event.preventDefault();
        const courseToApply = await API.getCourse(event.target.value);
        // console.log(`course to apply ${JSON.stringify(courseToApply.data)}`)
        setCourseSelected(courseToApply.data);
        setFormIndex(formIndex + 1);
    }

    const selectFullScore = event => {
        event.preventDefault();
        // console.log(`select 18 hole scores and create round associated to user ${user}`);
        setFullRound(true);
        setFormIndex(formIndex + 1);
    }

    const selectHoleByHole = event => {
        event.preventDefault();
        // console.log(`select hole by hole scores and create round associated to user ${user}`)
        setholeFormIndex(1);
        setHoleByHole(true);
        setFormIndex(formIndex + 1);
        // console.log(courseSelected.holes)
    }

    const submitFullScore = event => {
        event.preventDefault();
        const newUserRound = {
            course: courseSelected.courseName,
            coursePar: courseSelected.par,
            courseRating: courseSelected.rating,
            totalScore: fullRoundScore,
            totalAWstrokes: anywayStrokes,
            userID: user.id
        }
        API.createNewRound(newUserRound);
        // console.log(`new user round: ${JSON.stringify(newUserRound)}`);
        setFormIndex(formIndex + 1);
        setFullRound(false);
    }

    const submitHoleByHoleToHook = async event => {
        event.preventDefault();
        setholeIndex(holeIndex + 1);
        const newHole = {
            par: courseSelected.holes[objIndex].par,
            handicap: courseSelected.holes[objIndex].handicap,
            yardage: courseSelected.holes[objIndex].yardage, 
            score: holeByHoleScore,
            anywayStroke: holeByHoleAWstrokes,
            anywayType: holeByHoleAWstrokeType
        }
        // console.log(`new hole, send to hook ${JSON.stringify(newHole)}`)
        setFullRoundScore(parseInt(fullRoundScore) + parseInt(holeByHoleScore))
        setAnywayStrokes(parseInt(anywayStrokes) + parseInt(holeByHoleAWstrokes))
        setArrayOfHoleByHole(arrayOfHoleByHole => [...arrayOfHoleByHole, newHole])
        setHoleByHoleScore(0);
        setHoleByHoleAWstrokes(0);
        setObjIndex(objIndex + 1);
        setFormIndex(formIndex + 1);
    }

    const submitHoleByHoleScore = async event => {
        // console.log(`submit score`)
        // console.log(fullRoundScore, anywayStrokes)
        const newUserRound = {
            course: courseSelected.courseName,
            coursePar: courseSelected.par,
            courseRating: courseSelected.rating,
            totalScore: fullRoundScore,
            totalAWstrokes: anywayStrokes,
            userID: user.id
        }
        API.createNewRound(newUserRound);
        const roundData = await API.getRounds(user.id);
        const roundIDholder = await roundData.data[roundData.data.length - 1].id;
        const roundID = roundIDholder;
        // console.log(roundID);
        arrayOfHoleByHole.forEach(hole => {
            const holeToDB = {
                par: hole.par,
                handicap: hole.handicap,
                yardage: hole.yardage, 
                score: hole.score,
                scoreType: hole.score - hole.par,
                anywayStroke: hole.anywayStroke,
                anywayType: hole.anywayType,
                courseID: roundID
            }
            // console.log(holeToDB);
            API.createNewHole(holeToDB);
        })
        // ======================================
        // clear all data
        // ======================================
        setFormIndex(0);
        setholeFormIndex(0);
        setholeIndex(0);
        setObjIndex(0);
        setCourseSelected(0);
        setHoleByHole(false);
        setFullRoundScore(0);
        setAnywayStrokes(0);
        setArrayOfHoleByHole([]);
    }
    // console.log(`courses ${JSON.stringify(courses)}`)

    // console.log(`course selected ${JSON.stringify(courseSelected)}`);

    const backForm = event => {
        event.preventDefault();
        setCourseSelected({});
        setFormIndex(formIndex - 1);
    }
    const clearForm = event => {
        event.preventDefault();
        setFormIndex(0);
    }
    const backFromFullRound = event => {
        event.preventDefault();
        setFullRound(false)
        setFormIndex(formIndex - 1);
    }
    const backFromHoleByHole = event => {
        event.preventDefault();
        setHoleByHole(false)
        setFormIndex(formIndex - 1);
    }

    // console.log(arrayOfHoleByHole);

    return (
        <div className="addRound-wrapper">
            {formIndex === 0 && (
            <div className="form-container">
                <h1>select course</h1>
                {courses.map(course => {
                    return (
                        <div key={course.id}>
                            <button 
                                type="submit" 
                                onClick={selectCourse}
                                className=""
                                value={course.courseName}
                                >
                                {course.courseName}
                            </button>
                        </div>
                    )
                }
                )}
            </div>
            )}
            {formIndex === 1 && (
            <div className="form-container">
                <div className="course-data-point">
                    <p>Course: <span>{courseSelected.courseName}</span></p>
                </div>
                <div className="course-data-point">
                    <p>Holes: <span>{courseSelected.lengthHoles}</span></p>
                </div>
                <div className="course-data-point">
                    <p>Par: <span>{courseSelected.par}</span></p>
                </div>
                <div className="course-data-point">
                    <p>Rating: <span>{courseSelected.rating}</span></p>
                </div>
                <div className="course-data-point">
                    <p>Yardage: <span>{courseSelected.lengthYards}</span></p>
                </div>
                <button 
                    type="submit" 
                    onClick={selectFullScore} 
                    className="">
                    Totals
                </button>
                <button 
                    type="submit" 
                    onClick={selectHoleByHole} 
                    className="">
                    Hole By Hole
                </button>
                <button 
                    type="submit" 
                    onClick={backForm} 
                    className="">
                    Back
                </button>
            </div>
            )}
            {formIndex === 2 && fullRound === true && (
                <div className="form-container">
                    <div className="course-data-point">
                        <p>Course: <span>{courseSelected.courseName}</span></p>
                    </div>
                    <div className="course-data-point">
                        <p>Par: <span>{courseSelected.par}</span></p>
                    </div>
                    <div className="course-data-point">
                        <p>Rating: <span>{courseSelected.rating}</span></p>
                    </div>
                    <div className="user-input-score">
                        <label htmlFor="fullRoundScore">Score: </label>
                        <input
                            type="number"
                            className="form-control fadeUp"
                            id="fullRoundScore"
                            name={fullRoundScore}
                            value={fullRoundScore}
                            // ref={fullRoundScore}
                            onChange={(e) => setFullRoundScore(e.target.value)}
                        />
                    </div>
                    <div className="user-input-AWstrokes">
                        <label htmlFor="anywayStrokes">Anyway Strokes: </label>
                        <input
                            type="number"
                            className="form-control fadeUp"
                            id="anywayStrokes"
                            name={anywayStrokes}
                            value={anywayStrokes}
                            // ref={anywayStrokes}
                            onChange={(e) => setAnywayStrokes(e.target.value)}
                        />
                    </div>
                    <button 
                        type="submit" 
                        onClick={submitFullScore} 
                        className="">
                        Submit Score
                    </button>
                    <button 
                        type="submit" 
                        onClick={backFromFullRound} 
                        className="">
                        Back
                    </button>
                </div>
            )}
            {formIndex >= 2 && formIndex < courseSelected.lengthHoles + 2 && holeByHole === true && (
                <div className="form-container">

                    {/* ===================================== */}
                    {/* HOLE BY HOLE LOGIC GOES HERE */}
                    {/* 1. confirm course data, make sure hole count is available */}
                    {/* 2. new form and index to step through holes */}
                    {/* 3. create round, retrieve index/pop from most recent by user */}
                    {/* 4. create holes, associate with round id */}
                    {/* ===================================== */}
                    
                    {holeFormIndex < courseSelected.lengthHoles && formIndex < courseSelected.lengthHoles + 3 && (
                        <div>
                            <div className="course-data-point">
                                <h1>HOLE BY HOLE</h1>
                                <p>Course: <span>{courseSelected.courseName}</span></p>
                                <p>Lenth: <span>{courseSelected.lengthHoles}</span></p>
                                <p>Par: <span>{courseSelected.par}</span></p>
                            </div>
                            <p>Hole: <span>{holeIndex + 1}</span></p>
                            <p>Par: <span>{courseSelected.holes[holeIndex].par}</span></p>
                            <p>Handicap: <span>{courseSelected.holes[holeIndex].handicap}</span></p>
                            <div className="form-group row">
                            <label htmlFor="holeByHoleScore" className="">Score: </label>
                            <div className="">
                                <input
                                    type="number"
                                    className="form-control fadeUp"
                                    id="name"
                                    name={holeByHoleScore}
                                    value={holeByHoleScore}
                                    // ref={holeByHoleScore}
                                    onChange={(e) => setHoleByHoleScore(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="holeByHoleAWstrokes" className="">Anyway: </label>
                            <div className="">
                                <input
                                    type="number"
                                    className="form-control fadeUp"
                                    id="name"
                                    name={holeByHoleAWstrokes}
                                    value={holeByHoleAWstrokes}
                                    // ref={holeByHoleAWstrokes}
                                    onChange={(e) => setHoleByHoleAWstrokes(e.target.value)}
                                />
                            </div>
                            <label htmlFor="holeByHoleAWstrokeType" className="">Type: </label>
                            <div className="">
                                <select
                                    name={holeByHoleAWstrokeType}
                                    value={holeByHoleAWstrokeType}
                                    onChange={(e) => setHoleByHoleAWstrokeType(e.target.value)}
                                > 
                                    <option name="none"> none</option>
                                    <option name="Driver"> Driver</option>
                                    <option name="Wood">Wood</option>
                                    <option name="Iron">Iron</option>
                                    <option name="Wedge">Wedge</option>
                                    <option name="Putter">Putter</option>
                                </select>
                            </div>
                        </div>
                        <button 
                            type="submit" 
                            onClick={submitHoleByHoleToHook} 
                            className="">
                            Submit
                        </button>
                    </div>
                    )}
                </div>
            )}
            {formIndex > courseSelected.lengthHoles + 1 && (
                <div className="form-container">
                    <h1>Review and submit round</h1>
                    <h3>round details</h3>
                    {arrayOfHoleByHole.map((hole, index) => (
                        <div key={index}>
                            {index + 1}
                            {hole.par}
                            {hole.score}
                            {hole.anywayStroke}
                        </div>
                    ))}
                    <button 
                        type="submit" 
                        onClick={submitHoleByHoleScore} 
                        className="">
                        Submit
                    </button>
                </div>
            )}
            
        </div>        
    )
}

export default AddRound;
