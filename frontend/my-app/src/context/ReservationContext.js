import React, { createContext, useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";

export const ReservationContext = createContext();

export const ReservationProvider = ({ children }) => {
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem("reservations");
    if (stored) {
      setReservations(JSON.parse(stored));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("reservations", JSON.stringify(reservations));
  }, [reservations]);

  const addReservation = (newReservation) => {
    const token = localStorage.getItem("access");

    if (!token) {
      console.error("No access token found.");
      return;
    }

    let username = null;
    try {
      const decoded = jwtDecode(token);
      username = decoded.username || decoded.user_id;
    } catch (err) {
      console.error("Token decoding failed:", err);
      return;
    }

    const reservationWithUser = {
      ...newReservation,
      username,
    };

    setReservations((prev) => [...prev, reservationWithUser]);
  };

  const deleteReservation = (indexToDelete) => {
    const updated = reservations.filter((_, index) => index !== indexToDelete);
    setReservations(updated);
  };

  return (
    <ReservationContext.Provider
      value={{ reservations, addReservation, deleteReservation }}
    >
      {children}
    </ReservationContext.Provider>
  );
};
