import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import BookingPage from "./components/BookingPage";
import Reservations from "./components/Reservations";
import { ReservationProvider } from "./context/ReservationContext";
import Login from "./components/Login";
import Signup from "./components/SignUp";
import OrderOnline from "./components/OrderOnline";
import Menu from "./components/Menu";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <ReservationProvider>
      <Routes>
        <Route index path="/" element={<App />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/reservations" element={<Reservations />} />
        <Route path="/order-online" element={<OrderOnline />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </ReservationProvider>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
