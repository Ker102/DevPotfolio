# Developer Portfolio

A modern, responsive developer portfolio built with Next.js 13+, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- ✨ Modern UI with glassmorphism and gradient effects
- 🎨 Custom gradient theme (Cyan → Green → Yellow)
- 🌓 Dark mode with smooth transitions
- 📱 Fully responsive design (mobile-first approach)
- 🎭 Smooth animations powered by Framer Motion
- 🎯 Magnetic button hover effects
- 📊 Scroll progress indicator
- 💼 Device mockups for project showcases
- 📝 Contact form with validation
- ⚡ Optimized for performance and SEO

## Tech Stack

- **Framework:** Next.js 13+ (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** React Icons
- **Form Handling:** React Hook Form
- **Theme Management:** next-themes

## Getting Started

1. Clone the repository:
```bash
git clone <your-repo-url>
cd devportfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Customization

### 1. Personal Information

Edit the following files to add your personal information:

- `app/layout.tsx` - Update metadata (title, description)
- `components/sections/Hero.tsx` - Update name and titles
- `components/sections/Contact.tsx` - Update contact information and social links

### 2. Projects

Edit `data/projects.ts` to add your projects:

```typescript
{
  id: "unique-id",
  name: "Project Name",
  description: "Project description",
  techStack: ["Tech1", "Tech2"],
  image: "/projects/your-image.jpg",
  liveUrl: "https://your-live-url.com",
  githubUrl: "https://github.com/your-repo"
}
```

Add project images to `/public/projects/` directory.

### 3. Skills

Edit `data/skills.ts` to customize your skills and technologies.

### 4. Color Theme

The portfolio uses a custom gradient theme. To change colors, update:

- `tailwind.config.ts` - Color definitions
- `app/globals.css` - Gradient backgrounds

## Project Structure

```
devportfolio/
├── app/                      # Next.js app directory
│   ├── layout.tsx           # Root layout with metadata
│   ├── page.tsx             # Home page
│   └── globals.css          # Global styles
├── components/              # React components
│   ├── sections/           # Page sections
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Projects.tsx
│   │   └── Contact.tsx
│   ├── DeviceMockup.tsx    # Device mockup component
│   ├── MagneticButton.tsx  # Magnetic button effect
│   ├── ScrollProgress.tsx  # Scroll indicator
│   └── ThemeToggle.tsx     # Dark mode toggle
├── data/                    # Data files
│   ├── projects.ts
│   └── skills.ts
├── lib/                     # Utilities
│   └── animations.ts       # Framer Motion variants
├── public/                  # Static assets
│   ├── images/
│   └── projects/
└── ...config files

```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Deploy with one click

### Other Platforms

Build the production version:
```bash
npm run build
npm start
```

## Performance

- Optimized images with Next.js Image component
- Lazy loading of sections
- Minimal JavaScript bundle
- CSS-in-JS with Tailwind
- Server-side rendering

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT License - feel free to use this project for your own portfolio!

## Credits

Built with ❤️ using modern web technologies.



