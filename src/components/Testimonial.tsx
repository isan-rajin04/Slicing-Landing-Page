import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import styles from './Testimonial.module.css';

export default function Testimonial() {
  return (
    <section className="section section-bg-silver">
      <div className={`container ${styles.container}`}>
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
          <p className={styles.quote}>
            Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus 
            tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida 
            enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie 
            mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse 
            eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, 
            vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum 
            id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.
          </p>
          <div className={styles.author}>
            <h4 className={styles.name}>Tim Smith</h4>
            <p className={styles.role}>British Dragon Boat Racing Association</p>
          </div>
          
          <div className={styles.customersRow}>
            <div className={styles.logos}>
              <Image
                src="/clients-2.png"
                alt="Client Logos"
                width={500}
                height={40}
                style={{ objectFit: 'contain', maxWidth: '100%', height: 'auto' }}
              />
            </div>
            <Link href="/customers" className={styles.meetAllLink}>
              Meet all customers
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
