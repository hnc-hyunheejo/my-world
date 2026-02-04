"use client";

import { ExternalLink, Github, Sparkles } from "lucide-react";

const projects = [
  {
    title: "AI 챗봇 플랫폼",
    description:
      "OpenAI API를 활용한 맞춤형 AI 챗봇 서비스. 사용자별 대화 기록 저장 및 컨텍스트 유지 기능 구현.",
    tags: ["React", "TypeScript", "OpenAI", "Supabase"],
    color: "#6EE7B7",
    gradient: "from-[#6EE7B7]/20 to-[#22D3EE]/20",
    github: "https://github.com",
    demo: "https://demo.com",
    featured: true,
  },
  {
    title: "실시간 협업 문서 에디터",
    description:
      "WebSocket을 이용한 실시간 동시 편집이 가능한 노션 스타일의 문서 에디터.",
    tags: ["Next.js", "Socket.io", "Prisma", "TailwindCSS"],
    color: "#A78BFA",
    gradient: "from-[#A78BFA]/20 to-[#F472B6]/20",
    github: "https://github.com",
    demo: "https://demo.com",
    featured: true,
  },
  {
    title: "개인 블로그",
    description:
      "MDX 기반의 기술 블로그. 다크모드, 댓글 시스템, 검색 기능 구현.",
    tags: ["Next.js", "MDX", "Vercel"],
    color: "#22D3EE",
    gradient: "from-[#22D3EE]/20 to-[#6EE7B7]/20",
    github: "https://github.com",
    demo: "https://demo.com",
    featured: false,
  },
  {
    title: "포모도로 타이머 앱",
    description:
      "집중력 향상을 위한 포모도로 기법 타이머. 통계 및 목표 설정 기능 포함.",
    tags: ["React", "PWA", "IndexedDB"],
    color: "#FBBF24",
    gradient: "from-[#FBBF24]/20 to-[#F472B6]/20",
    github: "https://github.com",
    demo: null,
    featured: false,
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block text-[#A78BFA] text-sm font-medium tracking-widest uppercase mb-4">
            Projects
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white/90">
            프로젝트
          </h2>
          <p className="text-white/50 mt-4 max-w-2xl mx-auto">
            실제로 구현하고 배포한 프로젝트들입니다
          </p>
        </div>

        {/* Featured projects */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {projects
            .filter((p) => p.featured)
            .map((project, index) => (
              <div
                key={project.title}
                className="group glass glass-hover rounded-3xl p-8 relative overflow-hidden"
              >
                {/* Background gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                {/* Featured badge */}
                <div className="absolute top-6 right-6 flex items-center gap-1 px-3 py-1 rounded-full bg-white/5 border border-white/10">
                  <Sparkles className="w-3 h-3" style={{ color: project.color }} />
                  <span className="text-xs text-white/70">Featured</span>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Project icon */}
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6"
                    style={{ backgroundColor: `${project.color}15` }}
                  >
                    <div
                      className="w-6 h-6 rounded-lg"
                      style={{ backgroundColor: project.color }}
                    />
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-gradient transition-all">
                    {project.title}
                  </h3>

                  <p className="text-white/60 leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full text-xs font-medium bg-white/5 text-white/70 border border-white/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-white/60 hover:text-[#6EE7B7] transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      <span className="text-sm">Code</span>
                    </a>
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-white/60 hover:text-[#6EE7B7] transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span className="text-sm">Live Demo</span>
                      </a>
                    )}
                  </div>
                </div>

                {/* Decorative corner */}
                <div
                  className="absolute -bottom-8 -right-8 w-32 h-32 rounded-full opacity-20 blur-2xl"
                  style={{ backgroundColor: project.color }}
                />
              </div>
            ))}
        </div>

        {/* Other projects */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects
            .filter((p) => !p.featured)
            .map((project) => (
              <div
                key={project.title}
                className="group glass glass-hover rounded-2xl p-6 relative overflow-hidden"
              >
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center"
                      style={{ backgroundColor: `${project.color}15` }}
                    >
                      <div
                        className="w-4 h-4 rounded"
                        style={{ backgroundColor: project.color }}
                      />
                    </div>
                    <div className="flex items-center gap-3">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white/40 hover:text-white/80 transition-colors"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white/40 hover:text-white/80 transition-colors"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2">
                    {project.title}
                  </h3>

                  <p className="text-white/50 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded-full text-xs bg-white/5 text-white/50"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
        </div>

        {/* View more link */}
        <div className="text-center mt-12">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-white/50 hover:text-[#6EE7B7] transition-colors"
          >
            <Github className="w-5 h-5" />
            <span>GitHub에서 더 보기</span>
          </a>
        </div>
      </div>
    </section>
  );
}
