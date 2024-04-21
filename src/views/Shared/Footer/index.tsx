import React from "react";
import styles from "../../HomeView/HomeView.module.css";
import Link from "next/link";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerSecondary}>
        <nav className={styles.footerNav}>
          <ul>
            <li>
              <h1>
                <Link href="/">Shashank Shekhar</Link>
              </h1>
            </li>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/#about">About Us</Link>
            </li>
            <li>
              <Link href="/gallery">Gallery</Link>
            </li>
            <li>
              <Link href="/#contact">Contact Us</Link>
            </li>
            <li>
              <Link href="https://www.facebook.com/shashanknk.shekhar/">
                Facebook
              </Link>
            </li>
            {/* <li>
                <Link href="#privacy-policy">Privacy Policy</Link>
              </li>
              <li>
                <Link href="#terms-of-service">Terms of Service</Link>
              </li> */}
            <li>
              <Link href="/disclaimer">Disclaimer</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className={styles.footerPrimary}>
        <div>
          <p>&copy; 2024 Shashank Shekhar. All rights reserved.</p>
          <p>
            Designed & developed by
            <span style={{ marginLeft: "4px" }}>
              <Link href="https://www.quengenesisllc.com/#/">
                Quengenesis LLC
              </Link>
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
