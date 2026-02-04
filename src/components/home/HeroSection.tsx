import Link from "next/link";
import { ArrowRight, Play, Sparkles } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center text-center">
          {/* Version badge */}
          <div
            className="inline-flex items-center gap-2 glass-card rounded-full px-5 py-2 mb-8 opacity-0 animate-fade-in-up"
            style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}
          >
            <Sparkles className="w-4 h-4 text-[#10B981]" />
            <span className="text-sm text-white/70">최신 버전 v1.7.3 지원</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
          </div>

          {/* Main heading */}
          <h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 opacity-0 animate-fade-in-up"
            style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
          >
            <span className="text-gradient-emerald">Langflow</span>
            <span className="text-white/90">로 시작하는</span>
            <br />
            <span className="text-white/90">AI 애플리케이션 개발</span>
          </h1>

          {/* Subtitle */}
          <p
            className="mt-6 text-lg md:text-xl text-white/50 max-w-2xl leading-relaxed opacity-0 animate-fade-in-up"
            style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}
          >
            드래그 앤 드롭으로 누구나 쉽게{" "}
            <span className="text-[#8B5CF6]">AI Agent</span>,{" "}
            <span className="text-[#06B6D4]">RAG 시스템</span>을 구축하세요.
            <br className="hidden sm:inline" />
            코딩 없이도 강력한 AI 애플리케이션을 만들 수 있습니다.
          </p>

          {/* CTA Buttons */}
          <div
            className="mt-10 flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-in-up"
            style={{ animationDelay: "0.6s", animationFillMode: "forwards" }}
          >
            <Link
              href="/getting-started"
              className="group flex items-center justify-center gap-2 px-8 py-4 rounded-xl btn-neon text-base"
            >
              지금 시작하기
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/tutorials"
              className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl btn-glass text-base"
            >
              <Play className="w-4 h-4" />
              튜토리얼 보기
            </Link>
          </div>

          {/* Stats */}
          <div
            className="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-12 opacity-0 animate-fade-in-up"
            style={{ animationDelay: "0.8s", animationFillMode: "forwards" }}
          >
            <StatItem value="100%" label="오픈소스" color="#10B981" />
            <StatItem value="Low-Code" label="시각적 개발" color="#8B5CF6" />
            <StatItem value="Python" label="기반 프레임워크" color="#06B6D4" />
            <StatItem value="한국어" label="학습 자료" color="#F59E0B" />
          </div>

          {/* Flow visualization preview */}
          <div
            className="mt-20 w-full max-w-4xl opacity-0 animate-fade-in-up"
            style={{ animationDelay: "1s", animationFillMode: "forwards" }}
          >
            <div className="relative glass-card rounded-2xl p-8 overflow-hidden">
              {/* Glow effects */}
              <div className="absolute -top-20 -left-20 w-40 h-40 bg-[#10B981]/20 rounded-full blur-3xl" />
              <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-[#8B5CF6]/20 rounded-full blur-3xl" />

              {/* Flow nodes visualization */}
              <div className="relative flex items-center justify-between gap-4">
                <FlowNode label="Input" color="#10B981" />
                <FlowConnector />
                <FlowNode label="LLM" color="#8B5CF6" isMain />
                <FlowConnector />
                <FlowNode label="Output" color="#06B6D4" />
              </div>

              {/* Caption */}
              <p className="text-center text-white/40 text-sm mt-6">
                Langflow의 시각적 플로우 기반 AI 개발
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatItem({
  value,
  label,
  color,
}: {
  value: string;
  label: string;
  color: string;
}) {
  return (
    <div className="text-center">
      <div className="text-2xl sm:text-3xl font-bold" style={{ color }}>
        {value}
      </div>
      <div className="text-sm text-white/40 mt-1">{label}</div>
    </div>
  );
}

function FlowNode({
  label,
  color,
  isMain = false,
}: {
  label: string;
  color: string;
  isMain?: boolean;
}) {
  return (
    <div
      className={`relative flow-node rounded-xl px-6 py-4 ${isMain ? "px-8 py-5" : ""}`}
      style={{
        borderColor: `${color}40`,
        boxShadow: `0 0 30px ${color}20`,
      }}
    >
      <div
        className="absolute -top-1 left-1/2 -translate-x-1/2 w-8 h-1 rounded-full"
        style={{ backgroundColor: color }}
      />
      <span className={`font-medium text-white/80 ${isMain ? "text-lg" : "text-sm"}`}>
        {label}
      </span>
    </div>
  );
}

function FlowConnector() {
  return (
    <div className="flex-1 flex items-center">
      <div className="w-full h-[2px] bg-gradient-to-r from-[#10B981]/40 via-[#8B5CF6]/40 to-[#06B6D4]/40 relative">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rotate-45 border-t-2 border-r-2 border-[#8B5CF6]/60" />
      </div>
    </div>
  );
}
