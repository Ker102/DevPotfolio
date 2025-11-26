<div align="center">

# 🚀 DevPortfolio

### My Personal Developer Portfolio & Showcase

[![Next.js](https://img.shields.io/badge/Next.js-15.0-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-06B6D4?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11.0-BB4B96?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)

[![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)

---

_A modern, high-performance developer portfolio showcasing my projects and skills with cutting-edge web technologies and stunning visual effects._

[🌐 View Live Site](#) • [📫 Contact Me](#contact)

</div>

---

## ✨ About This Project

This is my personal developer portfolio website, built from scratch to showcase my work and technical skills. The project demonstrates modern web development practices, advanced animations, and thoughtful UI/UX design.

**Not a template** - This repository serves as a showcase of how the portfolio was built using modern technologies and best practices.

## 🎨 Key Features

### Design & UI

- ✨ **Glassmorphism Effects** - Modern frosted glass UI elements
- 🎨 **Custom Gradient Theme** - Beautiful Cyan → Green → Yellow gradient
- 🌓 **Dark Mode** - Smooth theme transitions with `next-themes`
- 📱 **Fully Responsive** - Mobile-first design approach
- � **Magnetic Buttons** - Interactive hover effects with physics

### Animations & Interactivity

- �🎭 **Smooth Animations** - Powered by Framer Motion
- 📊 **Scroll Progress Indicator** - Visual feedback for page position
- 🔄 **Tech Logo Loop** - Animated technology showcase
- � **Floating Decorative Elements** - Ambient background animations
- � **Device Mockups** - Realistic project previews

### Performance & SEO

- ⚡ **Optimized Performance** - Server-side rendering with Next.js 15
- 🖼️ **Image Optimization** - Next.js Image component for lazy loading
- 🔍 **SEO Ready** - Proper meta tags and semantic HTML
- 📦 **Minimal Bundle Size** - Tree-shaking and code splitting

## 🛠️ Technical Stack

<div align="center">

| Category       | Technologies                                                                                                                         |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| **Framework**  | ![Next.js](https://img.shields.io/badge/Next.js-black?style=flat-square&logo=next.js&logoColor=white) Next.js 15 (App Router)        |
| **Language**   | ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white) TypeScript 5.0       |
| **Styling**    | ![Tailwind](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white) Tailwind CSS 3.4   |
| **Animations** | ![Framer](https://img.shields.io/badge/Framer_Motion-0055FF?style=flat-square&logo=framer&logoColor=white) Framer Motion 11.0        |
| **Forms**      | ![React Hook Form](https://img.shields.io/badge/React_Hook_Form-EC5990?style=flat-square&logo=react&logoColor=white) React Hook Form |
| **Icons**      | ![React Icons](https://img.shields.io/badge/React_Icons-E91E63?style=flat-square&logo=react&logoColor=white) React Icons             |
| **Deployment** | ![Vercel](https://img.shields.io/badge/Vercel-000000?style=flat-square&logo=vercel&logoColor=white) Vercel Platform                  |

</div>

## 🏗️ Architecture & Implementation

### Project Structure

```
📁 DevPotfolio/
├── 📂 app/                          # Next.js App Router
│   ├── layout.tsx                   # Root layout with metadata & providers
│   ├── page.tsx                     # Main landing page
│   └── globals.css                  # Global styles & gradient definitions
│
├── 📂 components/                   # React Components
│   ├── 📂 sections/                 # Page Sections
│   │   ├── Hero.tsx                 # Hero section with animated intro
│   │   ├── About.tsx                # About me & skills showcase
│   │   ├── Projects.tsx             # Projects grid with 3D tilt effects
│   │   └── Contact.tsx              # Contact form with validation
│   │
│   ├── DeviceMockup.tsx             # Device frames for project previews
│   ├── FloatingDecor.tsx            # Animated background elements
│   ├── GlassSurface.tsx             # Glassmorphism surface component
│   ├── LogoLoop.tsx                 # Infinite tech logo carousel
│   ├── MagneticButton.tsx           # Interactive magnetic hover effect
│   ├── Navbar.tsx                   # Navigation with blur effect
│   ├── ScrollProgress.tsx           # Reading progress indicator
│   └── ThemeToggle.tsx              # Dark/Light mode switcher
│
├── 📂 data/                         # Content Data
│   ├── projects.ts                  # Project showcase data
│   └── skills.ts                    # Skills & technologies
│
├── 📂 hooks/                        # Custom React Hooks
│   └── useMediaQuery.ts             # Responsive breakpoint hook
│
├── 📂 lib/                          # Utilities
│   └── animations.ts                # Framer Motion animation variants
│
└── 📂 public/                       # Static Assets
    ├── images/decorative/           # Background decorative images
    └── projects/                    # Project screenshots & videos
```

### Key Technical Implementations

#### 🎨 Custom Gradient System

```typescript
// Tailwind configuration with custom gradient colors
colors: {
  'gradient-start': '#06b6d4',  // Cyan
  'gradient-mid': '#10b981',    // Green
  'gradient-end': '#fbbf24',    // Yellow
}
```

#### 🎭 Animation System

- **Framer Motion Variants** - Reusable animation presets in `lib/animations.ts`
- **Scroll-triggered Animations** - Smooth fade-in effects on scroll
- **Magnetic Interaction** - Physics-based button hover effects
- **3D Tilt Cards** - Interactive project cards with depth

#### 📱 Responsive Design

- Mobile-first approach with Tailwind breakpoints
- Custom `useMediaQuery` hook for conditional rendering
- Adaptive layouts for all screen sizes

#### ⚡ Performance Optimizations

- **Server Components** - React Server Components by default
- **Image Optimization** - Next.js Image with lazy loading
- **Code Splitting** - Automatic route-based splitting
- **CSS Optimization** - Tailwind JIT compiler

## 🚀 Development

### Prerequisites

![Node.js](https://img.shields.io/badge/Node.js-18.17+-339933?style=flat-square&logo=node.js&logoColor=white)
![npm](https://img.shields.io/badge/npm-9.0+-CB3837?style=flat-square&logo=npm&logoColor=white)

### Local Setup

```bash
# Clone the repository
git clone https://github.com/Ker102/DevPotfolio.git
cd DevPotfolio

# Install dependencies
npm install

# Run development server
npm run dev

# Open browser
# Navigate to http://localhost:3000
```

### Build Commands

```bash
# Development server with hot reload
npm run dev

# Production build
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

## 🎯 Component Highlights

### Magnetic Button Effect

Interactive buttons that follow cursor movement with smooth physics-based animations.

```typescript
// Real-time cursor tracking with spring animations
const magneticEffect = useMotionValue({ x: 0, y: 0 });
```

### Glassmorphism Surface

Reusable glass-effect component with backdrop blur and gradient borders.

```css
backdrop-filter: blur(20px);
background: rgba(255, 255, 255, 0.05);
border: 1px solid rgba(255, 255, 255, 0.15);
```

### Scroll Progress Indicator

Visual feedback showing reading progress through the page.

### Tech Logo Loop

Infinite horizontal scroll of technology logos with smooth animations.

## 📊 Performance Metrics

![Performance](https://img.shields.io/badge/Performance-95+-success?style=for-the-badge&logo=lighthouse&logoColor=white)
![Accessibility](https://img.shields.io/badge/Accessibility-100-success?style=for-the-badge&logo=lighthouse&logoColor=white)
![Best Practices](https://img.shields.io/badge/Best_Practices-100-success?style=for-the-badge&logo=lighthouse&logoColor=white)
![SEO](https://img.shields.io/badge/SEO-100-success?style=for-the-badge&logo=lighthouse&logoColor=white)

### Optimization Techniques

✅ Server-side rendering for fast initial load  
✅ Automatic code splitting per route  
✅ Next.js Image component for optimized images  
✅ Lazy loading of heavy components  
✅ CSS purging with Tailwind JIT  
✅ Minimal JavaScript bundle size  
✅ Web Vitals optimization (LCP, FID, CLS)

## 🌐 Deployment

### Vercel Platform

![Vercel](https://img.shields.io/badge/Vercel-Deployed-black?style=for-the-badge&logo=vercel&logoColor=white)

Deployed on Vercel with automatic CI/CD:

- ✅ Automatic deployments on push to `main`
- ✅ Preview deployments for pull requests
- ✅ Edge network for global performance
- ✅ Analytics and Web Vitals monitoring

### Deployment Process

```bash
# Production build
npm run build

# Build output optimized for:
# - Static generation (SSG)
# - Server-side rendering (SSR)
# - API routes
# - Image optimization
```

## 🔧 Configuration Files

| File                 | Purpose                       |
| -------------------- | ----------------------------- |
| `next.config.js`     | Next.js configuration         |
| `tailwind.config.ts` | Tailwind CSS theming & colors |
| `tsconfig.json`      | TypeScript compiler options   |
| `postcss.config.mjs` | PostCSS plugins for Tailwind  |

## 🌐 Browser Support

![Chrome](https://img.shields.io/badge/Chrome-Latest-4285F4?style=flat-square&logo=google-chrome&logoColor=white)
![Firefox](https://img.shields.io/badge/Firefox-Latest-FF7139?style=flat-square&logo=firefox&logoColor=white)
![Safari](https://img.shields.io/badge/Safari-Latest-000000?style=flat-square&logo=safari&logoColor=white)
![Edge](https://img.shields.io/badge/Edge-Latest-0078D7?style=flat-square&logo=microsoft-edge&logoColor=white)

- ✅ Modern browsers with ES6+ support
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)
- ✅ Graceful degradation for older browsers

## 📝 Code Quality

![TypeScript](https://img.shields.io/badge/Type_Safety-100%25-blue?style=flat-square&logo=typescript)
![ESLint](https://img.shields.io/badge/ESLint-Configured-4B32C3?style=flat-square&logo=eslint)

- **TypeScript** - Full type safety across the codebase
- **ESLint** - Code linting with Next.js recommended rules
- **Component Architecture** - Modular and reusable components
- **Clean Code** - Readable and maintainable code structure

---

## 🚀 Featured Projects

These are my flagship projects showcasing AI integration, workflow automation, and full-stack development.

### 🎯 [PromptTriage](https://github.com/Ker102/PromptTriage)

[![Next.js](https://img.shields.io/badge/Next.js-15.1.6-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![Google Gemini](https://img.shields.io/badge/Google_Gemini-API-4285F4?style=flat-square&logo=google)](https://ai.google.dev/)

An intelligent prompt engineering platform using metaprompts, few-shot learning, and orchestrated AI workflows. PromptTriage transforms rough ideas into polished, AI-ready prompts through a two-phase analysis and refinement system.

**Key Features:**
- 🔍 Deep prompt analysis with gap detection and risk assessment
- ❓ Dynamic follow-up question generation
- 🛠️ Multi-model optimization (GPT, Claude, Gemini, Grok, Mistral)
- 🌐 Optional Firecrawl web enrichment for context
- 📊 Structured blueprint generation with evaluation criteria

---

### 🌐 [Crosswind Console](https://github.com/Ker102/Crosswind-Console)

[![Svelte](https://img.shields.io/badge/Svelte-5-FF3E00?style=flat-square&logo=svelte)](https://svelte.dev/)
[![FastAPI](https://img.shields.io/badge/FastAPI-Python-009688?style=flat-square&logo=fastapi)](https://fastapi.tiangolo.com/)

A unified research dashboard that surfaces job opportunities, travel deals, and social trend insights. Features a Svelte-based immersive UI with a FastAPI orchestration layer coordinating MCP-driven data gathering and Gemini-powered reasoning.

**Key Features:**
- 🔄 Cross-domain intelligence (Jobs, Travel, Trends)
- 🤖 Gemini 3 Pro integration for AI-powered analysis
- 🌍 MCP server orchestration (Firecrawl, Playwright)
- 🔐 Google OAuth authentication with NextAuth
- 📊 Real-time data aggregation and visualization

---

### ⚙️ [Kaelux-Automate](https://github.com/Ker102/Kaelux-Automate)

[![Docker](https://img.shields.io/badge/Docker-Compose-0db7ed?style=flat-square&logo=docker)](https://www.docker.com/)
[![n8n](https://img.shields.io/badge/n8n-Workflows-EA4B71?style=flat-square)](https://n8n.io/)

Enterprise-grade automation builder blending a Next.js control plane, an embedded n8n instance, and a vector-powered retrieval layer for curated workflow examples. The AI assistant synthesizes diffs instead of blindly replacing canvases.

**Key Features:**
- 🧠 LLM-powered workflow generation from natural language
- 📚 Vector database (Qdrant) for workflow exemplar retrieval
- 🔄 Differential updates for safe workflow iteration
- 🎨 Extended n8n Vue canvas with AI Builder panel
- 💳 Stripe integration for subscription management

---

### 🌌 [Workflow-Automation-Atlas](https://github.com/Ker102/n8n-ai-automation-workflow-atlas)

[![Workflows](https://img.shields.io/badge/Workflows-3831-blueviolet?style=flat-square)](https://github.com/Ker102/n8n-ai-automation-workflow-atlas)
[![Vue](https://img.shields.io/badge/Vue-3-41b883?style=flat-square&logo=vue.js)](https://vuejs.org/)

A curated collection of 3,800+ battle-tested n8n workflows organized into themed packs with a Vue + Vite workflow explorer. Everything is trimmed down to ready-to-import JSON exports for rapid automation deployment.

**Key Features:**
- 📦 6 themed workflow collections (AI Lab, RAG Kits, Community Pack)
- 🔍 Vue-based workflow explorer with search and filtering
- 📊 Automatic manifest generation with complexity analysis
- 🏷️ Integration and credential tagging
- 📄 Source licenses preserved for redistribution

---

## 🛠️ Other Projects

### 🤖 [Kaelocs-AI](https://github.com/Ker102/Kaelocs)

[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![Gemini](https://img.shields.io/badge/Gemini-2.5_Flash-4285F4?style=flat-square&logo=google)](https://ai.google.dev/)

A modern Next.js AI chat application with Google Gemini 2.5 Flash integration. Features dual authentication (User & Admin), MCP capabilities (GitMCP, Brave Search, Firecrawl), and beautiful markdown rendering.

**Key Features:**
- 🔐 NextAuth.js with Google OAuth
- 🔍 Brave Search integration for real-time web data
- 📝 Full markdown rendering with syntax highlighting
- 🎨 Modern landing page with animated sections
- 🌙 Dark mode support with next-themes

---

### 🔨 [ModelForge (BlenderAI)](https://github.com/Ker102/ModelForge)

[![Electron](https://img.shields.io/badge/Electron-Desktop-47848F?style=flat-square&logo=electron)](https://www.electronjs.org/)
[![Blender](https://img.shields.io/badge/Blender-MCP-F5792A?style=flat-square&logo=blender)](https://www.blender.org/)

AI-powered Blender assistant that transforms 3D workflows through natural conversation. Features ReAct-style planning with Gemini orchestration, smart material application, and scene auditing.

**Key Features:**
- 🎨 Natural language control for Blender operations
- 🧠 Gemini 2.x orchestration with per-step validation
- 🖥️ Electron desktop app with native MCP connectivity
- 📊 Project memory with conversation history
- 💰 Subscription tiers (Free, Starter, Pro)

---

## 📄 License

![License](https://img.shields.io/badge/License-MIT-yellow?style=flat-square)

This project is open source and available under the [MIT License](LICENSE).

---

<div align="center">

**Built with ❤️ and modern web technologies**

![Made with Love](https://img.shields.io/badge/Made_with-❤️-red?style=for-the-badge)
![Coffee Powered](https://img.shields.io/badge/Coffee-Powered-brown?style=for-the-badge&logo=buy-me-a-coffee&logoColor=white)

</div>
