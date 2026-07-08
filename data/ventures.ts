export type VentureStage = "Active division" | "Public build" | "Early-stage lab";

export interface Venture {
    id: string;
    name: string;
    stage: VentureStage;
    category: string;
    description: string;
    audience: string;
    href: string;
    linkLabel: string;
    isExternal?: boolean;
    tags: string[];
}

export const coreVentures: Venture[] = [
    {
        id: "medai",
        name: "MedAI",
        stage: "Active division",
        category: "Medical research infrastructure",
        description:
            "A Kaelux division focused on secure AI infrastructure, research tooling, DevSecOps, and MLOps for retina, hearing, tinnitus, and medical imaging teams.",
        audience: "Research labs, hospitals, universities, foundations, and medical AI collaborators.",
        href: "/medai",
        linkLabel: "Explore MedAI",
        tags: ["Medical AI", "Research tooling", "Secure infrastructure"],
    },
    {
        id: "vipermesh",
        name: "ViperMesh",
        stage: "Public build",
        category: "3D creation agent",
        description:
            "An AI-powered Blender assistant and neural 3D workspace using a custom addon so agents can work with Blender, ModelForge, and creative 3D workflows.",
        audience: "3D creators, Blender users, addon builders, and teams exploring conversational creation tools.",
        href: "https://github.com/Ker102/ViperMesh",
        linkLabel: "View repository",
        isExternal: true,
        tags: ["Blender", "Agents", "3D tooling"],
    },
    {
        id: "prompttriage",
        name: "PromptTriage",
        stage: "Public build",
        category: "Prompt analysis and refinement",
        description:
            "A prompt analyzer, refiner, and generator built around frontier system-prompt patterns, RAG-backed prompt references, and structured improvement workflows.",
        audience: "Builders, prompt engineers, and teams that need a repeatable path from rough idea to model-ready prompt.",
        href: "https://github.com/Ker102/PromptTriage",
        linkLabel: "View repository",
        isExternal: true,
        tags: ["Prompt engineering", "RAG", "LLM workflows"],
    },
    {
        id: "nullstate",
        name: "Nullstate",
        stage: "Early-stage lab",
        category: "Infrastructure security tooling",
        description:
            "A local-first purple-team CLI for Terraform IaC with LocalStack sandboxes, red-blue reasoning, deterministic remediation, and evidence reports.",
        audience: "Infrastructure teams, DevSecOps builders, and security-minded platform engineers.",
        href: "https://github.com/Ker102/nullstate-cli",
        linkLabel: "View repository",
        isExternal: true,
        tags: ["Terraform", "DevSecOps", "IaC security"],
    },
];

export const labVentures: Venture[] = [
    {
        id: "crosswind-console",
        name: "Crosswind Console",
        stage: "Early-stage lab",
        category: "Discovery dashboard",
        description:
            "A cross-domain research console for jobs, travel, and social signals using MCP-style data gathering and model-assisted reasoning.",
        audience: "Exploration work that supports Kaelux's broader thesis around agentic discovery interfaces.",
        href: "https://github.com/Ker102/Crosswind-Console",
        linkLabel: "View repository",
        isExternal: true,
        tags: ["Research", "MCP", "Dashboards"],
    },
    {
        id: "kaelux-automate",
        name: "Kaelux-Automate",
        stage: "Early-stage lab",
        category: "Automation builder",
        description:
            "An automation control plane combining workflow orchestration, retrieval, and AI-assisted workflow editing.",
        audience: "Operational teams and builders exploring safer ways to create and maintain automations.",
        href: "https://github.com/Ker102/Kaelux-Automate",
        linkLabel: "View repository",
        isExternal: true,
        tags: ["Automation", "n8n", "Workflow systems"],
    },
    {
        id: "workflow-atlas",
        name: "Workflow Atlas",
        stage: "Early-stage lab",
        category: "Automation dataset",
        description:
            "A large workflow-template explorer and dataset experiment for learning from automation patterns.",
        audience: "Builders researching workflow automation patterns, template discovery, and operational tooling.",
        href: "https://github.com/Ker102/n8n-workflows-36k",
        linkLabel: "View repository",
        isExternal: true,
        tags: ["Automation", "Templates", "Dataset"],
    },
    {
        id: "kaelocs",
        name: "Kaelocs AI",
        stage: "Early-stage lab",
        category: "AI chat application",
        description:
            "A modern AI chat application exploring model integrations, authentication, markdown rendering, and MCP-adjacent capabilities.",
        audience: "Product and interface experiments that inform Kaelux's venture-building toolkit.",
        href: "https://github.com/Ker102/Kaelocs",
        linkLabel: "View repository",
        isExternal: true,
        tags: ["AI chat", "MCP", "Product lab"],
    },
];

export const allVentures = [...coreVentures, ...labVentures];
