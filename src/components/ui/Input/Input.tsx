import React from 'react';
import { InputProps } from '../../../types';
import { cn } from '../../../utils';
import './Input.css';

export function Input({
  label,
  placeholder,
  value,
  onChange,
  type = 'text',
  disabled = false,
  error,
  required = false,
  className,
  ...props
}: InputProps) {
  const inputId = React.useId();
  const errorId = React.useId();

  return (
    <div className={cn('input-group', className)}>
      {label && (
        <label htmlFor={inputId} className="input-label">
          {label}
          {required && <span className="input-required">*</span>}
        </label>
      )}
      
      <input
        id={inputId}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        disabled={disabled}
        required={required}
        aria-invalid={!!error}
        aria-describedby={error ? errorId : undefined}
        className={cn(
          'input',
          {
            'input--error': !!error,
            'input--disabled': disabled,
          }
        )}
        {...props}
      />
      
      {error && (
        <div id={errorId} className="input-error" role="alert">
          {error}
        </div>
      )}
    </div>
  );
}