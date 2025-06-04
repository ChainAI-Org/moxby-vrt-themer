import React from 'react';
import { ButtonProps } from '../../../types';
import { cn } from '../../../utils';
import { Loader2 } from 'lucide-react';
import './Button.css';

export function Button({
  variant = 'primary',
  size = 'md',
  disabled = false,
  loading = false,
  children,
  onClick,
  type = 'button',
  className,
  ...props
}: ButtonProps) {
  const baseClasses = 'btn';
  const variantClasses = `btn--${variant}`;
  const sizeClasses = `btn--${size}`;
  const stateClasses = {
    'btn--disabled': disabled || loading,
    'btn--loading': loading,
  };

  return (
    <button
      type={type}
      className={cn(
        baseClasses,
        variantClasses,
        sizeClasses,
        stateClasses,
        className
      )}
      disabled={disabled || loading}
      onClick={onClick}
      {...props}
    >
      {loading && (
        <Loader2 className="btn__spinner" />
      )}
      <span className={cn('btn__content', { 'btn__content--loading': loading })}>
        {children}
      </span>
    </button>
  );
}