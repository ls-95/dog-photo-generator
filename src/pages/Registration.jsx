import { useState } from "react";

function Registration() {
  const [password, setPassword] = useState("");
  return (
    <div className="registration">
      <h1>Registration</h1>
      <form action="/">
        <label>
          Username:
          <input type="text" id="username" />
        </label>

        <label>
          Password:
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
      </form>
    </div>
  );
}
export default Registration;
