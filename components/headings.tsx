import React from 'react';

type Props = Readonly<{
  level: 'h1' | 'h2' | 'h3' | 'h4' | 'h5';
  children: React.ReactNode;
  className?: string;
}>;

export function Heading({ level, children, className = '' }: Props) {
  const baseStyles = 'font-bold capitalize';

  const levelStyles = {
    h1: 'text-4xl md:text-6xl text-gray-900 dark:text-white',
    h2: 'text-3xl md:text-5xl text-gray-900 dark:text-white',
    h3: 'text-xl md:text-2xl text-orange-500 font-medium',
    h4: 'text-xl md:text-2xl text-gray-900 dark:text-white font-medium',
    h5: 'text-base md:text-lg text-gray-900 dark:text-white font-medium',
  };

  const combinedClassName = `${baseStyles} ${levelStyles[level]} ${className}`;

  return React.createElement(level, { className: combinedClassName }, children);
}
