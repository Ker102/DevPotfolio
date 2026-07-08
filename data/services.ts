import {
    HiOutlinePaintBrush,
    HiOutlineCodeBracket,
    HiOutlineCloud,
    HiOutlineRocketLaunch,
    HiOutlineEye,
    HiOutlineDevicePhoneMobile,
    HiOutlineSparkles,
    HiOutlineCube,
    HiOutlineServerStack,
    HiOutlineShieldCheck,
    HiOutlineBolt,
    HiOutlineCog8Tooth,
    HiOutlineBeaker,
    HiOutlineChartBar,
    HiOutlineCommandLine,
    HiOutlineArrowPath,
} from "react-icons/hi2";
import { IconType } from "react-icons";

export interface ServiceFeature {
    icon: IconType;
    title: string;
    description: string;
}

export interface ServicePlan {
    name: string;
    subtitle: string;
    price: string;
    period: string;
    description: string;
    features: string[];
    cta: string;
    ctaHref: string;
    highlighted: boolean;
}

export interface ServiceFAQ {
    question: string;
    answer: string;
}

export interface ServiceData {
    slug: string;
    title: string;
    shortTitle: string;
    tagline: string;
    description: string;
    icon: IconType;
    features: ServiceFeature[];
    plans: ServicePlan[];
    faqs: ServiceFAQ[];
}

