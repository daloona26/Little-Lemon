import React, { useState, useContext } from "react";
import { ReservationContext } from "../context/ReservationContext";
import { useNavigate } from "react-router-dom";

import "../css/BookingPage.css";
const BookingPage = () => {
  const [formData, setFormData] = useState({
    date: "2025-01-01",
    time: "15:00",
    guests: "1",
    occasion: "Birthday",
  });

  const { addReservation } = useContext(ReservationContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    addReservation(formData);
    setFormData({
      date: "2025-01-01",
      time: "15:00",
      guests: "1",
      occasion: "Birthday",
    });
    navigate("/reservations");
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <a href="/" className="link">
        <img src="/images/Logo .svg" alt="Logo" className="logo" />
      </a>
      <h3>Make a Reservation</h3>
      <div className="form-container">
        <form className="res-form" onSubmit={handleSubmit}>
          <label htmlFor="res-date">Choose date</label>
          <input
            type="date"
            id="res-date"
            className="inp"
            name="date"
            value={formData.date}
            onChange={handleChange}
          />
          <label htmlFor="res-time">Choose time</label>
          <select
            className="inp"
            id="res-time"
            name="time"
            value={formData.time}
            onChange={handleChange}
          >
            <option>15:00</option>
            <option>17:00</option>
            <option>18:00</option>
            <option>19:00</option>
            <option>20:00</option>
            <option>21:00</option>
            <option>22:00</option>
            <option>24:00</option>
          </select>
          <label htmlFor="guests">Number of guests</label>
          <input
            className="inp"
            id="guests"
            type="number"
            name="guests"
            max={15}
            min={1}
            placeholder="1"
            value={formData.guests}
            onChange={handleChange}
          />
          <label htmlFor="occasion">Occasion</label>
          <select
            className="inp"
            name="occasion"
            id="occasion"
            value={formData.occasion}
            onChange={handleChange}
          >
            <option>Birthday</option>
            <option>Anniversary</option>
            <option>Graduating</option>
          </select>
          <button className="res-btn" type="submit">
            Make your reservation
          </button>
        </form>
      </div>
    </>
  );
};

export default BookingPage;
