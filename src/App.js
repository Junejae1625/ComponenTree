import { BrowserRouter, Routes, Route } from "react-router-dom";
import LayoutPage from "./layouts";
import LoadingPage from "./pages/Loading";
import RendingPage from "./pages/Rending";
import "./App.css";
import ForceDirectedGraphPage from "./pages/ForceDirectedGraph";
import { RecoilRoot } from "recoil";

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
                path="/directed"
                element={<ForceDirectedGraphPage />}
              ></Route>
            </Routes>
          </LayoutPage>
        </RecoilRoot>
      </BrowserRouter>
    </>
  );
}

export default App;
