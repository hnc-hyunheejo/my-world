import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { tutorials, getTutorialBySlug } from "@/data/tutorials";

interface TutorialPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return tutorials.map((tutorial) => ({
    slug: tutorial.slug,
  }));
}

export async function generateMetadata({ params }: TutorialPageProps): Promise<Metadata> {
  const { slug } = await params;
  const tutorial = getTutorialBySlug(slug);

  if (!tutorial) {
    return {
      title: "튜토리얼을 찾을 수 없습니다",
    };
  }

  return {
    title: `${tutorial.title} - Langflow 학습 가이드`,
    description: tutorial.description,
  };
}

const difficultyLabels = {
  beginner: "입문",
  intermediate: "중급",
  advanced: "고급",
};

const difficultyColors = {
  beginner: "bg-green-100 text-green-800",
  intermediate: "bg-yellow-100 text-yellow-800",
  advanced: "bg-red-100 text-red-800",
};

// Tutorial content (in a real app, this would come from MDX files)
const tutorialContents: Record<string, React.ReactNode> = {
  introduction: (
    <>
      <h2>Langflow란 무엇인가요?</h2>
      <p>
        Langflow는 Python 기반의 오픈소스 AI 애플리케이션 구축 프레임워크입니다.
        시각적인 드래그 앤 드롭 인터페이스를 통해 복잡한 AI 워크플로우를 쉽게 설계할 수 있습니다.
      </p>

      <h3>주요 특징</h3>
      <ul>
        <li><strong>시각적 개발 환경</strong>: 코드 없이 드래그 앤 드롭으로 AI 파이프라인을 구축합니다.</li>
        <li><strong>다양한 LLM 지원</strong>: OpenAI, Anthropic, 로컬 모델 등 다양한 LLM을 연동할 수 있습니다.</li>
        <li><strong>확장 가능</strong>: Python으로 커스텀 컴포넌트를 개발하여 기능을 확장할 수 있습니다.</li>
        <li><strong>RAG 지원</strong>: 문서 임베딩과 벡터 스토어를 통한 검색 증강 생성이 가능합니다.</li>
      </ul>

      <h3>왜 Langflow를 사용해야 할까요?</h3>
      <p>
        AI 애플리케이션 개발은 복잡한 코드와 여러 라이브러리의 조합이 필요합니다.
        Langflow는 이러한 복잡성을 시각적 인터페이스로 추상화하여, 아이디어를 빠르게 프로토타이핑하고
        실제 서비스로 배포할 수 있게 해줍니다.
      </p>

      <h3>학습 목표</h3>
      <p>이 튜토리얼을 완료하면 다음을 이해할 수 있습니다:</p>
      <ul>
        <li>Langflow의 기본 개념과 아키텍처</li>
        <li>Low-code AI 개발의 장점</li>
        <li>Langflow로 할 수 있는 일들</li>
      </ul>
    </>
  ),
  installation: (
    <>
      <h2>Langflow 설치하기</h2>
      <p>
        Langflow를 설치하는 방법은 여러 가지가 있습니다.
        환경에 맞는 방법을 선택하세요.
      </p>

      <h3>방법 1: pip 설치 (권장)</h3>
      <p>Python 3.10 이상이 설치되어 있다면 pip로 간단히 설치할 수 있습니다.</p>
      <pre><code>pip install langflow</code></pre>
      <p>설치 후 다음 명령어로 실행합니다:</p>
      <pre><code>langflow run</code></pre>

      <h3>방법 2: Docker 설치</h3>
      <p>Docker가 설치되어 있다면 환경 설정 없이 바로 실행할 수 있습니다.</p>
      <pre><code>docker run -d -p 7860:7860 langflowai/langflow:latest</code></pre>

      <h3>방법 3: Desktop 앱</h3>
      <p>
        Windows와 macOS용 데스크톱 앱도 제공됩니다.
        <a href="https://www.langflow.org/" target="_blank" rel="noopener noreferrer">공식 웹사이트</a>에서 다운로드하세요.
      </p>

      <h3>첫 실행 확인</h3>
      <p>
        설치가 완료되면 브라우저에서 <code>http://localhost:7860</code>에 접속합니다.
        Langflow의 웹 인터페이스가 나타나면 설치가 성공한 것입니다.
      </p>
    </>
  ),
  interface: (
    <>
      <h2>Langflow 인터페이스 익히기</h2>
      <p>
        Langflow의 웹 인터페이스는 직관적으로 설계되어 있습니다.
        주요 구성 요소를 살펴보겠습니다.
      </p>

      <h3>1. 캔버스 (Canvas)</h3>
      <p>
        캔버스는 AI 워크플로우를 설계하는 메인 작업 공간입니다.
        여기에 컴포넌트를 배치하고 연결합니다.
      </p>

      <h3>2. 컴포넌트 패널</h3>
      <p>
        왼쪽 사이드바에서 사용 가능한 컴포넌트들을 찾을 수 있습니다.
        주요 카테고리:
      </p>
      <ul>
        <li><strong>Inputs</strong>: 사용자 입력을 받는 컴포넌트</li>
        <li><strong>Outputs</strong>: 결과를 출력하는 컴포넌트</li>
        <li><strong>Models</strong>: LLM 모델 연결</li>
        <li><strong>Prompts</strong>: 프롬프트 템플릿</li>
        <li><strong>Agents</strong>: AI 에이전트 구성</li>
      </ul>

      <h3>3. 노드 연결</h3>
      <p>
        컴포넌트의 출력 포트를 다른 컴포넌트의 입력 포트로 드래그하여 연결합니다.
        데이터는 연결된 순서대로 흐릅니다.
      </p>

      <h3>4. 플레이그라운드</h3>
      <p>
        오른쪽 패널에서 만든 Flow를 바로 테스트할 수 있습니다.
        입력을 넣고 결과를 확인하세요.
      </p>
    </>
  ),
  "first-chatbot": (
    <>
      <h2>첫 번째 챗봇 만들기</h2>
      <p>
        이제 Langflow로 간단한 챗봇을 만들어보겠습니다.
        LLM에 연결하여 질문에 답변하는 기본 챗봇입니다.
      </p>

      <h3>Step 1: 새 프로젝트 생성</h3>
      <p>Langflow에 접속한 후 &quot;New Project&quot;를 클릭합니다.</p>

      <h3>Step 2: 컴포넌트 추가</h3>
      <p>다음 컴포넌트들을 캔버스에 추가합니다:</p>
      <ol>
        <li><strong>Chat Input</strong>: 사용자 메시지를 받습니다</li>
        <li><strong>OpenAI</strong> (또는 선호하는 LLM): AI 모델</li>
        <li><strong>Chat Output</strong>: 응답을 표시합니다</li>
      </ol>

      <h3>Step 3: 연결하기</h3>
      <p>
        Chat Input의 출력을 OpenAI의 입력에 연결하고,
        OpenAI의 출력을 Chat Output의 입력에 연결합니다.
      </p>

      <h3>Step 4: API 키 설정</h3>
      <p>
        OpenAI 컴포넌트를 클릭하고 API 키를 입력합니다.
        OpenAI 계정에서 API 키를 발급받을 수 있습니다.
      </p>

      <h3>Step 5: 테스트</h3>
      <p>
        플레이그라운드에서 메시지를 입력하고 AI의 응답을 확인합니다.
        축하합니다! 첫 번째 챗봇이 완성되었습니다.
      </p>
    </>
  ),
  "simple-agent": (
    <>
      <h2>Simple Agent 구축하기</h2>
      <p>
        AI Agent는 도구(Tool)를 사용하여 복잡한 작업을 수행할 수 있는 시스템입니다.
        Simple Agent 템플릿을 사용하여 검색 기능이 있는 Agent를 만들어보겠습니다.
      </p>

      <h3>Agent란?</h3>
      <p>
        Agent는 단순한 챗봇과 달리, 주어진 목표를 달성하기 위해
        여러 도구를 선택하고 사용할 수 있습니다. 예를 들어:
      </p>
      <ul>
        <li>웹 검색을 통해 최신 정보 조회</li>
        <li>계산기를 사용한 수학 연산</li>
        <li>데이터베이스 쿼리 실행</li>
      </ul>

      <h3>Step 1: Simple Agent 템플릿 선택</h3>
      <p>
        새 프로젝트 생성 시 &quot;Simple Agent&quot; 템플릿을 선택합니다.
        기본적인 Agent 구조가 자동으로 설정됩니다.
      </p>

      <h3>Step 2: Tool 추가</h3>
      <p>
        Agent에 검색 Tool을 추가합니다.
        컴포넌트 패널에서 &quot;Search&quot; 또는 &quot;Web Search&quot;를 찾아 추가하세요.
      </p>

      <h3>Step 3: Agent 설정</h3>
      <p>Agent 컴포넌트에서 다음을 설정합니다:</p>
      <ul>
        <li><strong>System Prompt</strong>: Agent의 역할과 행동 지침</li>
        <li><strong>Tools</strong>: 사용할 도구 목록</li>
        <li><strong>Model</strong>: 사용할 LLM</li>
      </ul>

      <h3>Step 4: 테스트</h3>
      <p>
        &quot;오늘 날씨 어때?&quot; 같은 실시간 정보가 필요한 질문을 해보세요.
        Agent가 검색 도구를 사용하여 답변하는 것을 확인할 수 있습니다.
      </p>
    </>
  ),
};

