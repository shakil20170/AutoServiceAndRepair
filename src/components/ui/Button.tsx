import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  onClick?: () => void;
  rightIcon?: React.ReactNode;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  rightIcon,
  className = '',
  type = 'button',
  disabled = false,
}) => {
  const baseStyles = 'font-medium rounded-md inline-flex items-center justify-center transition-all duration-300';
  
  const variantStyles = {
    primary: 'bg-red-500 hover:bg-red-600 text-white shadow-sm hover:shadow',
    secondary: 'bg-blue-900 hover:bg-blue-800 text-white shadow-sm hover:shadow',
    outline: 'bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900',
  };
  
  const sizeStyles = {
    sm: 'text-sm py-1.5 px-3',
    md: 'text-base py-2.5 px-5',
    lg: 'text-lg py-3 px-6',
  };
  
  const styles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;
  
  if (href) {
    return (
      <a
        href={href}
        className={styles}
        onClick={onClick}
      >
        {children}
        {rightIcon && <span className="ml-2">{rightIcon}</span>}
      </a>
    );
  }
  
  return (
    <button
      type={type}
      className={styles}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
      {rightIcon && <span className="ml-2">{rightIcon}</span>}
    </button>
  );
};

export default Button;