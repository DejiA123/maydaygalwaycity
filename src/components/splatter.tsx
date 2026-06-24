type Props = { className?: string; color?: string; rotate?: number };

export function Splatter({ className, color = "currentColor", rotate = 0 }: Props) {
  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      style={{ transform: `rotate(${rotate}deg)` }}
      fill={color}
      aria-hidden="true"
    >
      <path d="M100 10c4 18 12 30 26 36 14 7 30 5 44 16-8 6-18 9-20 18-2 10 6 22 18 28-14 6-30 4-38 14-8 9-6 24-16 32-6-12-12-22-24-22s-22 10-34 6c4-12 14-20 12-32-2-10-14-16-22-26 12-6 26-2 36-12 8-9 6-26 18-58z" />
      <circle cx="40" cy="60" r="6" />
      <circle cx="170" cy="50" r="4" />
      <circle cx="20" cy="150" r="5" />
      <circle cx="180" cy="160" r="7" />
      <circle cx="150" cy="180" r="3" />
      <circle cx="60" cy="180" r="4" />
    </svg>
  );
}
