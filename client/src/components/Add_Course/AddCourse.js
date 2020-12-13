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
                        <h3>Add new course</h3>
                    </div>
                    <div className="form-wrapper">
                        
                        <div className="form-group row">
                            <label htmlFor="courseName" className="">Course Name</label>
                            <div className="">
                                <input
                                    type="text"
                                    className="form-control fadeUp"
                                    id="name"
                                    name={courseName}
                                    value={courseName}
                                    // ref={courseName}
                                    onChange={(e) => setCourseName(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="lengthYards" className="">Total Yardage</label>
                            <div className="">
                                <input
                                    type="number"
                                    className="form-control fadeUp"
                                    id="name"
                                    name={lengthYards}
                                    value={lengthYards}
                                    // ref={lengthYards}
                                    onChange={(e) => setLengthYards(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="lengthHoles" className="">Holes</label>
                            <div className="">
                                <input
                                    type="number"
                                    className="form-control fadeUp"
                                    id="name"
                                    name={lengthHoles}
                                    value={lengthHoles}
                                    // ref={lengthHoles}
                                    onChange={(e) => setLengthHoles(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="par" className="">Course par</label>
                            <div className="">
                                <input
                                    type="number"
                                    className="form-control fadeUp"
                                    id="name"
                                    name={par}
                                    value={par}
                                    // ref={par}
                                    onChange={(e) => setPar(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="rating" className="">Course Rating</label>
                            <div className="">
                                <input
                                    type="number"
                                    className="form-control fadeUp"
                                    id="name"
                                    name={rating}
                                    value={rating}
                                    // ref={rating}
                                    onChange={(e) => setRating(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="form-group row">
                            <button 
                                type="submit" 
                                onClick={submitCourse} 
                                className="">
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
                        <h3>Add Holes</h3>  
                    </div>
                    <div className="form-wrapper">
                        
                        <h3>Hole {formIndex}</h3>
                        <div className="form-group row">
                            <label htmlFor="holePar" className="">Hole Par</label>
                            <div className="">
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
                        </div>
                        <div className="form-group row">
                            <label htmlFor="holeLength" className="">Hole Length</label>
                            <div className="">
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
                            <label htmlFor="handicap" className="">Hole Rating</label>
                            <div className="">
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
                                className="">
                                Add Holes
                            </button>
                        </div>
                        <div className="form-group row">
                            <button 
                                type="submit" 
                                onClick={formBack} 
                                className="">
                                Back
                            </button>
                        </div>
                        <div className="form-group row">
                            <button 
                                type="submit" 
                                onClick={resetForm} 
                                className="">
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
                            <h3>Add new course</h3>
                    </div>
                    <div className="course-data-review">
                        <div className="course-level-data">
                            <span>Course Name: {courseName},  </span>
                            <span>Yardage: {lengthYards},  </span>
                            <span>Holes: {lengthHoles},  </span>
                            <span>Par: {par},  </span>
                            <span>Rating: {rating},  </span>
                        </div>
                        <div className="hole-level-data">
                            <ol>
                                {holes.map(hole => (
                                        <li key={hole.hole}><span>Par: {hole.par},  </span>
                                        <span>Length: {hole.yardage},  </span>
                                        <span>Handicap: {hole.handicap},  </span></li>
                                ))}
                            </ol>
                        </div>
                    </div>
                    <div className="form-group row">
                        <button 
                            type="submit" 
                            onClick={resetForm}
                            className="">
                            Reset
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default AddCourse;