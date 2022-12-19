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

const data = new Array(23).fill({ name: "component", isClick: false });

const LayoutAside = () => {
  const [componentList, setComponentList] = useState<any[]>([]);
  const [isClickList, setIsClickList] = useState<boolean[]>([]);
  const { scroll, onClickScrollUp, onClickScrollDown } = useScrollViewHooks();

  useEffect(() => {
    if (data) {
      setComponentList(data);
      setIsClickList(new Array(data.length).fill(false));
    }
  }, [data]);

  const onClickList = (i: number) => () => {
    const temp = new Array(data.length).fill(false);
    temp[i] = !temp[i];
    setIsClickList(temp);
  };

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
              isClickList={isClickList[i]}
              onClick={onClickList(i)}
            >
              {el.name + i}
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
        {scroll + 7 < data?.length ? (
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
