import React from 'react';
import { Users, Building2, Group } from 'lucide-react';
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
    <section className="section">
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>
            Manage your entire community <br />
            in a single system
          </h2>
          <p className={styles.subtitle}>Who is Nexcent suitable for?</p>
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
                <h3 className={styles.cardTitle}>{feature.title}</h3>
                <p className={styles.cardDescription}>{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
