import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
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
    <section className="section">
      <div className={`container ${styles.container} ${reverse ? styles.reverse : ''}`}>
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
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.description}>{description}</p>
          <Link href={buttonLink} className="btn btn-primary">
            {buttonText}
          </Link>
        </div>
      </div>
    </section>
  );
}
