import Create from "./components/Create";
import "./App.css";
import "antd/dist/antd.css";
import { Routes, Route } from "react-router-dom";
import Preview from "./components/Preview";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Create />}></Route>
        <Route path="/preview/:token" element={<Preview />}></Route>
      </Routes>
    </div>
  );
}

export default App;
