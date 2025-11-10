export interface Project {
  id: string;
  name: string;
  description: string;
  techStack: string[];
  image: string;
  videoUrl?: string;
  liveUrl?: string;
  githubUrl?: string;
}

export const projects: Project[] = [
  {
    id: "kaelocs",
    name: "Kaelocs AI Workspace",
    description: "Production-ready AI workspace that combines Google OAuth, admin-gated Gemini tooling, and robust state management to deliver secure chat automation.",
    techStack: ["Next.js 15", "TypeScript", "NextAuth", "React Query", "Zustand"],
    image: "/projects/kaelocs.jpg",
    githubUrl: "https://github.com/Ker102/Kaelocs",
  },
  {
    id: "modelforge",
    name: "ModelForge Platform",
    description: "Subscription platform for an AI-driven Blender assistant, blending Gemini orchestration, Prisma-backed dashboards, and Stripe-powered billing.",
    techStack: ["Next.js 14", "Prisma", "PostgreSQL", "Stripe", "NextAuth"],
    image: "/projects/modelforge.jpg",
    githubUrl: "https://github.com/Ker102/ModelForge",
  },
  {
    id: "prompttriage",
    name: "PromptTriage",
    description: "Next.js prompt engineering companion that critiques inputs, gathers clarifying context, and drafts AI-ready prompts using Gemini and optional Firecrawl search.",
    techStack: ["Next.js", "TypeScript", "Google Gemini", "Tailwind CSS", "Firecrawl"],
    image: "/projects/promptrefiner.jpg",
    videoUrl: "https://github.com/Ker102/DevPotfolio/releases/download/v1.0.0-assets/PROMPTTRIAGEdemo.mp4",
    githubUrl: "https://github.com/Ker102/PromptTriage",
  },
];


