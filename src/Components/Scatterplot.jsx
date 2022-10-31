import React from "react";
import * as d3 from "d3";
import Scatterplot from "./Scatterplot";


const newScatterplot = ({data}) =>{


    // data to be visualized

    const cars = [
        {name: "Mazda RX4", mpg: 21, cyl: 6, disp: 160, hp: 110, drat: 3.9, wt: 2.62, qsec: 16.46, vs: 0, am: 1, gear: 4, carb: 4},
        {name: "Mazda RX4 Wag", mpg: 21, cyl: 6, disp: 160, hp: 110, drat: 3.9, wt: 2.875, qsec: 17.02, vs: 0, am: 1, gear: 4, carb: 4},
        {name: "Datsun 710", mpg: 22.8, cyl: 4, disp: 108, hp: 93, drat: 3.85, wt: 2.32, qsec: 18.61, vs: 1, am: 1, gear: 4, carb: 1},
        {name: "Hornet 4 Drive", mpg: 21.4, cyl: 6, disp: 258, hp: 110, drat: 3.08, wt: 3.215, qsec: 19.44, vs: 1, am: 0, gear: 3, carb: 1},
        {name: "Hornet Sportabout", mpg: 18.7, cyl: 8, disp: 360, hp: 175, drat: 3.15, wt: 3.44, qsec: 17.02, vs: 0, am: 0, gear: 3, carb: 2},
        {name: "Valiant", mpg: 18.1, cyl: 6, disp: 225, hp: 105, drat: 2.76, wt: 3.46, qsec: 20.22, vs: 1, am: 0, gear: 3, carb: 1},
        {name: "Duster 360", mpg: 14.3, cyl: 8, disp: 360, hp: 245, drat: 3.21, wt: 3.57, qsec: 15.84, vs: 0, am: 0, gear: 3, carb: 4},
        {name: "Merc 240D", mpg: 24.4, cyl: 4, disp: 146.7, hp: 62, drat: 3.69, wt: 3.19, qsec: 20, vs: 1, am: 0, gear: 4, carb: 2},
        {name: "Merc 230", mpg: 22.8, cyl: 4, disp: 140.8, hp: 95, drat: 3.92, wt: 3.15, qsec: 22.9, vs: 1, am: 0, gear: 4, carb: 2},
        {name: "Merc 280", mpg: 19.2, cyl: 6, disp: 167.6, hp: 123, drat: 3.92, wt: 3.44, qsec: 18.3, vs: 1, am: 0, gear: 4, carb: 4},
        {name: "Merc 280C", mpg: 17.8, cyl: 6, disp: 167.6, hp: 123, drat: 3.92, wt: 3.44, qsec: 18.9, vs: 1, am: 0, gear: 4, carb: 4},
        {name: "Merc 450SE", mpg: 16.4, cyl: 8, disp: 275.8, hp: 180, drat: 3.07, wt: 4.07, qsec: 17.4, vs: 0, am: 0, gear: 3, carb: 3},
        {name: "Merc 450SL", mpg: 17.3, cyl: 8, disp: 275.8, hp: 180, drat: 3.07, wt: 3.73, qsec: 17.6, vs: 0, am: 0, gear: 3, carb: 3},
        {name: "Merc 450SLC", mpg: 15.2, cyl: 8, disp: 275.8, hp: 180, drat: 3.07, wt: 3.78, qsec: 18, vs: 0, am: 0, gear: 3, carb: 3},
        {name: "Cadillac Fleetwood", mpg: 10.4, cyl: 8, disp: 472, hp: 205, drat: 2.93, wt: 5.25, qsec: 17.98, vs: 0, am: 0, gear: 3, carb: 4},
        {name: "Lincoln Continental", mpg: 10.4, cyl: 8, disp: 460, hp: 215, drat: 3, wt: 5.424, qsec: 17.82, vs: 0, am: 0, gear: 3, carb: 4},
        {name: "Chrysler Imperial", mpg: 14.7, cyl: 8, disp: 440, hp: 230, drat: 3.23, wt: 5.345, qsec: 17.42, vs: 0, am: 0, gear: 3, carb: 4},
        {name: "Fiat 128", mpg: 32.4, cyl: 4, disp: 78.7, hp: 66, drat: 4.08, wt: 2.2, qsec: 19.47, vs: 1, am: 1, gear: 4, carb: 1},
        {name: "Honda Civic", mpg: 30.4, cyl: 4, disp: 75.7, hp: 52, drat: 4.93, wt: 1.615, qsec: 18.52, vs: 1, am: 1, gear: 4, carb: 2},
        {name: "Toyota Corolla", mpg: 33.9, cyl: 4, disp: 71.1, hp: 65, drat: 4.22, wt: 1.835, qsec: 19.9, vs: 1, am: 1, gear: 4, carb: 1},
        {name: "Toyota Corona", mpg: 21.5, cyl: 4, disp: 120.1, hp: 97, drat: 3.7, wt: 2.465, qsec: 20.01, vs: 1, am: 0, gear: 3, carb: 1},
        ["name", "mpg", "cyl", "disp", "hp", "drat", "wt", "qsec", "vs", "am", "gear", "carb"]
      ]

    console.log(cars);
    

    const chart = Scatterplot(cars, {
    x: d => d.mpg,
    y: d => d.hp,
    title: d => d.name,
    xLabel: "Miles per gallon →",
    yLabel: "↑ Horsepower",
    stroke: "steelblue",
    width: 240,
    height: 600
    })

    //scatterplot code from d3.js

    // Copyright 2021 Observable, Inc.
    // Released under the ISC license.
    // https://observablehq.com/@d3/scatterplot
    function Scatterplot(data, {
    x = ([x]) => x, // given d in data, returns the (quantitative) x-value
    y = ([, y]) => y, // given d in data, returns the (quantitative) y-value
    r = 3, // (fixed) radius of dots, in pixels
    title, // given d in data, returns the title
    marginTop = 20, // top margin, in pixels
    marginRight = 30, // right margin, in pixels
    marginBottom = 30, // bottom margin, in pixels
    marginLeft = 40, // left margin, in pixels
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
  } = {}) {
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
  
    const svg = d3.create("svg")
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



}

export default newScatterplot;
