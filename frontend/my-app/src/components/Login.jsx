import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "../css/Login.css";

export default function Login() {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const [greeting, setGreeting] = useState("");

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8000/app/login/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(credentials),
      });

      const data = await response.json();

      if (!response.ok) {
        if (
          data?.detail === "No active account found with the given credentials"
        ) {
          alert("User not found. Redirecting to signup...");
          navigate("/signup");
        } else {
          alert(data.detail || "Login failed");
        }
        return;
      }

      localStorage.setItem("access", data.access);
      localStorage.setItem("refresh", data.refresh);

      const decoded = jwtDecode(data.access);
      const username = decoded.username || decoded.user_id;

      // Show greeting for 3 seconds
      setGreeting(`Hello, ${username}!`);
      setTimeout(() => {
        navigate("/");
      }, 3000);
    } catch (error) {
      console.error("Login error:", error);
      alert("Login failed: " + error.message);
    }
  };

  return (
    <>
      <a href="/" className="link">
        <img src="/images/Logo .svg" alt="Logo" className="logo" />
      </a>
      <h3>Login</h3>


      <div className="login-container">
        <form onSubmit={handleLogin} className="login-form">
          <div>
            <input
              name="username"
              onChange={handleChange}
              placeholder="Username"
              className="username-login"
              disabled={!!greeting}
            />
          </div>
          <div>
            <input
              type="password"
              name="password"
              onChange={handleChange}
              placeholder="Password"
              className="password-login"
              disabled={!!greeting}
            />
          </div>
          <div className="activity">
            <button
              type="submit"
              className="btn btn-login"
              disabled={!!greeting}
            >
              Login
            </button>
            <a
              className="link-signup"
              href="/signup"
              type="submit"
              disabled={!!greeting}
            >
              Sign Up
            </a>
          </div>
        </form>
      </div>
    </>
  );
}
