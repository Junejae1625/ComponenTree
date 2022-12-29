import { useState } from "react";
import { scrollViewFunc } from "../../utils/scrollView";

export const useScrollViewHooks = () => {
  const [scroll, setScroll] = useState(0);

  const onClickScrollUp = () => {
    setScroll((prev) => prev - 7);
    scrollViewFunc(scroll - 7);
  };
  const onClickScrollDown = () => {
    setScroll((prev) => prev + 7);
    scrollViewFunc(scroll + 7);
  };

  return { scroll, onClickScrollUp, onClickScrollDown };
};
