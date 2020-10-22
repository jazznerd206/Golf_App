import React, { useState, useEffect} from 'react'
import API from '../../utils/API';

function HeaderChartOne() {

    const [ holes, setHoles ] = useState([]);
    const [ parOrBetter, setParOrBetter ] = useState([]);
    const [ worseThanPar, setWorseThanPar ] = useState([]);

    const holeFetch = () => {
        const options = JSON.stringify({where:{anywayStroke:0}})
        API.getAllHolesWhere(options).then(response => {
            // console.log(response.data)
            response.data.forEach(hole => {
                if ( hole.scoreType <= 0 ) {
                    // console.log('par or better')
                    setParOrBetter(parOrBetter => [...parOrBetter, hole])
                } else if (hole.scoreType > 0) {
                    // console.log('worse than par')
                    setWorseThanPar(worseThanPar => [...worseThanPar, hole])
                }
            })
            setHoles(response.data);
        })
    }
    const holeFetch2 = () => {
        console.log(`holes ${holes}`)
        
    }
    useEffect(() => {
        holeFetch();
    }, [])
    useEffect(() => {
        holeFetch2();
    }, [holes])


    // console.log(`pob ${parOrBetter}`)
    // console.log(`wtp ${worseThanPar}`)



    return (
        <div>
            <h1>On average, zero anyway shots can lead to par or better {((parOrBetter.length / holes.length)*100).toFixed(0)}% of the time.</h1>
        </div>
    )
}

export default HeaderChartOne;