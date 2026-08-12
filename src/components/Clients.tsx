import React from 'react';
import Image from 'next/image';
import styles from './Clients.module.css';

export default function Clients() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>Our Clients</h2>
          <p className={styles.subtitle}>We have been working with some Fortune 500+ clients</p>
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
      </div>
    </section>
  );
}
