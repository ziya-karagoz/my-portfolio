import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RecycleMap from "./pages/RecycleMap.jsx";
import RollDice from "./pages/RollDice";
import NoPage from "./components/NoPage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='download' element={<RecycleMap />} />
        <Route path='rolladice' element={<RollDice />} />
        <Route path='*' element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
