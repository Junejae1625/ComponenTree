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
  SubWrapper,
  SubInfo,
  ProjectButtonWrapper,
  HoverText,
} from "./rendingStyles";
import { v4 as uuidv4 } from "uuid";
import { Fragment, useEffect } from "react";
import RendingFooterGraph from "./rendingFooterGraph";
import { useMouseHover } from "../../hooks/useMouseHover";
import { useChoiceState } from "../../hooks/useChoiceState";
import ProjectButtons from "../commons/button/projectButton";
import { useOnChangeUrl } from "../../hooks/useOnChangeUrl";
import { useOnClickRequest } from "../../hooks/useOnClickRequest";
const Rending = () => {
  const { first, second, onClickFirst, onClickSecond } = useChoiceState();
  const { isHover, hoverWhat, onMouseOn, onMouseLeave } = useMouseHover();
  const [url, onChangeUrl] = useOnChangeUrl();
  const { onClickUpload, submitting } = useOnClickRequest(url, first);

  useEffect(() => {
    if (localStorage.getItem("resultData") === null || undefined) {
      localStorage.setItem("resultData", "[]");
    }
  });
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
            <RepoInput role="repoInput" type="text" onChange={onChangeUrl} />
            <RepoButton
              role="goButton"
              disabled={submitting}
              onClick={onClickUpload}
            >
              <span>
                <img src="/public_assets/buttonArrow.svg"></img>
              </span>
              <span>Go</span>
            </RepoButton>
          </InputButtonWrapper>
          <SubWrapper>
            <SubInfo>choice your project</SubInfo>
            <ProjectButtonWrapper>
              <ProjectButtons
                role="reactButton"
                value="React"
                isClick={first}
                onMouseOver={onMouseOn}
                onMouseLeave={onMouseLeave}
                onClick={onClickFirst}
              />
              <ProjectButtons
                role="nextButton"
                value="Next"
                isClick={second}
                onMouseOver={onMouseOn}
                onMouseLeave={onMouseLeave}
                onClick={onClickSecond}
              />
              {isHover ? (
                <HoverText>{hoverWhat}</HoverText>
              ) : (
                <HoverText></HoverText>
              )}
            </ProjectButtonWrapper>
          </SubWrapper>
        </Article>
        <Footer>
          {new Array(200).fill(0).map((el, i) => (
            <Fragment key={uuidv4()}>
              <RendingFooterGraph role="footerBar" choose={first} />
            </Fragment>
          ))}
        </Footer>
      </Wrapper>
    </>
  );
};

export default Rending;
