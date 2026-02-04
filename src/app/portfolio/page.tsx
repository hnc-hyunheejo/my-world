import {
  AuroraBackground,
  Navigation,
  HeroSection,
  AboutSection,
  ProjectsSection,
  SkillsSection,
  ContactSection,
  Footer,
} from "@/components/portfolio";

export const metadata = {
  title: "김민수 | Frontend Developer",
  description:
    "안녕하세요! 사용자 경험을 최우선으로 생각하는 프론트엔드 개발자 김민수입니다.",
  keywords: [
    "Frontend Developer",
    "React",
    "TypeScript",
    "Next.js",
    "Portfolio",
    "김민수",
  ],
  openGraph: {
    title: "김민수 | Frontend Developer",
    description: "사용자 경험을 최우선으로 생각하는 프론트엔드 개발자",
    type: "website",
  },
};

export default function PortfolioPage() {
  return (
    <>
      <AuroraBackground />
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
