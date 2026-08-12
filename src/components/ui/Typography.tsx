import React, { HTMLAttributes } from 'react';
import styles from './Typography.module.css';

interface TypographyProps extends HTMLAttributes<HTMLElement> {
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
  color?: 'dark' | 'gray' | 'light' | 'primary' | 'white';
  align?: 'left' | 'center' | 'right';
  as?: React.ElementType;
}

export const Typography = React.forwardRef<HTMLElement, TypographyProps>(
  (
    { variant = 'p', color = 'gray', align = 'left', as, className = '', children, ...props },
    ref
  ) => {
    const Component = as || variant;
    
    const combinedClassName = [
      styles[variant],
      styles[`color-${color}`],
      styles[`align-${align}`],
      className,
    ]
      .filter(Boolean)
      .join(' ');

    return React.createElement(
      Component,
      { ref, className: combinedClassName, ...props },
      children
    );
  }
);

Typography.displayName = 'Typography';
