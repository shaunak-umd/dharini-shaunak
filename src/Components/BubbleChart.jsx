import React from "react";
import * as d3 from "d3";
import {useRef } from "react";

const BubbleChart = ({harry_potter_data}) =>{


    const d3ref = useRef();

    let eyeColours = new Map();

    harry_potter_data.map(x => {
      if (x.EyeColour) {
        let count = eyeColours.get(x.EyeColour);
        if ( count ) {
          count++;
          eyeColours.set(x.EyeColour, count);
        }
        else {
          eyeColours.set(x.EyeColour, 1);
        }
      }
    });

    // console.log(eyeColours);
    // const array_of_eye_colours = [ {
    //   ...eyeColours.keys() , ...eyeColours.values()
    // }];
    const array_of_eye_colours = Array.from(eyeColours, ([id, value]) => ({ id, value }));
    console.log(array_of_eye_colours);

    // harry_potter_data.map( y => {
    //   console.log(y.hairColour);
    // });
    // const files = [
    //   {id: "flare.analytics.cluster.AgglomerativeCluster", value: 3938} ,
    //   {id: "flare.analytics.cluster.CommunityStructure", value: 3812} ,
    //   {id: "flare.analytics.cluster.HierarchicalCluster", value: 6714} ,
    //   {id: "flare.analytics.graph.LinkDistance", value: 5731} ,
    //   {id: "flare.animate.interpolate.ArrayInterpolator", value: 1983}

    // ];
    
// Copyright 2021 Observable, Inc.
// Released under the ISC license.
// https://observablehq.com/@d3/bubble-chart
function d3BubbleChart(data, {
  name = ([x]) => x, // alias for label
  label = name, // given d in data, returns text to display on the bubble
  value = ([, y]) => y, // given d in data, returns a quantitative size
  group, // given d in data, returns a categorical value for color
  title, // given d in data, returns text to show on hover
  link, // given a node d, its link (if any)
  linkTarget = "_blank", // the target attribute for links, if any
  width = 640, // outer width, in pixels
  height = width, // outer height, in pixels
  padding = 3, // padding between circles
  margin = 1, // default margins
  marginTop = margin, // top margin, in pixels
  marginRight = margin, // right margin, in pixels
  marginBottom = margin, // bottom margin, in pixels
  marginLeft = margin, // left margin, in pixels
  groups, // array of group names (the domain of the color scale)
  colors = d3.schemeTableau10, // an array of colors (for groups)
  fill = "#ccc", // a static fill color, if no group channel is specified
  fillOpacity = 0.7, // the fill opacity of the bubbles
  stroke, // a static stroke around the bubbles
  strokeWidth, // the stroke width around the bubbles, if any
  strokeOpacity, // the stroke opacity around the bubbles, if any
} = {}) {
  // Compute the values.
  const D = d3.map(data, d => d);
  const V = d3.map(data, value);
  const G = group == null ? null : d3.map(data, group);
  const I = d3.range(V.length).filter(i => V[i] > 0);

  // Unique the groups.
  if (G && groups === undefined) groups = I.map(i => G[i]);
  groups = G && new d3.InternSet(groups);

  // Construct scales.
  const color = G && d3.scaleOrdinal(groups, colors);

  // Compute labels and titles.
  const L = label == null ? null : d3.map(data, label);
  const T = title === undefined ? L : title == null ? null : d3.map(data, title);

  // Compute layout: create a 1-deep hierarchy, and pack it.
  const root = d3.pack()
      .size([width - marginLeft - marginRight, height - marginTop - marginBottom])
      .padding(padding)
    (d3.hierarchy({children: I})
      .sum(i => V[i]));

      const svg = d3.select(d3ref.current)
  // const svg = d3.create("svg")
      .attr("width", width)
      .attr("height", height)
      .attr("viewBox", [-marginLeft, -marginTop, width, height])
      .attr("style", "max-width: 100%; height: auto; height: intrinsic;")
      .attr("fill", "currentColor")
      .attr("font-size", 10)
      .attr("font-family", "sans-serif")
      .attr("text-anchor", "middle");

  const leaf = svg.selectAll("a")
    .data(root.leaves())
    .join("a")
      // .attr("xlink:href", link == null ? null : (d, i) => link(D[d.data], i, data))
      // .attr("target", link == null ? null : linkTarget)
      .attr("transform", d => `translate(${d.x},${d.y})`);


  let colour_mapping = new Map();
  colour_mapping.set('Orange','#ffb04c');
  colour_mapping.set('Grey','#bdbdbd');
  colour_mapping.set('Black','#9e9e9e');
  colour_mapping.set('Red','#ef5350');
  colour_mapping.set('Amber','#fbc02d');
  colour_mapping.set('Yellowish','#fff176');
  colour_mapping.set('Brown','#8d6e63');
  colour_mapping.set('Green','#9ccc65');
  colour_mapping.set('Hazel','#bcaaa4');
  colour_mapping.set('Pale, silvery','#f5f5f5');
  colour_mapping.set('Blue','#42a5f5');
  colour_mapping.set('Yellow','#fff9c4');
  colour_mapping.set('White','#fafafa');
  colour_mapping.set('Dark','#757575');


  

  console.log(colour_mapping.get('red'));

  leaf.append("circle")
      .attr("stroke", stroke)
      .attr("stroke-width", strokeWidth)
      .attr("stroke-opacity", strokeOpacity)
      .attr("fill", d => colour_mapping.get( L[d.data].split(/\r?\n/)[0]) )
      // .attr("fill" , 'yellow')
      .attr("fill-opacity", fillOpacity)
      .attr("r", d => d.r);

  if (T) leaf.append("title")
      .text(d => T[d.data]);

  if (L) {
    // A unique identifier for clip paths (to avoid conflicts).
    const uid = `O-${Math.random().toString(16).slice(2)}`;

    leaf.append("clipPath")
        .attr("id", d => `${uid}-clip-${d.data}`)
      .append("circle")
        .attr("r", d => d.r);

    leaf.append("text")
        .attr("clip-path", d => `url(${new URL(`#${uid}-clip-${d.data}`, window.location)})`)
      .selectAll("tspan")
      .data(d => `${L[d.data]}`.split(/\n/g))
      .join("tspan")
        .attr("x", 0)
        .attr("y", (d, i, D) => `${i - D.length / 2 + 0.85}em`)
        .attr("fill-opacity", (d, i, D) => i === D.length - 1 ? 0.7 : null)
        .text(d => d);
  }

  // return Object.assign(svg.node(), {scales: {color}});
}


d3BubbleChart(array_of_eye_colours, {
  label: d => [...d.id.split(".").pop().split(/(?=[A-Z][a-z])/g), d.value.toLocaleString("en")].join("\n"),
  value: d => d.value,
  group: d => d.id.split(".")[1],
  title: d => `${d.id}\n${d.value.toLocaleString("en")}`,
  link: d => `https://github.com/prefuse/Flare/blob/master/flare/src/${d.id.replace(/\./g, "/")}.as`,
  width: 1152
});


  return(
      <div>
      
        <svg ref={d3ref} />
      </div>
  )
}

export default BubbleChart;
