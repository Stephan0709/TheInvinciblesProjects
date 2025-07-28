import React, { useState } from "react";
import {
  auth,
  googleProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
} from "../firebase";
import { useNavigate } from "react-router-dom";

function Loginfunction() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      navigate("/home");
    } catch (error) {
      alert("Google login failed: " + error.message);
    }
  };

  const handleEmailLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/home");
    } catch (error) {
      alert("Email login failed: " + error.message);
    }
  };

  return (
    <div style={styles.container}>
      <h2>Login</h2>
      <form onSubmit={handleEmailLogin} style={styles.form}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={styles.input}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input}
          required
        />
        <button type="submit" style={styles.loginButton}>
          Login with Email
        </button>
      </form>

      <hr style={{ width: "200px", margin: "20px auto" }} />

      <button style={styles.googleButton} onClick={handleGoogleLogin}>
        <img
          src="https://developers.google.com/identity/images/g-logo.png"
          alt="Google logo"
          style={styles.logo}
        />
        Login with Google
      </button>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    marginTop: "100px",
    fontFamily: "Arial, sans-serif",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "10px",
  },
  input: {
    width: "250px",
    padding: "10px",
    fontSize: "14px",
  },
  loginButton: {
    padding: "10px 20px",
    fontSize: "16px",
    marginTop: "10px",
    cursor: "pointer",
  },
  googleButton: {
    backgroundColor: "#fff",
    color: "#000",
    border: "1px solid #ccc",
    padding: "10px 20px",
    fontSize: "16px",
    cursor: "pointer",
    display: "inline-flex",
    alignItems: "center",
    gap: "10px",
  },
  logo: {
    width: "20px",
    height: "20px",
  },
};

export default Loginfunction;
