import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { Button } from './ui/Button';
import { Section } from './ui/Section';
import { Container } from './ui/Container';
import { Typography } from './ui/Typography';
import styles from './Testimonial.module.css';

export default function Testimonial() {
  return (
    <Section variant="silver">
      <Container className={styles.container}>
        <div className={styles.imageWrapper}>
          <Image
            src="/tesla-logo.jpg"
            alt="Tesla Logo"
            width={300}
            height={300}
            style={{ objectFit: 'contain', borderRadius: 'var(--radius-lg)' }}
          />
        </div>
        
        <div className={styles.content}>
          <blockquote className={styles.quote}>
            Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus
            tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida
            enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie.
          </blockquote>
          <div className={styles.author}>
            <Typography variant="h4" color="primary" className={styles.name}>Tim Smith</Typography>
            <Typography variant="p" color="light" className={styles.role}>British Dragon Boat Racing Association</Typography>
          </div>
          
          <div className={styles.customersRow}>
            <div className={styles.logos}>
              {[1, 2, 3, 4, 5, 6].map((num) => (
                <div key={num} className={styles.logoItem}>
                  <Image
                    src={`/logo-${num}.png`}
                    alt={`Client Logo ${num}`}
                    width={40}
                    height={40}
                    style={{ objectFit: 'contain' }}
                  />
                </div>
              ))}
            </div>
            <Button as={Link} href="/customers" variant="text" className={styles.meetAllLink}>
              Meet all customers
              <ArrowRight size={20} />
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
