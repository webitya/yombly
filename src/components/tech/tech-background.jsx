"use client"

export default function TechBackground({ className = "" }) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden select-none [contain:paint] ${className}`}>
      {/* Moving grid */}
      <div
        className="absolute inset-0 opacity-50"
        style={{ maskImage: "radial-gradient(60% 60% at 70% 50%, black 30%, transparent 80%)" }}
      >
        <div className="absolute -inset-[120%] animate-[gridMove_14s_linear_infinite] [background:repeating-linear-gradient(0deg,transparent_0px,transparent_22px,rgba(255,255,255,0.07)_22px,rgba(255,255,255,0.07)_23px),repeating-linear-gradient(90deg,transparent_0px,transparent_22px,rgba(255,255,255,0.07)_22px,rgba(255,255,255,0.07)_23px)]" />
      </div>

      {/* Rotating dashed rings */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2" style={{ transform: "translate(10%, -50%)" }}>
        <div className="relative h-[420px] w-[420px]">
          <div className="absolute inset-0 rounded-full border border-dashed border-white/10 animate-[spin_24s_linear_infinite]" />
          <div className="absolute inset-6 rounded-full border border-dashed border-white/10 animate-[spin_18s_linear_infinite_reverse]" />
          <div className="absolute inset-12 rounded-full border border-dashed border-white/10 animate-[spin_32s_linear_infinite]" />
          <div className="absolute inset-20 rounded-full border border-white/5" />
        </div>
      </div>

      {/* Circuit lines */}
      <div className="absolute right-0 top-0 h-full w-[55%] opacity-70 mix-blend-soft-light">
        <div className="absolute left-8 top-12 h-[2px] w-[90%] bg-gradient-to-r from-transparent via-white/30 to-transparent animate-[dash_10s_linear_infinite]" />
        <div className="absolute left-16 top-28 h-[2px] w-[85%] bg-gradient-to-r from-transparent via-white/20 to-transparent animate-[dash_12s_linear_infinite]" />
        <div className="absolute left-24 top-44 h-[2px] w-[80%] bg-gradient-to-r from-transparent via-white/25 to-transparent animate-[dash_14s_linear_infinite]" />
      </div>

      {/* Particles */}
      <div className="absolute inset-0">
        {Array.from({ length: 18 }).map((_, i) => (
          <span
            key={i}
            className="absolute block h-[2px] w-[2px] rounded-full bg-white/50"
            style={{
              right: `${15 + ((i * 5) % 60)}%`,
              top: `${(i * 13) % 90}%`,
              animation: `floatY ${10 + (i % 5)}s ease-in-out ${i * 0.35}s infinite`,
              transform: "translateZ(0)",
            }}
            aria-hidden="true"
          />
        ))}
      </div>

      <style jsx global>{`
        @keyframes gridMove {
          0% { transform: translate3d(0,0,0); }
          100% { transform: translate3d(-50%, -50%, 0); }
        }
        @keyframes dash {
          0% { transform: translateX(-40%); opacity: .45; }
          50% { opacity: .8; }
          100% { transform: translateX(100%); opacity: .45; }
        }
        @keyframes floatY {
          0% { transform: translateY(0px); opacity: .6; }
          50% { transform: translateY(-10px); opacity: 1; }
          100% { transform: translateY(0px); opacity: .6; }
        }
      `}</style>
    </div>
  )
}
