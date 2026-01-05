import React, { useState } from "react";
import "../../styles/login.css";

const MainPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const response = await fakeApiCall(username, password);
      if (response.success) {
        console.log("Login successful");
        // Redirect the user or save tokens as needed
      } else {
        setError('Invalid username or password');
      }
    } catch (error) {
      setError('An error occurred. Please try again.');
    }
  };

  // Mock API call function (replace this with your actual API call)
  const fakeApiCall = async (username, password) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (username === 'Logan' && password === 'Deadpool') {
          resolve({ success: true });
        } else {
          resolve({ success: false });
        }
      }, 1000);
    });
  };

  return (
    <div className="main-page">
      <header>
        <h1>Welcome to Our Website</h1>
      </header>

      <section className="login-section">
        <form className="login-form" onSubmit={handleSubmit}>
          <h2 className="login-title">Login</h2>
          {error && <p className="error-message">{error}</p>}
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={handleUsernameChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
          </div>
          <button type="submit" className="login-button">Login</button>
        </form>
      </section>

      <footer>
        <p>© 2024 Your Company Name. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default MainPage;
