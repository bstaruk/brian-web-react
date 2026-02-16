interface NidoBinIconProps {
  size?: number;
}

export function NidoBinIcon({ size = 24 }: NidoBinIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="25 29 150 150"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect
        x="25"
        y="29"
        width="150"
        height="150"
        rx="36"
        fill="currentColor"
        opacity={0.25}
      />
      <path
        fill="currentColor"
        transform="translate(100 104) scale(0.92) translate(-100 -104)"
        d="M47 65 A8 8 0 0 1 63 65 L63 115 C63 139.33 137 139.33 137 115 L137 65 A8 8 0 0 1 153 65 L153 115 C153 160.66 47 160.66 47 115 Z M47 115 L63 115 L63 142.5 A8 8 0 0 1 47 142.5 Z"
      />
    </svg>
  );
}
