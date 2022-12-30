import { useState } from "react";

export const useMouseHover = () => {
  const [isHover, setIsHover] = useState(false);
  const [hoverWhat, setHoverWhat] = useState("");

  const onMouseOn = (e) => {
    setIsHover(true);
    if (e.currentTarget.value === "React") {
      setHoverWhat("src/App.js 혹은 src/App.tsx를 탐색합니다");
    } else {
      setHoverWhat("root/pages 폴더를 탐색합니다.");
    }
  };
  const onMouseLeave = () => {
    setIsHover(false);
  };

  return { isHover, hoverWhat, onMouseOn, onMouseLeave };
};
