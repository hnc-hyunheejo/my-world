"use client";

import { Heart, Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <a href="#" className="text-xl font-bold">
              <span className="text-gradient">MS</span>
              <span className="text-white/80">.dev</span>
            </a>
            <p className="text-white/40 text-sm">
              &copy; {currentYear} Kim Minsu. All rights reserved.
            </p>
          </div>

          {/* Made with love */}
          <div className="flex items-center gap-2 text-white/40 text-sm">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-[#F472B6] fill-[#F472B6]" />
            <span>using</span>
            <span className="text-[#6EE7B7]">Next.js</span>
            <span>&</span>
            <span className="text-[#22D3EE]">TailwindCSS</span>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 hover:text-[#6EE7B7] transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 hover:text-[#6EE7B7] transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:hello@example.com"
              className="text-white/40 hover:text-[#6EE7B7] transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Back to top */}
        <div className="text-center mt-8">
          <a
            href="#"
            className="inline-flex items-center gap-2 text-white/30 hover:text-white/60 text-sm transition-colors"
          >
            맨 위로 올라가기 ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
