# 🚀 Deployment Guide

## Prerequisites

Before deploying, ensure you have:
- [x] Customized personal information (name, contact, etc.)
- [x] Added your real project data
- [x] Replaced placeholder images
- [x] Tested the build locally: `npm run build`
- [x] Verified everything works: `npm start`

## Option 1: Deploy to Vercel (Recommended) ⚡

Vercel is made by the creators of Next.js and offers the best performance.

### Steps:

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Deploy on Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js settings
   - Click "Deploy"

3. **Done!** 🎉
   - Your site will be live in ~2 minutes
   - You'll get a free `.vercel.app` domain
   - Automatic HTTPS included
   - Auto-deploys on every push to main

### Custom Domain (Optional)
- Go to Project Settings → Domains
- Add your custom domain
- Update DNS records as instructed

## Option 2: Deploy to Netlify

1. **Build Command:** `npm run build`
2. **Publish Directory:** `.next`
3. **Environment Variables:** None required

### Steps:
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Deploy
cd /home/mint/Desktop/cursor-projects/projects/Project01/Devportfolio
netlify deploy --prod
```

## Option 3: Deploy to Railway

1. Go to [railway.app](https://railway.app)
2. "New Project" → "Deploy from GitHub"
3. Select your repository
4. Railway auto-detects Next.js
5. Click "Deploy"

## Option 4: Deploy to DigitalOcean App Platform

1. Go to [cloud.digitalocean.com/apps](https://cloud.digitalocean.com/apps)
2. "Create App" → Choose GitHub
3. Select repository
4. Settings:
   - Build Command: `npm run build`
   - Run Command: `npm start`
5. Deploy

## Option 5: Self-Host with Docker

Create `Dockerfile`:
```dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
```

Build and run:
```bash
docker build -t devportfolio .
docker run -p 3000:3000 devportfolio
```

## Environment Variables

Currently, your portfolio doesn't require any environment variables. If you add backend features (email sending, analytics, etc.), add them in your deployment platform.

### Example for future use:
```env
# For email service (if you add it later)
EMAIL_API_KEY=your_api_key
SMTP_HOST=smtp.example.com
SMTP_PORT=587

# Analytics (optional)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

## Performance Optimization Checklist

Before deployment, ensure:

- [x] ✅ Production build successful
- [x] ✅ No console errors
- [x] ✅ Images optimized (< 500KB each)
- [x] ✅ Lighthouse score > 90
- [ ] Consider adding analytics (Google Analytics, Plausible, etc.)
- [ ] Set up monitoring (Sentry, LogRocket, etc.)

## Post-Deployment Checklist

After deploying:

1. **Test on Multiple Devices**
   - [ ] Desktop (Chrome, Firefox, Safari)
   - [ ] Mobile (iOS Safari, Chrome)
   - [ ] Tablet

2. **Verify All Links**
   - [ ] Social media links work
   - [ ] Project links open correctly
   - [ ] Contact form submits (even if no backend)

3. **Check SEO**
   - [ ] Open Graph image displays on social media
   - [ ] Meta tags appear correctly
   - [ ] Sitemap accessible (if added)

4. **Performance**
   - [ ] Run Lighthouse audit
   - [ ] Check Core Web Vitals
   - [ ] Test loading speed

5. **Share Your Portfolio!**
   - [ ] Add to LinkedIn
   - [ ] Share on Twitter
   - [ ] Update GitHub profile
   - [ ] Add to resume

## Continuous Deployment

With Vercel or Netlify, every push to `main` branch auto-deploys:

```bash
# Make changes
git add .
git commit -m "Update project information"
git push origin main

# Your site updates automatically in ~2 minutes!
```

## Troubleshooting

### Build Fails
```bash
# Clear cache and rebuild
rm -rf .next node_modules
npm install
npm run build
```

### Images Not Loading
- Ensure images are in `/public/` directory
- Check paths start with `/` (e.g., `/projects/image.jpg`)
- Verify image files exist

### Slow Performance
- Optimize images (use WebP format)
- Reduce image sizes
- Enable CDN (Vercel/Netlify do this automatically)

### TypeScript Errors
```bash
# Check for type errors
npx tsc --noEmit

# Fix and rebuild
npm run build
```

## Monitoring & Analytics

### Add Google Analytics (Optional)

1. Get your GA4 tracking ID
2. Add to `app/layout.tsx`:

```typescript
<Script
  src={`https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX`}
  strategy="afterInteractive"
/>
<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX');
  `}
</Script>
```

### Add Plausible (Privacy-Friendly Alternative)

```typescript
<Script
  defer
  data-domain="yourdomain.com"
  src="https://plausible.io/js/script.js"
/>
```

## Cost Estimates

- **Vercel:** Free for personal projects (includes custom domain)
- **Netlify:** Free for personal projects
- **Railway:** ~$5/month
- **DigitalOcean:** ~$12/month
- **Self-hosted:** Varies by VPS provider

## Need Help?

- **Next.js Docs:** https://nextjs.org/docs
- **Vercel Support:** https://vercel.com/support
- **Stack Overflow:** Search "Next.js deployment"

---

## 🎉 You're Ready to Deploy!

Your portfolio is production-ready. Choose your platform and launch it to the world!

**Recommended:** Start with Vercel for the easiest deployment experience.

Good luck! 🚀

