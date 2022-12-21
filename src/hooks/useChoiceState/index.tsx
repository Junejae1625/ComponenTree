import { useState } from "react";

export const useChoiceState = () => {
  const [first, setFirst] = useState(true);
  const [second, setSecond] = useState(false);

  const onClickFirst = () => {
    setFirst(true);
    setSecond(false);
  };

  const onClickSecond = () => {
    setFirst(false);
    setSecond(true);
  };

  return { first, second, onClickFirst, onClickSecond };
};
