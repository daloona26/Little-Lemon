import "../css/Reservations.css";
import React, { useContext } from "react";
import { ReservationContext } from "../context/ReservationContext";

const Reservations = () => {
  const { reservations, deleteReservation } = useContext(ReservationContext);

  return (
    <div>
      <a href="/" className="link">
        <img src="/images/Logo .svg" alt="Logo" className="logo" />
      </a>
      <div className="reservations-container">
        <h2 className="reservations-header">Reservations</h2>
        {reservations.length === 0 ? (
          <p className="no-res">No reservations yet.</p>
        ) : (
          <ul className="reservations-list">
            {reservations.map((res, index) => (
              <li key={index} className="reservation">
                <div>
                  <strong className="res-name">Date:</strong> {res.date}
                </div>
                <div>
                  <strong className="res-name">  Time:</strong> {res.time}
                </div>
                <div>
                  <strong className="res-name"> Guests:</strong> {res.guests}
                </div>
                <div>
                  <strong className="res-name"> Occasion:</strong> {res.occasion}
                </div>

                <button 
                className="btn reservation-btn"
                  onClick={() => deleteReservation(index)}
                  style={{ marginLeft: "10px" }}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Reservations;
