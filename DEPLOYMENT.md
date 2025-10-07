# GitHub Pages Deployment Guide

## Quick Setup

1. **Create GitHub Repository**
   ```bash
   # Create a new repository on GitHub (don't initialize with README)
   # Copy the repository URL
   ```

2. **Add Remote and Push**
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git branch -M main
   git push -u origin main
   ```

3. **Enable GitHub Pages**
   - Go to your repository on GitHub
   - Click "Settings" tab
   - Scroll down to "Pages" section
   - Under "Source", select "Deploy from a branch"
   - Choose "main" branch and "/ (root)" folder
   - Click "Save"

4. **Access Your Site**
   - Your site will be available at: `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME`
   - GitHub Pages will automatically deploy updates when you push to main branch

## File Structure for GitHub Pages

```
your-repo/
├── index.html              # Main navigation page (news-widget.html)
├── small-widget.html       # Small widget (215×300px)
├── medium-widget.html      # Medium widget (450×300px)
├── full-widget.html        # Full widget (920×730px)
├── README.md               # Documentation
├── .gitignore              # Git ignore file
└── DEPLOYMENT.md           # This file
```

## Widget URLs

After deployment, your widgets will be accessible at:
- **Main Page**: `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`
- **Small Widget**: `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/small-widget.html`
- **Medium Widget**: `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/medium-widget.html`
- **Full Widget**: `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/full-widget.html`

## Updates

To update your deployed site:
```bash
git add .
git commit -m "Update widgets"
git push origin main
```

GitHub Pages will automatically rebuild and deploy your changes within a few minutes.

## Custom Domain (Optional)

To use a custom domain:
1. Add a `CNAME` file to your repository root with your domain name
2. Configure DNS settings with your domain provider
3. Enable HTTPS in GitHub Pages settings

## Troubleshooting

- **Site not loading**: Check if GitHub Pages is enabled in repository settings
- **404 errors**: Ensure file names match exactly (case-sensitive)
- **Styling issues**: Check browser console for any CSS/JS errors
- **Build failures**: Check GitHub Actions tab for any deployment errors

## Widget Specifications

- **Small Widget**: 215×300px - User management and news feed
- **Medium Widget**: 450×300px - AI overview and grouped avatars
- **Full Widget**: 920×730px - Grok AI analysis and Gemma analytics

All widgets maintain exact dimensions and dark theme styling as specified in the Figma design.
