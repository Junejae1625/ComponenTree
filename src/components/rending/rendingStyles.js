import styled from "styled-components";

export const Wrapper = styled.section`
  position: relative;
`;
export const Header = styled.header`
  width: 100%;
`;

export const HeaderTitle = styled.h1`
  color: #202329;
  font-size: 4rem;
  font-weight: 900;
  margin: 0;
  line-height: 3.1rem;
  padding-top: 1rem;
  text-align: center;
  cursor: default;
  .headerChild {
    display: inline-block;
    transform: translateY(-0.1rem);
  }
`;

export const Article = styled.article`
  background-color: #202329;
  height: calc(100vh - 4.1rem);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Info = styled.div`
  width: 100%;
  max-width: 800px;
  text-align: start;
  color: #fff;
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1.3rem;
`;

export const InputButtonWrapper = styled.div`
  width: 100%;
  max-width: 800px;
  height: 50px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  padding: 2px 12px;
  z-index: 100;
`;

export const RepoInput = styled.input`
  width: 100%;
  height: 35px;
  border: none;
  font-size: 1.5rem;
  outline: none;
  overflow: scroll;
`;

export const RepoButton = styled.button`
  width: 75px;
  height: 40px;
  background-color: #2bad77;
  color: #fff;
  border-radius: 5px;
  font-size: 1.45rem;
  font-weight: 700;
  border: none;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 0 12px;
  :hover {
    background-color: black;
    cursor: pointer;
    transform: scale(1.05);
    transition: 0.3s;
    box-shadow: 2px 2px 4px 2px rgba(0, 0, 0, 0.3);
  }
`;

export const Footer = styled.footer`
  width: 100%;
  display: flex;
  justify-content: space-between;
  position: absolute;
  bottom: 0;
`;
export const SubWrapper = styled.section`
  width: 100%;
  max-width: 800px;
  height: auto;
  z-index: 101;
`;
export const SubInfo = styled.div`
  width: 100%;
  max-width: 800px;
  text-align: start;
  color: #fff;
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1.3rem;
  padding-top: 48px;
  cursor: default;
`;
export const ProjectButton = styled.button`
  width: 180px;
  height: 50px;
  color: #fff;
  background-color: #3e3f42;
  border-radius: 10px;
  font-size: 1.25rem;
  font-weight: 800;
  border: none;
  margin-right: 30px;
  cursor: pointer;
  :hover {
    border: 1px solid white;
  }
`;
export const ProjectButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
export const HoverText = styled.div`
  width: 400px;
  color: #ffd74a;
  text-align: center;
  z-index: 0;
`;
