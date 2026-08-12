import React, { ButtonHTMLAttributes } from 'react';
import styles from './Button.module.css';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'text' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  as?: React.ElementType;
  href?: string;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = '', variant = 'primary', size = 'md', isLoading = false, children, disabled, as, href, ...props }, ref) => {
    const combinedClassName = [
      styles.btn,
      styles[`btn-${variant}`],
      styles[`btn-${size}`],
      isLoading ? styles.loading : '',
      className,
    ]
      .filter(Boolean)
      .join(' ');

    const Component = as || (href ? 'a' : 'button');
    const additionalProps = href ? { href } : {};

    return React.createElement(
      Component,
      {
        ref,
        className: combinedClassName,
        disabled: Component === 'button' ? disabled || isLoading : undefined,
        ...additionalProps,
        ...props
      } as any,
      <>
        {isLoading ? (
          <span className={styles.spinner} aria-hidden="true" />
        ) : null}
        <span className={styles.content}>{children}</span>
      </>
    );
  }
);

Button.displayName = 'Button';
