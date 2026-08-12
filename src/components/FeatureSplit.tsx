import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from './ui/Button';
import { Section } from './ui/Section';
import { Container } from './ui/Container';
import { Typography } from './ui/Typography';
import styles from './FeatureSplit.module.css';

interface FeatureSplitProps {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  imageSrc: string;
  imageAlt: string;
  reverse?: boolean;
}

export default function FeatureSplit({ title, description, buttonText, buttonLink, imageSrc, imageAlt, reverse }: FeatureSplitProps) {
  return (
    <Section>
      <Container className={`${styles.container} ${reverse ? styles.reverse : ''}`}>
        <div className={styles.imageWrapper}>
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={480}
            height={400}
            style={{ objectFit: 'contain', width: '100%', height: 'auto' }}
          />
        </div>

        <div className={styles.textContent}>
          <Typography variant="h2" className={styles.title}>{title}</Typography>
          <Typography variant="p" className={styles.description}>{description}</Typography>
          <Button as={Link} href={buttonLink} variant="primary">
            {buttonText}
          </Button>
        </div>
      </Container>
    </Section>
  );
}
