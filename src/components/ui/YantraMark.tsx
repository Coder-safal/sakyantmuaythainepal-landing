interface Props {
  className?: string;
  detailed?: boolean;
}

export function YantraMark({ className, detailed = false }: Props) {
  if (detailed) {
    return (
      <svg
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-hidden="true"
      >
        {/* Outer rings */}
        <circle cx="100" cy="100" r="96" stroke="currentColor" strokeWidth="0.6" opacity="0.35" />
        <circle cx="100" cy="100" r="88" stroke="currentColor" strokeWidth="0.5" opacity="0.55" />
        <circle cx="100" cy="100" r="72" stroke="currentColor" strokeWidth="0.6" />

        {/* Squared rotated frames (Yantra-style) */}
        <rect
          x="36" y="36" width="128" height="128"
          stroke="currentColor" strokeWidth="0.6"
          transform="rotate(45 100 100)" opacity="0.85"
        />
        <rect
          x="46" y="46" width="108" height="108"
          stroke="currentColor" strokeWidth="0.5" opacity="0.5"
        />

        {/* 8-point star (compass / 8 directions) */}
        <g stroke="currentColor" strokeWidth="0.6" opacity="0.8">
          <line x1="100" y1="12" x2="100" y2="188" />
          <line x1="12" y1="100" x2="188" y2="100" />
          <line x1="36" y1="36" x2="164" y2="164" />
          <line x1="164" y1="36" x2="36" y2="164" />
        </g>

        {/* Lotus petals (top) */}
        <g fill="currentColor" opacity="0.85">
          <path d="M100 6 L106 22 L100 18 L94 22 Z" />
          <path d="M100 194 L94 178 L100 182 L106 178 Z" />
          <path d="M6 100 L22 106 L18 100 L22 94 Z" />
          <path d="M194 100 L178 94 L182 100 L178 106 Z" />
        </g>

        {/* Inner mandala — 8 small circles */}
        <g stroke="currentColor" strokeWidth="0.5" opacity="0.7" fill="none">
          <circle cx="100" cy="58" r="6" />
          <circle cx="100" cy="142" r="6" />
          <circle cx="58" cy="100" r="6" />
          <circle cx="142" cy="100" r="6" />
          <circle cx="71" cy="71" r="6" />
          <circle cx="129" cy="129" r="6" />
          <circle cx="129" cy="71" r="6" />
          <circle cx="71" cy="129" r="6" />
        </g>

        {/* Inner triangle (upward — fire / spirit) */}
        <path
          d="M100 70 L124 116 L76 116 Z"
          stroke="currentColor" strokeWidth="0.6" fill="none" opacity="0.85"
        />
        {/* Inner triangle (downward — earth / body) */}
        <path
          d="M100 130 L76 84 L124 84 Z"
          stroke="currentColor" strokeWidth="0.6" fill="none" opacity="0.85"
        />

        {/* Center bindu */}
        <circle cx="100" cy="100" r="3.5" fill="currentColor" />
        <circle cx="100" cy="100" r="9" stroke="currentColor" strokeWidth="0.5" opacity="0.5" />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <circle cx="32" cy="32" r="30" stroke="currentColor" strokeWidth="0.8" opacity="0.5" />
      <circle cx="32" cy="32" r="24" stroke="currentColor" strokeWidth="0.8" />
      <rect
        x="14" y="14" width="36" height="36"
        stroke="currentColor" strokeWidth="0.8"
        transform="rotate(45 32 32)"
      />
      <rect x="20" y="20" width="24" height="24" stroke="currentColor" strokeWidth="0.7" opacity="0.7" />
      <path d="M32 16 L40 32 L32 48 L24 32 Z" stroke="currentColor" strokeWidth="0.7" fill="none" />
      <circle cx="32" cy="32" r="2.5" fill="currentColor" />
      <path d="M32 4 L34 14 L32 12 L30 14 Z" fill="currentColor" opacity="0.85" />
      <path d="M32 60 L30 50 L32 52 L34 50 Z" fill="currentColor" opacity="0.85" />
      <path d="M4 32 L14 30 L12 32 L14 34 Z" fill="currentColor" opacity="0.85" />
      <path d="M60 32 L50 34 L52 32 L50 30 Z" fill="currentColor" opacity="0.85" />
    </svg>
  );
}
