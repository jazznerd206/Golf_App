import React, { useState, useEffect } from 'react';
// import { render } from 'react-dom';
import { scaleLinear, scaleBand } from 'd3-scale';
import XYAxis from '../../Charts/Axis/xy-axis.js';
import Line from '../../Charts/Line/Line.js';
import { line, curveMonotoneX } from 'd3-shape';
import { extent } from 'd3-array';
import { transition } from 'd3-transition';
import './styles.css'

function RoundLevel(props) {

    const [ roundArray, setRoundArray ] = useState([])

    const dataArrange = () => {
        let count = 0;
        props.user.rounds.forEach((round, index) => {
            setRoundArray(roundArray=> [...roundArray, { name: index, value: round.totalScore}]);
        })
    }
    useEffect(() => {
        dataArrange();
    }, [])

    const data = roundArray;
    const parentWidth = 600;

    const margins = {
      top: 20,
      right: 20,
      bottom: 20,
      left: 20,
    };

    const width = parentWidth - margins.left - margins.right;
    const height = 450 - margins.top - margins.bottom;

    const ticks = 5;
    const t = transition().duration(1000);

    const xScale = scaleBand()
      .domain(data.map(d => d.name))
      .rangeRound([0, width]).padding(0.1);

    const yScale = scaleLinear()
      .domain(extent(data, d => d.value))
      .range([height, 0])
      .nice();

    const lineGenerator = line()
      .x(d => xScale(d.name))
      .y(d => yScale(d.value))
      .curve(curveMonotoneX);

    return (
      <div>
        {/* <button onClick={this.randomData}>Randomize data</button> */}
        <svg
          className="lineChartSvg"
          width={width + margins.left + margins.right}
          height={height + margins.top + margins.bottom}
        >
          <g transform={`translate(${margins.left}, ${margins.top})`}>
            <XYAxis {...{ xScale, yScale, height, ticks, t }} />
            <Line data={data} xScale={xScale} yScale={yScale} lineGenerator={lineGenerator} width={width} height={height} />
          </g>
        </svg>
      </div>
    );
  }

export default RoundLevel;
