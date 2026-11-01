import React, { useMemo } from "react";

export const FireSparksEffect: React.FC = () => {
  // Generate sparks with varied positions, durations, delays, and horizontal drifts
  const sparks = useMemo(() => {
    return Array.from({ length: 26 }).map((_, i) => {
      // Alternate drifts left and right
      const drift = (i % 2 === 0 ? 1 : -1) * (10 + (i * 3.7) % 35);
      const isHotWhite = i % 4 === 0;
      const isBrightGold = i % 3 === 0;

      return {
        id: i,
        size: (i % 3) + 2.5, // 2.5px to 4.5px
        left: `${18 + ((i * 11) % 64)}%`, // clustered behind the book/character
        bottom: `${10 + ((i * 7) % 25)}%`,
        duration: `${2.2 + (i % 5) * 0.5}s`,
        delay: `${(i * 0.28) % 3.2}s`,
        drift: `${drift}px`,
        colorClass: isHotWhite
          ? "bg-[#FFF8E1] shadow-[0_0_8px_#FFF,0_0_15px_#FFA000]"
          : isBrightGold
          ? "bg-[#FFD54F] shadow-[0_0_8px_#FFD54F,0_0_16px_#FF6D00]"
          : "bg-[#FF7043] shadow-[0_0_7px_#FF7043,0_0_14px_#D50000]",
      };
    });
  }, []);

  return (
    <div
      className="absolute inset-0 pointer-events-none overflow-visible flex justify-center items-center"
      aria-hidden="true"
    >
      {/* 1. Deep Core Flame Aura (Pulsing Fire Heart) */}
      <div className="absolute w-[320px] h-[360px] sm:w-[420px] sm:h-[460px] rounded-full bg-radial from-[#FF6D00]/30 via-[#E65100]/20 to-transparent blur-[50px] animate-fire-pulse" />

      {/* 2. Hot White-Gold Radiance Center */}
      <div className="absolute w-[240px] h-[280px] sm:w-[320px] sm:h-[360px] rounded-full bg-radial from-[#FFE082]/35 via-[#FF9100]/20 to-transparent blur-[40px] animate-pulse" />

      {/* 3. Outer Fiery Heat Haze */}
      <div className="absolute w-[440px] h-[480px] sm:w-[560px] sm:h-[600px] rounded-full bg-radial from-[#FF3D00]/15 via-[#D9AD62]/10 to-transparent blur-[90px]" />

      {/* 4. Rising Fire Sparks / Embers */}
      <div className="absolute inset-0 overflow-visible">
        {sparks.map((spark) => (
          <span
            key={spark.id}
            className={`absolute rounded-full animate-spark ${spark.colorClass}`}
            style={
              {
                width: `${spark.size}px`,
                height: `${spark.size}px`,
                left: spark.left,
                bottom: spark.bottom,
                "--duration": spark.duration,
                "--delay": spark.delay,
                "--drift": spark.drift,
              } as React.CSSProperties
            }
          />
        ))}
      </div>
    </div>
  );
};
