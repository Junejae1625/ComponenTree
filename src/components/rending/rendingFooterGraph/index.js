import { useState } from "react";
import styled from "styled-components";
import { useMoseMove } from "../../../hooks/useMouseMove";

const FooterGraph = styled.div`
  width: 5px;
  height: 92vh;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0) ${(props) => (props.isOver ? props.screenY : 94)}%,
    ${(props) => (props.choose ? " rgb(51, 153, 255)" : " rgb(228, 87, 27)")}
      96%,
    ${(props) => (props.choose ? "rgba(179, 217, 255)" : "yellow")} 100%
  );
`;

const RendingFooterGraph = ({ choose, role }) => {
  const [isOver, setIsOver] = useState(false);
  const [screenY] = useMoseMove();
  const onMouseEnterGraph = () => {
    setIsOver(true);
  };

  const onMouseLeaveGraph = () => {
    setTimeout(() => {
      setIsOver(false);
    }, 500);
  };

  return (
    <FooterGraph
      role={role}
      isOver={isOver}
      screenY={Number(90 - Math.ceil(screenY * 35))}
      onMouseOver={onMouseEnterGraph}
      onMouseLeave={onMouseLeaveGraph}
      choose={choose}
    ></FooterGraph>
  );
};

export default RendingFooterGraph;
