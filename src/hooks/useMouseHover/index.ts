import { MouseEvent, useState } from "react";

export const useMouseHover = () => {
  const [isHover, setIsHover] = useState(false);
  const [hoverWhat, setHoverWhat] = useState("");

  const onMouseOn = (e: MouseEvent<HTMLButtonElement>) => {
    setIsHover(true);
    if (e.currentTarget.value === "React") {
      setHoverWhat("*app.js 혹은 app.tsx를 탐색합니다");
    } else {
      setHoverWhat("*pages 폴더를 탐색합니다.");
    }
  };
  const onMouseLeave = () => {
    setIsHover(false);
  };

  return { isHover, hoverWhat, onMouseOn, onMouseLeave };
};
