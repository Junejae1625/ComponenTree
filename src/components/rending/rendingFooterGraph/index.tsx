import { useState } from "react";
import styled from "styled-components";
import { useMoseMove } from "../../../hooks/useMouseMove";

interface MouseOverProps {
  isOver: boolean;
  screenY: number;
}

const FooterGraph = styled.div`
  width: 5px;
  height: 92vh;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0)
      ${(props: MouseOverProps) => (props.isOver ? props.screenY : 94)}%,
    rgb(228, 87, 27) 96%,
    yellow 100%
  );
`;

const RendingFooterGraph = () => {
  const [isOver, setIsOver] = useState(false);
  const [screenY] = useMoseMove();
  const onMouseEnterGraph = () => {
    setIsOver(true);
  };

  const onMouseLeaveGraph = () => {
    setTimeout(() => {
      setIsOver(false);
    }, 400);
  };

  return (
    <FooterGraph
      isOver={isOver}
      screenY={Number(90 - Math.ceil(screenY * 10))}
      onMouseOver={onMouseEnterGraph}
      onMouseLeave={onMouseLeaveGraph}
    ></FooterGraph>
  );
};

export default RendingFooterGraph;
