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
          <div className={styles.placeholderIllustration}>
            {/* In a real project, this would be an <Image> tag with the hero graphic */}
            <div className={styles.placeholderScreen}>
              <div className={styles.screenHeader}>
                <span className={styles.dot}></span>
                <span className={styles.dot}></span>
                <span className={styles.dot}></span>
              </div>
              <div className={styles.screenBody}>
                <div className={styles.mockBar}></div>
                <div className={styles.mockChart}></div>
              </div>
            </div>
            <div className={styles.placeholderPerson}></div>
          </div>
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
