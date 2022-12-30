import { useEffect, useState } from "react";

export const useMoseMove = () => {
  const [screenY, setScreenY] = useState(0);
  useEffect(() => {
    document.addEventListener("mousemove", (e) => {
      setScreenY(
        ((document.documentElement.scrollHeight - e.clientY) /
          document.documentElement.scrollHeight) *
          0.9
      );
    });
  }, []);

  return [screenY];
};
