import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import bcrypt from "bcryptjs"; // For password hashing
import "../styles/Profile.css";

const Register = () => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  // Function to validate password
  const isValidPassword = (password: string) => {
    const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
    return regex.test(password);
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();

    // Check if all fields are filled
    if (
      firstName.trim() === "" ||
      lastName.trim() === "" ||
      username.trim() === "" ||
      email.trim() === "" ||
      password.trim() === ""
    ) {
      setError("All fields are required.");
      return;
    }

    // Validate password
    if (!isValidPassword(password)) {
      setError(
        "Password must be at least 6 characters long, include 1 uppercase letter, 1 number, and 1 special character."
      );
      return;
    }

    // Hash the password before storing
    const hashedPassword = await bcrypt.hash(password, 10);

    const userData = {
      firstName,
      lastName,
      username,
      email,
      hashedPassword, // Securely store the hashed password
    };

    localStorage.setItem("user", JSON.stringify(userData));
    localStorage.setItem("isLoggedIn", "true");

    setError(null);
    navigate("/dashboard"); // Redirect to dashboard
  };

  return (
    <div className="profile-page">
      <Navbar />
      <div className="register-container">
        <div className="register-box">
          <h1 className="register-header">Create Account</h1>
          <br />

          <form onSubmit={handleRegister} className="register-form">
            <div className="form-group">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                id="firstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                id="lastName"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
              <br />
              <small>Password must be at least 6 characters, include 1 uppercase letter, 1 number, and 1 special character.</small>
            </div>

            {error && <p className="error-message">{error}</p>}

            <button type="submit" className="register-button">
              REGISTER
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Register;
