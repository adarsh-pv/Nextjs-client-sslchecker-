// components/Footer.js
"use client";

export default function Footer() {
  return (
    <footer style={styles.footer}>
      <p style={styles.footerText}>© 2024 SSL Checker | All Rights Reserved</p>
    </footer>
  );
}

const styles = {
  footer: {
    textAlign: 'center',
    padding: '20px',
    backgroundColor: '#f7f9fc',
    color: '#333',
    position: 'fixed',
    bottom: 0,
    width: '100%',
  },
  footerText: {
    margin: 0,
    fontSize: '14px',
  }
};
