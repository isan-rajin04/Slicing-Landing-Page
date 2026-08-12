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
          <Image
            src="/clients-2.png"
            alt="Our Client Logos"
            width={960}
            height={60}
            style={{ objectFit: 'contain', width: '100%', height: 'auto' }}
          />
        </div>
      </Container>
    </Section>
  );
}