export const services: ServiceData[] = [
    {
        slug: "ui-ux-design",
        title: "UI/UX Design",
        shortTitle: "Design",
        tagline: "Interfaces that convert. Experiences that delight.",
        description:
            "Modern, responsive interfaces designed for optimal user experience and engagement. From wireframes to pixel-perfect production designs.",
        icon: HiOutlinePaintBrush,
        features: [
            {
                icon: HiOutlineEye,
                title: "User Research & Wireframing",
                description:
                    "In-depth analysis of your target audience with wireframes that map optimal user journeys.",
            },
            {
                icon: HiOutlineDevicePhoneMobile,
                title: "Responsive Design",
                description:
                    "Pixel-perfect designs that look stunning on every device — desktop, tablet, and mobile.",
            },
            {
                icon: HiOutlineSparkles,
                title: "Design Systems",
                description:
                    "Reusable component libraries and style guides that maintain consistency across your product.",
            },
            {
                icon: HiOutlineCube,
                title: "Prototyping & Testing",
                description:
                    "Interactive prototypes with real user testing to validate designs before development begins.",
            },
        ],
        plans: [
            {
                name: "Custom Project",
                subtitle: "Tailored to Your Needs",
                price: "Custom",
                period: "",
                description:
                    "Every project is unique. We scope and price based on your specific design requirements, timeline, and complexity.",
                features: [
                    "User research & competitive analysis",
                    "Wireframes & information architecture",
                    "High-fidelity mockups",
                    "Responsive design (mobile + desktop)",
                    "Design system / style guide",
                    "Interactive prototyping",
                    "Usability testing & iteration",
                    "Developer handoff with specs",
                ],
                cta: "Get a Quote",
                ctaHref: "/pricing#contact",
                highlighted: true,
            },
        ],
        faqs: [
            {
                question: "How long does a typical design project take?",
                answer: "Timelines vary based on scope. A landing page redesign might take 1-2 weeks, while a full product design can take 4-8 weeks. We'll give you a clear timeline during scoping.",
            },
            {
                question: "Do you work with existing brand guidelines?",
                answer: "Absolutely. We can work within your existing brand system or help you create a new one from scratch.",
            },
            {
                question: "What design tools do you use?",
                answer: "We primarily use Figma for design and prototyping, ensuring easy collaboration and developer handoff.",
            },
            {
                question: "Do you handle the frontend development too?",
                answer: "Yes! We offer full-stack development as a separate service and can take your designs straight to production code.",
            },
        ],
    },
    {
        slug: "full-stack-development",
        title: "Full-Stack Development",
        shortTitle: "Development",
        tagline: "From concept to production. End-to-end.",
        description:
            "End-to-end application development with robust backends and polished frontends. We build fast, scalable, and maintainable software.",
        icon: HiOutlineCodeBracket,
        features: [
            {
                icon: HiOutlineCodeBracket,
                title: "Modern Frontend",
                description:
                    "React, Next.js, and TypeScript — fast, accessible, and SEO-optimized applications.",
            },
            {
                icon: HiOutlineServerStack,
                title: "Scalable Backend",
                description:
                    "Node.js, Python, or Go backends with REST/GraphQL APIs designed for growth.",
            },
            {
                icon: HiOutlineCube,
                title: "Database Architecture",
                description:
                    "PostgreSQL, MongoDB, Redis — we choose the right database for your data patterns.",
            },
            {
                icon: HiOutlineShieldCheck,
                title: "Security & Auth",
                description:
                    "OAuth, JWT, RBAC — enterprise authentication and authorization built in from day one.",
            },
        ],
        plans: [
            {
                name: "Custom Project",
                subtitle: "Scoped to Your Requirements",
                price: "Custom",
                period: "",
                description:
                    "Every application is different. We provide detailed estimates based on your feature requirements, integrations, and timeline.",
                features: [
                    "Technical architecture & planning",
                    "Frontend development (React/Next.js)",
                    "Backend API development",
                    "Database design & implementation",
                    "Authentication & authorization",
                    "Third-party integrations",
                    "Testing & QA",
                    "Deployment & launch support",
                ],
                cta: "Get a Quote",
                ctaHref: "/pricing#contact",
                highlighted: true,
            },
        ],
        faqs: [
            {
                question: "What tech stack do you use?",
                answer: "Our primary stack is Next.js/React with TypeScript on the frontend, Node.js or Python on the backend, and PostgreSQL or MongoDB for databases. We adapt based on project needs.",
            },
            {
                question: "Can you work with our existing codebase?",
                answer: "Yes. We regularly take over, refactor, or extend existing codebases. We'll do a thorough code audit first to understand the current state.",
            },
            {
                question: "Do you provide ongoing maintenance?",
                answer: "We offer continuous delivery retainers for ongoing maintenance, feature development, and support after launch.",
            },
            {
                question: "How do you handle project management?",
                answer: "We use agile sprints with regular check-ins. You'll have full visibility into progress via shared project boards and weekly demos.",
            },
        ],
    },
    {
        slug: "cloud-infrastructure",
        title: "Cloud Infrastructure",
        shortTitle: "Cloud",
        tagline: "Enterprise-grade. Infinitely scalable.",
        description:
            "Scalable hosting solutions with managed databases, CDN, and automated deployments. Your infrastructure, handled by experts.",
        icon: HiOutlineCloud,
        features: [
            {
                icon: HiOutlineCloud,
                title: "Cloud Architecture",
                description:
                    "AWS, GCP, or Azure — we design infrastructure that scales with your business.",
            },
            {
                icon: HiOutlineShieldCheck,
                title: "Security & Compliance",
                description:
                    "SSL, firewalls, WAF, and compliance configurations for your industry requirements.",
            },
            {
                icon: HiOutlineBolt,
                title: "Performance & CDN",
                description:
                    "Global CDN, caching layers, and load balancing for lightning-fast response times.",
            },
            {
                icon: HiOutlineChartBar,
                title: "Monitoring & Alerts",
                description:
                    "Real-time dashboards, uptime monitoring, and automated alerting so you're never caught off guard.",
            },
        ],
        plans: [
            {
                name: "Custom Project",
                subtitle: "Designed for Your Scale",
                price: "Custom",
                period: "",
                description:
                    "Infrastructure needs vary wildly. We design and price based on your traffic, compliance needs, and performance requirements.",
                features: [
                    "Cloud architecture design",
                    "Infrastructure as Code (Terraform/Pulumi)",
                    "Managed database setup",
                    "CDN & load balancer configuration",
                    "SSL & security hardening",
                    "Monitoring & alerting setup",
                    "Backup & disaster recovery",
                    "Performance optimization",
                ],
                cta: "Get a Quote",
                ctaHref: "/pricing#contact",
                highlighted: true,
            },
        ],
        faqs: [
            {
                question: "Which cloud providers do you work with?",
                answer: "We work with AWS, Google Cloud Platform, and Microsoft Azure. We'll recommend the best fit based on your needs and budget.",
            },
            {
                question: "Can you migrate our existing infrastructure?",
                answer: "Yes. We have experience with cloud-to-cloud migrations, on-premise to cloud migrations, and infrastructure modernization.",
            },
            {
                question: "Do you provide ongoing management?",
                answer: "We offer managed infrastructure retainers that include monitoring, patching, scaling, and 24/7 incident response.",
            },
            {
                question: "How do you handle security?",
                answer: "Security is built into every layer — from network isolation and encryption to IAM policies and regular security audits.",
            },
        ],
    },
    {
        slug: "continuous-delivery",
        title: "Continuous Delivery",
        shortTitle: "CI/CD",
        tagline: "Ship faster. Break nothing.",
        description:
            "CI/CD pipelines, monitoring, and maintenance to keep your platform running smoothly. Automate your entire delivery pipeline.",
        icon: HiOutlineRocketLaunch,
        features: [
            {
                icon: HiOutlineCommandLine,
                title: "CI/CD Pipelines",
                description:
                    "GitHub Actions, GitLab CI, or Jenkins — automated build, test, and deploy workflows.",
            },
            {
                icon: HiOutlineArrowPath,
                title: "Zero-Downtime Deploys",
                description:
                    "Blue-green deployments, canary releases, and rollback strategies for safe releases.",
            },
            {
                icon: HiOutlineBeaker,
                title: "Automated Testing",
                description:
                    "Unit, integration, and E2E test suites integrated into your pipeline for confidence on every commit.",
            },
            {
                icon: HiOutlineCog8Tooth,
                title: "Infrastructure as Code",
                description:
                    "Version-controlled infrastructure with Terraform, ensuring reproducible and auditable environments.",
            },
        ],
        plans: [
            {
                name: "Custom Project",
                subtitle: "Built for Your Workflow",
                price: "Custom",
                period: "",
                description:
                    "Every team's deployment workflow is different. We design CI/CD solutions tailored to your stack, team size, and release cadence.",
                features: [
                    "CI/CD pipeline design & setup",
                    "Automated testing integration",
                    "Zero-downtime deployment strategy",
                    "Environment management (staging/prod)",
                    "Infrastructure as Code",
                    "Container orchestration (Docker/K8s)",
                    "Monitoring & alerting integration",
                    "Documentation & team training",
                ],
                cta: "Get a Quote",
                ctaHref: "/pricing#contact",
                highlighted: true,
            },
        ],
        faqs: [
            {
                question: "What CI/CD platforms do you support?",
                answer: "We work with GitHub Actions, GitLab CI, Jenkins, CircleCI, and more. We'll recommend the best fit for your existing workflow.",
            },
            {
                question: "Can you set up pipelines for monorepos?",
                answer: "Absolutely. We have extensive experience with monorepo tooling (Turborepo, Nx) and optimizing pipelines for multi-package repositories.",
            },
            {
                question: "Do you provide ongoing pipeline maintenance?",
                answer: "Yes. We offer retainers for pipeline optimization, dependency updates, and adapting your CI/CD as your team and codebase grow.",
            },
            {
                question: "How long does a typical CI/CD setup take?",
                answer: "A basic pipeline can be set up in 1-2 days. More complex setups with staging environments, automated testing, and infrastructure provisioning typically take 1-2 weeks.",
            },
        ],
    },
];

export function getServiceBySlug(slug: string): ServiceData | undefined {
    return services.find((s) => s.slug === slug);
}
