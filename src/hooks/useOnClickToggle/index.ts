import { useState } from "react";

export const useOnClickToggle = () => {
  const [isClick, setIsClick] = useState(false);
  const onClickStage = () => {
    setIsClick((prev) => !prev);
  };

  return [isClick, onClickStage];
};
