import { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { TutorialCard } from "@/components/learning/TutorialCard";
import { tutorials } from "@/data/tutorials";
import { roadmapData } from "@/data/roadmap";

export const metadata: Metadata = {
  title: "튜토리얼 - Langflow 학습 가이드",
  description: "Langflow 튜토리얼 목록입니다. 단계별로 AI 애플리케이션 개발을 학습하세요.",
};

export default function TutorialsPage() {
  // Group tutorials by phase
  const tutorialsByPhase = roadmapData.map((phase) => ({
    phase,
    tutorials: tutorials.filter((t) => t.phase === phase.id),
  }));

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero */}
      <div className="text-center mb-16">
        <Badge className="mb-4">튜토리얼</Badge>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
          Langflow 튜토리얼
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          단계별 튜토리얼을 통해 Langflow의 모든 기능을 익혀보세요.
          실습 중심의 학습으로 빠르게 실력을 키울 수 있습니다.
        </p>
      </div>

      {/* Stats */}
      <div className="flex flex-wrap justify-center gap-6 mb-16">
        <div className="flex items-center gap-2 px-4 py-2 bg-muted rounded-full">
          <span className="font-semibold">{tutorials.length}</span>
          <span className="text-muted-foreground">튜토리얼</span>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 bg-muted rounded-full">
          <span className="font-semibold">
            {tutorials.filter((t) => t.difficulty === "beginner").length}
          </span>
          <span className="text-muted-foreground">입문</span>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 bg-muted rounded-full">
          <span className="font-semibold">
            {tutorials.filter((t) => t.difficulty === "intermediate").length}
          </span>
          <span className="text-muted-foreground">중급</span>
        </div>
      </div>

      {/* Tutorials by Phase */}
      <div className="space-y-16">
        {tutorialsByPhase.map(
          ({ phase, tutorials: phaseTutorials }) =>
            phaseTutorials.length > 0 && (
              <section key={phase.id}>
                <div className="flex items-center gap-4 mb-8">
                  <div
                    className="flex h-12 w-12 items-center justify-center rounded-full text-white font-bold text-lg"
                    style={{ backgroundColor: phase.color }}
                  >
                    {phase.id}
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold">{phase.title}</h2>
                    <p className="text-muted-foreground">{phase.description}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {phaseTutorials.map((tutorial) => (
                    <TutorialCard key={tutorial.id} tutorial={tutorial} />
                  ))}
                </div>
              </section>
            )
        )}
      </div>
    </div>
  );
}
