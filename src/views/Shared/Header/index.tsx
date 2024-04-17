import React from "react";
import styles from "../../HomeView/HomeView.module.css";
import Link from "next/link";

type Props = {};

const Header = (props: Props) => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <h1>
          <Link href="/">Shashank Shekhar</Link>
        </h1>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="#about">About Us</Link>
          </li>
          <li>
            <Link href="#contact">Contact Us</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
