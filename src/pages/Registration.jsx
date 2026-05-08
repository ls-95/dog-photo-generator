import { Link, useNavigate } from "react-router-dom";
import "./Registration.css";
import { useState } from "react";

function Registration() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    setPassword(e.target.value);
    e.preventDefault();
    const passwordRegex =
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
    const storedUsername = username.trim();
    const storedPassword = password.trim();
    if (passwordRegex.test(storedPassword)) {
      localStorage.setItem("username", storedUsername);
      navigate("/login");
      localStorage.setItem("password", storedPassword);
    }
  };
  return (
    <div className="registration">
      <h1>Registration</h1>
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
              minLength={8}
              required
            />
          </div>
          <div></div>
        </div>
        <div className="password-requirements-container">
          <div></div>
          <div>
            <ul className="password-requirements">
              <li>Must contain at least 8 characters.</li>
              <li>Must contain at least one uppercase letter.</li>
              <li>Must contain at least one lowercase letter.</li>
              <li>Must container at least one digit.</li>
              <li>Must contain at least one special character.</li>
            </ul>
          </div>
          <div></div>
        </div>
        <div className="login-inquiry-container">
          <p>
            Already have an account?{" "}
            <Link className="nav-link" to="/login">
              Log In
            </Link>
          </p>
        </div>

        <button type="submit" onClick={handleSubmit}>
          Register
        </button>
      </form>
    </div>
  );
}
export default Registration;
