import * as d3 from 'd3';
import React, { useRef, useEffect } from 'react';

function BarChart({ width, height, data }){
    const ref = useRef();

    // useEffect(() => {
    //     const svg = d3.select(ref.current)
    //         .attr("width", width)
    //         .attr("height", height)
    //         .style("border", "1px solid black")
    // }, []);

    useEffect(() => {
        if (data.length > 0) {
            draw();
        }
    }, [data]);

    const draw = () => {
        // Base Settings
        const margin = { top: 100, right: 10, bottom: 10, left: 10}
        // const w = width - margin.left - margin.right;
        // const h = height - margin.top - margin.bottom;

        // Scale
        const xMax = d3.max(data, d => d.score)

        const xScale = d3.scaleLinear()
            .domain([0, 100])
            .range([0, width])
        
        const yScale = d3.scaleBand()
            .domain(data.map(d => d.name))
            .rangeRound([0, height])
            .paddingInner(.25)
            .paddingOuter(.5);

        // Draw SVG
        const svg = d3.select('.chart')
            .append('svg')
            .attr('width', width + margin.left + margin.right)
            .attr('height', height + margin.top + margin.bottom)
            .append('g')
            .attr('transform', `translate(${margin.left}, ${margin.top})`)
            // .style("border", "1px solid black")

        // DRAW HEADER
        const header = svg
            .append('g')
            .attr('class', 'bar-header')
            .attr('transform', `translate(0, ${-margin.top/2})`)
            .append('text')

        header.append('tspan').text("All Rounds")
        header.append('tspan')
            .text("Total Scores")
            .attr('x', 0)
            .attr('dy', '1.5em')
            .style('font-size', '.7em')
            .style('color', '#555')

        // DRAW AXES
        const xAxis = d3
            .axisTop(xScale)
            .tickSize(-height)
            .tickSizeOuter(0)

        const xAxisDraw = svg
            .append('g')
            .attr('class', 'x axis')
            .call(xAxis);

        const yAxis = d3
            .axisLeft(yScale)
            .tickSize(0);
        
        const yAxisDraw = svg
            .append('g')
            .attr('class', 'y axis')
            .call(yAxis)
        yAxisDraw.selectAll('text')
            .attr('dy', '-.2em')
            .attr('dx', '-.2em')

        // DRAW CHART

        svg
            .selectAll('.bar')
            .data(data)
            .enter()
            .append('rect')
            .attr('class', 'bar')
            .attr('y', d => yScale(d.name))
            .attr('width', d => xScale(d.score))
            .attr('height', yScale.bandwidth() / 2)
            .style('fill', 'green')
            // .style("background", "white")







    }
    //     let svg = d3.select(ref.current)
    //         .attr("width", width)
    //         .attr("height", height)
    //         .style("border", "1px solid black")
    //     console.log(data)
    //     svg = d3.select(ref.current);
    //     var selection = svg.selectAll("rect").data(data);
    //     var yScale = d3.scaleLinear()
    //                     .domain([0, 100])
    //                     .range([0, height-100])
    //     selection
    //         .transition().duration(300)
    //             .attr("height", (d) => yScale(d))
    //             .attr("y", (d) => height - yScale(d))

    //     selection
    //         .enter()
    //         .append("rect")
    //         .attr("x", (d, i) => i * 45)
    //         .attr("y", (d) => height)
    //         .attr("width", 40)
    //         .attr("height", 0)
    //         .attr("fill", "green")
    //         .transition().duration(300)
    //             .attr("height", (d) => yScale(d))
    //             .attr("y", (d) => height - yScale(d))
        
    //     selection
    //         .exit()
    //         .transition().duration(300)
    //             .attr("y", (d) => height)
    //             .attr("height", 0)
    //         .remove()
    // }


    return (
        <div className="chart" ref={ref}>
        </div>
        
    )

}

export default BarChart;