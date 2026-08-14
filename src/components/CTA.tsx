import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Button } from './ui/Button';
import { Section } from './ui/Section';
import { Container } from './ui/Container';
import { Typography } from './ui/Typography';
import styles from './CTA.module.css';

export default function CTA() {
  return (
    <Section variant="silver" className={styles.ctaSection}>
      <Container>
        <Typography variant="h1" align="center" className={styles.title}>
          Pellentesque suscipit <br />
          fringilla libero eu.
        </Typography>
        <div className={styles.buttonWrapper}>
          <Button as={Link} href="/demo" variant="primary" size="lg">
            Get a Demo
            <ArrowRight size={20} aria-hidden="true" className={styles.icon} />
          </Button>
        </div>
      </Container>
    </Section>
  );
}