export default async function TutorialPage({ params }: TutorialPageProps) {
  const { slug } = await params;
  const tutorial = getTutorialBySlug(slug);

  if (!tutorial) {
    notFound();
  }

  const currentIndex = tutorials.findIndex((t) => t.slug === slug);
  const prevTutorial = currentIndex > 0 ? tutorials[currentIndex - 1] : null;
  const nextTutorial =
    currentIndex < tutorials.length - 1 ? tutorials[currentIndex + 1] : null;

  const content = tutorialContents[slug];

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Breadcrumb */}
      <nav className="mb-8 text-sm text-muted-foreground">
        <Link href="/tutorials" className="hover:text-foreground">
          튜토리얼
        </Link>
        <span className="mx-2">/</span>
        <span>{tutorial.title}</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-3">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
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
            <h1 className="text-4xl font-bold mb-4">{tutorial.title}</h1>
            <p className="text-lg text-muted-foreground">
              {tutorial.description}
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-zinc dark:prose-invert max-w-none">
            {content || (
              <p className="text-muted-foreground">
                이 튜토리얼의 콘텐츠는 준비 중입니다.
              </p>
            )}
          </div>

          {/* Navigation */}
          <div className="mt-12 flex flex-col sm:flex-row justify-between gap-4 pt-8 border-t">
            {prevTutorial ? (
              <Button asChild variant="outline">
                <Link href={`/tutorials/${prevTutorial.slug}`}>
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                  {prevTutorial.title}
                </Link>
              </Button>
            ) : (
              <div />
            )}
            {nextTutorial && (
              <Button asChild>
                <Link href={`/tutorials/${nextTutorial.slug}`}>
                  {nextTutorial.title}
                  <svg
                    className="w-4 h-4 ml-2"
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
                </Link>
              </Button>
            )}
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          <Card className="sticky top-24">
            <CardContent className="pt-6">
              <h3 className="font-semibold mb-4">학습 목표</h3>
              <ul className="space-y-2">
                {tutorial.objectives.map((objective, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm">
                    <svg
                      className="w-5 h-5 text-primary shrink-0 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    {objective}
                  </li>
                ))}
              </ul>

              <hr className="my-6" />

              <h3 className="font-semibold mb-4">관련 자료</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="https://docs.langflow.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    Langflow 공식 문서
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/langflow-ai/langflow"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    GitHub 저장소
                  </a>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
