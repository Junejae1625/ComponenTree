// import logo from './logo.svg'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LayoutPage from "./layouts";
import LoadingPage from "./pages/Loading";
import RendingPage from "./pages/Rending";
import "./App.css";
import MainPage from "./pages/Main";

function App() {
  return (
    <>
      <BrowserRouter>
        <LayoutPage>
          <Routes>
            <Route path="/loading" element={<LoadingPage />}></Route>
            <Route path="/" element={<RendingPage />}></Route>
            <Route path="/main" element={<MainPage />}></Route>
          </Routes>
        </LayoutPage>
      </BrowserRouter>
    </>
  );
}

export default App;
