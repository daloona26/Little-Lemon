import { useState, useEffect } from "react";
import "../css/Nav.css";

const Nav = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("access");
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("access");
    localStorage.removeItem("refresh");
    setIsLoggedIn(false);
    // optionally redirect to home page or login page
    window.location.href = "/";
  };

  return (
    <>
      <nav className="nav">
        <a href="/" className="link">
          <img src="/images/Logo .svg" alt="Logo" className="logo" />
        </a>
        <ul className="nav-list">
          <li className="list-item">
            <a className="link" href="/">
              Home
            </a>
          </li>
          <li className="list-item">
            <a className="link" href="#about">
              About
            </a>
          </li>
          <li className="list-item">
            <a className="link" href="#menu">
              Menu
            </a>
          </li>
          <li className="list-item">
            <a className="link" href="/reservations">
              Reservations
            </a>
          </li>
          <li className="list-item">
            <a className="link" href="#Order-online">
              Order Online
            </a>
          </li>
          <li className="list-item">
            {isLoggedIn ? (
              <button
                onClick={handleLogout}
                className="link"
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  padding: 0,
                  font: "inherit",
                  color: "#f4ce14",
                  fontSize:"1.2rem",
                  fontWeight:"600",
                }}
              >
                Logout
              </button>
            ) : (
              <a className="link" href="/login">
                Login
              </a>
            )}
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Nav;
