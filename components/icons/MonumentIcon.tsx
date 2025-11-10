
import React from 'react';

interface MonumentIconProps {
  className?: string;
}

export const MonumentIcon: React.FC<MonumentIconProps> = ({ className }) => (
  <svg
    viewBox="0 0 100 100"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    fill="currentColor"
  >
    <path d="M50 0 L60 20 L75 25 L70 40 L80 45 L75 60 L85 70 L15 70 L25 60 L20 45 L30 40 L25 25 L40 20 Z" />
    <rect x="10" y="70" width="80" height="5" />
    <rect x="5" y="75" width="90" height="5" />
    <rect x="0" y="80" width="100" height="20" />
  </svg>
);
