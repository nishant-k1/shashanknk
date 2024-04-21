import React from "react";
import styles from "../../HomeView/HomeView.module.css";
import Link from "next/link";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerSecondary}>
        <nav className={styles.footerNav}>
          <h1>
            <Link href="/">Shashank Shekhar</Link>
          </h1>
          <ul>
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
          <ul>
            <li>
              <Link href="https://x.com/shankyshekhar02?t=CUqNekL1aQz6QN2Di8LPPA&s=08">
                Twitter
              </Link>
            </li>
            <li>
              <Link href="https://www.facebook.com/shashanknk.shekhar/">
                Facebook
              </Link>
            </li>
            <li>
              <Link href="https://www.instagram.com/shankyshekhar02?igsh=cHJyNTl3MGhwZXQ=">
                Instagram
              </Link>
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
