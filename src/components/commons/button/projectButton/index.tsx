import { MouseEvent } from "react";
import styled from "styled-components";

interface ProjectButtonProps {
  isClick: boolean;
}
const ProjectButton = styled.button`
  width: 180px;
  height: 50px;
  color: #fff;
  background-color: #3e3f42;
  border-radius: 10px;
  font-size: 1.25rem;
  font-weight: ${(props: ProjectButtonProps) =>
    props.isClick ? "900" : "500"};
  border: ${(props: ProjectButtonProps) =>
    props.isClick ? "1px solid #fff" : "none"};
  margin-right: 30px;
  cursor: pointer;
  :hover {
    border: 1px solid white;
    font-weight: 900;
  }
`;

const ProjectButtons = ({
  isClick,
  value,
  onMouseOver,
  onMouseLeave,
  onClick,
}: {
  isClick: boolean;
  value: string;
  onMouseOver: (e: MouseEvent<HTMLButtonElement>) => void;
  onMouseLeave: (e: MouseEvent<HTMLButtonElement>) => void;

  onClick: () => void;
}) => {
  return (
    <ProjectButton
      value={value}
      isClick={isClick}
      onMouseOver={onMouseOver}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
    >
      {value}
    </ProjectButton>
  );
};
export default ProjectButtons;
