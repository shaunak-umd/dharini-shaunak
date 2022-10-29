import React from "react";
import * as d3 from "d3";
import {useRef } from "react";

const BarChart = ({harry_potter_data}) =>{


//     console.log(harry_potter_data);

//     // Copyright 2021 Observable, Inc.
// // Released under the ISC license.
// // https://observablehq.com/@d3/bar-chart
// const d3BarChart = (data, {
//     x = (d, i) => i, // given d in data, returns the (ordinal) x-value
//     y = d => d, // given d in data, returns the (quantitative) y-value
//     title, // given d in data, returns the title text
//     marginTop = 20, // the top margin, in pixels
//     marginRight = 0, // the right margin, in pixels
//     marginBottom = 30, // the bottom margin, in pixels
//     marginLeft = 40, // the left margin, in pixels
//     width = 640, // the outer width of the chart, in pixels
//     height = 400, // the outer height of the chart, in pixels
//     xDomain, // an array of (ordinal) x-values
//     xRange = [marginLeft, width - marginRight], // [left, right]
//     yType = d3.scaleLinear, // y-scale type
//     yDomain, // [ymin, ymax]
//     yRange = [height - marginBottom, marginTop], // [bottom, top]
//     xPadding = 0.1, // amount of x-range to reserve to separate bars
//     yFormat, // a format specifier string for the y-axis
//     yLabel, // a label for the y-axis
//     color = "currentColor" // bar fill color
//   } = {}) => {
//     // Compute values.
//     const X = d3.map(data, x);
//     const Y = d3.map(data, y);

    console.log(harry_potter_data);

    const d3ref = useRef();

    
    
    
    const alphabet = [
      {letter: 'a', frequency:1},
      {letter: 'b', frequency:5},
      {letter: 'c', frequency:6},
      {letter: 'd', frequency:2},
      {letter: 'e', frequency:4}
    ];

    
    
    // Copyright 2021 Observable, Inc.
// Released under the ISC license.
// https://observablehq.com/@d3/bar-chart
const d3BarChart = (data=alphabet, {
    x = (d, i) => i, // given d in data, returns the (ordinal) x-value
    y = d => d, // given d in data, returns the (quantitative) y-value
    title, // given d in data, returns the title text
    marginTop = 20, // the top margin, in pixels
    marginRight = 0, // the right margin, in pixels
    marginBottom = 30, // the bottom margin, in pixels
    marginLeft = 40, // the left margin, in pixels
    width = 640, // the outer width of the chart, in pixels
    height = 400, // the outer height of the chart, in pixels
    xDomain, // an array of (ordinal) x-values
    xRange = [marginLeft, width - marginRight], // [left, right]
    yType = d3.scaleLinear, // y-scale type
    yDomain, // [ymin, ymax]
    yRange = [height - marginBottom, marginTop], // [bottom, top]
    xPadding = 0.1, // amount of x-range to reserve to separate bars
    yFormat, // a format specifier string for the y-axis
    yLabel, // a label for the y-axis
    color = "currentColor" // bar fill color
  } = {}) => {
    // Compute values.
    const X = d3.map(data, x);
    const Y = d3.map(data, y);

  
  // Compute default domains, and unique the x-domain.
     if (xDomain === undefined) xDomain = X;
     if (yDomain === undefined) yDomain = [0, d3.max(Y)];
    xDomain = new d3.InternSet(xDomain);
  
     // Omit any data not present in the x-domain.
    const I = d3.range(X.length).filter(i => xDomain.has(X[i]));
  
     // Construct scales, axes, and formats.
     const xScale = d3.scaleBand(xDomain, xRange).padding(xPadding);
     const yScale = yType(yDomain, yRange);
    const xAxis = d3.axisBottom(xScale).tickSizeOuter(0);
     const yAxis = d3.axisLeft(yScale).ticks(height / 40, yFormat);
  
    // Compute titles.
    if (title === undefined) {
       const formatValue = yScale.tickFormat(100, yFormat);
      title = i => `${X[i]}\n${formatValue(Y[i])}`;
     } else {
      const O = d3.map(data, d => d);
       const T = title;
       title = i => T(O[i], i, data);
    }
  


    const svg = d3.select(d3ref.current)
    // const svg = d3.create("svg")
        .attr("width", width)
        .attr("height", height)
        .attr("viewBox", [0, 0, width, height])
        .attr("style", "max-width: 100%; height: auto; height: intrinsic;");

  
     svg.append("g")
         .attr("transform", `translate(${marginLeft},0)`)
         .call(yAxis)
         .call(g => g.select(".domain").remove())
         .call(g => g.selectAll(".tick line").clone()
             .attr("x2", width - marginLeft - marginRight)
             .attr("stroke-opacity", 0.1))
         .call(g => g.append("text")
             .attr("x", -marginLeft)
             .attr("y", 10)
             .attr("fill", "currentColor")
             .attr("text-anchor", "start")
             .text(yLabel));
  
     const bar = svg.append("g")
         .attr("fill", color)
       .selectAll("rect")
       .data(I)
       .join("rect")
         .attr("x", i => xScale(X[i]))
         .attr("y", i => yScale(Y[i]))
         .attr("height", i => yScale(0) - yScale(Y[i]))
         .attr("width", xScale.bandwidth());
  
     if (title) bar.append("title")
         .text(title);
  

     svg.append("g")
         .attr("transform", `translate(0,${height - marginBottom})`)
         .call(xAxis);
  
     return svg.node();
   }



  let i=0;
  let countJan=0;
  let countFeb=0;
  let countMar=0;
  let countApr=0;
  let countMay=0;
  let countJun=0;
  let countJul=0;
  let countAug=0;
  let countSep=0;
  let countOct=0;
  let countNov=0;
  let countDec=0;

  for (i=0; i<402; i++)
  {

    if (harry_potter_data[i] && harry_potter_data[i].dateOfBirth.substring(3,5)=== '01')
    countJan++;

    if (harry_potter_data[i] && harry_potter_data[i].dateOfBirth.substring(3,5)=== '02')
    countFeb++;

    if (harry_potter_data[i] && harry_potter_data[i].dateOfBirth.substring(3,5)=== '03')
    countMar++;

    if( harry_potter_data[i] && harry_potter_data[i].dateOfBirth.substring(3,5) === '04')
    countApr++;

    if( harry_potter_data[i] && harry_potter_data[i].dateOfBirth.substring(3,5) === '05')
    countMay++;

    if( harry_potter_data[i] && harry_potter_data[i].dateOfBirth.substring(3,5) === '06')
    countJun++;

    if( harry_potter_data[i] && harry_potter_data[i].dateOfBirth.substring(3,5) === '07')
    countJul++;

    if( harry_potter_data[i] && harry_potter_data[i].dateOfBirth.substring(3,5) === '08')
    countAug++;

    if( harry_potter_data[i] && harry_potter_data[i].dateOfBirth.substring(3,5) === '09')
    countSep++;

    if( harry_potter_data[i] && harry_potter_data[i].dateOfBirth.substring(3,5) === '10')
    countOct++;

    if( harry_potter_data[i] && harry_potter_data[i].dateOfBirth.substring(3,5) === '11')
    countNov++;

    if( harry_potter_data[i] && harry_potter_data[i].dateOfBirth.substring(3,5) === '12')
    countDec++;
  }

  const birthMonthCount = [countJan, countFeb, countMar, countApr, countMay, countJun, countJul, countAug, countSep, countOct, countNov, countDec];

  console.log(birthMonthCount);

  const barChartData= [ {Month: "Jan", Count: countJan},
                        {Month: "Feb", Count: countFeb},
                        {Month: "Mar", Count: countMar},
                        {Month: "Apr", Count: countApr},
                        {Month: "May", Count: countMay},
                        {Month: "Jun", Count: countJun},
                        {Month: "Jul", Count: countJul},
                        {Month: "Aug", Count: countAug},
                        {Month: "Sep", Count: countSep},
                        {Month: "Oct", Count: countOct},
                        {Month: "Nov", Count: countNov},
                        {Month: "Dec", Count: countDec}, ]

  console.log(barChartData);




  d3BarChart(barChartData, {
    x: d => d.Month,
    y: d => d.Count,
    xDomain: d3.groupSort(barChartData, ([d]) => -d.Count, d => d.Month), // sort by descending frequency
    yFormat: "%",
    yLabel: "↑ Frequency",
    width: 500,
    height: 500,
    color: "blue"
  });

  
  
  // console.log(chart);
  // let ref = React.useRef();
  
    return(
        <div>
        {/* <svg dangerouslySetInnerHTML={{__html: chart}} /> */}
        {/* <div ref={node => node.appendChild(chart)}></div> */}
        {/* <svg
            ref={ref}
          style={{
            height: 500,
            width: "100%",
            marginRight: "0px",
            marginLeft: "0px",
          }}
        >
          <g className="plot-area" />
          <g className="x-axis" />
          <g className="y-axis" />
        </svg> */}
          <svg ref={d3ref} />
        </div>
    )
}

export default BarChart;