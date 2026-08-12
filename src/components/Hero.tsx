import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.heroSection}>
      <div className={`container ${styles.heroContainer}`}>
        <div className={styles.textContent}>
          <h1 className={styles.title}>
            Lessons and insights <br />
            <span className={styles.highlight}>from 8 years</span>
          </h1>
          <p className={styles.description}>
            Where to grow your business as a photographer: site or social media?
          </p>
          <div className={styles.buttonWrapper}>
            <Link href="/register" className="btn btn-primary">
              Register
            </Link>
          </div>
        </div>
        
        <div className={styles.illustrationWrapper}>
          <Image
            src="/hero-illustration.png"
            alt="Hero Illustration"
            width={500}
            height={500}
            priority
            style={{ objectFit: 'contain', width: '100%', height: 'auto', maxWidth: '500px' }}
          />
        </div>
        
        <div className={styles.carouselDots}>
          <span className={`${styles.dot} ${styles.active}`}></span>
          <span className={styles.dot}></span>
          <span className={styles.dot}></span>
        </div>
      </div>
    </section>
  );
}
