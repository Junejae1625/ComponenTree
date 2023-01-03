import ForceDirectedGraph from "../components/forceDirectedGraph";
import { useCheckResultData } from "../hooks/useCheckResultData";

const ForceDirectedGraphPage = () => {
  useCheckResultData();
  return <ForceDirectedGraph />;
};

export default ForceDirectedGraphPage;
