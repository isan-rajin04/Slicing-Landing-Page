import React from 'react';
import Image from 'next/image';
import { Section } from './ui/Section';
import { Container } from './ui/Container';
import { Typography } from './ui/Typography';
import styles from './Clients.module.css';

export default function Clients() {
  return (
    <Section className={styles.section}>
      <Container>
        <div className={styles.header}>
          <Typography variant="h2" align="center" className={styles.title}>Our Clients</Typography>
          <Typography variant="p" align="center" className={styles.subtitle}>We have been working with some Fortune 500+ clients</Typography>
        </div>
        <div className={styles.logosWrapper}>
          {[1, 2, 3, 4, 5, 6, 7].map((num) => (
            <div key={num} className={styles.logoItem}>
              <Image
                src={`/logo-${num}.png`}
                alt={`Client Logo ${num}`}
                width={50}
                height={50}
                style={{ objectFit: 'contain' }}
              />
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
