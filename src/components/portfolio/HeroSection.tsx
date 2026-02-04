"use client";

import { Github, Linkedin, Mail, FileText, ChevronDown } from "lucide-react";

const socialLinks = [
  {
    icon: Github,
    href: "https://github.com",
    label: "GitHub",
  },
  {
    icon: Linkedin,
    href: "https://linkedin.com",
    label: "LinkedIn",
  },
  {
    icon: Mail,
    href: "mailto:hello@example.com",
    label: "Email",
  },
  {
    icon: FileText,
    href: "/resume.pdf",
    label: "Resume",
  },
];

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6">
      <div className="max-w-4xl mx-auto text-center">
        {/* Status badge */}
        <div
          className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-8 opacity-0 animate-fade-in-up"
          style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#6EE7B7] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#6EE7B7]"></span>
          </span>
          <span className="text-sm text-white/70">Open to opportunities</span>
        </div>

        {/* Main heading */}
        <h1
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 opacity-0 animate-fade-in-up"
          style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
        >
          <span className="block text-white/90">안녕하세요,</span>
          <span className="block mt-2 text-gradient">김민수</span>
          <span className="block text-white/90 text-3xl md:text-4xl lg:text-5xl mt-4 font-medium">
            입니다
          </span>
        </h1>

        {/* Subtitle */}
        <p
          className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed opacity-0 animate-fade-in-up"
          style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}
        >
          <span className="text-[#6EE7B7]">컴퓨터공학</span>을 전공하는 학생입니다.
          <br />
          사용자 중심의 <span className="text-[#A78BFA]">웹 서비스</span>와{" "}
          <span className="text-[#22D3EE]">AI 기술</span>에 관심이 많습니다.
        </p>

        {/* Social links */}
        <div
          className="flex items-center justify-center gap-4 mb-16 opacity-0 animate-fade-in-up"
          style={{ animationDelay: "0.6s", animationFillMode: "forwards" }}
        >
          {socialLinks.map((link, index) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-3 glass glass-hover rounded-xl"
              aria-label={link.label}
              style={{
                animationDelay: `${0.7 + index * 0.1}s`,
              }}
            >
              <link.icon className="w-5 h-5 text-white/70 group-hover:text-[#6EE7B7] transition-colors" />
              <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs text-white/50 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                {link.label}
              </span>
            </a>
          ))}
        </div>

        {/* CTA Buttons */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-in-up"
          style={{ animationDelay: "0.8s", animationFillMode: "forwards" }}
        >
          <a
            href="#projects"
            className="group relative px-8 py-4 rounded-xl font-medium text-[#0a0a1a] bg-gradient-to-r from-[#6EE7B7] to-[#22D3EE] hover:shadow-lg hover:shadow-[#6EE7B7]/25 transition-all duration-300 hover:-translate-y-1"
          >
            프로젝트 보기
            <span className="absolute inset-0 rounded-xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
          <a
            href="#contact"
            className="px-8 py-4 rounded-xl font-medium text-white/90 glass glass-hover"
          >
            연락하기
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in-up"
        style={{ animationDelay: "1s", animationFillMode: "forwards" }}
      >
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-white/40 hover:text-white/70 transition-colors"
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <ChevronDown className="w-5 h-5 animate-bounce" />
        </a>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 left-10 w-px h-32 bg-gradient-to-b from-transparent via-white/20 to-transparent hidden lg:block" />
      <div className="absolute bottom-1/4 right-10 w-px h-32 bg-gradient-to-b from-transparent via-white/20 to-transparent hidden lg:block" />
    </section>
  );
}
