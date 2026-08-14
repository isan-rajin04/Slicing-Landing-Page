import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from './ui/Button';
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
          <Link href="#home" className={`${styles.navLink} ${styles.active}`}>Home</Link>
          <Link href="#service" className={styles.navLink}>Service</Link>
          <Link href="#feature" className={styles.navLink}>Feature</Link>
          <Link href="#product" className={styles.navLink}>Product</Link>
          <Link href="#testimonial" className={styles.navLink}>Testimonial</Link>
          <Link href="#faq" className={styles.navLink}>FAQ</Link>
        </nav>

        <div className={styles.authButtons}>
          <Button as={Link} href="/login" variant="text">Login</Button>
          <Button as={Link} href="/signup" variant="primary">Sign up</Button>
        </div>
      </div>
    </header>
  );
}
