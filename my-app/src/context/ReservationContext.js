import React, { createContext, useEffect, useState } from "react";

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
    setReservations((prev) => [...prev, newReservation]);
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
