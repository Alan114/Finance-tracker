import React, { useState } from "react";
import { useLogin } from "../../hooks/useLogin";
import styles from "./Login.module.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, error, isPending } = useLogin();

  const handleEmail = (enteredEmail) => {
    setEmail(enteredEmail.target.value);
  };
  const handlePassword = (enteredPassword) => {
    setPassword(enteredPassword.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password);
  };

  return (
    <form onSubmit={handleSubmit} className={styles["login-form"]}>
      <h2>Login</h2>
      <label>
        <span>Email:</span>
        <input type="email" onChange={handleEmail} value={email} />
      </label>
      <label>
        <span>Password:</span>
        <input type="password" onChange={handlePassword} value={password} />
      </label>
      {!isPending && <button className="btn">Login</button>}
      {isPending && (
        <button className="btn" disabled>
          Loading
        </button>
      )}
      {error && <p>{error}</p>}
    </form>
  );
}

export default Login;
