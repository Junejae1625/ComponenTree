import { Fragment } from "react";
import {
  Aside,
  ComponentLists,
  GreenTitle,
  Header,
  RedTitle,
  ScrollSVG,
  ScrollWrapper,
  Wrapper,
} from "./asideStyles";
import { v4 as uuidv4 } from "uuid";

const LayoutHeader = () => {
  return (
    <Wrapper>
      <Header>
        <GreenTitle>C</GreenTitle>om<RedTitle>p</RedTitle>onen
        <br />
        <GreenTitle>T</GreenTitle>
        ree
      </Header>
      <Aside>
        {new Array(30).fill("component").map((el, i) => (
          <Fragment key={uuidv4()}>
            <ComponentLists>{el + i}</ComponentLists>
          </Fragment>
        ))}
      </Aside>

      <ScrollWrapper>
        <ScrollSVG src="/public_assets/upScroll.svg" alt="scrollUp" />
        <ScrollSVG src="/public_assets/downScroll.svg" alt="scrollDown" />
      </ScrollWrapper>
    </Wrapper>
  );
};
export default LayoutHeader;
