import React from "react";

interface InstagramIconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
  size?: number | string;
  badge?: boolean;
}

/**
 * Authentic Instagram vector icon.
 * Can be rendered as standard currentColor SVG or as an authentic colorful badge.
 */
export default function InstagramIcon({
  className = "w-5 h-5",
  size,
  badge = false,
  ...props
}: InstagramIconProps) {
  if (badge) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width={size || 24}
        height={size || 24}
        className={className}
        aria-hidden="true"
        {...props}
      >
        <defs>
          <radialGradient
            id="instaGrad"
            cx="20%"
            cy="110%"
            r="120%"
            gradientTransform="matrix(0.5 0 0 0.5 0.5 0.5)"
          >
            <stop offset="0%" stopColor="#fdf497" />
            <stop offset="15%" stopColor="#fdf497" />
            <stop offset="50%" stopColor="#fd5949" />
            <stop offset="70%" stopColor="#d6249f" />
            <stop offset="100%" stopColor="#285AEB" />
          </radialGradient>
        </defs>
        <rect width="24" height="24" rx="6" fill="url(#instaGrad)" />
        <rect
          x="4.5"
          y="4.5"
          width="15"
          height="15"
          rx="4"
          fill="none"
          stroke="#ffffff"
          strokeWidth="1.8"
        />
        <circle
          cx="12"
          cy="12"
          r="3.5"
          fill="none"
          stroke="#ffffff"
          strokeWidth="1.8"
        />
        <circle cx="16.5" cy="7.5" r="1" fill="#ffffff" />
      </svg>
    );
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      width={size}
      height={size}
      className={className}
      aria-hidden="true"
      {...props}
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}
