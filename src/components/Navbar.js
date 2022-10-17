import React from "react";
import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import styles from "./Navbar.module.css";

function Navbar() {
  const { logout } = useLogout();

  return (
    <nav className={styles.navbar}>
      <ul>
        <li className={styles.title}>MyMoney</li>

        <li>
          <Link to="/login">Login</Link>
          <Link to="/signup">SignUp</Link>
        </li>
        <li>
          <button className="btn" onClick={logout}>
            Logout
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
