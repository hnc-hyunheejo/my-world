import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t bg-muted/50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold">
                L
              </div>
              <span className="text-lg font-bold">Langflow 학습</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Langflow를 처음 접하는 분들을 위한 한국어 학습 플랫폼
            </p>
          </div>

          {/* Learning */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold">학습하기</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/getting-started" className="hover:text-foreground">
                  시작하기
                </Link>
              </li>
              <li>
                <Link href="/roadmap" className="hover:text-foreground">
                  학습 로드맵
                </Link>
              </li>
              <li>
                <Link href="/tutorials" className="hover:text-foreground">
                  튜토리얼
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold">리소스</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a
                  href="https://docs.langflow.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground"
                >
                  공식 문서
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/langflow-ai/langflow"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://wikidocs.net/267515"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground"
                >
                  한국어 자료 (WikiDocs)
                </a>
              </li>
            </ul>
          </div>

          {/* Community */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold">커뮤니티</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a
                  href="https://discord.gg/langflow"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground"
                >
                  Discord
                </a>
              </li>
              <li>
                <a
                  href="https://www.datacamp.com/tutorial/langflow"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground"
                >
                  DataCamp 튜토리얼
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>2026 Langflow 학습 허브. Langflow는 오픈소스 프로젝트입니다.</p>
        </div>
      </div>
    </footer>
  );
}
