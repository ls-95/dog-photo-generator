import { Link } from "react-router-dom";
import "./Registration.css";
import { useState } from "react";

function Registration() {
  const [password, setPassword] = useState("");
  return (
    <div className="registration">
      <h1>Registration</h1>
      <form action="/">
        <div className="form-grid">
          <div className="label-div">
            <label htmlFor="username">Username: </label>
          </div>
          <div className="form-inputs">
            <input type="text" id="username" placeholder="Enter a username" />
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
            />
          </div>
          <div></div>
        </div>
        <div className="login-inquiry-container">
          <p>
            Already have an account? <Link to="/login">Log In</Link>
          </p>
        </div>

        <button type="submit">Register</button>
      </form>
    </div>
  );
}
export default Registration;
