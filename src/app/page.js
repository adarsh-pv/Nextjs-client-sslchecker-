"use client"
import Link from 'next/link';

export default function HomePage() {
  return (
    <div>
      <h2>Welcome to the SSL Certificate Checker</h2>
      <p className='Center'>Check the SSL certificate details of any domain!</p>
      <Link href="/ssl-check" style={{ color: 'red', display:'flex',justifyContent:'center', fontSize: '18px', textDecoration: 'none' }}>
        Go to SSL Checker
      </Link>
    </div>
  );
}
