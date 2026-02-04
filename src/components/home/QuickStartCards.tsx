import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const quickStarts = [
  {
    icon: "🚀",
    title: "5분 만에 시작하기",
    description: "Langflow 설치부터 첫 실행까지, 가장 빠르게 시작하는 방법을 안내합니다.",
    href: "/getting-started",
    badge: "시작",
    time: "5분",
  },
  {
    icon: "💬",
    title: "첫 챗봇 만들기",
    description: "LLM을 연결하여 간단한 질문-답변 챗봇을 만들어봅니다.",
    href: "/tutorials/first-chatbot",
    badge: "기초",
    time: "45분",
  },
  {
    icon: "🤖",
    title: "Agent 구축하기",
    description: "검색 기능이 있는 AI Agent를 만들고 Tool 사용법을 익힙니다.",
    href: "/tutorials/simple-agent",
    badge: "중급",
    time: "60분",
  },
];

export function QuickStartCards() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            빠른 시작
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            원하는 주제를 선택하여 바로 학습을 시작하세요
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {quickStarts.map((item, index) => (
            <Link key={index} href={item.href}>
              <Card className="h-full hover:border-primary/50 hover:shadow-lg transition-all cursor-pointer group">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-4xl">{item.icon}</span>
                    <Badge variant="secondary">{item.badge}</Badge>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base mb-4">
                    {item.description}
                  </CardDescription>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <svg
                      className="w-4 h-4 mr-1"
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
                    {item.time}
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
