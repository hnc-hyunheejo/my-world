"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, ExternalLink } from "lucide-react";

const navItems = [
  { href: "/getting-started", label: "시작하기" },
  { href: "/roadmap", label: "학습 로드맵" },
  { href: "/tutorials", label: "튜토리얼" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? "glass-nav py-3" : "py-5 bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto flex items-center justify-between px-6">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="absolute inset-0 bg-[#10B981] blur-lg opacity-50 group-hover:opacity-80 transition-opacity" />
              <div className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-[#10B981] to-[#059669] text-white font-bold text-lg shadow-lg">
                L
              </div>
            </div>
            <span className="text-xl font-bold">
              <span className="text-gradient-emerald">Langflow</span>
              <span className="text-white/80 ml-1">학습</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative text-sm font-medium text-white/60 hover:text-white transition-colors group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#10B981] to-[#06B6D4] group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
            <a
              href="https://docs.langflow.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl btn-neon text-sm"
            >
              공식 문서
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-white/70 hover:text-white transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="메뉴 열기"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </header>

      {/* Mobile Navigation */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-500 ${
          isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-[#050510]/90 backdrop-blur-xl"
          onClick={() => setIsMenuOpen(false)}
        />

        {/* Menu content */}
        <nav className="absolute top-20 left-6 right-6 glass rounded-2xl p-6 border border-white/10">
          <div className="flex flex-col gap-2">
            {navItems.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-white/80 hover:text-[#10B981] transition-colors text-lg font-medium py-3 px-4 rounded-xl hover:bg-white/5"
                style={{
                  animationDelay: `${index * 50}ms`,
                }}
              >
                {item.label}
              </Link>
            ))}
            <div className="border-t border-white/10 pt-4 mt-2">
              <a
                href="https://docs.langflow.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl btn-neon text-center"
              >
                공식 문서
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
