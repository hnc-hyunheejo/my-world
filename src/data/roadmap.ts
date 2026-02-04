export interface RoadmapLesson {
  id: string;
  title: string;
  duration: string;
}

export interface RoadmapPhase {
  id: number;
  title: string;
  description: string;
  duration: string;
  color: string;
  lessons: RoadmapLesson[];
}

export const roadmapData: RoadmapPhase[] = [
  {
    id: 1,
    title: "기초",
    description: "Langflow의 기본 개념과 설치 방법을 학습합니다.",
    duration: "1-2주",
    color: "#10B981",
    lessons: [
      { id: "intro", title: "Langflow 소개", duration: "30분" },
      { id: "install", title: "설치 가이드", duration: "20분" },
      { id: "ui-basics", title: "인터페이스 익히기", duration: "30분" },
    ],
  },
  {
    id: 2,
    title: "기본 활용",
    description: "첫 번째 Flow를 만들고 컴포넌트 사용법을 익힙니다.",
    duration: "2-3주",
    color: "#3B82F6",
    lessons: [
      { id: "first-flow", title: "첫 번째 Flow 만들기", duration: "45분" },
      { id: "components", title: "컴포넌트 연결", duration: "30분" },
      { id: "prompt", title: "Prompt 설계", duration: "40분" },
    ],
  },
  {
    id: 3,
    title: "Agent 개발",
    description: "AI Agent를 구축하고 Tool을 활용하는 방법을 배웁니다.",
    duration: "3-4주",
    color: "#8B5CF6",
    lessons: [
      { id: "simple-agent", title: "Simple Agent 구축", duration: "60분" },
      { id: "tools", title: "Tool 사용하기", duration: "45분" },
      { id: "memory", title: "Memory 관리", duration: "40분" },
    ],
  },
  {
    id: 4,
    title: "RAG 시스템",
    description: "문서 기반 검색 증강 생성 시스템을 구축합니다.",
    duration: "4-6주",
    color: "#F59E0B",
    lessons: [
      { id: "rag-basics", title: "RAG 기초", duration: "50분" },
      { id: "embedding", title: "문서 임베딩", duration: "60분" },
      { id: "vector-store", title: "Vector Store 연동", duration: "60분" },
    ],
  },
  {
    id: 5,
    title: "고급 & 배포",
    description: "MCP 통합과 프로덕션 배포 방법을 학습합니다.",
    duration: "6주+",
    color: "#EF4444",
    lessons: [
      { id: "mcp", title: "MCP 프로토콜", duration: "60분" },
      { id: "custom", title: "커스텀 컴포넌트", duration: "90분" },
      { id: "deploy", title: "프로덕션 배포", duration: "60분" },
    ],
  },
];
