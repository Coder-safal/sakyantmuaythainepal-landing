interface Props {
  className?: string;
}

export function YantraMark({ className }: Props) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <circle cx="32" cy="32" r="30" stroke="currentColor" strokeWidth="1" opacity="0.5" />
      <circle cx="32" cy="32" r="24" stroke="currentColor" strokeWidth="1" />
      <rect
        x="14"
        y="14"
        width="36"
        height="36"
        stroke="currentColor"
        strokeWidth="1"
        transform="rotate(45 32 32)"
      />
      <rect x="20" y="20" width="24" height="24" stroke="currentColor" strokeWidth="1" />
      <circle cx="32" cy="32" r="3" fill="currentColor" />
      <path
        d="M32 4 L34 14 L32 12 L30 14 Z"
        fill="currentColor"
        opacity="0.8"
      />
      <path
        d="M32 60 L30 50 L32 52 L34 50 Z"
        fill="currentColor"
        opacity="0.8"
      />
      <path
        d="M4 32 L14 30 L12 32 L14 34 Z"
        fill="currentColor"
        opacity="0.8"
      />
      <path
        d="M60 32 L50 34 L52 32 L50 30 Z"
        fill="currentColor"
        opacity="0.8"
      />
    </svg>
  );
}
