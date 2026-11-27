interface VeriLabsLogoProps {
  variant?: "dark" | "light";
  size?: "sm" | "md";
  showWordmark?: boolean;
}

export default function VeriLabsLogo({
  variant = "dark",
  size = "md",
  showWordmark = true,
}: VeriLabsLogoProps) {
  const fill = variant === "dark" ? "#0E1014" : "#FFFFFF";
  const textColor = variant === "dark" ? "text-[#0E1014]" : "text-white";
  const dimensions = size === "sm" ? { w: 22, h: 19 } : { w: 30, h: 26 };

  return (
    <span className="inline-flex items-center gap-2.5 group">
      <svg
        width={dimensions.w}
        height={dimensions.h}
        viewBox="0 0 120 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="transition-transform duration-300 group-hover:scale-105"
        aria-hidden="true"
      >
        <path d="M12 12 L48 76 L56 64 L26 12 Z" fill={fill} />
        <path d="M32 12 L58 58 L65 47 L46 12 Z" fill={fill} />
        <path d="M74 12 L42 68 L50 80 L88 12 Z" fill={fill} />
        <path
          d="M94 12 L56 79 C53.5 83.5 56 88 60 88 C62.5 88 64.5 86.5 66 84 L108 12 Z"
          fill={fill}
        />
      </svg>
      {showWordmark && (
        <span
          className={`${size === "sm" ? "text-base" : "text-lg"} font-semibold tracking-tight ${textColor}`}
        >
          veriLabs
        </span>
      )}
    </span>
  );
}
