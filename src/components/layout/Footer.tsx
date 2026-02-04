import Link from "next/link";
import { Github, ExternalLink } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative border-t border-white/5 bg-[#050510]/80">
      {/* Background glow */}
      <div className="absolute top-0 left-1/4 w-80 h-40 bg-[#10B981]/5 rounded-full blur-3xl" />
      <div className="absolute top-0 right-1/4 w-80 h-40 bg-[#8B5CF6]/5 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative">
                <div className="absolute inset-0 bg-[#10B981] blur-md opacity-50" />
                <div className="relative flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[#10B981] to-[#059669] text-white font-bold">
                  L
                </div>
              </div>
              <span className="text-lg font-bold">
                <span className="text-gradient-emerald">Langflow</span>
                <span className="text-white/80 ml-1">학습</span>
              </span>
            </Link>
            <p className="text-sm text-white/40 leading-relaxed">
              Langflow를 처음 접하는 분들을 위한 한국어 학습 플랫폼
            </p>
          </div>

          {/* Learning */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-white/70">학습하기</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/getting-started"
                  className="text-white/40 hover:text-[#10B981] transition-colors"
                >
                  시작하기
                </Link>
              </li>
              <li>
                <Link
                  href="/roadmap"
                  className="text-white/40 hover:text-[#10B981] transition-colors"
                >
                  학습 로드맵
                </Link>
              </li>
              <li>
                <Link
                  href="/tutorials"
                  className="text-white/40 hover:text-[#10B981] transition-colors"
                >
                  튜토리얼
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-white/70">리소스</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="https://docs.langflow.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-white/40 hover:text-[#10B981] transition-colors"
                >
                  공식 문서
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/langflow-ai/langflow"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-white/40 hover:text-[#10B981] transition-colors"
                >
                  <Github className="w-3.5 h-3.5" />
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://wikidocs.net/267515"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-white/40 hover:text-[#10B981] transition-colors"
                >
                  한국어 자료 (WikiDocs)
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Community */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-white/70">커뮤니티</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="https://discord.gg/langflow"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-white/40 hover:text-[#10B981] transition-colors"
                >
                  Discord
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.datacamp.com/tutorial/langflow"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-white/40 hover:text-[#10B981] transition-colors"
                >
                  DataCamp 튜토리얼
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/30">
            2026 Langflow 학습 허브. Langflow는 오픈소스 프로젝트입니다.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/langflow-ai/langflow"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/30 hover:text-[#10B981] transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
