import React from "react";
import * as d3 from "d3";
import {useRef } from "react";

const CirclePacking = ({harry_potter_data}) =>{

  const d3ref = useRef();

  let i=0;
  let countPurebloodGryf=0
  let countHalfbloodGryf=0
  let countMugglebornGryf=0
  let countMuggleGryf=0
  let countPurebloodHuff=0
  let countHalfbloodHuff=0
  let countMugglebornHuff=0
  let countMuggleHuff=0
  let countPurebloodRavc=0
  let countHalfbloodRavc=0
  let countMugglebornRavc=0
  let countMuggleRavc=0
  let countPurebloodSlyt=0
  let countHalfbloodSlyt=0
  let countMugglebornSlyt=0
  let countMuggleSlyt=0

  for (i=0; i<32; i++)
  {
    // Gryffindor + Ancestry
    if (harry_potter_data[i] && (harry_potter_data[i].Ancestry==='Pure-blood' && harry_potter_data[i].House==='Gryffindor'))
    countPurebloodGryf++;

    if (harry_potter_data[i] && (harry_potter_data[i].Ancestry==='Half-blood' && harry_potter_data[i].House==='Gryffindor'))
    countHalfbloodGryf++;

    if (harry_potter_data[i] && (harry_potter_data[i].Ancestry==='Muggleborn' && harry_potter_data[i].House==='Gryffindor'))
    countMugglebornGryf++;

    if (harry_potter_data[i] && (harry_potter_data[i].Ancestry==='Muggle' && harry_potter_data[i].House==='Gryffindor'))
    countMuggleGryf++;

    // Hufflepuff + Ancestry
    if (harry_potter_data[i] && (harry_potter_data[i].Ancestry==='Pure-blood' && harry_potter_data[i].House==='Hufflepuff'))
    countPurebloodHuff++;

    if (harry_potter_data[i] && (harry_potter_data[i].Ancestry==='Half-blood' && harry_potter_data[i].House==='Hufflepuff'))
    countHalfbloodHuff++;

    if (harry_potter_data[i] && (harry_potter_data[i].Ancestry==='Muggleborn' && harry_potter_data[i].House==='Hufflepuff'))
    countMugglebornHuff++;

    if (harry_potter_data[i] && (harry_potter_data[i].Ancestry==='Muggle' && harry_potter_data[i].House==='Hufflepuff'))
    countMuggleHuff++;

    // Ravenclaw + Ancestry
    if (harry_potter_data[i] && (harry_potter_data[i].Ancestry==='Pure-blood' && harry_potter_data[i].House==='Ravenclaw'))
    countPurebloodRavc++;

    if (harry_potter_data[i] && (harry_potter_data[i].Ancestry==='Half-blood' && harry_potter_data[i].House==='Ravenclaw'))
    countHalfbloodRavc++;

    if (harry_potter_data[i] && (harry_potter_data[i].Ancestry==='Muggleborn' && harry_potter_data[i].House==='Ravenclaw'))
    countMugglebornRavc++;

    if (harry_potter_data[i] && (harry_potter_data[i].Ancestry==='Muggle' && harry_potter_data[i].House==='Ravenclaw'))
    countMuggleRavc++;

    // Slytherin + Ancestry
    if (harry_potter_data[i] && (harry_potter_data[i].Ancestry==='Pure-blood' && harry_potter_data[i].House==='Slytherin'))
    countPurebloodSlyt++;

    if (harry_potter_data[i] && (harry_potter_data[i].Ancestry==='Half-blood' && harry_potter_data[i].House==='Slytherin'))
    countHalfbloodSlyt++;

    if (harry_potter_data[i] && (harry_potter_data[i].Ancestry==='Muggleborn' && harry_potter_data[i].House==='Slytherin'))
    countMugglebornSlyt++;

    if (harry_potter_data[i] && (harry_potter_data[i].Ancestry==='Muggle' && harry_potter_data[i].House==='Slytherin'))
    countMuggleSlyt++;

  }


  const Hogwiz = 
  {
    name: "Hogwarts", children:
    [{name: "Gryffindor", children:[ {name: "Pure-blood", size: countPurebloodGryf},{name: "Half-blood", size: countHalfbloodGryf},{name: "Muggleborn", size: countMugglebornGryf},{name: "Muggle", size: countMuggleGryf}]},
     {name: "Hufflepuff", children:[ {name: "Pure-blood", size: countPurebloodHuff},{name: "Half-blood", size: countHalfbloodHuff},{name: "Muggleborn", size: countMugglebornHuff},{name: "Muggle", size: countMuggleHuff}]},
     {name: "Ravenclaw", children: [ {name: "Pure-blood", size: countPurebloodRavc},{name: "Half-blood", size: countHalfbloodRavc},{name: "Muggleborn", size: countMugglebornRavc},{name: "Muggle", size: countMuggleRavc}]},
     {name: "Slytherin", children: [ {name: "Pure-blood", size: countPurebloodSlyt},{name: "Half-blood", size: countHalfbloodSlyt},{name: "Muggleborn", size: countMugglebornSlyt},{name: "Muggle", size: countMuggleSlyt}]}]
  }

  console.log(Hogwiz);

  const chart = Pack(Hogwiz, {
    value: d => d.size, // size of each node (file); null for internal nodes (folders)
    label: (d, n) => [...d.name.split(/(?=[A-Z][a-z])/g), n.value.toLocaleString("en")].join("\n"),
    title: (d, n) => `${n.ancestors().reverse().map(({data: d}) => d.name).join(".")}\n${n.value.toLocaleString("en")}`,
    link: (d, n) => n.children,
    //   ? `https://github.com/prefuse/Flare/tree/master/flare/src/${n.ancestors().reverse().map(d => d.data.name).join("/")}`
    //   : `https://github.com/prefuse/Flare/blob/master/flare/src/${n.ancestors().reverse().map(d => d.data.name).join("/")}.as`,
    width: 1152,
    height: 1152
  })

  // Copyright 2021 Observable, Inc.
  // Released under the ISC license.
  // https://observablehq.com/@d3/pack
  function Pack(data, { // data is either tabular (array of objects) or hierarchy (nested objects)
    path, // as an alternative to id and parentId, returns an array identifier, imputing internal nodes
    id = Array.isArray(data) ? d => d.id : null, // if tabular data, given a d in data, returns a unique identifier (string)
    parentId = Array.isArray(data) ? d => d.parentId : null, // if tabular data, given a node d, returns its parent’s identifier
    children, // if hierarchical data, given a d in data, returns its children
    value, // given a node d, returns a quantitative value (for area encoding; null for count)
    sort = (a, b) => d3.descending(a.value, b.value), // how to sort nodes prior to layout
    label, // given a leaf node d, returns the display name
    title, // given a node d, returns its hover text
    link, // given a node d, its link (if any)
    linkTarget = "_blank", // the target attribute for links, if any
    width = 640, // outer width, in pixels
    height = 400, // outer height, in pixels
    margin = 1, // shorthand for margins
    marginTop = margin, // top margin, in pixels
    marginRight = margin, // right margin, in pixels
    marginBottom = margin, // bottom margin, in pixels
    marginLeft = margin, // left margin, in pixels
    padding = 3, // separation between circles
    fill = "#ddd", // fill for leaf circles
    fillOpacity, // fill opacity for leaf circles
    stroke = "#bbb", // stroke for internal circles
    strokeWidth, // stroke width for internal circles
    strokeOpacity, // stroke opacity for internal circles
  } = {}) {

    // If id and parentId options are specified, or the path option, use d3.stratify
    // to convert tabular data to a hierarchy; otherwise we assume that the data is
    // specified as an object {children} with nested objects (a.k.a. the “flare.json”
    // format), and use d3.hierarchy.
    const root = path != null ? d3.stratify().path(path)(data)
        : id != null || parentId != null ? d3.stratify().id(id).parentId(parentId)(data)
        : d3.hierarchy(data, children);

    // Compute the values of internal nodes by aggregating from the leaves.
    value == null ? root.count() : root.sum(d => Math.max(0, value(d)));

    // Compute labels and titles.
    const descendants = root.descendants();
    const leaves = descendants.filter(d => !d.children);
    leaves.forEach((d, i) => d.index = i);
    const L = label == null ? null : leaves.map(d => label(d.data, d));
    const T = title == null ? null : descendants.map(d => title(d.data, d));

    // Sort the leaves (typically by descending value for a pleasing layout).
    if (sort != null) root.sort(sort);

    // Compute the layout.
    d3.pack()
        .size([width - marginLeft - marginRight, height - marginTop - marginBottom])
        .padding(padding)
      (root);

    // const svg = d3.create("svg")
       const svg = d3.select(d3ref.current)
        .attr("viewBox", [-marginLeft, -marginTop, width, height])
        .attr("width", width)
        .attr("height", height)
        .attr("style", "max-width: 100%; height: auto; height: intrinsic;")
        .attr("font-family", "sans-serif")
        .attr("font-size", 10)
        .attr("text-anchor", "middle");

    const node = svg.selectAll("a")
      .data(descendants)
      .join("a")
        .attr("xlink:href", link == null ? null : (d, i) => link(d.data, d))
        .attr("target", link == null ? null : linkTarget)
        .attr("transform", d => `translate(${d.x},${d.y})`);

    node.append("circle")
        .attr("fill", d => d.children ? "#fff" : fill)
        .attr("fill-opacity", d => d.children ? null : fillOpacity)
        .attr("stroke", d => d.children ? stroke : null)
        .attr("stroke-width", d => d.children ? strokeWidth : null)
        .attr("stroke-opacity", d => d.children ? strokeOpacity : null)
        .attr("r", d => d.r);

    if (T) node.append("title").text((d, i) => T[i]);

    if (L) {
      // A unique identifier for clip paths (to avoid conflicts).
      const uid = `O-${Math.random().toString(16).slice(2)}`;

      const leaf = node
        .filter(d => !d.children && d.r > 10 && L[d.index] != null);

      leaf.append("clipPath")
          .attr("id", d => `${uid}-clip-${d.index}`)
        .append("circle")
          .attr("r", d => d.r);

      leaf.append("text")
          .attr("clip-path", d => `url(${new URL(`#${uid}-clip-${d.index}`, window.location)})`)
        .selectAll("tspan")
        .data(d => `${L[d.index]}`.split(/\n/g))
        .join("tspan")
          .attr("x", 0)
          .attr("y", (d, i, D) => `${(i - D.length / 2) + 0.85}em`)
          .attr("fill-opacity", (d, i, D) => i === D.length - 1 ? 0.7 : null)
          .text(d => d);
    }

    return svg.node();
  }

  return(
    <div>
      <svg ref={d3ref} />
    </div> 
  )
}

export default CirclePacking;