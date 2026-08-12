import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from './ui/Button';
import { Section } from './ui/Section';
import { Container } from './ui/Container';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <Section variant="silver" className={styles.heroSection}>
      <Container className={styles.heroContainer}>
        <div className={styles.textContent}>
          <h1 className={styles.title}>
            Lessons and insights <br />
            <span className={styles.highlight}>from 8 years</span>
          </h1>
          <p className={styles.description}>
            Where to grow your business as a photographer: site or social media?
          </p>
          <div className={styles.buttonWrapper}>
            <Button as={Link} href="/register" variant="primary" size="lg">
              Register
            </Button>
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
      </Container>
    </Section>
  );
}
