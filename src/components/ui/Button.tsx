import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'whatsapp';
  children: React.ReactNode;
}

export function Button({ variant = 'primary', children, className = '', ...props }: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center rounded-xl px-6 py-3 font-semibold transition duration-300 shadow-md';
  
  const variants = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 hover:-translate-y-1',
    secondary: 'bg-white border border-blue-600 text-blue-600 hover:bg-blue-50 hover:-translate-y-1',
    outline: 'border border-surface-container text-text hover:border-blue-600 hover:text-blue-600',
    ghost: 'text-text hover:text-blue-600 hover:bg-surface shadow-none',
    whatsapp: 'bg-green-500 text-white hover:bg-green-600 hover:-translate-y-1'
  };

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}
