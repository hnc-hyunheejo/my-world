import type { Metadata } from "next";
import { Space_Grotesk, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FlowBackground } from "@/components/shared/FlowBackground";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

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
    <html lang="ko" className={`${spaceGrotesk.variable} ${plusJakartaSans.variable}`}>
      <body className="font-sans antialiased min-h-screen flex flex-col bg-[#050510]">
        <FlowBackground />
        <Header />
        <main className="flex-1 relative">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
