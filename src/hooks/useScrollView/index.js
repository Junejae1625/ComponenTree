import { useEffect, useState } from "react";
import { scrollViewFunc } from "../../utils/scrollView";

export const useScrollViewHooks = () => {
  const [scroll, setScroll] = useState(0);
  const [currentHeight, setCurrentHeight] = useState(9);
  useEffect(() => {
    setCurrentHeight(Math.floor(window.innerHeight / 80));
  }, [currentHeight]);
  const onClickScrollUp = () => {
    setScroll((prev) => prev - currentHeight);
    scrollViewFunc(scroll - currentHeight);
  };
  const onClickScrollDown = () => {
    setScroll((prev) => prev + currentHeight);
    scrollViewFunc(scroll + currentHeight);
  };

  return { scroll, currentHeight, onClickScrollUp, onClickScrollDown };
};
