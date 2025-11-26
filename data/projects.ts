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

// Featured Projects - Flagship projects showcasing AI integration and automation
export const featuredProjects: Project[] = [
  {
    id: "prompttriage",
    name: "PromptTriage",
    description: "Intelligent prompt engineering platform using metaprompts, few-shot learning, and orchestrated AI workflows. Transforms rough ideas into polished, AI-ready prompts through a two-phase analysis and refinement system.",
    techStack: ["Next.js 15", "React 19", "TypeScript", "Google Gemini", "Firecrawl"],
    image: "/projects/promptrefiner.jpg",
    videoUrl: "https://github.com/Ker102/DevPotfolio/releases/download/v1.0.0-assets/PROMPTTRIAGEdemo.mp4",
    githubUrl: "https://github.com/Ker102/PromptTriage",
  },
  {
    id: "crosswind-console",
    name: "Crosswind Console",
    description: "Cross-domain intelligent discovery platform - a unified research dashboard that surfaces job opportunities, travel deals, and social trend insights with MCP-driven data gathering and Gemini-powered reasoning.",
    techStack: ["Svelte", "Vite", "FastAPI", "Google Gemini", "MCP", "Firecrawl"],
    image: "/projects/crosswind-console.jpg",
    githubUrl: "https://github.com/Ker102/Crosswind-Console",
  },
  {
    id: "kaelux-automate",
    name: "Kaelux-Automate",
    description: "Enterprise-grade automation builder blending a Next.js control plane, an embedded n8n instance, and a vector-powered retrieval layer. The AI assistant synthesizes workflow diffs instead of blindly replacing canvases.",
    techStack: ["Next.js", "Docker", "n8n", "Qdrant", "PostgreSQL", "Stripe"],
    image: "/projects/kaelux-automate.jpg",
    githubUrl: "https://github.com/Ker102/Kaelux-Automate",
  },
  {
    id: "workflow-automation-atlas",
    name: "Workflow Automation Atlas",
    description: "Curated collection of 3,800+ battle-tested n8n workflows organized into themed packs with a Vue + Vite workflow explorer. Ready-to-import JSON exports for rapid automation deployment.",
    techStack: ["Vue 3", "Vite", "n8n", "TypeScript", "Node.js"],
    image: "/projects/workflow-atlas.jpg",
    videoUrl: "https://github.com/Ker102/DevPotfolio/releases/download/v1.0.0-assets/Generic.PnP.Monitor.2025-11-21.16.19.55.mp4",
    githubUrl: "https://github.com/Ker102/n8n-ai-automation-workflow-atlas",
  },
];

// Other Projects - Additional work and side projects
export const otherProjects: Project[] = [
  {
    id: "kaelocs",
    name: "Kaelocs AI",
    description: "Modern Next.js AI chat application with Google Gemini 2.5 Flash integration. Features dual authentication, MCP capabilities (GitMCP, Brave Search, Firecrawl), and beautiful markdown rendering with syntax highlighting.",
    techStack: ["Next.js 15", "TypeScript", "NextAuth", "Google Gemini", "MCP"],
    image: "/projects/kaelocs.jpg",
    githubUrl: "https://github.com/Ker102/Kaelocs",
  },
  {
    id: "modelforge",
    name: "ModelForge (BlenderAI)",
    description: "AI-powered Blender assistant that transforms 3D workflows through natural conversation. Features ReAct-style planning with Gemini orchestration, smart material application, scene auditing, and subscription tiers.",
    techStack: ["Next.js 15", "Electron", "Prisma", "PostgreSQL", "Blender MCP", "Stripe"],
    image: "/projects/modelforge.jpg",
    githubUrl: "https://github.com/Ker102/ModelForge",
  },
];

// Combined projects for backward compatibility
export const projects: Project[] = [...featuredProjects, ...otherProjects];


