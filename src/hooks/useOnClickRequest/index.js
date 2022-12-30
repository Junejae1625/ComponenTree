import axios from "axios";
import { useRecoilState } from "recoil";
import { resulstDataState } from "../../recoilStore/index";
export const useOnClickRequest = (url, type) => {
  const [, setResultData] = useRecoilState(resulstDataState);
  const onClickUpload = async () => {
    type = type ? "src/App.tsx" : "pages";
    const result = await axios.post("http://localhost:4000/upload", {
      url,
      type,
    });
    setResultData(result.data);
    return result.data;
  };

  return { onClickUpload };
};
