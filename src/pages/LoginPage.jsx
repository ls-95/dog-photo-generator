import { useState } from "react";
import "./Registration.css";
import { Link, useNavigate } from "react-router-dom";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    setPassword(e.target.value);
    const storedUsername = localStorage.getItem("username");
    const storedPassword = localStorage.getItem("password");
    if (
      username.trim() === storedUsername &&
      password.trim() === storedPassword
    ) {
      navigate("/game");
    } else {
      alert("The username and password don't match!");
    }
  };
  return (
    <div className="registration">
      <h1>Login</h1>
      <form action="/">
        <div className="form-grid">
          <div className="label-div">
            <label htmlFor="username">Username: </label>
          </div>
          <div className="form-inputs">
            <input
              type="text"
              id="username"
              placeholder="Enter a username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div></div>
          <div className="label-div">
            <label htmlFor="password">Password:</label>
          </div>
          <div className="form-inputs">
            <input
              type="password"
              id="password"
              placeholder="Enter a password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div></div>
        </div>
        <div className="register-inquiry-container">
          <p>
            Don't have an account?{" "}
            <Link className="nav-link" to="/">
              Register
            </Link>
          </p>
        </div>

        <button type="submit" onClick={handleLogin}>
          Login
        </button>
      </form>
    </div>
  );
}

export default LoginPage;
