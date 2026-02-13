import React from 'react';
import clsx from 'clsx';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'tertiary' | 'bare' | 'soul';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}) => {
  const baseStyles = 'rounded-[1px] font-small transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 cursor-pointer';
  
  const variants = {
    primary: 'bg-primary-default text-white hover:bg-primary-hover active:bg-primary-pressed dark:bg-primary-700 dark:hover:bg-primary-600 dark:active:bg-primary-800',
    secondary: 'bg-secondary-600 text-white hover:bg-secondary-700 active:bg-secondary-800 focus:ring-secondary-500',
    tertiary: 'border-2 border-primary-600 text-primary-600 hover:bg-primary-50 active:bg-primary-100 focus:ring-primary-500',
    bare: 'bg-transparent text-gray-700 border border-gray-300 hover:bg-gray-100 active:bg-gray-200 focus:ring-gray-500',
    soul: 'bg-soul-600 text-white hover:bg-soul-700 active:bg-soul-800 focus:ring-soul-500'
  };

  const sizes = {
    sm: 'px-[12px] py-[6px] text-sm',
    md: 'px-[20px] py-[10px] text-[12px]',
    lg: 'px-[24px] py-[12px] text-lg',
  };

  return (
    <button
      className={clsx(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
};