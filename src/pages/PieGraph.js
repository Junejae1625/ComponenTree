import PieGraph from "../components/pieGraph";
import { useCheckResultData } from "../hooks/useCheckResultData";

const PieGraphPage = () => {
  useCheckResultData();
  return <PieGraph />;
};

export default PieGraphPage;
