import BarGraph from "../components/barGraph";
import { useCheckResultData } from "../hooks/useCheckResultData";

const BarGraphPage = () => {
  useCheckResultData();
  return <BarGraph />;
};

export default BarGraphPage;
