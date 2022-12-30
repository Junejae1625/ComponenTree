import { useEffect, useState } from "react";
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
import { useScrollViewHooks } from "../../hooks/useScrollView";
import { resultNodes } from "../../datas/index";
import { currentComponentIndexState } from "../../recoilStore";
import { useRecoilState } from "recoil";
const LayoutAside = () => {
  const [componentList, setComponentList] = useState([]);
  const { scroll, onClickScrollUp, onClickScrollDown } = useScrollViewHooks();
  const [currentComponentIndex] = useRecoilState(currentComponentIndexState);
  useEffect(() => {
    if (resultNodes) {
      setComponentList(resultNodes);
    }
  }, [resultNodes, currentComponentIndex]);

  return (
    <Wrapper>
      <Header>
        <GreenTitle>C</GreenTitle>om<RedTitle>p</RedTitle>onen
        <br />
        <GreenTitle>T</GreenTitle>
        ree
      </Header>

      <Aside id="asideContainer">
        {componentList.map((el, i) => (
          <div key={uuidv4()}>
            <ComponentLists
              id={String(i)}
              isClickList={i === currentComponentIndex}
            >
              {el.componentName}
            </ComponentLists>
          </div>
        ))}
      </Aside>
      <ScrollWrapper>
        {scroll > 0 && (
          <ScrollSVG
            onClick={onClickScrollUp}
            src="/public_assets/upScroll.svg"
            alt="scrollUp"
          />
        )}
        {scroll + 7 < componentList?.length ? (
          <ScrollSVG
            onClick={onClickScrollDown}
            src="/public_assets/downScroll.svg"
            alt="scrollDown"
          />
        ) : (
          <div style={{ display: "inline-block", width: "3.125rem" }}></div>
        )}
      </ScrollWrapper>
    </Wrapper>
  );
};
export default LayoutAside;
