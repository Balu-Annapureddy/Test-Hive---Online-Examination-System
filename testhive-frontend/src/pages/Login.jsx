import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Authentication.css";

const Login = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:8080/api/users/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    });

    const text = await response.text();
    setMessage(text);

    if (text.includes("✅ Login success as")) {
      const role = text.includes("Admin") ? "Admin" : "User";
      localStorage.setItem("role", role);
      localStorage.setItem("userId", user.email); // Simplified for demo
      navigate(role === "Admin" ? "/admin/dashboard" : "/user/dashboard");
    }
  };

  return (
    <div className="auth-container">
      <img src="/logo.png" alt="Test Hive Logo" className="auth-logo" />
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
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
        <button type="submit">Login</button>
      </form>

      {message && <p className="message">{message}</p>}

      <div className="auth-links">
        <p>
          Don’t have an account?{" "}
          <span className="link-text" onClick={() => navigate("/register")}>
            Register
          </span>
        </p>
        <p>
          <span className="link-text" onClick={() => navigate("/forgot-password")}>
            Forgot Password?
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
