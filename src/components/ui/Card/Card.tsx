import React from 'react';
import { CardProps } from '../../../types';
import { cn } from '../../../utils';
import './Card.css';

export function Card({
  children,
  variant = 'default',
  padding = 'md',
  className,
  onClick,
  ...props
}: CardProps) {
  const baseClasses = 'card';
  const variantClasses = `card--${variant}`;
  const paddingClasses = `card--padding-${padding}`;
  const interactiveClasses = onClick ? 'card--interactive' : '';

  return (
    <div
      className={cn(
        baseClasses,
        variantClasses,
        paddingClasses,
        interactiveClasses,
        className
      )}
      onClick={onClick}
      {...props}
    >
      {children}
    </div>
  );
}