import React, { useState, useEffect } from "react";
import styles from "../../HomeView/HomeView.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  // Close mobile menu whenever route/hash changes
  useEffect(() => {
    setMenuOpen(false);
  }, [router.asPath]);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/#about" },
    { label: "Gallery", href: "/gallery" },
    { label: "Contact Us", href: "/#contact" },
  ];

  return (
    <header className={styles.header}>
      <nav className={styles.nav} aria-label="Main Navigation">
        <h1 className={styles.logo}>
          <Link href="/">Shashank Shekhar</Link>
        </h1>

        {/* Desktop Navigation Links */}
        <ul className={styles.desktopNav}>
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger Button */}
        <button
          className={styles.mobileMenuButton}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          ) : (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          )}
        </button>

        {/* Mobile Drawer Navigation */}
        <div
          className={`${styles.mobileDrawer} ${
            menuOpen ? styles.mobileDrawerOpen : ""
          }`}
          onClick={() => setMenuOpen(false)}
        >
          <div
            className={styles.mobileDrawerContent}
            onClick={(e) => e.stopPropagation()}
          >
            <ul className={styles.mobileNavList}>
              {navLinks.map((link) => (
                <li key={`mobile-${link.href}`}>
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className={styles.mobileNavLink}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/disclaimer"
                  onClick={() => setMenuOpen(false)}
                  className={styles.mobileNavLink}
                >
                  Disclaimer
                </Link>
              </li>
            </ul>

            <div className={styles.mobileSocialLinks}>
              <a
                href="https://x.com/shankyshekhar02?t=CUqNekL1aQz6QN2Di8LPPA&s=08"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter / X
              </a>
              <a
                href="https://www.facebook.com/shashanknk.shekhar/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
              <a
                href="https://www.instagram.com/shankyshekhar02?igsh=cHJyNTl3MGhwZXQ="
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
