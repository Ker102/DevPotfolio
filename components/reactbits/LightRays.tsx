"use client";

interface LightRaysProps {
  className?: string;
  color?: string;
}

export default function LightRays({ className = "", color = "#94f0ff" }: LightRaysProps) {
  return (
    <div className={`pointer-events-none ${className}`} aria-hidden>
      <div className="relative h-full w-full overflow-hidden">
        {[0, 1, 2].map((idx) => (
          <div
            key={idx}
            className="absolute inset-0 opacity-40 blur-3xl mix-blend-screen"
            style={{
              background: `linear-gradient(180deg, ${color}40, transparent)`,
              transform: `skewY(${idx * 6 - 10}deg) translateX(${idx * 20 - 20}%)`,
              animation: `rayDrift ${18 + idx * 4}s linear infinite`,
            }}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(1,3,11,0.75)] via-transparent to-transparent" />
        <style jsx>{`
          @keyframes rayDrift {
            0% {
              transform: translateY(-20%) scaleY(0.9);
            }
            50% {
              transform: translateY(0%) scaleY(1.1);
            }
            100% {
              transform: translateY(-10%) scaleY(0.95);
            }
          }
        `}</style>
      </div>
    </div>
  );
}
