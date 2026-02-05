# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A Next.js 16 learning platform for Langflow (AI/LLM platform) with Korean language content. Features a "Neon Flow" glassmorphism dark theme.

## Commands

```bash
npm run dev     # Start development server (http://localhost:3000)
npm run build   # Production build
npm start       # Start production server
npm run lint    # Run ESLint
```

## Architecture

### Tech Stack
- **Framework**: Next.js 16 (App Router), React 19, TypeScript 5
- **Styling**: Tailwind CSS 4, shadcn/ui (new-york style), Radix UI
- **Icons**: Lucide React
- **Fonts**: Space Grotesk (display), Plus Jakarta Sans (body)

### Directory Structure
```
src/
├── app/                    # Next.js App Router pages
│   ├── getting-started/    # Setup guides
│   ├── portfolio/          # Portfolio showcase
│   ├── roadmap/            # Learning roadmap
│   └── tutorials/[slug]/   # Dynamic tutorial pages
├── components/
│   ├── home/               # Homepage sections
│   ├── layout/             # Header, Footer
│   ├── portfolio/          # Portfolio components
│   ├── learning/           # Educational components
│   ├── shared/             # Shared components (FlowBackground)
│   └── ui/                 # shadcn/ui components
├── data/
│   ├── roadmap.ts          # 5-phase learning roadmap data
│   └── tutorials.ts        # Tutorial definitions with getTutorialBySlug()
└── lib/
    └── utils.ts            # cn() utility for Tailwind class merging
```

### Path Aliases
- `@/*` maps to `./src/*`
- `@/components`, `@/ui`, `@/lib`, `@/hooks`

## Design System

### Theme Colors (Neon Flow)
- Background: #050510 (dark)
- Primary: Emerald (#10B981)
- Accent: Violet (#8B5CF6)
- Additional: Cyan, Amber, Rose

### Key CSS Classes (in globals.css)
- `.glass`, `.glass-card`, `.glass-nav` - Glass morphism effects
- `.text-gradient-*` - Text gradients
- `.glow-*`, `.neon-border-*` - Neon effects
- `.btn-neon`, `.btn-glass` - Button styles
- Animations: `float`, `pulse-glow`, `fade-in-up`, `shimmer`, `gradient-shift`

## Content Structure

Learning roadmap has 5 phases (Korean):
1. 기초 (Basics) - Langflow introduction
2. 기본 활용 (Basic Usage) - First flows
3. Agent 개발 (Agent Development)
4. RAG 시스템 (RAG Systems)
5. 고급 & 배포 (Advanced & Deployment)

## Notes

- All content/metadata is in Korean
- Uses CSS variables for theming (defined in `:root`)
- Components use "use client" directive where needed for interactivity
- Target Langflow version: v1.7.3
