import React, { HTMLAttributes } from 'react';
import styles from './Container.module.css';

export const Container = React.forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className = '', children, ...props }, ref) => {
    return (
      <div ref={ref} className={`${styles.container} ${className}`.trim()} {...props}>
        {children}
      </div>
    );
  }
);

Container.displayName = 'Container';
