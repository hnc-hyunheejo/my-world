import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Langflow 학습 가이드 - AI 애플리케이션 개발 시작하기",
  description:
    "Langflow를 활용한 AI Agent, RAG 시스템 구축 방법을 단계별로 학습하세요. 초보자를 위한 한국어 튜토리얼 제공.",
  keywords: ["Langflow", "AI", "RAG", "Agent", "Low-code", "Python", "LLM"],
  openGraph: {
    title: "Langflow 학습 허브",
    description: "드래그 앤 드롭으로 AI 애플리케이션 만들기",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="font-sans antialiased min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
