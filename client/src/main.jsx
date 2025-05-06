import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import ProductDetail from "../src/pages/ProductDetail";

import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router";

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route exact path="/" element={<App />}></Route>
        <Route exact path="/detail" element={<ProductDetail />}></Route>
      </Routes>
    </Router>
  </StrictMode>
);

export default App;
