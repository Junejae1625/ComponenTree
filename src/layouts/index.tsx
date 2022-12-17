import { ReactNode } from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import LayoutHeader from "./aside";
interface ComponentProps {
  children: ReactNode;
}
const Wrapper = styled.div`
  width: 100%;
  display: flex;
`;
const MainWrapper = styled.div`
  width: 100%;
`;

const hiddenLayout = ["/loading", "/"];

const LayoutPage = ({ children }: ComponentProps) => {
  const location = useLocation();
  const isHiddenLayout = hiddenLayout.includes(location.pathname);

  return (
    <Wrapper>
      {!isHiddenLayout && <LayoutHeader />}
      <MainWrapper>
        {!isHiddenLayout && <div>header</div>}
        <main>{children}</main>
      </MainWrapper>
    </Wrapper>
  );
};

export default LayoutPage;
