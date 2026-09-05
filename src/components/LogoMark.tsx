type LogoMarkProps = {
  /** Lato in pixel del quadrato che contiene il marchio. */
  size?: number;
  /** color: fondo chiaro · negative: fondo scuro · mono: eredita currentColor */
  variant?: "color" | "negative" | "mono";
  className?: string;
};

/**
 * Marchio Studio Tecnico Agrotech.
 *
 * Tre isoipse che formano una A: profilo esterno, terrazza intermedia e
 * controforma. Sotto i 24 px va usata la versione semplificata (favicon),
 * che rinuncia alla linea intermedia — vedi public/favicon.png.
 */
export function LogoMark({ size = 32, variant = "color", className }: LogoMarkProps) {
  const [outer, middle, inner] =
    variant === "negative"
      ? ["var(--paper)", "var(--green-light)", "var(--accent-light)"]
      : variant === "mono"
        ? ["currentColor", "currentColor", "currentColor"]
        : ["var(--ink)", "var(--green2)", "var(--accent)"];

  return (
    <svg
      viewBox="0 0 100 100"
      width={size}
      height={size}
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      role="img"
      aria-label="Studio Tecnico Agrotech"
      className={className}
    >
      <path d="M8 94 L50 8 L92 94" stroke={outer} strokeWidth="6" />
      <path d="M26 94 L50 45 L74 94" stroke={middle} strokeWidth="5.2" />
      <path d="M37 82 L50 57 L63 82 Z" stroke={inner} strokeWidth="4.4" />
    </svg>
  );
}
