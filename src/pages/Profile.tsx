import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/Profile.css";

const Profile = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [notification, setNotification] = useState<string | null>(null);
  const navigate = useNavigate();
  const location = useLocation();


  useEffect(() => {
    // Check if there's a redirect message in the state
    if (location.state && location.state.message) {
      setNotification(location.state.message);
    }
  }, [location.state]);
  

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    

    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      const parsedData = JSON.parse(storedUser);
      const usernameMatches = username === parsedData.username || username === parsedData.email;
      const passwordMatches = password === parsedData.password;
      if (usernameMatches && passwordMatches) {
        setError(null);
        localStorage.setItem("isLoggedIn", "true");

        if (location.state && location.state.redirectTo) {
          navigate(location.state.redirectTo);
        } else {
          navigate("/dashboard");
        }
      } else {
        setError("Invalid username or password.");
      }
    } else {
      setError("No registered user found. Please register first.");
    }
  };

  return (
    <div className="profile-page">
      <Navbar />
      <div className="login-container">
        <div className="breadcrumb">Home &gt; Account</div>
        <h1 className="login-header">Log In</h1>
        {notification && (
          <div className="notification-message">
            {notification}
          </div>
        )}

        <div className="account-sections">
          {/* New Customer Section */}
          <div className="new-customer-section">
            <h2>New Customer</h2>
            <p className="registration-text">
              Sign up for early Sale access plus tailored new arrivals,
              trends, and promotions.
            </p>
            <a href="/Register">
              <button className="register-button">REGISTER</button>
            </a>
          </div>

          {/* Returning Customer Section */}
          <div className="returning-customer-section">
            <form onSubmit={handleSubmit} className="login-form">
              <div className="form-group">
              <label htmlFor="username">Username or Email</label>
                <input
                  type="text"
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              {error && <p className="error-message">{error}</p>}

              <a href="/forgot-password" className="forgot-password">
                Forgot your password?
              </a>

              <button type="submit" className="signin-button">
                SIGN IN
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
