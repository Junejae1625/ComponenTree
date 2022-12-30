import { useState, useEffect } from "react";
import ResizeObserver from "resize-observer-polyfill";

export const useResizeObserver = (ref) => {
  const [dimensions, setDimensions] = useState();
  useEffect(() => {
    const observeTarget = ref.current;
    const resizeObserver = new ResizeObserver((entries) => {
      entries.forEach((entry) => {
        setDimensions(entry.contentRect);
      });
    });
    if (observeTarget) {
      resizeObserver.observe(observeTarget);
      return () => {
        resizeObserver.unobserve(observeTarget);
      };
    }
  }, [ref]);
  return dimensions;
};
