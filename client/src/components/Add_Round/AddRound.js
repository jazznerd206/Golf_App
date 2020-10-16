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
    const [ courses, setCourses ] = useState([]);
    const [ courseSelected, setCourseSelected ] = useState({});
    const [ fullRound, setFullRound ] = useState(false);
    const [ holeByHole, setHoleByHole ] = useState(false);
    const [ fullRoundScore, setFullRoundScore ] = useState(0);
    const [ anywayStrokes, setAnywayStrokes ] = useState(0);

    const loadCourses = () => {
        API.getCourses().then(response => {
            setCourses(response.data)
        })
    }
    useEffect(() => {
        loadCourses()
    }, [])

    const selectCourse = event => {
        event.preventDefault();
        const courseFromArray = courses.find(element => element.courseName = event.target.value)
        // console.log(`course from array ${JSON.stringify(courseFromAray)}`)
        setCourseSelected(courseFromArray);
        setFormIndex(formIndex + 1);
    }

    const selectFullScore = event => {
        event.preventDefault();
        console.log(`select 18 hole scores and create round associated to user ${user}`);
        setFullRound(true);
        setFormIndex(formIndex + 1);
    }

    const selectHoleByHole = event => {
        event.preventDefault();
        console.log(`select hole by hole scores and create round associated to user ${user}`)
        setHoleByHole(true);
        setFormIndex(formIndex + 1);
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
        console.log(`new user round: ${JSON.stringify(newUserRound)}`);
        setFormIndex(formIndex + 1);
    }

    const submitHoleByHole = async event => {
        event.preventDefault();
    }




    console.log(`courses ${JSON.stringify(courses)}`)

    console.log(`course selected ${JSON.stringify(courseSelected)}`);

    const backForm = event => {
        event.preventDefault();
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
            {formIndex === 2 && holeByHole === true && (
                <div className="form-container">

                    {/* ===================================== */}
                    {/* HOLE BY HOLE LOGIC GOES HERE */}
                    {/* 1. confirm course data, make sure hole count is available */}
                    {/* 2. new form and index to step through holes */}
                    {/* 3. create round, retrieve index/pop from most recent by user */}
                    {/* 4. create holes, associate with round id */}
                    {/* ===================================== */}
                    <div className="course-data-point">
                        <p>Course: <span>{courseSelected.courseName}</span></p>
                        <p>Lenth: <span>{courseSelected.lengthHoles}</span></p>
                        <p>Par: <span>{courseSelected.par}</span></p>
                        <p>Holes: <span>{courseSelected.holes[0]}</span></p>
                    </div>
                    <button 
                        type="submit" 
                        onClick={submitHoleByHole} 
                        className="">
                        Submit
                    </button>
                    <button 
                        type="submit" 
                        onClick={backFromHoleByHole} 
                        className="">
                        Back
                    </button>
                </div>
            )}
            {formIndex === 3 && (
                <div className="form-container">
                    <h1>Your round has been submitted.</h1>
                    <h3>round details</h3>
                    <button 
                        type="submit" 
                        onClick={clearForm} 
                        className="">
                        Back
                    </button>
                </div>
            )}
            
        </div>        
    )
}

export default AddRound;
