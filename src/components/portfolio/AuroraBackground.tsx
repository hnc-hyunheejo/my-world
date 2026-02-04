"use client";

export function AuroraBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a1a] via-[#0f0f2a] to-[#0a0a1a]" />

      {/* Noise texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Floating orbs */}
      {/* Mint orb - top right */}
      <div
        className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full animate-float-slow"
        style={{
          background:
            "radial-gradient(circle, rgba(110, 231, 183, 0.4) 0%, rgba(110, 231, 183, 0) 70%)",
          filter: "blur(60px)",
        }}
      />

      {/* Purple orb - center left */}
      <div
        className="absolute top-1/3 -left-48 w-[600px] h-[600px] rounded-full animate-float"
        style={{
          background:
            "radial-gradient(circle, rgba(167, 139, 250, 0.35) 0%, rgba(167, 139, 250, 0) 70%)",
          filter: "blur(80px)",
          animationDelay: "-3s",
        }}
      />

      {/* Cyan orb - bottom right */}
      <div
        className="absolute bottom-0 right-1/4 w-[450px] h-[450px] rounded-full animate-float-slow"
        style={{
          background:
            "radial-gradient(circle, rgba(34, 211, 238, 0.3) 0%, rgba(34, 211, 238, 0) 70%)",
          filter: "blur(70px)",
          animationDelay: "-5s",
        }}
      />

      {/* Peach orb - top center */}
      <div
        className="absolute top-1/4 left-1/3 w-[350px] h-[350px] rounded-full animate-float"
        style={{
          background:
            "radial-gradient(circle, rgba(251, 191, 36, 0.2) 0%, rgba(251, 191, 36, 0) 70%)",
          filter: "blur(50px)",
          animationDelay: "-7s",
        }}
      />

      {/* Small accent orbs */}
      <div
        className="absolute top-2/3 right-1/3 w-[200px] h-[200px] rounded-full animate-pulse-glow"
        style={{
          background:
            "radial-gradient(circle, rgba(110, 231, 183, 0.5) 0%, transparent 70%)",
        }}
      />

      <div
        className="absolute bottom-1/4 left-1/4 w-[150px] h-[150px] rounded-full animate-pulse-glow"
        style={{
          background:
            "radial-gradient(circle, rgba(167, 139, 250, 0.4) 0%, transparent 70%)",
          animationDelay: "-2s",
        }}
      />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "100px 100px",
        }}
      />
    </div>
  );
}
