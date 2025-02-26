// src/components/Login.js
import React, { useState } from "react";
import { useAuth } from "./AuthContext";
import "../App.css";
const Login = () => {
  const { login, register } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRegister, setIsRegister] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isRegister) {
        await register(email, password);
        alert("Đăng ký tài khoản thành công. Nhấn ok để đăng nhập");
      } else {
        await login(email, password);
        alert("Đăng nhập tài khoản thành công");
      }
      setError(null);
    } catch (error) {
      setError(error.message);
      console.error("Error signing in or registering:", error);
    }
  };

  return (
    <div style={{ textAlign: "center" }}>
      <div
        style={{
          alignItems: "center",
          flexDirection: "row",
          position: "relative",
          top: "300px",
        }}
      >
        <div
          style={{
            padding: "20px",
            width: "35%",
            position: "relative",
            alignItems: "center",
            left: "30%",
          }}
        >
          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: "15px" }} data-mdb-input-init>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                id="form2Example1"
                style={{
                  width: "100%",
                  padding: "10px",
                  margin: "5px 0",
                  border: "1px solid #ccc",
                  borderRadius: "5px",
                }}
              />
              <label
                htmlFor="form2Example1"
                style={{ display: "block", marginBottom: "5px" }}
              >
              </label>
            </div>

            <div style={{ marginBottom: "15px" }}>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                id="form2Example2"
                style={{
                  width: "100%",
                  padding: "10px",
                  margin: "5px 0",
                  border: "1px solid #ccc",
                  borderRadius: "5px",
                }}
              />
              <label
                htmlFor="form2Example2"
                style={{ display: "block", marginBottom: "5px" }}
              >
              </label>
            </div>

            <button
              type="submit"
              style={{
                display: "block",
                width: "100%",
                padding: "10px",
                backgroundColor: "blue",
                color: "white",
                border: "none",
                borderRadius: "5px",
                marginTop: "15px",
              }}
            >
              {isRegister ? "Register" : "Login"}
            </button>
          </form>
          {error && <p style={{ color: "red" }}>{error}</p>}{" "}
          <button onClick={() => setIsRegister(!isRegister)}>
            {isRegister
              ? "Already have an account? Login"
              : "Don't have an account? Register"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
