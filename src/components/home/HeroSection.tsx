import Link from "next/link";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-primary/5 to-background py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center rounded-full border bg-background px-4 py-1.5 text-sm mb-6">
            <span className="mr-2">🚀</span>
            <span>최신 버전 v1.7.3 지원</span>
          </div>

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl max-w-4xl">
            <span className="text-primary">Langflow</span>로 시작하는
            <br />
            AI 애플리케이션 개발
          </h1>

          <p className="mt-6 text-lg text-muted-foreground max-w-2xl md:text-xl">
            드래그 앤 드롭으로 누구나 쉽게 AI Agent, RAG 시스템을 구축하세요.
            <br className="hidden sm:inline" />
            코딩 없이도 강력한 AI 애플리케이션을 만들 수 있습니다.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Button size="lg" asChild>
              <Link href="/getting-started">지금 시작하기</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/tutorials">튜토리얼 보기</Link>
            </Button>
          </div>

          <div className="mt-16 grid grid-cols-2 gap-8 sm:grid-cols-4 text-center">
            <div>
              <div className="text-3xl font-bold text-primary">100%</div>
              <div className="text-sm text-muted-foreground">오픈소스</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">Low-Code</div>
              <div className="text-sm text-muted-foreground">시각적 개발</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">Python</div>
              <div className="text-sm text-muted-foreground">기반 프레임워크</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">한국어</div>
              <div className="text-sm text-muted-foreground">학습 자료</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
