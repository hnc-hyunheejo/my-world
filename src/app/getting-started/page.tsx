import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "시작하기 - Langflow 학습 가이드",
  description: "Langflow 설치부터 첫 실행까지, 시작하는 방법을 안내합니다.",
};

export default function GettingStartedPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero */}
      <div className="text-center mb-16">
        <Badge className="mb-4">시작하기</Badge>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
          Langflow 시작하기
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          AI 애플리케이션 개발을 위한 첫 걸음을 내딛어보세요.
          설치부터 첫 Flow 실행까지 단계별로 안내합니다.
        </p>
      </div>

      {/* What is Langflow */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6">Langflow란?</h2>
        <Card>
          <CardContent className="pt-6">
            <p className="text-lg mb-4">
              <strong>Langflow</strong>는 Python 기반의 오픈소스 AI 애플리케이션 구축 프레임워크입니다.
              드래그 앤 드롭 방식의 시각적 인터페이스를 통해 코딩 없이도 복잡한 AI 워크플로우를 설계할 수 있습니다.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              <div className="p-4 bg-muted rounded-lg">
                <div className="font-semibold mb-2">🎨 시각적 개발</div>
                <p className="text-sm text-muted-foreground">
                  드래그 앤 드롭으로 AI 파이프라인 구축
                </p>
              </div>
              <div className="p-4 bg-muted rounded-lg">
                <div className="font-semibold mb-2">🔌 다양한 통합</div>
                <p className="text-sm text-muted-foreground">
                  OpenAI, Anthropic, 주요 LLM 지원
                </p>
              </div>
              <div className="p-4 bg-muted rounded-lg">
                <div className="font-semibold mb-2">📦 최신 버전</div>
                <p className="text-sm text-muted-foreground">
                  v1.7.3 (2026년 1월 출시)
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* System Requirements */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6">시스템 요구사항</h2>
        <Card>
          <CardContent className="pt-6">
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm">✓</span>
                <span><strong>Python</strong>: 3.10 - 3.13</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm">✓</span>
                <span><strong>RAM</strong>: 최소 4GB (권장 8GB)</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm">✓</span>
                <span><strong>OS</strong>: Windows, macOS, Linux</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </section>

      {/* Installation Methods */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6">설치 방법</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* pip */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="text-2xl">🐍</span>
                pip 설치 (권장)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Python 환경이 있다면 가장 간단한 방법입니다.
              </p>
              <div className="bg-zinc-950 text-zinc-50 p-4 rounded-lg font-mono text-sm overflow-x-auto">
                <div className="text-zinc-400"># 설치</div>
                <div>pip install langflow</div>
                <div className="mt-2 text-zinc-400"># 실행</div>
                <div>langflow run</div>
              </div>
            </CardContent>
          </Card>

          {/* Docker */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="text-2xl">🐳</span>
                Docker 설치
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                환경 설정 없이 바로 실행할 수 있습니다.
              </p>
              <div className="bg-zinc-950 text-zinc-50 p-4 rounded-lg font-mono text-sm overflow-x-auto">
                <div className="text-zinc-400"># 실행</div>
                <div className="whitespace-pre-wrap break-all">docker run -d -p 7860:7860 langflowai/langflow:latest</div>
              </div>
            </CardContent>
          </Card>

          {/* Desktop */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="text-2xl">💻</span>
                Desktop 앱
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Windows, macOS용 데스크톱 앱을 다운로드하세요.
              </p>
              <Button asChild variant="outline" className="w-full">
                <a
                  href="https://www.langflow.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  다운로드 페이지
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* First Run */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6">첫 번째 실행</h2>
        <Card>
          <CardContent className="pt-6">
            <ol className="space-y-6">
              <li className="flex gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
                  1
                </span>
                <div>
                  <div className="font-semibold mb-1">Langflow 실행</div>
                  <p className="text-muted-foreground">
                    터미널에서 <code className="bg-muted px-1 rounded">langflow run</code> 명령어를 실행합니다.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
                  2
                </span>
                <div>
                  <div className="font-semibold mb-1">브라우저에서 접속</div>
                  <p className="text-muted-foreground">
                    브라우저를 열고{" "}
                    <code className="bg-muted px-1 rounded">http://localhost:7860</code>
                    에 접속합니다.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
                  3
                </span>
                <div>
                  <div className="font-semibold mb-1">새 프로젝트 생성</div>
                  <p className="text-muted-foreground">
                    &quot;New Project&quot; 버튼을 클릭하여 첫 번째 Flow를 만들어보세요.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
                  4
                </span>
                <div>
                  <div className="font-semibold mb-1">템플릿 선택</div>
                  <p className="text-muted-foreground">
                    Simple Agent 또는 Basic Prompting 템플릿으로 시작하는 것을 추천합니다.
                  </p>
                </div>
              </li>
            </ol>
          </CardContent>
        </Card>
      </section>

      {/* Next Steps */}
      <section className="text-center">
        <h2 className="text-2xl font-bold mb-6">다음 단계</h2>
        <p className="text-muted-foreground mb-8">
          설치를 완료했다면, 튜토리얼을 통해 Langflow의 기능을 익혀보세요.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg">
            <Link href="/tutorials">튜토리얼 시작하기</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/roadmap">학습 로드맵 보기</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
