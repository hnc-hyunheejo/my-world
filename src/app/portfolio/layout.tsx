import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "김민수 | Frontend Developer Portfolio",
  description:
    "안녕하세요! 사용자 경험을 최우선으로 생각하는 프론트엔드 개발자 김민수입니다. React, TypeScript, Next.js를 주로 사용합니다.",
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#0a0a1a]">
      {children}
    </div>
  );
}
