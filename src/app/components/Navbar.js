// components/Navbar.js
"use client";

import Link from 'next/link';

export default function Navbar() {
  return (
    <nav style={styles.navbar}>
      <ul style={styles.navList}>
        <li style={styles.navItem}>
          <Link href="/" style={styles.navLink}>Home</Link>
        </li>
        <li style={styles.navItem}>
          <Link href="/ssl-check" style={styles.navLink}>SSL Checker</Link>
        </li>
      
      </ul>
    </nav>
  );
}

const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'left',
    padding: '20px',
    backgroundColor: '#0070f3',
    color: 'white',
  },
  navList: {
    listStyle: 'none',
    display: 'flex',
    gap: '20px',
  },
  navItem: {
    padding: '10px 15px',
  },
  navLink: {
    color: 'white',
    textDecoration: 'none',
    fontSize: '18px',
    fontWeight: '1500',

  }
};
