import React from 'react';
import { Users, Tent, MousePointerClick, CreditCard } from 'lucide-react';
import { Section } from './ui/Section';
import { Container } from './ui/Container';
import { Typography } from './ui/Typography';
import styles from './Stats.module.css';

const statsData = [
  { icon: Users, count: '2,245,341', label: 'Members' },
  { icon: Tent, count: '46,328', label: 'Clubs' },
  { icon: MousePointerClick, count: '828,867', label: 'Event Bookings' },
  { icon: CreditCard, count: '1,926,436', label: 'Payments' },
];

export default function Stats() {
  return (
    <Section variant="silver">
      <Container className={styles.container}>
        <div className={styles.textContent}>
          <Typography variant="h2" className={styles.title}>
            Helping a local <br />
            <span className={styles.highlight}>business reinvent itself</span>
          </Typography>
          <Typography variant="p" className={styles.subtitle}>
            We reached here with our hard work and dedication
          </Typography>
        </div>
        
        <div className={styles.statsGrid}>
          {statsData.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className={styles.statItem}>
                <Icon className={styles.icon} size={32} />
                <div className={styles.statInfo}>
                  <Typography variant="h3" className={styles.count}>{stat.count}</Typography>
                  <Typography variant="p" className={styles.label}>{stat.label}</Typography>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
