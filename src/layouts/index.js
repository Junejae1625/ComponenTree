import styled from "styled-components";
import { useLocation } from "react-router-dom";
import LayoutAside from "./aside";
import LayoutHeader from "./header";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  background-color: #202329;
`;
const MainWrapper = styled.div`
  width: 100%;
  height: 100vh;
`;
const MainDiv = styled.div`
  height: 85%;
  padding: ${(props) => (props.customStyle ? "" : "0 2rem")};
`;
const Main = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;
  border-radius: 15px;
`;
const hiddenLayout = ["/graph1", "/graph2", "/graph3"];

const LayoutPage = ({ children }) => {
  const location = useLocation();
  const isHiddenLayout = hiddenLayout.includes(location.pathname);

  return (
    <Wrapper>
      {isHiddenLayout && <LayoutAside />}
      <MainWrapper>
        {isHiddenLayout && <LayoutHeader />}
        <MainDiv customStyle={!isHiddenLayout}>
          <Main>{children}</Main>
        </MainDiv>
      </MainWrapper>
    </Wrapper>
  );
};

export default LayoutPage;
