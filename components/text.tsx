import React from 'react';

type Props = {
  children: React.ReactNode;
  className?: string;
};

export function Text({ children, className = '' }: Props) {
  return (
    <p
      className={`text-base md:text-lg font-normal text-gray-900 dark:text-gray-300 ${className}`}
    >
      {children}
    </p>
  );
}
