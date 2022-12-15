// import logo from './logo.svg'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingPage from "./pages/Loading";
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <BrowserRouter>
        <Routes>
          <Route path="/loading" element={<LoadingPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
