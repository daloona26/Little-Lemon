import { useContext } from "react";
import { jwtDecode } from "jwt-decode";
import { ReservationContext } from "../context/ReservationContext";
import { useNavigate } from "react-router-dom";
import "../css/Reservations.css";

const Reservations = () => {
  const navigate = useNavigate();
  const { reservations, deleteReservation } = useContext(ReservationContext);

  const token = localStorage.getItem("access");
  let currentUser = null;

  if (token) {
    try {
      const decoded = jwtDecode(token);
      currentUser = decoded.username || decoded.user_id;
    } catch (err) {
      console.error("Error decoding token:", err);
    }
  }

  if (!currentUser) {
    navigate("/login");
    return null;
  }

  const userReservations = reservations.filter(
    (res) => res.username === currentUser
  );

  return (
    <div>
      <a href="/" className="link">
        <img src="/images/Logo .svg" alt="Logo" className="logo" />
      </a>
      <div className="reservations-container">
        <h2 className="reservations-header">Reservations</h2>
        {userReservations.length === 0 ? (
          <p className="no-res">No reservations yet.</p>
        ) : (
          <ul className="reservations-list">
            {userReservations.map((res, index) => (
              <li key={index} className="reservation">
                <div>
                  <strong className="res-name">Date:</strong> {res.date}
                </div>
                <div>
                  <strong className="res-name">Time:</strong> {res.time}
                </div>
                <div>
                  <strong className="res-name">Guests:</strong> {res.guests}
                </div>
                <div>
                  <strong className="res-name">Occasion:</strong> {res.occasion}
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
