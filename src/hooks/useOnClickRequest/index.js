import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { isCorrectUrl } from "../../components/validation/gitUrlValidation";
import { getFirestore, collection, addDoc } from "firebase/firestore/lite";
import { firebaseApp } from "../../libraries/firebase";
import moment from "moment";
export const useOnClickRequest = (url, type) => {
  const [submitting, isSubmitting] = useState(false);
  const navigate = useNavigate();

  const onClickUpload = async () => {
    const react = "React";
    const next = "Next";

    const isCorrect = isCorrectUrl(url);
    const date = new Date();
    const time = moment(date).format("YYYY-MM-DD-HH");
    if (!isCorrect) return;
    try {
      isSubmitting(true);
      type = type ? "src/App.tsx" : "pages";
      const result = await axios.post("http://localhost:4000/upload", {
        url,
        type,
      });
      const componenTree = collection(
        getFirestore(firebaseApp),
        "componenTree"
      );
      await addDoc(componenTree, {
        url,
        type: type ? react : next,
        time,
      });
      localStorage.setItem("resultData", JSON.stringify(result.data));
      isSubmitting(false);
      return navigate("/graph1");
    } catch (err) {
      isSubmitting(false);
      alert(err.response.data.message);
    }
  };

  return { onClickUpload, submitting };
};
