import React, { forwardRef, useState } from 'react';
import clsx from 'clsx';

export type InputType = 'text' | 'email' | 'password' | 'number';

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  variant?: 'outlined' | 'filled' | 'bare';
  size?: 'sm' | 'md' | 'lg';
  type?: InputType;
  label?: string;
  helperText?: string;
  error?: boolean;
  errorMessage?: string;
  fullWidth?: boolean;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      variant = 'outlined',
      size = 'md',
      type = 'text',
      label,
      helperText,
      error = false,
      errorMessage,
      fullWidth = false,
      className,
      disabled = false,
      id,
      ...props
    },
    ref
  ) => {
    const [focused, setFocused] = useState(false);

    const inputId = id || (label ? `input-${label.replace(/\s+/g, '-').toLowerCase()}` : undefined);

    const baseStyles =
      'rounded-[1px] font-small transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 peer';

    const variants = {
      outlined: clsx(
        'border bg-transparent',
        error
          ? 'border-red-500 focus:ring-red-500'
          : 'border-interaction-primary-default focus:ring-interaction-primary-default hover:border-interaction-primary-hover'
      ),
      filled: clsx(
        'border-0',
        error
          ? 'bg-red-50 focus:ring-red-500'
          : 'bg-interaction-secondary-default focus:ring-interaction-primary-default hover:bg-interaction-secondary-hover'
      ),
      bare: clsx(
        'border-0 border-b-2 bg-transparent rounded-none',
        error
          ? 'border-b-red-500 focus:ring-0'
          : 'border-b-interaction-primary-default focus:ring-0 focus:border-b-interaction-primary-hover hover:border-b-interaction-primary-hover'
      ),
    };

    const sizes = {
      sm: 'px-[12px] py-[6px] text-sm',
      md: 'px-[20px] py-[10px] text-[12px]',
      lg: 'px-[24px] py-[12px] text-lg',
    };

    const disabledStyles = disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-text';

    const widthStyles = fullWidth ? 'w-full' : '';

    const labelSizeStyles = {
      sm: 'text-xs',
      md: 'text-sm',
      lg: 'text-base',
    };

    const helperSizeStyles = {
      sm: 'text-[10px]',
      md: 'text-xs',
      lg: 'text-sm',
    };

    return (
      <div className={clsx('flex flex-col gap-1', fullWidth && 'w-full')}>
        {label && (
          <label
            htmlFor={inputId}
            className={clsx(
              'font-medium transition-colors',
              labelSizeStyles[size],
              focused ? 'text-interaction-primary-default' : 'text-text-primary',
              error && 'text-red-500',
              disabled && 'opacity-50'
            )}
          >
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={inputId}
          type={type}
          disabled={disabled}
          className={clsx(
            baseStyles,
            variants[variant],
            sizes[size],
            disabledStyles,
            widthStyles,
            className
          )}
          onFocus={(e) => {
            setFocused(true);
            props.onFocus?.(e);
          }}
          onBlur={(e) => {
            setFocused(false);
            props.onBlur?.(e);
          }}
          {...props}
        />
        {(error && errorMessage) || helperText ? (
          <span
            className={clsx(helperSizeStyles[size], error ? 'text-red-500' : 'text-text-secondary')}
          >
            {error && errorMessage ? errorMessage : helperText}
          </span>
        ) : null}
      </div>
    );
  }
);

Input.displayName = 'Input';
