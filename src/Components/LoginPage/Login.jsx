import React, { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Clear previous error message
    setError(null);

    // Simulate loading delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    try {
      const authInstance = getAuth();
      // Sign in with email and password
      await signInWithEmailAndPassword(authInstance, username, password);

      // Redirect to Home page after successful login
      window.location.href = "/home";
    } catch (error) {
      // Display error message if login fails
      setError("Invalid username or password.");
    }
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", backgroundColor: "#f0f8ff" }}>
      <form style={{ backgroundColor: "#ffffff", padding: "20px", borderRadius: "8px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", maxWidth: "400px", width: "100%" }} onSubmit={handleSubmit}>
        <h1 style={{ textAlign: "center", marginBottom: "20px", color: "#2c3e50" }}>Login</h1>
        {error && <p style={{ color: "red", textAlign: "center" }}>{error}</p>}
        <div style={{ marginBottom: "15px", marginRight: "15px" }}>
          <input style={{ width: "100%", padding: "10px", border: "1px solid #ccc", borderRadius: "4px" }} type="text" placeholder='Username' required value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div style={{ marginBottom: "15px", marginRight: "15px" }}>
          <input style={{ width: "100%", padding: "10px", border: "1px solid #ccc", borderRadius: "4px" }} type="password" placeholder='Password' required value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "15px" }}>
          <label><input type="checkbox" /> Remember me</label>
          <a href="#" style={{ color: "#3498db" }}>Forgot password?</a>
        </div>

        <button style={{ width: "100%", padding: "10px", backgroundColor: "#3498db", color: "#ffffff", border: "none", borderRadius: "4px", cursor: "pointer" }} type="submit">Login</button>
        <div style={{ textAlign: "center", marginTop: "15px" }}>
          <p>Don't have an account?<a href="/register" style={{ color: "#3498db" }}> Register</a></p>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
