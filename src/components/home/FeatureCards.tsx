import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    icon: "🎨",
    title: "Low-Code 시각적 인터페이스",
    description:
      "드래그 앤 드롭으로 AI 워크플로우를 설계하세요. 코딩 경험이 없어도 쉽게 시작할 수 있습니다.",
  },
  {
    icon: "🐍",
    title: "Python 기반 오픈소스",
    description:
      "Python으로 작성된 오픈소스 프레임워크입니다. 커스텀 컴포넌트를 자유롭게 개발할 수 있습니다.",
  },
  {
    icon: "📚",
    title: "RAG 시스템 지원",
    description:
      "문서 임베딩, Vector Store 연동으로 검색 증강 생성(RAG) 시스템을 손쉽게 구축하세요.",
  },
  {
    icon: "🤖",
    title: "AI Agent 구축",
    description:
      "Tool 사용, Memory 관리 등 복잡한 AI Agent를 시각적으로 설계하고 배포할 수 있습니다.",
  },
];

export function FeatureCards() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Why Langflow?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            AI 애플리케이션 개발을 더 쉽고 빠르게
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="text-4xl mb-2">{feature.icon}</div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
