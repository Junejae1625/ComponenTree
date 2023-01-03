import { BrowserRouter, Routes, Route } from "react-router-dom";
import LayoutPage from "./layouts";
import LoadingPage from "./pages/Loading";
import RendingPage from "./pages/Rending";
import ForceDirectedGraphPage from "./pages/ForceDirectedGraph";
import { RecoilRoot } from "recoil";
import BarGraphPage from "./pages/BarGraph";
import PieGraphPage from "./pages/PieGraph";

function App() {
  return (
    <>
      <BrowserRouter>
        <RecoilRoot>
          <LayoutPage>
            <Routes>
              <Route path="/loading" element={<LoadingPage />}></Route>
              <Route path="/" element={<RendingPage />}></Route>
              <Route
                path="/graph1"
                element={<ForceDirectedGraphPage />}
              ></Route>
              <Route path="/graph2" element={<PieGraphPage />}></Route>
              <Route path="/graph3" element={<BarGraphPage />}></Route>
            </Routes>
          </LayoutPage>
        </RecoilRoot>
      </BrowserRouter>
    </>
  );
}

export default App;
