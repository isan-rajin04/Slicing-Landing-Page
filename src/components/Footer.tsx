import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Camera, Globe, AtSign, Play, Send } from 'lucide-react';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={`section-bg-dark ${styles.footer}`}>
      <div className={`container ${styles.container}`}>
        
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
            <p>Copyright © 2020 Nexcent ltd.</p>
            <p>All rights reserved</p>
          </div>
          <div className={styles.socials}>
            <Link href="#" className={styles.socialIcon}><Camera size={20} /></Link>
            <Link href="#" className={styles.socialIcon}><Globe size={20} /></Link>
            <Link href="#" className={styles.socialIcon}><AtSign size={20} /></Link>
            <Link href="#" className={styles.socialIcon}><Play size={20} /></Link>
          </div>
        </div>

        <div className={styles.linksSection}>
          <div className={styles.linkGroup}>
            <h4 className={styles.groupTitle}>Company</h4>
            <Link href="#" className={styles.link}>About us</Link>
            <Link href="#" className={styles.link}>Blog</Link>
            <Link href="#" className={styles.link}>Contact us</Link>
            <Link href="#" className={styles.link}>Pricing</Link>
            <Link href="#" className={styles.link}>Testimonials</Link>
          </div>
          
          <div className={styles.linkGroup}>
            <h4 className={styles.groupTitle}>Support</h4>
            <Link href="#" className={styles.link}>Help center</Link>
            <Link href="#" className={styles.link}>Terms of service</Link>
            <Link href="#" className={styles.link}>Legal</Link>
            <Link href="#" className={styles.link}>Privacy policy</Link>
            <Link href="#" className={styles.link}>Status</Link>
          </div>
          
          <div className={styles.newsletter}>
            <h4 className={styles.groupTitle}>Stay up to date</h4>
            <div className={styles.inputWrapper}>
              <input type="email" placeholder="Your email address" className={styles.input} />
              <button className={styles.sendButton}>
                <Send size={16} />
              </button>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
