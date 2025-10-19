# Project Images

Place your project screenshots here with the following names:

- `ecommerce.jpg` - E-commerce platform screenshot
- `chat-app.jpg` - AI chat application screenshot
- `task-dashboard.jpg` - Task management dashboard screenshot
- `weather-app.jpg` - Weather forecast app screenshot

## Image Guidelines

- **Format:** JPG, PNG, or WebP
- **Dimensions:** 1920x1080 for laptop mockups, 1080x2340 for phone mockups
- **Size:** Keep under 500KB for optimal performance
- **Quality:** High quality, but optimized for web

## Creating Placeholder Images

If you don't have project screenshots yet, you can:

1. Use screenshot tools like Screely or MockUPhone
2. Create mockups with Figma or Photoshop
3. Use placeholder image services temporarily:
   - https://placehold.co/1920x1080
   - https://via.placeholder.com/1920x1080

To quickly create placeholder images, run:

```bash
# Using ImageMagick (install with: sudo apt install imagemagick)
convert -size 1920x1080 gradient:#0eaceb-#eddd53 -pointsize 72 -fill white -gravity center -annotate +0+0 "E-Commerce\nPlatform" ecommerce.jpg
convert -size 1920x1080 gradient:#57c785-#0eaceb -pointsize 72 -fill white -gravity center -annotate +0+0 "AI Chat\nApplication" chat-app.jpg
convert -size 1920x1080 gradient:#eddd53-#57c785 -pointsize 72 -fill white -gravity center -annotate +0+0 "Task\nDashboard" task-dashboard.jpg
convert -size 1080x2340 gradient:#0eaceb-#eddd53 -pointsize 72 -fill white -gravity center -annotate +0+0 "Weather\nApp" weather-app.jpg
```

Or simply download placeholder images from the web temporarily until you have your actual project screenshots.



