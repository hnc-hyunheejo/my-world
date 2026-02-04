"use client";

import { roadmapData, RoadmapPhase } from "@/data/roadmap";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface RoadmapPhaseCardProps {
  phase: RoadmapPhase;
  isActive?: boolean;
}

function RoadmapPhaseCard({ phase, isActive }: RoadmapPhaseCardProps) {
  return (
    <Card
      className={`transition-all ${
        isActive ? "border-primary shadow-lg" : "hover:border-primary/50"
      }`}
    >
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between mb-2">
          <div
            className="flex h-10 w-10 items-center justify-center rounded-full text-white font-bold"
            style={{ backgroundColor: phase.color }}
          >
            {phase.id}
          </div>
          <Badge variant="secondary">{phase.duration}</Badge>
        </div>
        <CardTitle className="text-xl">{phase.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground mb-4">{phase.description}</p>
        <div className="space-y-2">
          {phase.lessons.map((lesson) => (
            <div
              key={lesson.id}
              className="flex items-center justify-between text-sm p-2 bg-muted rounded-md"
            >
              <span>{lesson.title}</span>
              <span className="text-muted-foreground">{lesson.duration}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

export function RoadmapViewer() {
  return (
    <div className="space-y-8">
      {/* Timeline View (Desktop) */}
      <div className="hidden lg:block">
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-[39px] top-0 bottom-0 w-0.5 bg-border" />

          <div className="space-y-8">
            {roadmapData.map((phase, index) => (
              <div key={phase.id} className="relative flex gap-8">
                {/* Timeline Node */}
                <div className="relative z-10 shrink-0">
                  <div
                    className="flex h-20 w-20 items-center justify-center rounded-full border-4 border-background text-white font-bold text-2xl shadow-lg"
                    style={{ backgroundColor: phase.color }}
                  >
                    {phase.id}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 pb-8">
                  <RoadmapPhaseCard phase={phase} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Card View (Mobile/Tablet) */}
      <div className="lg:hidden grid grid-cols-1 md:grid-cols-2 gap-6">
        {roadmapData.map((phase) => (
          <RoadmapPhaseCard key={phase.id} phase={phase} />
        ))}
      </div>
    </div>
  );
}
