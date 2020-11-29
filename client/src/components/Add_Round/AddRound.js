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
    const [ rounds, setRounds ] = useState([]);
    const [ courseSelected, setCourseSelected ] = useState({});
    const [ fullRound, setFullRound ] = useState(false);
    const [ holeByHole, setHoleByHole ] = useState(false);
    const [ fullRoundScore, setFullRoundScore ] = useState(0);
    const [ fullRoundPutts, setFullRoundPutts ] = useState(0);
    const [ anywayStrokes, setAnywayStrokes ] = useState(0);
    const [ holeByHoleScore, setHoleByHoleScore ] = useState(0);
    const [ holeByHolePutts, setHoleByHolePutts ] = useState(0);
    const [ holeByHoleGIR, setHoleByHoleGIR ] = useState(false);
    const [ holeByHoleAWstrokes, setHoleByHoleAWstrokes ] = useState(0);
    const [ holeByHoleAWstrokeType, setHoleByHoleAWstrokeType ] = useState('');
    const [ arrayOfHoleByHole, setArrayOfHoleByHole ] = useState([]);

    const loadCourses = () => {
        API.getCourses().then(response => {
            setCourses(response.data)
        })
        let options = JSON.stringify({where:{id:user.id}});
        API.getAllHolesWhere(options).then(response => {
            setRounds(response.data)
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
            userName: user.username,
            course: courseSelected.courseName,
            coursePar: courseSelected.par,
            courseRating: courseSelected.rating,
            totalScore: fullRoundScore,
            putts: fullRoundPutts,
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
        if (holeByHoleScore - 2 <= courseSelected.holes[objIndex].par - 2) {
            setHoleByHoleGIR(true);
        }
        const newHole = {
            par: courseSelected.holes[objIndex].par,
            handicap: courseSelected.holes[objIndex].handicap,
            yardage: courseSelected.holes[objIndex].yardage, 
            score: holeByHoleScore,
            greenInRegulation: holeByHoleScore - holeByHolePutts <= courseSelected.holes[objIndex].par - 2,
            putts: holeByHolePutts,
            anywayStroke: holeByHoleAWstrokes,
            anywayType: holeByHoleAWstrokeType
        }
        
        // console.log(`new hole, send to hook ${JSON.stringify(newHole)}`)
        setFullRoundScore(parseInt(fullRoundScore) + parseInt(holeByHoleScore))
        setFullRoundPutts(parseInt(fullRoundPutts) + parseInt(holeByHolePutts))
        setAnywayStrokes(parseInt(anywayStrokes) + parseInt(holeByHoleAWstrokes))
        setArrayOfHoleByHole(arrayOfHoleByHole => [...arrayOfHoleByHole, newHole])
        setHoleByHoleGIR(false);
        setHoleByHoleScore(0);
        setHoleByHolePutts(0);
        setHoleByHoleAWstrokes(0);
        setObjIndex(objIndex + 1);
        setFormIndex(formIndex + 1);
    }

    const submitHoleByHoleScore = async event => {
        // console.log(`submit score`)
        // console.log(fullRoundScore, anywayStrokes)
        const newUserRound = {
            userName: user.username,
            course: courseSelected.courseName,
            coursePar: courseSelected.par,
            courseRating: courseSelected.rating,
            totalScore: fullRoundScore,
            putts: fullRoundPutts,
            totalAWstrokes: anywayStrokes,
            userID: user.id
        }
        API.createNewRound(newUserRound);
        const roundID = user.rounds.length + 1;
        console.log(roundID);
        arrayOfHoleByHole.forEach(hole => {
            const holeToDB = {
                par: hole.par,
                handicap: hole.handicap,
                yardage: hole.yardage, 
                score: hole.score,
                putts: hole.putts,
                greenInRegulation: hole.greenInRegulation,
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
        setHoleByHoleAWstrokeType('');
        setArrayOfHoleByHole([]);
    }
    // console.log(`user on add round ${JSON.stringify(user.rounds)}`)

    // console.log(`course selected ${JSON.stringify(courseSelected)}`);

    const backForm = event => {
        event.preventDefault();
        setCourseSelected({});
        setFormIndex(formIndex - 1);
    }
    // const clearForm = event => {
    //     event.preventDefault();
    //     setFormIndex(0);
    // }
    const backFromFullRound = event => {
        event.preventDefault();
        setFullRound(false)
        setFormIndex(formIndex - 1);
    }
    // const backFromHoleByHole = event => {
    //     event.preventDefault();
    //     setHoleByHole(false)
    //     setFormIndex(formIndex - 1);
    // }

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
                    <p>Course: </p><span>{courseSelected.courseName}</span>
                </div>
                <div className="course-data-point">
                    <p>Holes: </p><span>{courseSelected.lengthHoles}</span>
                </div>
                <div className="course-data-point">
                    <p>Par: </p><span>{courseSelected.par}</span>
                </div>
                <div className="course-data-point">
                    <p>Rating: </p><span>{courseSelected.rating}</span>
                </div>
                <div className="course-data-point">
                    <p>Yardage: </p><span>{courseSelected.lengthYards}</span>
                </div>
                <div className="flex-column">
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
            </div>
            )}
            {formIndex === 2 && fullRound === true && (
                <div className="form-container">
                    <div className="course-data-point">
                        <p>Course: </p><div className="data-point">{courseSelected.courseName}</div>
                    </div>
                    <div className="course-data-point">
                        <p>Par: </p><div className="data-point">{courseSelected.par}</div>
                    </div>
                    <div className="course-data-point">
                        <p>Rating: </p><div className="data-point">{courseSelected.rating}</div>
                    </div>
                    <div className="course-data-point">
                        <label htmlFor="fullRoundScore">Score: </label>
                        <input
                            type="number"
                            className="data-point input-field"
                            id="fullRoundScore"
                            name={fullRoundScore}
                            value={fullRoundScore}
                            // ref={fullRoundScore}
                            onChange={(e) => setFullRoundScore(e.target.value)}
                        />
                    </div>
                    <div className="course-data-point">
                        <label htmlFor="fullRoundPutts">Putts: </label>
                        <input
                            type="number"
                            className="data-point input-field"
                            id="fullRoundPutts"
                            name={fullRoundPutts}
                            value={fullRoundPutts}
                            // ref={fullRoundPutts}
                            onChange={(e) => setFullRoundPutts(e.target.value)}
                        />
                    </div>
                    <div className="course-data-point">
                        <label htmlFor="anywayStrokes">Anyway Strokes: </label>
                        <input
                            type="number"
                            className="data-point input-field"
                            id="anywayStrokes"
                            name={anywayStrokes}
                            value={anywayStrokes}
                            // ref={anywayStrokes}
                            onChange={(e) => setAnywayStrokes(e.target.value)}
                        />
                    </div>
                    <div className="flex-column">
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
                            <div className="form-container">
                                <h1>HOLE BY HOLE</h1>
                                <div className="course-data-point">
                                <p>Course: </p><div className="data-point">{courseSelected.courseName}</div>
                                </div>
                                <div className="course-data-point">
                                <p>Hole: </p><div className="data-point">{holeIndex + 1}</div>
                                </div>
                                <div className="course-data-point">
                                <p>Par: </p><div className="data-point">{courseSelected.holes[holeIndex].par}</div>
                                </div>
                                <div className="course-data-point">
                                <p>Hdcp: </p><div className="data-point">{courseSelected.holes[holeIndex].handicap}</div>
                                </div>
                            </div>
                        <div className="form-group row">
                                <div className="course-data-point">
                                <label htmlFor="holeByHoleScore" className=""><p>Score: </p></label>
                                    <input
                                        type="number"
                                        className="data-point input-field"
                                        id="name"
                                        name={holeByHoleScore}
                                        value={holeByHoleScore}
                                        // ref={holeByHoleScore}
                                        onChange={(e) => setHoleByHoleScore(e.target.value)}
                                    />
                                </div>
                        </div>
                        <div className="form-group row">
                                <div className="course-data-point">
                                <label htmlFor="holeByHolePutts" className=""><p>Putts: </p></label>
                                    <input
                                        type="number"
                                        className="data-point input-field"
                                        id="name"
                                        name={holeByHolePutts}
                                        value={holeByHolePutts}
                                        // ref={holeByHolePutts}
                                        onChange={(e) => setHoleByHolePutts(e.target.value)}
                                    />
                            </div>
                        </div>
                        <div className="form-group row">
                                <div className="course-data-point">
                                <label htmlFor="holeByHoleAWstrokes" className=""><p>Anyway: </p></label>
                                    <input
                                        type="number"
                                        className="data-point input-field"
                                        id="name"
                                        name={holeByHoleAWstrokes}
                                        value={holeByHoleAWstrokes}
                                        // ref={holeByHoleAWstrokes}
                                        onChange={(e) => setHoleByHoleAWstrokes(e.target.value)}
                                    />
                                </div>
                            </div>
                        <div className="form-group row">
                            <div className="course-data-point">
                            <label htmlFor="holeByHoleAWstrokeType" className=""><p>Type: </p></label>
                                <select
                                    className="data-point input-field"
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
                        <div key={index} className="hole-row">
                            <div className="individual-hole">
                                <div className="text">
                                    <p>Hole: </p>
                                </div>
                                <div className="value">
                                    {index + 1}
                                </div>
                            </div>
                            <div className="individual-hole">
                                <div className="text">
                                    <p>Par:</p>
                                </div>
                                <div className="value">
                                    {hole.par}
                                </div>
                            </div>
                            <div className="individual-hole">
                                <div className="text">
                                    <p>Score: </p>
                                </div>
                                <div className="value">
                                    {hole.score}
                                </div>
                            </div>
                            <div className="individual-hole">
                                <div className="text">
                                    <p>Putts: </p>
                                </div>
                                <div className="value">
                                    {hole.putts}
                                </div>
                            </div>
                            <div className="individual-hole">
                                <div className="text">
                                    <p>Mistakes: </p>
                                </div>
                                <div className="value">
                                    {hole.anywayStroke}
                                </div>
                            </div>
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
