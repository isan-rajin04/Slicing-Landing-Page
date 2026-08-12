import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.headerContainer}`}>
        <Link href="/" className={styles.logo}>
          <Image
            src="/nexcent-logo.png"
            alt="Nexcent Logo"
            width={150}
            height={40}
            priority
            style={{ objectFit: 'contain' }}
          />
        </Link>

        <nav className={styles.navigation}>
          <Link href="#home" className={styles.navLink}>Home</Link>
          <Link href="#service" className={styles.navLink}>Service</Link>
          <Link href="#feature" className={styles.navLink}>Feature</Link>
          <Link href="#product" className={styles.navLink}>Product</Link>
          <Link href="#testimonial" className={styles.navLink}>Testimonial</Link>
          <Link href="#faq" className={styles.navLink}>FAQ</Link>
        </nav>

        <div className={styles.authButtons}>
          <Link href="/login" className="btn btn-text">Login</Link>
          <Link href="/signup" className="btn btn-primary">Sign up</Link>
        </div>
      </div>
    </header>
  );
}
