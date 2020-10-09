// REACT DEPENDENCIES
import React, { useState } from 'react';
import './styles.css';
import API from '../../utils/API';

function AddCourse() {

    // COURSE STATE SETTERS
    const [ courseName, setCourseName] = useState('');
    const [ lengthYards, setLengthYards ] = useState(0);
    const [ lengthHoles, setLengthHoles ] = useState(0);
    const [ par, setPar ] = useState(0);
    const [ rating, setRating ] = useState(0.0);
    const [ holes, setHoles] = useState([]);

    // HOLE STATE SETTERS
    const [ holePar, setHolePar ] = useState(0);
    const [ holeLength, setHoleLength] = useState(0);
    const [ handicap, setHandicap] = useState(0);


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
            rating
        })
        holes.forEach(hole => {
            API.addHole({
                par: holePar,
                handicap: handicap,
                yardage: holeLength
            })
        })
    }

    // HANDLE FIRST STEP IN FORM
    const nextForm = event => {
        event.preventDefault();
        setFormIndex(formIndex + 1);
    }

    // SET HOLES TO STATE IN HOOKS
    const addHole = event => {
        event.preventDefault();
        const newHole = {
            par: holePar,
            handicap: handicap,
            yardage: holeLength
        }
        setHoles(holes => [...holes, newHole]);
        console.log(`new hole from form ${newHole}`)
        setHolePar(0);
        setHandicap(0);
        setHoleLength(0);
        setFormIndex(formIndex + 1);
    }
    console.log(`holes from hooks ${holes}`);
    console.log(`holes length from hooks ${holes.length}`);


    return (
        <div className="addCourse-wrapper">
            {formIndex === 0 && (
                <div className="form-wrapper">
                    <form>
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
                                onClick={nextForm} 
                                className="">
                                Add Holes
                            </button>
                        </div>
                    </form>
                </div>
            )}
            {formIndex > 0 && formIndex - 1 < lengthHoles && (
                <div className="form-wrapper">
                    <form>
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
                    </form>
                </div>
            )}
            {lengthHoles !== 0 && formIndex > lengthHoles && (
                <div>
                    <h1>SUBMIT COURSE</h1>
                        <div className="form-group row">
                            <button 
                                type="submit" 
                                onClick={submitCourse}
                                className="">
                                Submit
                            </button>
                        </div>
                </div>
            )}
        </div>
    )
}

export default AddCourse;