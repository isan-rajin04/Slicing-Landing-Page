import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Camera, Globe, AtSign, Play, Send } from 'lucide-react';
import { Container } from './ui/Container';
import { Typography } from './ui/Typography';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={`section-bg-dark ${styles.footer}`} role="contentinfo">
      <Container className={styles.container}>
        
        <div className={styles.brandInfo}>
          <Link href="/" className={styles.logo}>
            <Image
              src="/nexcent-logo-white.png"
              alt="Nexcent Logo"
              width={160}
              height={44}
              style={{ objectFit: 'contain' }}
            />
          </Link>
          <div className={styles.copyright}>
            <Typography variant="p" color="white">Copyright © 2020 Nexcent ltd.</Typography>
            <Typography variant="p" color="white">All rights reserved</Typography>
          </div>
          <nav aria-label="Social links" className={styles.socials}>
            <Link href="#" className={styles.socialIcon} aria-label="Instagram"><Camera size={20} aria-hidden="true" /></Link>
            <Link href="#" className={styles.socialIcon} aria-label="Website"><Globe size={20} aria-hidden="true" /></Link>
            <Link href="#" className={styles.socialIcon} aria-label="Twitter"><AtSign size={20} aria-hidden="true" /></Link>
            <Link href="#" className={styles.socialIcon} aria-label="YouTube"><Play size={20} aria-hidden="true" /></Link>
          </nav>
        </div>

        <div className={styles.linksSection}>
          <nav aria-label="Company links">
            <Typography variant="h4" color="white" className={styles.groupTitle}>Company</Typography>
            <Link href="#" className={styles.link}>About us</Link>
            <Link href="#" className={styles.link}>Blog</Link>
            <Link href="#" className={styles.link}>Contact us</Link>
            <Link href="#" className={styles.link}>Pricing</Link>
            <Link href="#" className={styles.link}>Testimonials</Link>
          </nav>
          
          <nav aria-label="Support links">
            <Typography variant="h4" color="white" className={styles.groupTitle}>Support</Typography>
            <Link href="#" className={styles.link}>Help center</Link>
            <Link href="#" className={styles.link}>Terms of service</Link>
            <Link href="#" className={styles.link}>Legal</Link>
            <Link href="#" className={styles.link}>Privacy policy</Link>
            <Link href="#" className={styles.link}>Status</Link>
          </nav>
          
          <div className={styles.newsletter}>
            <Typography variant="h4" color="white" className={styles.groupTitle}>Stay up to date</Typography>
            <div className={styles.inputWrapper}>
              <label htmlFor="newsletter-email" className="sr-only">Email address</label>
              <input id="newsletter-email" type="email" placeholder="Your email address" className={styles.input} />
              <button className={styles.sendButton} aria-label="Subscribe to newsletter">
                <Send size={16} aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>

      </Container>
    </footer>
  );
}
