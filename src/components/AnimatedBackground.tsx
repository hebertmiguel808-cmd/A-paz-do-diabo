import React, { useMemo } from "react";

export const AnimatedBackground: React.FC = () => {
  // Generate random floating particles with fixed seeds
  const particles = useMemo(() => {
    return Array.from({ length: 24 }).map((_, i) => ({
      id: i,
      size: (i % 3) + 2, // 2px to 4px
      left: `${(i * 4.1 + 3) % 96}%`,
      duration: `${14 + (i % 10) * 2}s`,
      delay: `${(i * 1.3) % 12}s`,
      opacity: 0.15 + ((i % 5) * 0.08),
    }));
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {/* Base deep background */}
      <div className="absolute inset-0 bg-[#08090B]" />

      {/* Modern animated ambient orbs with organic slow drifting */}
      <div className="absolute top-[5%] left-[10%] w-[650px] h-[650px] rounded-full bg-[#D9AD62]/8 blur-[160px] animate-float-slow" />
      <div className="absolute top-[35%] right-[5%] w-[600px] h-[600px] rounded-full bg-[#521F2B]/12 blur-[170px] animate-float-reverse" />
      <div className="absolute top-[65%] left-[15%] w-[700px] h-[700px] rounded-full bg-[#E5A823]/7 blur-[180px] animate-float-slow" />
      <div className="absolute bottom-[5%] right-[15%] w-[650px] h-[650px] rounded-full bg-[#D9AD62]/8 blur-[160px] animate-float-reverse" />

      {/* Floating golden ember motes drifting upward */}
      <div className="absolute inset-0 overflow-hidden">
        {particles.map((p) => (
          <span
            key={p.id}
            className="absolute rounded-full bg-[#F0C77C] shadow-[0_0_8px_rgba(240,199,124,0.9)]"
            style={{
              width: `${p.size}px`,
              height: `${p.size}px`,
              left: p.left,
              bottom: "-20px",
              opacity: p.opacity,
              animation: `particle-drift ${p.duration} linear infinite`,
              animationDelay: p.delay,
            }}
          />
        ))}
      </div>

      {/* Subtle radial vignette to focus content */}
      <div className="absolute inset-0 bg-radial from-transparent via-transparent to-[#08090B]/60 pointer-events-none" />
    </div>
  );
};
