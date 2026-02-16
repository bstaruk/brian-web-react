interface SiteLogoProps {
  size?: number;
}

export function SiteLogo({ size = 32 }: SiteLogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Circle ring (stroked arc as path) */}
      <path
        d="M50 5 A45 45 0 1 1 49.99 5 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="10"
      />
      {/* "B" letterform (outlined to path, centered at 50,50) */}
      <path
        fill="currentColor"
        d="M33.6 27.8h16.3c4.5 0 8.2.9 11 2.7 2.8 1.7 4.2 4.5 4.2 8.4 0 2.6-.8 4.6-2.3 6.3-1.5 1.6-3.3 2.6-5.5 3.1v.3c2.8.5 5.1 1.7 6.7 3.6 1.6 1.8 2.5 4.3 2.5 7.3 0 4.2-1.5 7.3-4.6 9.5-3 2.2-7.1 3.2-12.1 3.2H33.6V27.8zm9.8 18.1h6.3c2.4 0 4.1-.4 5.3-1.4 1.2-1 1.7-2.4 1.7-4.1 0-1.6-.6-2.9-1.8-3.8-1.3-.9-3.1-1.3-5.6-1.3h-5.9v10.6zm0 8.4v11.4h6.7c2.5 0 4.4-.5 5.7-1.5 1.3-1.1 1.9-2.6 1.9-4.5 0-1.8-.7-3.2-2-4.1-1.4-.9-3.5-1.3-6.2-1.3h-5.9z"
      />
    </svg>
  );
}
