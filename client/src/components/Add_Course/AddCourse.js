// REACT DEPENDENCIES
import React, { useState } from 'react';
import './styles.css';

// IMPORT API
import API from '../../utils/API';


function AddCourse() {

    // COURSE STATE SETTERS
    // const [ courseCreated, setCourseCreated ] = useState(false);
    const [ courseName, setCourseName] = useState('');
    const [ lengthYards, setLengthYards ] = useState(0);
    const [ lengthHoles, setLengthHoles ] = useState(0);
    const [ par, setPar ] = useState(0);
    const [ rating, setRating ] = useState(0.0);
    const [ holes, setHoles] = useState([]);
    // const [ courseIdent, setCourseIdent] = useState(0);

    // HOLE STATE SETTERS
    const [ holePar, setHolePar ] = useState(0);
    const [ holeLength, setHoleLength] = useState(0);
    const [ handicap, setHandicap] = useState(0);
    const [ holeCount, setHoleCount ] = useState(1);


    // FORM INDEX CONTROL
    const [formIndex, setFormIndex] = useState(0);

    // ADD COURSE TO DB
    const submitCourse = event => {
        event.preventDefault();
        API.designCourse({
            courseName,
            lengthYards,
            lengthHoles,
            par,
            rating,
            // holes
        })
        setFormIndex(formIndex + 1);
    }

    // ADD HOLES TO DB UPON EACH ITERATION OF THE FORM
    // ITERATIONS ARE DETERMINED BY HOLE COUNT SET IN THE 
    const addHole = async event => {
        event.preventDefault();
        const ID = await API.getCourse(courseName);
        const objectID = ID.data.id;
        const newHole = {
            hole: holeCount,
            par: holePar,
            handicap: handicap,
            yardage: holeLength,
            courseID: objectID
        }
        API.addHole(newHole);
        setHoles(holes => [...holes, newHole]);
        setHolePar(0);
        setHandicap(0);
        setHoleLength(0);
        setFormIndex(formIndex + 1);
        setHoleCount(holeCount + 1)
    }

    const resetForm = event => {
        event.preventDefault();
        setFormIndex(0);
        setCourseName('');
        setLengthYards(0);
        setLengthHoles(0);
        setPar(0);
        setRating(0);
        setHoles([]);
        setHoleCount(1);
        // setCourseIdent(0)
    }

    const formBack = event => {
        event.preventDefault();
        setFormIndex(formIndex - 1);
    }

    return (
        <div className="addCourse-wrapper">


            {/* ============================================================================================ */}
            {/* INPUT COURSE NAME, HOLES, PAR, LENGTH, RATING */}
            {/* Course is created on completion of this step. Requires name, yards, hole count, par and rating */}
            {/* ============================================================================================ */}
            {formIndex === 0 && (
                <form>
                    <div className="form-title">
                        <h3>ADD COURSE</h3>
                        <ul>
                            <li>Due to the prohibitively high cost of purchasing golf course database access, this utility allows the user to add golf courses to the database as they play them.</li>
                            <ul>
                                <strong>Required:</strong>
                                <ol>
                                    <li>Course Name, </li>
                                    <li>Length in Yards, </li>
                                    <li>Number of holes, </li>
                                    <li>Total Par, </li>
                                    <li>Course rating.</li>
                                </ol>
                            </ul>
                        </ul>
                    </div>
                    <div className="form-wrapper">
                        <div className="form-group row">
                            <div className="">
                            <label htmlFor="courseName" className="">Course Name</label>
                                <input
                                    type="text"
                                    className="form-control fadeUp"
                                    id="name"
                                    name={courseName}
                                    value={courseName}
                                    placeholder="Course Name"
                                    // ref={courseName}
                                    onChange={(e) => setCourseName(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="form-group row">
                            <div className="">
                            <label htmlFor="lengthYards" className="">Total Yardage</label>
                                <input
                                    type="number"
                                    className="form-control fadeUp"
                                    id="name"
                                    name={lengthYards}
                                    value={lengthYards}
                                    placeholder="0000"
                                    // ref={lengthYards}
                                    onChange={(e) => setLengthYards(e.target.value)}
                                />
                            </div>
                            <div className="">
                            <label htmlFor="lengthHoles" className="">Holes</label>
                                <input
                                    type="number"
                                    className="form-control fadeUp"
                                    id="name"
                                    name={lengthHoles}
                                    value={lengthHoles}
                                    placeholder="18"
                                    onChange={(e) => setLengthHoles(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="form-group row">
                            <div className="">
                            <label htmlFor="par" className="">Course par</label>
                                <input
                                    type="number"
                                    className="form-control fadeUp"
                                    id="name"
                                    name={par}
                                    value={par}
                                    placeholder="72"
                                    onChange={(e) => setPar(e.target.value)}
                                />
                            </div>
                            <div className="">
                            <label htmlFor="rating" className="">Course Rating</label>
                                <input
                                    type="number"
                                    className="form-control fadeUp"
                                    id="name"
                                    name={rating}
                                    value={rating}
                                    placeholder="72.0"
                                    onChange={(e) => setRating(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="form-group row">
                            <button 
                                type="submit" 
                                onClick={submitCourse} 
                                className="button">
                                Add Holes
                            </button>
                        </div>
                        </div>
                    </form>
                
            )}


            {/* ============================================================================================ */}
            {/* INPUT HOLE, PAR, LENGTH, HANDICAP */}
            {/* Holes are created upon each iteration of the form. Requires the ID of the course it's being set to, par, length, handicap. */}
            {/* ============================================================================================ */}
            {formIndex > 0 && formIndex - 1 < lengthHoles && (
                <form>
                    <div className="form-title">
                        <h1>{courseName.toUpperCase()}</h1>
                        <h4>HOLE {formIndex}</h4>  
                    </div>
                    <div className="form-wrapper">
                        
                        {/* <h3>Hole {formIndex}</h3> */}
                        <div className="form-group row">
                            <div className="">
                            <label htmlFor="holePar" className="">Hole Par</label>
                                <input
                                    type="number"
                                    className="form-control fadeUp"
                                    id="name"
                                    name={holePar}
                                    value={holePar}
                                    // ref={holePar}
                                    onChange={(e) => setHolePar(e.target.value)}
                                />
                            </div>
                            <div className="">
                            <label htmlFor="holeLength" className="">Hole Length</label>
                                <input
                                    type="number"
                                    className="form-control fadeUp"
                                    id="name"
                                    name={holeLength}
                                    value={holeLength}
                                    // ref={holeLength}
                                    onChange={(e) => setHoleLength(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="form-group row">
                            <div className="">
                            <label htmlFor="handicap" className="">Hole Rating</label>
                                <input
                                    type="number"
                                    className="form-control fadeUp"
                                    id="name"
                                    name={handicap}
                                    value={handicap}
                                    // ref={handicap}
                                    onChange={(e) => setHandicap(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="form-group row">
                            <button 
                                type="submit" 
                                onClick={addHole} 
                                className="button">
                                Add Holes
                            </button>
                            <button 
                                type="submit" 
                                onClick={formBack} 
                                className="button">
                                Back
                            </button>
                            <button 
                                type="submit" 
                                onClick={resetForm} 
                                className="button">
                                Cancel and Reset
                            </button>
                        </div>
                    </div>
                </form>
            )}


            {/* ================================ */}
            {/* END OF FORM, DISPLAY DATA */}
            {/* Requires clear all data from form */}
            {/* ================================ */}
            {lengthHoles !== 0 && formIndex > lengthHoles && (
                <div>
                    <div className="form-title">
                        <h3>Course added!</h3>
                    </div>
                    <div className="course-data-review">
                        <div className="course-level-data">
                            <span>Name: {courseName}</span>
                            <span>Yardage: {lengthYards}</span>
                            <span>Holes: {lengthHoles}</span>
                            <span>Par: {par}</span>
                            <span>Rating: {rating}</span>
                        </div>
                        <div className="hole-level-data">
                            <ol>
                                <li>
                                    <span>HOLE</span>
                                    <span>PAR</span>
                                    <span>YRDG</span>
                                    <span>HDCP</span>
                                </li>
                                {holes.map(hole => (
                                        <li key={hole.hole}>
                                            <span>{hole.hole}</span>
                                            <span>{hole.par}</span>
                                            <span>{hole.yardage}</span>
                                            <span>{hole.handicap}</span>
                                        </li>
                                ))}
                            </ol>
                        </div>
                    </div>
                    <div className="form-group row">
                        <button 
                            type="submit" 
                            onClick={resetForm}
                            className="button">
                            Reset
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default AddCourse;