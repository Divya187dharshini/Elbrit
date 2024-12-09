import React from "react";
import styles from "../styles/Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src="/logo.png" alt="Elbrit Logo" />
      </div>
      <nav>
        <ul>
          <li><a href="#features">Features</a></li>
          <li><a href="#ingredients">Ingredients</a></li>
          <li><a href="#news">Latest News</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
