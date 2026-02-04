import Link from "next/link";
import { Button } from "@/components/ui/button";
import { roadmapData } from "@/data/roadmap";

export function RoadmapPreview() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            학습 로드맵
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            단계별로 체계적으로 Langflow를 마스터하세요
          </p>
        </div>

        {/* Desktop Roadmap */}
        <div className="hidden md:block max-w-5xl mx-auto">
          <div className="relative">
            {/* Connection Line */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-border -translate-y-1/2" />

            <div className="relative flex justify-between">
              {roadmapData.map((phase, index) => (
                <div key={phase.id} className="flex flex-col items-center">
                  {/* Node */}
                  <div
                    className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full border-4 border-background text-white font-bold text-lg"
                    style={{ backgroundColor: phase.color }}
                  >
                    {phase.id}
                  </div>
                  {/* Label */}
                  <div className="mt-4 text-center">
                    <div className="font-semibold">{phase.title}</div>
                    <div className="text-sm text-muted-foreground">
                      {phase.duration}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Roadmap */}
        <div className="md:hidden space-y-4">
          {roadmapData.map((phase) => (
            <div
              key={phase.id}
              className="flex items-center gap-4 p-4 rounded-lg bg-background border"
            >
              <div
                className="flex h-12 w-12 items-center justify-center rounded-full text-white font-bold shrink-0"
                style={{ backgroundColor: phase.color }}
              >
                {phase.id}
              </div>
              <div>
                <div className="font-semibold">{phase.title}</div>
                <div className="text-sm text-muted-foreground">
                  {phase.duration}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button asChild size="lg">
            <Link href="/roadmap">전체 로드맵 보기</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
