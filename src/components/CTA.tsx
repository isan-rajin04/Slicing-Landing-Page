import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import styles from './CTA.module.css';

export default function CTA() {
  return (
    <section className={`section section-bg-silver ${styles.ctaSection}`}>
      <div className="container">
        <h2 className={styles.title}>
          Pellentesque suscipit <br />
          fringilla libero eu.
        </h2>
        <div className={styles.buttonWrapper}>
          <Link href="/demo" className="btn btn-primary">
            Get a Demo
            <ArrowRight size={20} className={styles.icon} />
          </Link>
        </div>
      </div>
    </section>
  );
}
