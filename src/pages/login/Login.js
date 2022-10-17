import React, { useState } from "react";
import styles from "./Login.module.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmail = enteredEmail => {
    setEmail(enteredEmail.target.value);
  };
  const handlePassword = enteredPassword => {
    setPassword(enteredPassword.target.value);
  };
  const handleSubmit = e => {
    e.preventDefault();
    console.log(email, password);
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
      <button className="btn">Login</button>
    </form>
  );
}

export default Login;
