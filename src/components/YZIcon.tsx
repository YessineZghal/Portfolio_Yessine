import React from 'react';

interface YZIconProps {
  size?: number;
  className?: string;
  variant?: 'default' | 'gradient' | 'minimal' | 'outlined';
}

const YZIcon: React.FC<YZIconProps> = ({ 
  size = 40, 
  className = '', 
  variant = 'default' 
}) => {
  const getIconContent = () => {
    switch (variant) {
      case 'gradient':
        return (
          <svg
            width={size}
            height={size}
            viewBox="0 0 100 100"
            className={className}
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="yzGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3B82F6" />
                <stop offset="50%" stopColor="#1D4ED8" />
                <stop offset="100%" stopColor="#1E40AF" />
              </linearGradient>
              <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
                <feDropShadow dx="2" dy="2" stdDeviation="3" floodColor="#00000030"/>
              </filter>
            </defs>
            <circle 
              cx="50" 
              cy="50" 
              r="45" 
              fill="url(#yzGradient)" 
              filter="url(#shadow)"
            />
            <text
              x="50"
              y="58"
              textAnchor="middle"
              fontSize="32"
              fontWeight="bold"
              fontFamily="system-ui, -apple-system, sans-serif"
              fill="white"
              letterSpacing="-1px"
            >
              YZ
            </text>
          </svg>
        );

      case 'minimal':
        return (
          <svg
            width={size}
            height={size}
            viewBox="0 0 100 100"
            className={className}
            xmlns="http://www.w3.org/2000/svg"
          >
            <text
              x="50"
              y="58"
              textAnchor="middle"
              fontSize="36"
              fontWeight="700"
              fontFamily="system-ui, -apple-system, sans-serif"
              fill="currentColor"
              letterSpacing="-2px"
            >
              YZ
            </text>
          </svg>
        );

      case 'outlined':
        return (
          <svg
            width={size}
            height={size}
            viewBox="0 0 100 100"
            className={className}
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle 
              cx="50" 
              cy="50" 
              r="42" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="3"
            />
            <text
              x="50"
              y="58"
              textAnchor="middle"
              fontSize="30"
              fontWeight="bold"
              fontFamily="system-ui, -apple-system, sans-serif"
              fill="currentColor"
              letterSpacing="-1px"
            >
              YZ
            </text>
          </svg>
        );

      default: // 'default'
        return (
          <svg
            width={size}
            height={size}
            viewBox="0 0 100 100"
            className={className}
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="yzDefaultGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#2563EB" />
                <stop offset="100%" stopColor="#1D4ED8" />
              </linearGradient>
            </defs>
            <circle 
              cx="50" 
              cy="50" 
              r="45" 
              fill="url(#yzDefaultGradient)"
              className="drop-shadow-lg"
            />
            <text
              x="50"
              y="58"
              textAnchor="middle"
              fontSize="32"
              fontWeight="bold"
              fontFamily="system-ui, -apple-system, sans-serif"
              fill="white"
              letterSpacing="-1px"
            >
              YZ
            </text>
          </svg>
        );
    }
  };

  return getIconContent();
};

export default YZIcon;
