"use client";

export function FlowBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#050510] via-[#0a0a20] to-[#050510]" />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(16, 185, 129, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(16, 185, 129, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Floating orbs - Emerald (Primary) */}
      <div
        className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full animate-float-slow"
        style={{
          background:
            "radial-gradient(circle, rgba(16, 185, 129, 0.25) 0%, rgba(16, 185, 129, 0) 70%)",
          filter: "blur(80px)",
        }}
      />

      {/* Violet orb - left */}
      <div
        className="absolute top-1/3 -left-60 w-[500px] h-[500px] rounded-full animate-float"
        style={{
          background:
            "radial-gradient(circle, rgba(139, 92, 246, 0.2) 0%, rgba(139, 92, 246, 0) 70%)",
          filter: "blur(70px)",
          animationDelay: "-3s",
        }}
      />

      {/* Cyan orb - bottom */}
      <div
        className="absolute -bottom-40 right-1/4 w-[450px] h-[450px] rounded-full animate-float-slow"
        style={{
          background:
            "radial-gradient(circle, rgba(6, 182, 212, 0.2) 0%, rgba(6, 182, 212, 0) 70%)",
          filter: "blur(60px)",
          animationDelay: "-5s",
        }}
      />

      {/* Small accent orbs */}
      <div
        className="absolute top-1/4 right-1/4 w-[200px] h-[200px] rounded-full animate-pulse-glow"
        style={{
          background:
            "radial-gradient(circle, rgba(16, 185, 129, 0.4) 0%, transparent 70%)",
        }}
      />

      <div
        className="absolute bottom-1/3 left-1/3 w-[150px] h-[150px] rounded-full animate-pulse-glow"
        style={{
          background:
            "radial-gradient(circle, rgba(139, 92, 246, 0.3) 0%, transparent 70%)",
          animationDelay: "-2s",
        }}
      />

      {/* Flow connection lines SVG */}
      <svg
        className="absolute inset-0 w-full h-full opacity-20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="lineGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#10B981" stopOpacity="0" />
            <stop offset="50%" stopColor="#10B981" stopOpacity="1" />
            <stop offset="100%" stopColor="#10B981" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="lineGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0" />
            <stop offset="50%" stopColor="#8B5CF6" stopOpacity="1" />
            <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Curved flow lines */}
        <path
          d="M-100,200 Q200,100 400,300 T800,250"
          stroke="url(#lineGradient1)"
          strokeWidth="1"
          fill="none"
          className="animate-connection"
        />
        <path
          d="M-50,400 Q300,350 500,500 T1000,400"
          stroke="url(#lineGradient2)"
          strokeWidth="1"
          fill="none"
          className="animate-connection"
          style={{ animationDelay: "-0.5s" }}
        />
        <path
          d="M100,600 Q400,500 600,650 T1200,550"
          stroke="url(#lineGradient1)"
          strokeWidth="1"
          fill="none"
          className="animate-connection"
          style={{ animationDelay: "-1s" }}
        />
      </svg>

      {/* Decorative flow nodes */}
      <div className="absolute top-[15%] left-[10%] w-3 h-3 rounded-full bg-[#10B981]/40 animate-pulse-node" />
      <div
        className="absolute top-[25%] right-[20%] w-2 h-2 rounded-full bg-[#8B5CF6]/40 animate-pulse-node"
        style={{ animationDelay: "-0.5s" }}
      />
      <div
        className="absolute top-[60%] left-[25%] w-2 h-2 rounded-full bg-[#06B6D4]/40 animate-pulse-node"
        style={{ animationDelay: "-1s" }}
      />
      <div
        className="absolute bottom-[30%] right-[15%] w-3 h-3 rounded-full bg-[#10B981]/40 animate-pulse-node"
        style={{ animationDelay: "-1.5s" }}
      />

      {/* Noise texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
}
