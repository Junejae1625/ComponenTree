import {
  Wrapper,
  HeaderTitle,
  Header,
  RepoInput,
  Info,
  Article,
  InputButtonWrapper,
  RepoButton,
  Footer,
} from "./rendingStyles";
import { v4 as uuidv4 } from "uuid";
import { Fragment } from "react";
import RendingFooterGraph from "./rendingFooterGraph";

const Rending = () => {
  return (
    <>
      <Wrapper>
        <Header>
          <HeaderTitle>
            Com<span className="headerChild">p</span>onenTree
          </HeaderTitle>
        </Header>
        <Article>
          <Info>Please typing your Github Repo</Info>
          <InputButtonWrapper>
            <RepoInput type="text" />
            <RepoButton>
              <span>
                <img src="/public_assets/buttonArrow.svg"></img>
              </span>
              <span>Go</span>
            </RepoButton>
          </InputButtonWrapper>
        </Article>
        <Footer>
          {new Array(180).fill(0).map((el, i) => (
            <Fragment key={uuidv4()}>
              <RendingFooterGraph />
            </Fragment>
          ))}
        </Footer>
      </Wrapper>
    </>
  );
};

export default Rending;
