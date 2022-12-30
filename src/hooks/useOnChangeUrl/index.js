import { useState } from "react";

export const useOnChangeUrl = () => {
  const [url, setUrl] = useState("");

  const onChangeUrl = (e) => {
    setUrl(e.currentTarget.value);
  };

  return [url, onChangeUrl];
};
