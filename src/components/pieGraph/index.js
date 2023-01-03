import { schemePastel1, select } from "d3";
import * as d3 from "d3";
import { useEffect, useRef, useState } from "react";
import { useResizeObserver } from "../../hooks/useResizeObserver";
import { Div, Svg } from "./pieGraphStyles";
const PieGraph = () => {
  const divRef = useRef(null);
  const svgRef = useRef(null);
  const dimensions = useResizeObserver(divRef);
  const [nodes, setNodes] = useState([]);

  useEffect(() => {
    const result = JSON.parse(localStorage.getItem("resultData"));
    setNodes(result.resultNode);
  }, []);
  useEffect(() => {
    const svg = select(svgRef.current);
    if (!dimensions) return;
    const color = d3.scaleOrdinal().domain(nodes).range(schemePastel1);
    svg
      .attr("width", dimensions.width)
      .attr("height", dimensions.height)
      .attr("text-anchor", "middle")
      .append("g")
      .attr(
        "transform",
        `translate(${dimensions.width}, ${dimensions.height})`
      );
    const arc = d3
      .arc()
      .innerRadius(150)
      .outerRadius(Math.min(dimensions.width, dimensions.height / 2) * 0.9);

    const arcLabel = (() => {
      const radius = (Math.min(dimensions.width, dimensions.height) / 2) * 0.8;
      return d3.arc().innerRadius(radius).outerRadius(radius);
    })();

    const pie = d3.pie().value((d) => d.count);

    const arcs = pie(nodes);

    const g = svg
      .append("g")
      .attr(
        "transform",
        `translate(${dimensions.width / 2}, ${dimensions.height / 2})`
      );

    g.selectAll("path")
      .data(arcs)
      .enter()
      .append("path")
      .attr("fill", (d) => color(d))
      .attr("stroke", "white")
      .attr("d", arc);

    g.selectAll("text")
      .data(arcs)
      .enter()
      .append("text")
      .text((d) => `${d.data.componentName} : ${d.data.count}`)
      .style("font-size", "0.8rem")
      .style("fill", "rgba(0, 0, 0, 0.8)")
      .style("font-family", "sans-serif")
      .attr("transform", (d) => `translate(${arcLabel.centroid(d)})`);
  }, [dimensions, nodes]);

  return (
    <Div ref={divRef}>
      <Svg ref={svgRef}></Svg>
    </Div>
  );
};

export default PieGraph;
