import { axisBottom, scaleBand, scaleOrdinal, schemePastel1, select } from "d3";
import { useEffect, useRef, useState } from "react";
import { useResizeObserver } from "../../hooks/useResizeObserver";
import { Div, Svg } from "./barGraphStyles";
const BarGraph = () => {
  const divRef = useRef(null);
  const svgRef = useRef(null);
  const dimensions = useResizeObserver(divRef);
  const [nodes, setNodes] = useState([]);
  const colorSclae = scaleOrdinal(schemePastel1);

  useEffect(() => {
    const result = JSON.parse(localStorage.getItem("resultData"));
    setNodes(result.resultNode);
  }, []);

  useEffect(() => {
    const svg = select(svgRef.current);
    if (!dimensions) return;

    const maxCount = Math.max(...nodes.map((e) => e.count));
    const minimumHeight = Math.floor((dimensions.height - 130) / maxCount);
    const xScale = scaleBand()
      .domain(nodes.map((e) => e.componentName))
      .range([20, dimensions.width - 20])
      .padding(0.3);

    const xAxis = axisBottom(xScale).ticks(nodes.length);

    svg
      .select(".x-axis")
      .style("transform", `translateY(${dimensions.height - 80}px)`)
      .style("font-size", "0")
      .style("stroke", "white")
      .call(xAxis);

    svg
      .select(".y-axis")
      .style("transform", `translateX(${dimensions.width - 50}px)`);

    const Tooltip = select(divRef.current)
      .append("div")
      .style("opacity", 0)
      .attr("class", "tooltip")
      .style("background-color", "white")
      .style("position", "absolute")
      .style("border", "solid")
      .style("border-width", "2px")
      .style("border-radius", "5px")
      .style("width", "auto")
      .style("font-size", "1.5rem")
      .style("padding", "5px");

    const mouseover = (_, d) => {
      Tooltip.html(
        `componentName: ${d.componentName}&nbsp;importCount: ${d.count}`
      ).html();
      Tooltip.style("opacity", 1)
        .select(this)
        .style("stroke", "black")
        .style("opacity", 1);
    };

    const mousemove = (d, n) => {
      Tooltip.html(
        `componentName: ${n.componentName} <br/> importCount: ${n.count}`
      );
      Tooltip.style("left", d.clientX + "px").style("top", d.clientY + "px");
    };

    const mouseleave = () => {
      Tooltip.style("opacity", 0);
      select(this).style("stroke", "none").style("opacity", 0.8);
    };

    svg
      .selectAll(".bar")
      .data(nodes)
      .join("rect")
      .attr("class", "bar")
      .style("transform", "scale(1, -1)")
      .attr("x", (d) => xScale(d.componentName))
      .attr("y", -(dimensions.height - 85))
      .attr("width", xScale.bandwidth())
      .on("mouseover", mouseover)
      .on("mousemove", mousemove)
      .on("mouseleave", mouseleave)
      .transition()
      .attr("fill", colorSclae)
      .attr("height", (d) => d.count * minimumHeight);
  }, [dimensions, nodes]);

  return (
    <Div ref={divRef}>
      <Svg ref={svgRef}>
        <g className="x-axis" />
        <g className="y-axis" />
      </Svg>
    </Div>
  );
};

export default BarGraph;
