"use client";

import { GraduationCap, MapPin, Calendar, Heart } from "lucide-react";

const highlights = [
  {
    icon: GraduationCap,
    label: "Education",
    value: "한국대학교 컴퓨터공학과",
    subtext: "2022 - 현재",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "서울, 대한민국",
    subtext: "Remote OK",
  },
  {
    icon: Calendar,
    label: "Experience",
    value: "2+ Years",
    subtext: "개발 경험",
  },
  {
    icon: Heart,
    label: "Passion",
    value: "Web & AI",
    subtext: "풀스택 개발",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block text-[#6EE7B7] text-sm font-medium tracking-widest uppercase mb-4">
            About Me
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white/90">
            저를 소개합니다
          </h2>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 items-start">
          {/* Profile card */}
          <div className="lg:col-span-2">
            <div className="glass glass-hover rounded-3xl p-8 relative overflow-hidden">
              {/* Glow effect */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#6EE7B7]/20 rounded-full blur-3xl" />
              <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-[#A78BFA]/20 rounded-full blur-3xl" />

              {/* Avatar placeholder */}
              <div className="relative w-32 h-32 mx-auto mb-6">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#6EE7B7] to-[#A78BFA] animate-pulse-glow" />
                <div className="absolute inset-1 rounded-full bg-[#0a0a1a]" />
                <div className="absolute inset-2 rounded-full bg-gradient-to-br from-[#6EE7B7]/20 to-[#A78BFA]/20 flex items-center justify-center">
                  <span className="text-4xl font-bold text-gradient">MS</span>
                </div>
              </div>

              {/* Name and title */}
              <div className="text-center relative z-10">
                <h3 className="text-2xl font-bold text-white mb-2">김민수</h3>
                <p className="text-[#6EE7B7] font-medium mb-4">
                  Frontend Developer
                </p>
                <div className="flex items-center justify-center gap-2 text-white/50 text-sm">
                  <span className="w-2 h-2 rounded-full bg-[#6EE7B7] animate-pulse" />
                  구직 중
                </div>
              </div>
            </div>
          </div>

          {/* About content */}
          <div className="lg:col-span-3 space-y-6">
            {/* Bio card */}
            <div className="glass rounded-3xl p-8">
              <p className="text-white/70 leading-relaxed text-lg">
                안녕하세요! 저는 <span className="text-[#6EE7B7]">사용자 경험</span>을
                최우선으로 생각하는 프론트엔드 개발자입니다.
              </p>
              <p className="text-white/70 leading-relaxed text-lg mt-4">
                <span className="text-[#A78BFA]">React</span>와{" "}
                <span className="text-[#22D3EE]">TypeScript</span>를 주로 사용하며,
                최신 웹 기술 트렌드를 학습하고 프로젝트에 적용하는 것을 좋아합니다.
                특히 <span className="text-[#FBBF24]">AI 기술</span>과 웹을 결합한
                서비스에 깊은 관심을 가지고 있습니다.
              </p>
              <p className="text-white/70 leading-relaxed text-lg mt-4">
                팀 프로젝트에서는 원활한 소통과 협업을 중요시하며,
                코드 리뷰와 문서화를 통해 팀 전체의 생산성 향상에 기여합니다.
              </p>
            </div>

            {/* Highlights grid */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <div
                  key={item.label}
                  className="glass glass-hover rounded-2xl p-5 group"
                  style={{
                    animationDelay: `${index * 0.1}s`,
                  }}
                >
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-xl bg-white/5 group-hover:bg-[#6EE7B7]/10 transition-colors">
                      <item.icon className="w-5 h-5 text-[#6EE7B7]" />
                    </div>
                    <div>
                      <p className="text-xs text-white/40 uppercase tracking-wider mb-1">
                        {item.label}
                      </p>
                      <p className="text-white font-medium">{item.value}</p>
                      <p className="text-white/50 text-sm mt-1">{item.subtext}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
