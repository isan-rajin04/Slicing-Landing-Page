import React from 'react';
import { Users, Building2, Group } from 'lucide-react';
import { Section } from './ui/Section';
import { Container } from './ui/Container';
import { Typography } from './ui/Typography';
import styles from './Community.module.css';

const features = [
  {
    icon: Users,
    title: 'Membership Organisations',
    description: 'Our membership management software provides full automation of membership renewals and payments'
  },
  {
    icon: Building2,
    title: 'National Associations',
    description: 'Our membership management software provides full automation of membership renewals and payments'
  },
  {
    icon: Group,
    title: 'Clubs And Groups',
    description: 'Our membership management software provides full automation of membership renewals and payments'
  }
];

export default function Community() {
  return (
    <Section>
      <Container>
        <div className={styles.header}>
          <Typography variant="h2" align="center" className={styles.title}>
            Manage your entire community <br />
            in a single system
          </Typography>
          <Typography variant="p" align="center" className={styles.subtitle}>Who is Nexcent suitable for?</Typography>
        </div>
        
        <div className={styles.grid}>
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className={styles.card}>
                <div className={styles.iconWrapper}>
                  <div className={styles.iconBg}></div>
                  <Icon className={styles.icon} size={32} />
                </div>
                <Typography variant="h3" align="center" className={styles.cardTitle}>{feature.title}</Typography>
                <Typography variant="p" align="center" className={styles.cardDescription}>{feature.description}</Typography>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
