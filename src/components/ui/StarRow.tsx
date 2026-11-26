export function StarRow({ count = 5, label }: { count?: number; label?: string }) {
  return (
    <div
      className="flex items-center gap-1 text-gold"
      role="img"
      aria-label={label ?? `${count} out of 5 stars`}
    >
      {Array.from({ length: count }).map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 24 24"
          className="h-5 w-5 fill-current"
          aria-hidden="true"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.56 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}
