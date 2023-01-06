import styled from "styled-components";

const ProjectButton = styled.button`
  width: 180px;
  height: 50px;
  color: #fff;
  background-color: #3e3f42;
  border-radius: 10px;
  font-size: 1.25rem;
  font-weight: ${(props) => (props.isClick ? "900" : "500")};
  border: ${(props) => (props.isClick ? "1px solid #fff" : "none")};
  margin-right: 30px;
  cursor: pointer;
  :hover {
    border: 1px solid white;
    font-weight: 900;
  }
`;

const ProjectButtons = ({
  role,
  isClick,
  value,
  onMouseOver,
  onMouseLeave,
  onClick,
}) => {
  return (
    <ProjectButton
      role={role}
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
