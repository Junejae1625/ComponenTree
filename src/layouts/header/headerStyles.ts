import styled from "styled-components";

interface currentPageProps {
  currentPage: boolean;
}

export const Wrapper = styled.nav`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const Lists = styled.div`
  width: 180px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props: currentPageProps) =>
    props.currentPage ? "#189f36" : "#d3d3d4"};
  border-radius: 30px;
  margin-right: 2.5rem;
  color: ${(props: currentPageProps) =>
    props.currentPage ? "#202329" : "#6b6c63"};
  font-size: 1rem;
  font-weight: ${(props: currentPageProps) =>
    props.currentPage ? "700" : "500"};
  transition: 0.2s;
  :hover {
    background-color: rgba(132, 209, 148, 0.7);
    box-shadow: 5px 5px 5px 5px rgba(0, 0, 0, 0.5);
    transform: scale(1.02);
  }
`;

export const GraphImg = styled.img`
  margin-right: 10px;
`;
