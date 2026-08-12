import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Authentication.css";

const Register = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    role: "",
  });
  const [message, setMessage] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:8080/api/users/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    });

    const text = await response.text();
    setMessage(text);

    if (text.includes("✅ Registered successfully")) {
      setTimeout(() => navigate("/"), 1500);
    }
  };

  return (
    <div className="auth-container">
      <img src="/logo.png" alt="Test Hive Logo" className="auth-logo" />
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <input
          type="text"
          placeholder="Full Name"
          value={user.name}
          onChange={(e) => setUser({ ...user, name: e.target.value })}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          required
        />
        <select
          value={user.role}
          onChange={(e) => setUser({ ...user, role: e.target.value })}
          required
        >
          <option value="">Select Role</option>
          <option value="User">User</option>
          <option value="Admin">Admin</option>
        </select>
        <button type="submit">Register</button>
      </form>

      {message && <p className="message">{message}</p>}

      <div className="auth-links">
        <p>
          Already have an account?{" "}
          <span className="link-text" onClick={() => navigate("/")}>
            Login
          </span>
        </p>
      </div>
    </div>
  );
};

export default Register;
