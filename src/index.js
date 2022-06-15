import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RollDice from "./pages/RollDice";
import NoPage from "./components/NoPage";
import { FormikTut } from "./playground/formik-tutorial/FormikTut";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />

        <Route path='rolladice' element={<RollDice />} />
        <Route path='formik' element={<FormikTut />} />
        <Route path='*' element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
