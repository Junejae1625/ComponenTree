import styled from "styled-components";

export const Wrapper = styled.div`
  width: 280px;
  height: 95.6vh;
  background: linear-gradient(
    to bottom,
    rgba(50, 50, 68, 0.9) 60%,
    rgba(25, 25, 34, 1) 100%
  );
  border: none;
  border-radius: 0px 10px 10px 0px;
  padding: 2rem 0rem 0rem 2rem;
  overflow: hidden;
  position: relative;
`;

export const Header = styled.header`
  color: white;
  font-size: 2rem;
  font-weight: 900;
  letter-spacing: -2px;
  line-height: 26px;
  margin-bottom: 3rem;
`;
export const GreenTitle = styled.span`
  color: #189f36;
`;
export const RedTitle = styled.span`
  color: #e4571b;
`;
export const Aside = styled.aside`
  width: 100%;
  height: 72%;
  z-index: 100;
  overflow-x: hidden;
  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
  margin-bottom: 0.5rem;
`;

export const ComponentLists = styled.div`
  color: #fff;
  width: 100%;
  padding: 0.8rem;
  margin-bottom: 0.8rem;
  z-index: 2;
  background-color: ${(props) => (props.isClickList ? "#202329" : "")};
  margin-left: ${(props) => (props.isClickList ? "15px" : "")};
  cursor: not-allowed;
  transition: 0.2s;
`;

export const ScrollWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

export const ScrollSVG = styled.img`
  margin: 1rem 24px 0 0;
  cursor: pointer;
  :hover {
    transform: scale(1.1);
  }
`;
