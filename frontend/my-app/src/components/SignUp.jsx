import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/SignUp.css";

export default function Signup() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8000/app/signup/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        alert(data.error || "Signup failed");
        return;
      }

      alert(data.message || "Signup successful!");
      navigate("/login"); // Redirect to login page
    } catch (error) {
      console.error("Signup error:", error);
      alert("Something went wrong: " + error.message);
    }
  };

  return (
    <>
      <a href="/" className="link">
        <img src="/images/Logo .svg" alt="Logo" className="logo" />
      </a>
      <h3>Sign Up</h3>
      <div className="signup-container">
        <form onSubmit={handleSubmit} className="login-form">
          <input
            name="username"
            onChange={handleChange}
            placeholder="Username"
            className="username-login"
          />
          <input
            name="email"
            onChange={handleChange}
            placeholder="Email"
            className="username-login"
          />
          <input
            type="password"
            name="password"
            onChange={handleChange}
            placeholder="Password"
            className="username-login"
          />
          <div className="activity-signup">
            <button type="submit" className="btn btn-sign">
              Sign Up
            </button>
            <a className="link-login" href="/login" type="submit">
              Log In
            </a>
          </div>
        </form>
      </div>
    </>
  );
}
