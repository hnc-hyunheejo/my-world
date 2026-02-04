"use client";

import { Mail, MapPin, Send, Github, Linkedin, Twitter } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@example.com",
    href: "mailto:hello@example.com",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "서울, 대한민국",
    href: null,
  },
];

const socialLinks = [
  { icon: Github, href: "https://github.com", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
];

export function ContactSection() {
  return (
    <section id="contact" className="relative py-32 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block text-[#FBBF24] text-sm font-medium tracking-widest uppercase mb-4">
            Contact
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white/90">
            연락하기
          </h2>
          <p className="text-white/50 mt-4 max-w-2xl mx-auto">
            새로운 기회, 협업, 프리랜서 프로젝트 등
            <br />
            언제든지 편하게 연락 주세요!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact form */}
          <div className="glass rounded-3xl p-8 relative overflow-hidden">
            {/* Background glow */}
            <div className="absolute -top-20 -left-20 w-40 h-40 bg-[#6EE7B7]/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-[#A78BFA]/20 rounded-full blur-3xl" />

            <form className="relative z-10 space-y-6">
              <div>
                <label className="block text-white/70 text-sm font-medium mb-2">
                  이름
                </label>
                <input
                  type="text"
                  placeholder="홍길동"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-[#6EE7B7]/50 focus:bg-white/10 transition-all"
                />
              </div>

              <div>
                <label className="block text-white/70 text-sm font-medium mb-2">
                  이메일
                </label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-[#6EE7B7]/50 focus:bg-white/10 transition-all"
                />
              </div>

              <div>
                <label className="block text-white/70 text-sm font-medium mb-2">
                  메시지
                </label>
                <textarea
                  rows={4}
                  placeholder="안녕하세요! 연락드립니다..."
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-[#6EE7B7]/50 focus:bg-white/10 transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl font-medium text-[#0a0a1a] bg-gradient-to-r from-[#6EE7B7] to-[#22D3EE] hover:shadow-lg hover:shadow-[#6EE7B7]/25 transition-all duration-300 hover:-translate-y-1 flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                메시지 보내기
              </button>
            </form>
          </div>

          {/* Contact info */}
          <div className="space-y-6">
            {/* Info cards */}
            {contactInfo.map((info) => (
              <div
                key={info.label}
                className="glass glass-hover rounded-2xl p-6 group"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-white/5 group-hover:bg-[#6EE7B7]/10 transition-colors">
                    <info.icon className="w-6 h-6 text-[#6EE7B7]" />
                  </div>
                  <div>
                    <p className="text-white/40 text-xs uppercase tracking-wider">
                      {info.label}
                    </p>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="text-white font-medium hover:text-[#6EE7B7] transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-white font-medium">{info.value}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}

            {/* Social links */}
            <div className="glass rounded-2xl p-6">
              <p className="text-white/40 text-xs uppercase tracking-wider mb-4">
                Social
              </p>
              <div className="flex gap-3">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-white/5 hover:bg-[#6EE7B7]/10 transition-colors group"
                    aria-label={link.label}
                  >
                    <link.icon className="w-5 h-5 text-white/60 group-hover:text-[#6EE7B7] transition-colors" />
                  </a>
                ))}
              </div>
            </div>

            {/* Availability note */}
            <div className="glass rounded-2xl p-6 border-[#6EE7B7]/20">
              <div className="flex items-center gap-3 mb-3">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#6EE7B7] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-[#6EE7B7]"></span>
                </span>
                <span className="text-[#6EE7B7] font-medium">현재 구직 중</span>
              </div>
              <p className="text-white/50 text-sm">
                풀타임 포지션, 인턴십, 프리랜서 프로젝트 모두 환영합니다.
                새로운 도전을 기다리고 있습니다!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
