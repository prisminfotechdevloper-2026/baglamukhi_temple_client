interface GoldenFoliageDecorProps {
  position?: "left-bottom" | "right-bottom";
  className?: string;
}

export default function GoldenFoliageDecor({
  position = "left-bottom",
  className = "",
}: GoldenFoliageDecorProps) {
  const isRight = position === "right-bottom";
  return (
    <div
      className={`absolute ${
        isRight ? "-right-2 bottom-0 scale-x-[-1]" : "-left-2 bottom-0"
      } pointer-events-none opacity-40 hidden sm:block ${className}`}
      aria-hidden="true"
    >
      <svg width="90" height="130" viewBox="0 0 90 130" fill="none">
        <path
          d="M5 125 C 20 85, 45 60, 80 40"
          stroke="#D4AF37"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        {/* Leaf 1 */}
        <path
          d="M20 105 C 10 90, 15 75, 30 82 C 40 88, 32 102, 20 105 Z"
          fill="#C9A063"
          fillOpacity="0.45"
          stroke="#B8860B"
          strokeWidth="0.8"
        />
        {/* Leaf 2 */}
        <path
          d="M38 85 C 42 68, 58 65, 55 80 C 52 92, 40 92, 38 85 Z"
          fill="#D4AF37"
          fillOpacity="0.5"
          stroke="#B8860B"
          strokeWidth="0.8"
        />
        {/* Leaf 3 */}
        <path
          d="M58 60 C 55 42, 70 35, 78 48 C 82 58, 68 67, 58 60 Z"
          fill="#C9A063"
          fillOpacity="0.45"
          stroke="#B8860B"
          strokeWidth="0.8"
        />
        {/* Small accents */}
        <circle cx="28" cy="98" r="2" fill="#D4AF37" fillOpacity="0.6" />
        <circle cx="48" cy="74" r="2.5" fill="#D4AF37" fillOpacity="0.6" />
        <circle cx="70" cy="50" r="2" fill="#D4AF37" fillOpacity="0.6" />
      </svg>
    </div>
  );
}
