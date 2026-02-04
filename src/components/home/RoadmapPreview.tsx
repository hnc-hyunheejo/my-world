import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { roadmapData } from "@/data/roadmap";

export function RoadmapPreview() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block text-[#8B5CF6] text-sm font-medium tracking-widest uppercase mb-4">
            Roadmap
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white/90 mb-4">
            학습 로드맵
          </h2>
          <p className="text-lg text-white/50 max-w-2xl mx-auto">
            단계별로 체계적으로 Langflow를 마스터하세요
          </p>
        </div>

        {/* Desktop Roadmap */}
        <div className="hidden md:block max-w-5xl mx-auto">
          <div className="relative glass-card rounded-3xl p-10 overflow-hidden">
            {/* Background glow */}
            <div className="absolute top-0 left-1/4 w-60 h-60 bg-[#10B981]/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-60 h-60 bg-[#8B5CF6]/10 rounded-full blur-3xl" />

            {/* Connection Line */}
            <div className="absolute top-1/2 left-[10%] right-[10%] h-[2px] -translate-y-1/2">
              <div className="w-full h-full bg-gradient-to-r from-[#10B981]/50 via-[#8B5CF6]/50 to-[#EF4444]/50" />
            </div>

            <div className="relative flex justify-between">
              {roadmapData.map((phase, index) => (
                <div key={phase.id} className="flex flex-col items-center group">
                  {/* Node */}
                  <div className="relative">
                    {/* Glow effect */}
                    <div
                      className="absolute inset-0 rounded-full blur-md opacity-50 group-hover:opacity-100 transition-opacity"
                      style={{ backgroundColor: phase.color }}
                    />
                    <div
                      className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full border-2 text-white font-bold text-lg transition-transform group-hover:scale-110"
                      style={{
                        backgroundColor: `${phase.color}20`,
                        borderColor: phase.color,
                      }}
                    >
                      {phase.id}
                    </div>
                  </div>

                  {/* Label */}
                  <div className="mt-5 text-center">
                    <div className="font-semibold text-white/90 group-hover:text-white transition-colors">
                      {phase.title}
                    </div>
                    <div className="text-sm text-white/40 mt-1">
                      {phase.duration}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Roadmap */}
        <div className="md:hidden space-y-4">
          {roadmapData.map((phase) => (
            <div
              key={phase.id}
              className="glass-card rounded-xl p-5 flex items-center gap-4"
            >
              <div
                className="flex h-12 w-12 items-center justify-center rounded-full text-white font-bold shrink-0 border"
                style={{
                  backgroundColor: `${phase.color}20`,
                  borderColor: `${phase.color}50`,
                }}
              >
                {phase.id}
              </div>
              <div>
                <div className="font-semibold text-white/90">{phase.title}</div>
                <div className="text-sm text-white/40">{phase.duration}</div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Link
            href="/roadmap"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl btn-neon text-base group"
          >
            전체 로드맵 보기
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
