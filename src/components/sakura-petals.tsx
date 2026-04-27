/** Renders falling sakura petals with pure CSS — very lightweight */
export function SakuraPetals({ count = 14 }: { count?: number }) {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const petals = Array.from({ length: count });
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {petals.map((_, i) => {
        const left = Math.random() * 100;
        const delay = Math.random() * 12;
        const duration = 9 + Math.random() * 8;
        const size = 8 + Math.random() * 10;
        const opacity = 0.5 + Math.random() * 0.4;
        return (
          <span
            key={i}
            className="sakura-petal"
            style={{
              left: `${left}%`,
              width: `${size}px`,
              height: `${size}px`,
              animationDelay: `${delay}s`,
              animationDuration: `${duration}s`,
              opacity,
            }}
          />
        );
      })}
    </div>
  );
}
