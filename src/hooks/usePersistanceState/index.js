import { useEffect, useState } from "react";

export const usePersistantState = (key, initialValue) => {
  const [state, setInternalState] = useState(initialValue);

  useEffect(() => {
    const value = localStorage.getItem(key);
    if (!value) return;
    setInternalState(JSON.parse(value));
  }, [key]);

  const setState = (value) => {
    localStorage.setItem(key, JSON.stringify(value));
    setInternalState(value);
  };

  return [state, setState];
};
