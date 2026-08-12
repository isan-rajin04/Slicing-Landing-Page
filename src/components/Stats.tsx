import React from 'react';
import { Users, Tent, MousePointerClick, CreditCard } from 'lucide-react';
import styles from './Stats.module.css';

const statsData = [
  { icon: Users, count: '2,245,341', label: 'Members' },
  { icon: Tent, count: '46,328', label: 'Clubs' },
  { icon: MousePointerClick, count: '828,867', label: 'Event Bookings' },
  { icon: CreditCard, count: '1,926,436', label: 'Payments' },
];

export default function Stats() {
  return (
    <section className="section section-bg-silver">
      <div className={`container ${styles.container}`}>
        <div className={styles.textContent}>
          <h2 className={styles.title}>
            Helping a local <br />
            <span className={styles.highlight}>business reinvent itself</span>
          </h2>
          <p className={styles.subtitle}>
            We reached here with our hard work and dedication
          </p>
        </div>
        
        <div className={styles.statsGrid}>
          {statsData.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className={styles.statItem}>
                <Icon className={styles.icon} size={32} />
                <div className={styles.statInfo}>
                  <h3 className={styles.count}>{stat.count}</h3>
                  <p className={styles.label}>{stat.label}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
