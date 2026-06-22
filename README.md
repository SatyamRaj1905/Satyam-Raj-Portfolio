# Satyam Raj Portfolio

A responsive React + Vite portfolio for **Satyam Raj**, built as a premium desktop-inspired interface with draggable windows, theme-aware avatar wallpapers, a mobile app-grid experience, and a macOS-style liquid glass dock.

## Live Demo

The project is ready to deploy on Vercel. Add your deployed link here after the first deployment:

```txt
https://your-vercel-project-url.vercel.app
```

## Features

- Light and dark avatar wallpapers
- Desktop-style portfolio interface with draggable windows
- Mobile app-grid layout for smaller screens
- macOS-inspired liquid glass dock
- Dock icon names shown on hover
- Direct contact links without backend mail setup
- Resume PDF support
- Centralized portfolio data in `src/data/portfolio.js`

## Tech Stack

- React.js
- Vite
- Tailwind CSS
- Framer Motion
- React Icons
- Node.js static production server

## Project Structure

```txt
Satyam-Raj-Portfolio/
├── public/
│   ├── Satyam_Raj.pdf
│   ├── avatar-dark.png
│   └── avatar-light.png
├── server/
│   └── index.js
├── src/
│   ├── components/
│   │   ├── Accordion.jsx
│   │   ├── DesktopIcon.jsx
│   │   ├── Dock.jsx
│   │   ├── ExperienceCard.jsx
│   │   ├── MobileAppGrid.jsx
│   │   ├── ProjectCard.jsx
│   │   ├── RetroWindow.jsx
│   │   ├── ThemeToggle.jsx
│   │   ├── WindowContent.jsx
│   │   └── iconMaps.jsx
│   ├── data/
│   │   └── portfolio.js
│   ├── hooks/
│   │   └── useTheme.js
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── package-lock.json
├── postcss.config.js
├── render.yaml
├── tailwind.config.js
├── vercel.json
└── vite.config.js
```

## Run Locally

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the URL printed by Vite:

```txt
http://localhost:5173
```

## Build

Create a production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

Run the included Node static server:

```bash
npm start
```

## Deploy on Vercel

This project is ready for Vercel deployment.

Use these settings:

```txt
Framework Preset: Vite
Build Command: npm run build
Output Directory: dist
Install Command: npm install
```

The included `vercel.json` is configured for Vite:

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "vite"
}
```

## Deploy From GitHub to Vercel

1. Push this repository to GitHub.
2. Open Vercel and choose **Add New Project**.
3. Import `SatyamRaj1905/Satyam-Raj-Portfolio`.
4. Keep the framework preset as **Vite**.
5. Confirm:
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`
6. Click **Deploy**.

No environment variables are required.

## Edit Portfolio Content

All personal information, experience, projects, skills, education, achievements, social links, dock links, and desktop window entries are managed in:

```txt
src/data/portfolio.js
```

## Contact

The contact section uses direct links only:

- Phone
- Email
- LinkedIn
- GitHub
- LeetCode
- CSES
- Codeforces
- CodeChef

There is no mail-sending backend or SMTP setup in this version.
