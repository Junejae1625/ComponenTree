import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const useCheckResultData = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const resultData = JSON.parse(localStorage.getItem("resultData"));

    if (resultData.length === 0) {
      alert("주소 및 프로젝트를 확인해주세요.");
      return navigate("/");
    }
  }, []);
};
