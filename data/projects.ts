export interface Project {
  id: string;
  name: string;
  description: string;
  techStack: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
}

export const projects: Project[] = [
  {
    id: "1",
    name: "E-Commerce Platform",
    description: "A full-stack e-commerce platform with advanced features including real-time inventory, payment integration, and admin dashboard.",
    techStack: ["Next.js", "TypeScript", "Stripe", "Prisma", "PostgreSQL"],
    image: "/projects/ecommerce.jpg",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/yourusername/ecommerce",
  },
  {
    id: "2",
    name: "AI Chat Application",
    description: "Real-time chat application powered by AI with natural language processing, sentiment analysis, and smart replies.",
    techStack: ["React", "Node.js", "OpenAI", "Socket.io", "MongoDB"],
    image: "/projects/chat-app.jpg",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/yourusername/ai-chat",
  },
  {
    id: "3",
    name: "Task Management Dashboard",
    description: "Collaborative task management tool with drag-and-drop interface, real-time updates, and team collaboration features.",
    techStack: ["React", "TypeScript", "Firebase", "Tailwind CSS", "DnD Kit"],
    image: "/projects/task-dashboard.jpg",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/yourusername/task-manager",
  },
  {
    id: "4",
    name: "Weather Forecast App",
    description: "Beautiful weather application with 7-day forecasts, interactive maps, and location-based weather alerts.",
    techStack: ["React Native", "TypeScript", "OpenWeather API", "Expo"],
    image: "/projects/weather-app.jpg",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/yourusername/weather-app",
  },
];



