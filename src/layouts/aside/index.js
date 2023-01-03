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
import { Link } from "react-router-dom";
const LayoutAside = () => {
  const [componentList, setComponentList] = useState([]);
  const { scroll, currentHeight, onClickScrollUp, onClickScrollDown } =
    useScrollViewHooks();
  const [currentComponentIndex] = useRecoilState(currentComponentIndexState);
  useEffect(() => {
    if (resultNodes) {
      setComponentList(resultNodes);
    }
  }, [resultNodes, currentComponentIndex]);

  return (
    <Wrapper>
      <Header>
        <Link to="/" style={{ textDecoration: "none", color: "white" }}>
          <GreenTitle>C</GreenTitle>om<RedTitle>p</RedTitle>onen
          <br />
          <GreenTitle>T</GreenTitle>
          ree
        </Link>
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
        {scroll + currentHeight < componentList?.length ? (
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
