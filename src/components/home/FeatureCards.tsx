import { Palette, Code, Database, Bot } from "lucide-react";

const features = [
  {
    icon: Palette,
    title: "Low-Code 시각적 인터페이스",
    description:
      "드래그 앤 드롭으로 AI 워크플로우를 설계하세요. 코딩 경험이 없어도 쉽게 시작할 수 있습니다.",
    color: "#10B981",
    gradient: "from-[#10B981]/20 to-[#06B6D4]/20",
  },
  {
    icon: Code,
    title: "Python 기반 오픈소스",
    description:
      "Python으로 작성된 오픈소스 프레임워크입니다. 커스텀 컴포넌트를 자유롭게 개발할 수 있습니다.",
    color: "#8B5CF6",
    gradient: "from-[#8B5CF6]/20 to-[#EC4899]/20",
  },
  {
    icon: Database,
    title: "RAG 시스템 지원",
    description:
      "문서 임베딩, Vector Store 연동으로 검색 증강 생성(RAG) 시스템을 손쉽게 구축하세요.",
    color: "#06B6D4",
    gradient: "from-[#06B6D4]/20 to-[#10B981]/20",
  },
  {
    icon: Bot,
    title: "AI Agent 구축",
    description:
      "Tool 사용, Memory 관리 등 복잡한 AI Agent를 시각적으로 설계하고 배포할 수 있습니다.",
    color: "#F59E0B",
    gradient: "from-[#F59E0B]/20 to-[#F43F5E]/20",
  },
];

export function FeatureCards() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block text-[#10B981] text-sm font-medium tracking-widest uppercase mb-4">
            Features
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white/90 mb-4">
            Why Langflow?
          </h2>
          <p className="text-lg text-white/50 max-w-2xl mx-auto">
            AI 애플리케이션 개발을 더 쉽고 빠르게
          </p>
        </div>

        {/* Feature cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group glass-card rounded-2xl p-6 relative overflow-hidden"
            >
              {/* Background gradient on hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />

              {/* Icon */}
              <div className="relative z-10 mb-5">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: `${feature.color}15` }}
                >
                  <feature.icon
                    className="w-6 h-6"
                    style={{ color: feature.color }}
                  />
                </div>
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-lg font-semibold text-white/90 mb-3 group-hover:text-white transition-colors">
                  {feature.title}
                </h3>
                <p className="text-sm text-white/50 leading-relaxed group-hover:text-white/60 transition-colors">
                  {feature.description}
                </p>
              </div>

              {/* Decorative corner */}
              <div
                className="absolute -bottom-8 -right-8 w-24 h-24 rounded-full opacity-20 blur-2xl transition-opacity group-hover:opacity-40"
                style={{ backgroundColor: feature.color }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
