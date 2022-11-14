import React from "react";
import * as d3 from "d3";
import {useRef } from "react";


const ScatterPlot = ({harry_potter_data}) =>{

  const d3ref = useRef();

  // Copyright 2021 Observable, Inc.
  // Released under the ISC license.
  // https://observablehq.com/@d3/scatterplot
  const d3ScatterPlot =(data, {
    x = ([x]) => x, // given d in data, returns the (quantitative) x-value
    y = ([,y]) => y, // given d in data, returns the (quantitative) y-value
    r = 3, // (fixed) radius of dots, in pixels
    title, // given d in data, returns the title
    marginTop = 20, // top margin, in pixels
    marginRight = 30, // right margin, in pixels
    marginBottom = 30, // bottom margin, in pixels
    marginLeft = 50, // left margin, in pixels
    inset = r * 2, // inset the default range, in pixels
    insetTop = inset, // inset the default y-range
    insetRight = inset, // inset the default x-range
    insetBottom = inset, // inset the default y-range
    insetLeft = inset, // inset the default x-range
    width = 640, // outer width, in pixels
    height = 400, // outer height, in pixels
    xType = d3.scaleLinear, // type of x-scale
    xDomain, // [xmin, xmax]
    xRange = [marginLeft + insetLeft, width - marginRight - insetRight], // [left, right]
    yType = d3.scaleLinear, // type of y-scale
    yDomain, // [ymin, ymax]
    yRange = [height - marginBottom - insetBottom, marginTop + insetTop], // [bottom, top]
    xLabel, // a label for the x-axis
    yLabel, // a label for the y-axis
    xFormat, // a format specifier string for the x-axis
    yFormat, // a format specifier string for the y-axis
    fill = "none", // fill color for dots
    stroke = "currentColor", // stroke color for the dots
    strokeWidth = 1.5, // stroke width for dots
    halo = "#fff", // color of label halo 
    haloWidth = 3 // padding around the labels
  } = {}) =>
  {
    // Compute values.
    const X = d3.map(data, x);
    const Y = d3.map(data, y);
    const T = title == null ? null : d3.map(data, title);
    const I = d3.range(X.length).filter(i => !isNaN(X[i]) && !isNaN(Y[i]));

    // Compute default domains.
    if (xDomain === undefined) xDomain = d3.extent(X);
    if (yDomain === undefined) yDomain = d3.extent(Y);

    // Construct scales and axes.
    const xScale = xType(xDomain, xRange);
    const yScale = yType(yDomain, yRange);
    const xAxis = d3.axisBottom(xScale).ticks(width / 80, xFormat);
    const yAxis = d3.axisLeft(yScale).ticks(height / 50, yFormat);

    const svg = d3.select(d3ref.current)
      .attr("width", width)
      .attr("height", height)
      .attr("viewBox", [0, 0, width, height])
      .attr("style", "max-width: 100%; height: auto; height: intrinsic;");

    svg.append("g")
      .attr("transform", `translate(0,${height - marginBottom})`)
      .call(xAxis)
      .call(g => g.select(".domain").remove())
      .call(g => g.selectAll(".tick line").clone()
      .attr("y2", marginTop + marginBottom - height)
      .attr("stroke-opacity", 0.1))
      .call(g => g.append("text")
      .attr("x", width)
      .attr("y", marginBottom - 4)
      .attr("fill", "currentColor")
      .attr("text-anchor", "end")
      .text(xLabel));

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

    if (T) svg.append("g")
      .attr("font-family", "sans-serif")
      .attr("font-size", 10)
      .attr("stroke-linejoin", "round")
      .attr("stroke-linecap", "round")
    .selectAll("text")
    .data(I)
    .join("text")
      .attr("dx", 7)
      .attr("dy", "0.35em")
      .attr("x", i => xScale(X[i]))
      .attr("y", i => yScale(Y[i]))
      .text(i => T[i])
      .call(text => text.clone(true))
      .attr("fill", "none")
      .attr("stroke", halo)
      .attr("stroke-width", haloWidth);

    svg.append("g")
      .attr("fill", fill)
      .attr("stroke", stroke)
      .attr("stroke-width", strokeWidth)
    .selectAll("circle")
    .data(I)
    .join("circle")
      .attr("cx", i => xScale(X[i]))
      .attr("cy", i => yScale(Y[i]))
      .attr("r", r);

    return svg.node();
  }


  let i=0;
  let countGryffindor=0;
  let countHufflepuff=0;
  let countSlytherin=0;
  let countRavenclaw=0;
  let countGryfGirls=0;
  let countHuffGirls=0;
  let countSlytGirls=0;
  let countRaveGirls=0;

  for (i=0; i<402; i++)
  {

    if (harry_potter_data[i] && harry_potter_data[i].house==='Gryffindor')
    countGryffindor++;

    if (harry_potter_data[i] && harry_potter_data[i].house==='Hufflepuff')
    countHufflepuff++;

    if (harry_potter_data[i] && harry_potter_data[i].house==='Slytherin')
    countSlytherin++;

    if (harry_potter_data[i] && harry_potter_data[i].house==='Ravenclaw')
    countRavenclaw++;
  }

  for (i=0; i<402; i++)
  {

    if (harry_potter_data[i] && (harry_potter_data[i].house==='Gryffindor' && harry_potter_data[i].gender==='female'))
    countGryfGirls++;

    if (harry_potter_data[i] && (harry_potter_data[i].house==='Hufflepuff' && harry_potter_data[i].gender==='female'))
    countHuffGirls++;

    if (harry_potter_data[i] && (harry_potter_data[i].house==='Slytherin' && harry_potter_data[i].gender==='female'))
    countSlytGirls++;

    if (harry_potter_data[i] && (harry_potter_data[i].house==='Ravenclaw' && harry_potter_data[i].gender==='female'))
    countRaveGirls++;
  }

  const ScatterplotData= [ 
    {HouseName: "Gryffindor", Students: countGryffindor, Girls: countGryfGirls},
    {HouseName: "Hufflepuff", Students: countHufflepuff, Girls: countHuffGirls},
    {HouseName: "Slytherin", Students: countSlytherin, Girls: countSlytGirls},
    {HouseName: "Ravenclaw", Students: countRavenclaw, Girls: countRaveGirls}
  ]


  console.log(ScatterplotData);

  d3ScatterPlot(ScatterplotData, {
  x: d => d.Students,
  y: d => d.Girls,
  title: d => d.HouseName,
  xLabel: "Number of Students in Hogwarts Houses →",
  yLabel: "↑ Number of female wizards",
  stroke: "steelblue",
  width: 500,
  height: 600
  });

  return(
    <div>
      <svg ref={d3ref} />
    </div> 
  )
}

export default ScatterPlot;