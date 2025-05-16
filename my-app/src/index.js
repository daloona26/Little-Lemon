import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import BookingPage from "./components/BookingPage";
import Reservations from "./components/Reservations";
import { ReservationProvider } from "./context/ReservationContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <ReservationProvider>
      <Routes>
        <Route index path="/" element={<App />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/reservations" element={<Reservations />} />
      </Routes>
    </ReservationProvider>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
