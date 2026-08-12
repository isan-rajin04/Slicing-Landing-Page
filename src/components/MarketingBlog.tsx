import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import styles from './MarketingBlog.module.css';

const blogs = [
  {
    title: 'Creating Streamlined Safeguarding Processes with OneRen',
    bgColor: '#b7c9a8',
  },
  {
    title: 'What are your safeguarding responsibilities and how can you manage them?',
    bgColor: '#c4b49e',
  },
  {
    title: 'Revamping the Membership Model with Triathlon Australia',
    bgColor: '#a8b8c9',
  }
];

export default function MarketingBlog() {
  return (
    <section className="section">
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>Caring is the new marketing</h2>
          <p className={styles.subtitle}>
            The Nexcent blog is the best place to read about the latest membership insights,
            trends and more. See who is joining the community, read about how our community
            are increasing their membership income and lot&apos;s more.
          </p>
        </div>

        <div className={styles.grid}>
          {/* Real blog section image shown as a banner reference */}
          <div className={styles.fullImageWrapper}>
            <Image
              src="/blog-section.png"
              alt="Blog Section Preview"
              width={1200}
              height={500}
              style={{ objectFit: 'cover', width: '100%', height: 'auto', borderRadius: '12px' }}
            />
          </div>

          {blogs.map((blog, index) => (
            <div key={index} className={styles.card}>
              <div
                className={styles.imagePlaceholder}
                style={{ backgroundColor: blog.bgColor }}
              ></div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{blog.title}</h3>
                <Link href={`/blog/${index}`} className={styles.readmore}>
                  Readmore
                  <ArrowRight size={20} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
