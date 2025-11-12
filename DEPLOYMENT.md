# 🚀 Deployment Guide - ALPIXN

## Quick Deploy to Vercel

### Option 1: One-Click Deploy (Recommended)

1. Visit [Vercel](https://vercel.com)
2. Click "Add New Project"
3. Import from GitHub: `https://github.com/Mohit-rajput-mr/ALPIXN.git`
4. Click "Deploy"
5. Done! ✅

### Option 2: Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# Deploy to production
vercel --prod
```

## 🌐 Live URL

After deployment, your site will be available at:
- `https://alpixn.vercel.app` (or custom domain)

## ⚙️ Environment Variables

No environment variables required for this project.

## 📋 Build Settings (Auto-detected by Vercel)

- **Framework**: Next.js
- **Build Command**: `npm run build`
- **Output Directory**: `.next`
- **Install Command**: `npm install`
- **Development Command**: `npm run dev`

## 🔧 Custom Domain Setup

1. Go to Vercel Dashboard → Your Project
2. Click "Settings" → "Domains"
3. Add your custom domain
4. Update DNS records as instructed

## 📊 Performance Optimizations

- ✅ Image optimization with Next.js Image component
- ✅ CSS Modules for scoped styling
- ✅ Code splitting by default
- ✅ Automatic static optimization
- ✅ Fast refresh in development

## 🐛 Troubleshooting

### Build Fails
```bash
# Clear cache and rebuild
rm -rf .next node_modules
npm install
npm run build
```

### Images Not Loading
- Ensure external image domains are configured in `next.config.ts`
- Check image URLs are accessible

## 📱 Testing

```bash
# Run locally
npm run dev

# Build and test production
npm run build
npm start
```

## 🎉 Success!

Your ALPIXN landing page is now live and ready to impress visitors!

---

**Developed with ❤️ by Mohit Rajput**



