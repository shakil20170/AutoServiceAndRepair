import React from 'react';

interface LinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export const Link: React.FC<LinkProps> = ({ 
  href, 
  children, 
  className = '', 
  onClick 
}) => {
  return (
    <a
      href={href}
      onClick={onClick}
      className={`text-blue-900 font-medium hover:text-red-500 transition-colors duration-300 ${className}`}
    >
      {children}
    </a>
  );
};