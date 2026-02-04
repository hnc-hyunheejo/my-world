"use client";

const skillCategories = [
  {
    title: "Frontend",
    color: "#6EE7B7",
    skills: [
      { name: "React", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "Next.js", level: 80 },
      { name: "TailwindCSS", level: 90 },
      { name: "HTML/CSS", level: 95 },
    ],
  },
  {
    title: "Backend",
    color: "#A78BFA",
    skills: [
      { name: "Node.js", level: 75 },
      { name: "Python", level: 70 },
      { name: "PostgreSQL", level: 65 },
      { name: "REST API", level: 80 },
      { name: "GraphQL", level: 60 },
    ],
  },
  {
    title: "Tools & Others",
    color: "#22D3EE",
    skills: [
      { name: "Git", level: 85 },
      { name: "Docker", level: 60 },
      { name: "Figma", level: 70 },
      { name: "Vercel", level: 85 },
      { name: "AWS", level: 50 },
    ],
  },
];

const techStack = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Python",
  "TailwindCSS",
  "PostgreSQL",
  "MongoDB",
  "Redis",
  "Docker",
  "AWS",
  "Vercel",
  "Git",
  "Figma",
  "OpenAI",
];

export function SkillsSection() {
  return (
    <section id="skills" className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block text-[#22D3EE] text-sm font-medium tracking-widest uppercase mb-4">
            Skills
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white/90">
            기술 스택
          </h2>
          <p className="text-white/50 mt-4 max-w-2xl mx-auto">
            꾸준히 학습하고 성장하고 있습니다
          </p>
        </div>

        {/* Skill categories */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className="glass rounded-3xl p-6 relative overflow-hidden"
            >
              {/* Background glow */}
              <div
                className="absolute -top-20 -right-20 w-40 h-40 rounded-full opacity-20 blur-3xl"
                style={{ backgroundColor: category.color }}
              />

              {/* Header */}
              <div className="flex items-center gap-3 mb-6 relative z-10">
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: category.color }}
                />
                <h3 className="text-xl font-bold text-white">{category.title}</h3>
              </div>

              {/* Skills list */}
              <div className="space-y-4 relative z-10">
                {category.skills.map((skill, index) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-white/80 text-sm font-medium">
                        {skill.name}
                      </span>
                      <span className="text-white/40 text-xs">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all duration-1000 ease-out"
                        style={{
                          width: `${skill.level}%`,
                          background: `linear-gradient(90deg, ${category.color}, ${category.color}80)`,
                          animationDelay: `${categoryIndex * 200 + index * 100}ms`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tech stack cloud */}
        <div className="glass rounded-3xl p-8 text-center">
          <h3 className="text-xl font-bold text-white mb-6">사용 기술</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {techStack.map((tech, index) => {
              const colors = ["#6EE7B7", "#A78BFA", "#22D3EE", "#FBBF24", "#F472B6"];
              const color = colors[index % colors.length];
              return (
                <span
                  key={tech}
                  className="px-4 py-2 rounded-xl text-sm font-medium glass-hover cursor-default transition-all duration-300 hover:scale-105"
                  style={{
                    backgroundColor: `${color}10`,
                    borderColor: `${color}30`,
                    color: `${color}`,
                  }}
                >
                  {tech}
                </span>
              );
            })}
          </div>
        </div>

        {/* Learning note */}
        <div className="mt-8 text-center">
          <p className="text-white/40 text-sm">
            현재{" "}
            <span className="text-[#6EE7B7]">AI/ML</span>과{" "}
            <span className="text-[#A78BFA]">System Design</span>을 학습 중입니다
          </p>
        </div>
      </div>
    </section>
  );
}
