import { Routes, Route } from "react-router-dom";
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
      <RecoilRoot>
        <LayoutPage>
          <Routes>
            <Route path="/" element={<RendingPage />}></Route>
            <Route path="/loading" element={<LoadingPage />}></Route>
            <Route path="/graph1" element={<ForceDirectedGraphPage />}></Route>
            <Route path="/graph2" element={<PieGraphPage />}></Route>
            <Route path="/graph3" element={<BarGraphPage />}></Route>
            <Route
              path="*"
              element={
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "3rem",
                  }}
                >
                  404 Not FoundPage
                </div>
              }
            ></Route>
          </Routes>
        </LayoutPage>
      </RecoilRoot>
    </>
  );
}

export default App;
