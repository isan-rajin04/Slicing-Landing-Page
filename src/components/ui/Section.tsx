import React, { HTMLAttributes } from 'react';
import styles from './Section.module.css';

interface SectionProps extends HTMLAttributes<HTMLElement> {
  variant?: 'default' | 'silver' | 'dark';
}

export const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ className = '', variant = 'default', children, ...props }, ref) => {
    const combinedClassName = [
      styles.section,
      variant !== 'default' ? styles[`section-${variant}`] : '',
      className,
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <section ref={ref} className={combinedClassName} {...props}>
        {children}
      </section>
    );
  }
);

Section.displayName = 'Section';
