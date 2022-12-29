import { resultNodes, resultLinks } from "../../datas/";
import { useEffect, useRef, useState } from "react";
import { Div, Svg } from "./forceDirectedGraphStyles";
import { useResizeObserver } from "../../hooks/useResizeObserver";
import {
  drag,
  forceCenter,
  forceLink,
  forceManyBody,
  forceSimulation,
  scaleOrdinal,
  schemePastel1,
  select,
} from "d3";
import { useRecoilState } from "recoil";
import { currentComponentIndexState } from "../../recoilStore";
const ForceDirectedGraph = () => {
  const divRef = useRef(null);
  const svgRef = useRef(null);
  const dimensions = useResizeObserver(divRef);
  const [nodes, setNodes] = useState([]);
  const [links, setLinks] = useState([]);
  const [currentComponentIndex, setCurrentComponentIndex] = useRecoilState(
    currentComponentIndexState
  );
  const colorSclae = scaleOrdinal(schemePastel1);
  useEffect(() => {
    const svg = select(svgRef.current);
    if (!dimensions) return;
    setNodes(resultNodes);
    setLinks(resultLinks);

    const onClickTarget = (d, i) => {
      setCurrentComponentIndex(i.index);
      svg.selectAll("rect").each(function (d, j) {
        if (j === i.index)
          select(this).style("stroke", "tomato").style("stroke-width", "2");
        else select(this).style("stroke", "none");
      });
      svg.selectAll("text").each(function (d, j) {
        if (j === i.index) {
          select(this).style("fill", "tomato").style("font-size", "1rem");
        } else select(this).style("fill", "black").style("font-size", "0.825rem");
      });
    };

    const simulation = forceSimulation(resultNodes)
      .force("charge", forceManyBody())
      .force(
        "link",
        forceLink(links).distance((d) => 65)
      )
      .force(
        "center",
        forceCenter(
          (dimensions.width - 100) / 1.9,
          (dimensions.height - 200) / 1.3
        )
      );

    const dragInteraction = drag()
      .on("start", onClickTarget)
      .on("drag", (event, node) => {
        node.fx = event.x;
        node.fy = event.y;
        simulation.restart();
      });

    const lines = svg
      .selectAll("line")
      .data(links)
      .enter()
      .append("line")
      .attr("stroke", "black");

    const rects = svg
      .selectAll("rect")
      .data(nodes)
      .enter()
      .append("rect")
      .attr("width", "7rem")
      .attr("height", "2.3rem")
      .attr("rx", 5)
      .attr("ry", 5)
      .attr("fill", (d) => colorSclae(d.count))
      .attr("class", (d) => d.componentName)
      .call(dragInteraction);

    const texts = svg
      .selectAll("text")
      .data(nodes)
      .enter()
      .append("text")
      .attr("font-size", "0.825rem")
      .attr("text-anchor", "start")
      .attr("alignment-baseline", "bottom")
      .attr("font-weight", "bold")
      .style("pointer-events", "fill")
      .attr("dy", "15%")
      .text((data) => data.componentName);

    simulation.on("tick", () => {
      rects.attr("x", (d) => d.x).attr("y", (d) => d.y);
      texts.attr("x", (d) => d.x).attr("y", (d) => d.y);
      lines
        .attr("x1", (link) => link.source.x)
        .attr("y1", (link) => link.source.y)
        .attr("x2", (link) => link.target.x)
        .attr("y2", (link) => link.target.y);
    });
  }, [nodes, links, dimensions, currentComponentIndex]);

  return (
    <Div ref={divRef}>
      <Svg ref={svgRef}></Svg>
    </Div>
  );
};

export default ForceDirectedGraph;
