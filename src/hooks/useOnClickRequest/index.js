import axios from "axios";

import { useNavigate } from "react-router-dom";
export const useOnClickRequest = (url, type) => {
  const navigate = useNavigate();
  const moveGraph = () => {
    navigate("/graph1");
  };
  const onClickUpload = async () => {
    type = type ? "src/App.tsx" : "pages";
    const result = await axios.post("http://localhost:4000/upload", {
      url,
      type,
    });

    localStorage.setItem("resultData", JSON.stringify(result.data));
    return moveGraph();
  };

  return { onClickUpload };
};
