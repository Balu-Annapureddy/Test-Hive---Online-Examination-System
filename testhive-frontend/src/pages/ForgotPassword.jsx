import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Authentication.css";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleReset = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setMessage("📩 Password reset link sent to your email (simulated).");
    } else {
      setMessage("❌ Please enter your email.");
    }
  };

  return (
    <div className="auth-container">
      <img src="/logo.png" alt="Test Hive Logo" className="auth-logo" />
      <h2>Forgot Password</h2>
      <form onSubmit={handleReset}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Send Reset Link</button>
      </form>

      {message && <p className="message">{message}</p>}

      <div className="auth-links">
        <span className="link-text" onClick={() => navigate("/")}>
          Back to Login
        </span>
      </div>
    </div>
  );
};

export default ForgotPassword;
