import Link from "next/link";
import { Rocket, MessageCircle, Bot, Clock, ArrowRight } from "lucide-react";

const quickStarts = [
  {
    icon: Rocket,
    title: "5분 만에 시작하기",
    description: "Langflow 설치부터 첫 실행까지, 가장 빠르게 시작하는 방법을 안내합니다.",
    href: "/getting-started",
    badge: "시작",
    badgeColor: "#10B981",
    time: "5분",
    gradient: "from-[#10B981]/20 to-[#06B6D4]/20",
  },
  {
    icon: MessageCircle,
    title: "첫 챗봇 만들기",
    description: "LLM을 연결하여 간단한 질문-답변 챗봇을 만들어봅니다.",
    href: "/tutorials/first-chatbot",
    badge: "기초",
    badgeColor: "#3B82F6",
    time: "45분",
    gradient: "from-[#3B82F6]/20 to-[#8B5CF6]/20",
  },
  {
    icon: Bot,
    title: "Agent 구축하기",
    description: "검색 기능이 있는 AI Agent를 만들고 Tool 사용법을 익힙니다.",
    href: "/tutorials/simple-agent",
    badge: "중급",
    badgeColor: "#8B5CF6",
    time: "60분",
    gradient: "from-[#8B5CF6]/20 to-[#EC4899]/20",
  },
];

export function QuickStartCards() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block text-[#06B6D4] text-sm font-medium tracking-widest uppercase mb-4">
            Quick Start
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white/90 mb-4">
            빠른 시작
          </h2>
          <p className="text-lg text-white/50 max-w-2xl mx-auto">
            원하는 주제를 선택하여 바로 학습을 시작하세요
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {quickStarts.map((item, index) => (
            <Link key={index} href={item.href} className="group">
              <div className="h-full glass-card rounded-2xl p-6 relative overflow-hidden">
                {/* Background gradient on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                {/* Header */}
                <div className="relative z-10 flex items-center justify-between mb-5">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: `${item.badgeColor}15` }}
                  >
                    <item.icon
                      className="w-6 h-6"
                      style={{ color: item.badgeColor }}
                    />
                  </div>
                  <span
                    className="px-3 py-1 rounded-full text-xs font-medium"
                    style={{
                      backgroundColor: `${item.badgeColor}15`,
                      color: item.badgeColor,
                    }}
                  >
                    {item.badge}
                  </span>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-lg font-semibold text-white/90 mb-3 group-hover:text-white transition-colors flex items-center gap-2">
                    {item.title}
                    <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </h3>
                  <p className="text-sm text-white/50 leading-relaxed mb-5 group-hover:text-white/60 transition-colors">
                    {item.description}
                  </p>

                  {/* Time */}
                  <div className="flex items-center gap-1.5 text-white/40">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm">{item.time}</span>
                  </div>
                </div>

                {/* Decorative corner */}
                <div
                  className="absolute -bottom-8 -right-8 w-24 h-24 rounded-full opacity-20 blur-2xl transition-opacity group-hover:opacity-40"
                  style={{ backgroundColor: item.badgeColor }}
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
