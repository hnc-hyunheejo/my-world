import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { RoadmapViewer } from "@/components/learning/RoadmapViewer";

export const metadata: Metadata = {
  title: "학습 로드맵 - Langflow 학습 가이드",
  description: "Langflow를 단계별로 체계적으로 마스터하세요. 기초부터 고급까지 완벽한 학습 경로를 제공합니다.",
};

export default function RoadmapPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero */}
      <div className="text-center mb-16">
        <Badge className="mb-4">학습 로드맵</Badge>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
          Langflow 마스터 로드맵
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          기초부터 고급까지, 단계별로 체계적으로 Langflow를 학습하세요.
          각 단계를 완료하면 다음 단계로 자연스럽게 넘어갈 수 있습니다.
        </p>
      </div>

      {/* Overview Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
        <div className="text-center p-6 bg-muted rounded-lg">
          <div className="text-3xl font-bold text-primary">5</div>
          <div className="text-sm text-muted-foreground">학습 단계</div>
        </div>
        <div className="text-center p-6 bg-muted rounded-lg">
          <div className="text-3xl font-bold text-primary">15+</div>
          <div className="text-sm text-muted-foreground">레슨 수</div>
        </div>
        <div className="text-center p-6 bg-muted rounded-lg">
          <div className="text-3xl font-bold text-primary">6-8주</div>
          <div className="text-sm text-muted-foreground">예상 기간</div>
        </div>
        <div className="text-center p-6 bg-muted rounded-lg">
          <div className="text-3xl font-bold text-primary">실습</div>
          <div className="text-sm text-muted-foreground">중심 학습</div>
        </div>
      </div>

      {/* Roadmap */}
      <RoadmapViewer />

      {/* CTA */}
      <div className="mt-16 text-center">
        <h2 className="text-2xl font-bold mb-4">지금 시작하세요</h2>
        <p className="text-muted-foreground mb-8">
          첫 번째 단계부터 차근차근 시작해보세요. 튜토리얼과 함께 실습하며 배울 수 있습니다.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg">
            <Link href="/tutorials/introduction">첫 번째 레슨 시작</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/tutorials">전체 튜토리얼 보기</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
