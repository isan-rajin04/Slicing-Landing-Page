import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { Section } from './ui/Section';
import { Container } from './ui/Container';
import { Typography } from './ui/Typography';
import styles from './MarketingBlog.module.css';

const blogPosts = [
  {
    title: 'Creating Streamlined Safeguarding Processes with OneRen',
    image: '/blog-1.jpg'
  },
  {
    title: 'What are your safeguarding responsibilities and how can you manage them?',
    image: '/blog-2.jpg'
  },
  {
    title: 'Revamping the Membership Model with Triathlon Australia',
    image: '/blog-3.jpg'
  }
];

export default function MarketingBlog() {
  return (
    <Section>
      <Container>
        <div className={styles.header}>
          <Typography variant="h2" align="center" className={styles.title}>Caring is the new marketing</Typography>
          <Typography variant="p" align="center" className={styles.subtitle}>
            The Nexcent blog is the best place to read about the latest membership insights,
            trends and more. See who is joining the community, read about how our community
            are increasing their membership income and lot&apos;s more.
          </Typography>
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

          {blogPosts.map((post, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.imageContainer}>
                <Image
                  src={post.image}
                  alt={post.title}
                  width={400}
                  height={300}
                  style={{ objectFit: 'cover', width: '100%', height: '100%', borderRadius: 'var(--radius-md)' }}
                />
              </div>
              <div className={styles.cardContent}>
                <Typography variant="h3" className={styles.cardTitle}>{post.title}</Typography>
                <Link href={`/blog/${index}`} className={styles.readmore}>
                  Read more
                  <ArrowRight size={20} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
