import React, { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  onClick?: () => void;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  hover = false,
  onClick,
}) => {
  return (
    <div
      className={`
        bg-white rounded-lg shadow-md p-6
        ${hover ? 'hover:shadow-xl transition-shadow duration-300 cursor-pointer' : ''}
        ${className}
      `}
      onClick={onClick}
    >
      {children}
    </div>
  );
};