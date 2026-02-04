import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tutorial } from "@/data/tutorials";

interface TutorialCardProps {
  tutorial: Tutorial;
}

const difficultyColors = {
  beginner: "bg-green-100 text-green-800",
  intermediate: "bg-yellow-100 text-yellow-800",
  advanced: "bg-red-100 text-red-800",
};

const difficultyLabels = {
  beginner: "입문",
  intermediate: "중급",
  advanced: "고급",
};

export function TutorialCard({ tutorial }: TutorialCardProps) {
  return (
    <Link href={`/tutorials/${tutorial.slug}`}>
      <Card className="h-full hover:border-primary/50 hover:shadow-lg transition-all cursor-pointer group">
        <CardHeader className="pb-2">
          <div className="flex items-center justify-between mb-2">
            <Badge
              variant="outline"
              className={difficultyColors[tutorial.difficulty]}
            >
              {difficultyLabels[tutorial.difficulty]}
            </Badge>
            <span className="text-sm text-muted-foreground flex items-center gap-1">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              {tutorial.duration}
            </span>
          </div>
          <CardTitle className="text-xl group-hover:text-primary transition-colors">
            {tutorial.title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-4">{tutorial.description}</p>
          <div className="flex items-center text-sm text-primary font-medium">
            학습하기
            <svg
              className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
