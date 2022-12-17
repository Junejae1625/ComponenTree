import styled from "styled-components";
export const Wrapper = styled.div`
  width: 280px;
  height: 96vh;
  background-color: #323244;
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
  height: 70vh;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0) 60%,
    rgba(0, 0, 0, 0.4) 100%
  );
  z-index: 100;
  overflow-x: hidden;
  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

export const ComponentLists = styled.div`
  color: #fff;
  width: 100%;
  /* background-color: #202329; */
  padding: 0.8rem;
  margin-bottom: 1rem;
  z-index: 2;
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
