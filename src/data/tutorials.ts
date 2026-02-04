export interface Tutorial {
  id: string;
  slug: string;
  title: string;
  description: string;
  duration: string;
  difficulty: "beginner" | "intermediate" | "advanced";
  phase: number;
  order: number;
  objectives: string[];
}

export const tutorials: Tutorial[] = [
  {
    id: "1",
    slug: "introduction",
    title: "Langflow 소개",
    description:
      "Langflow의 기본 개념과 특징을 알아봅니다. Low-code AI 개발의 장점과 활용 사례를 살펴봅니다.",
    duration: "30분",
    difficulty: "beginner",
    phase: 1,
    order: 1,
    objectives: [
      "Langflow가 무엇인지 이해한다",
      "Low-code AI 개발의 장점을 파악한다",
      "Langflow의 주요 기능을 살펴본다",
    ],
  },
  {
    id: "2",
    slug: "installation",
    title: "설치 가이드",
    description:
      "Langflow를 로컬 환경에 설치하는 방법을 단계별로 안내합니다. pip, Docker, Desktop 앱 설치 방법을 다룹니다.",
    duration: "20분",
    difficulty: "beginner",
    phase: 1,
    order: 2,
    objectives: [
      "Python 환경을 설정한다",
      "pip 또는 Docker로 Langflow를 설치한다",
      "Langflow를 실행하고 웹 UI에 접속한다",
    ],
  },
  {
    id: "3",
    slug: "interface",
    title: "인터페이스 익히기",
    description:
      "Langflow의 시각적 인터페이스 사용법을 익힙니다. 캔버스, 컴포넌트 패널, 노드 연결 방법을 학습합니다.",
    duration: "30분",
    difficulty: "beginner",
    phase: 1,
    order: 3,
    objectives: [
      "캔버스 사용법을 익힌다",
      "컴포넌트 패널을 이해한다",
      "노드를 연결하는 방법을 배운다",
    ],
  },
  {
    id: "4",
    slug: "first-chatbot",
    title: "첫 번째 챗봇 만들기",
    description:
      "Langflow로 간단한 챗봇을 만들어봅니다. Input, LLM, Output 컴포넌트를 연결하여 동작하는 챗봇을 구현합니다.",
    duration: "45분",
    difficulty: "beginner",
    phase: 2,
    order: 4,
    objectives: [
      "Input/Output 컴포넌트를 사용한다",
      "LLM 연결을 설정한다",
      "기본 챗봇을 구현하고 테스트한다",
    ],
  },
  {
    id: "5",
    slug: "simple-agent",
    title: "Simple Agent 구축",
    description:
      "AI Agent의 개념을 이해하고 Simple Agent 템플릿을 활용하여 검색 기능이 있는 Agent를 만들어봅니다.",
    duration: "60분",
    difficulty: "intermediate",
    phase: 3,
    order: 5,
    objectives: [
      "Agent의 개념을 이해한다",
      "Simple Agent 템플릿을 사용한다",
      "검색 Tool을 연동한 Agent를 구현한다",
    ],
  },
];

export function getTutorialBySlug(slug: string): Tutorial | undefined {
  return tutorials.find((t) => t.slug === slug);
}

export function getTutorialsByPhase(phase: number): Tutorial[] {
  return tutorials.filter((t) => t.phase === phase).sort((a, b) => a.order - b.order);
}
