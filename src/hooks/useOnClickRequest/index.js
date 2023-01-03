import axios from "axios";
import { useState } from "react";

import { useNavigate } from "react-router-dom";
export const useOnClickRequest = (url, type) => {
  const [submitting, isSubmitting] = useState(false);
  const navigate = useNavigate();
  const moveGraph = () => {
    navigate("/graph1");
  };
  const onClickUpload = async () => {
    isSubmitting(true);
    if (!url) {
      alert("주소를 정확히 입력해주세요.");
      return;
    }
    type = type ? "src/App.tsx" : "pages";
    const result = await axios.post("http://localhost:4000/upload", {
      url,
      type,
    });
    localStorage.setItem("resultData", JSON.stringify(result.data));
    isSubmitting(false);
    return moveGraph();
  };

  return { onClickUpload, submitting };
};
