# Archit Vashisth | Portfolio

An interactive, animation-heavy personal portfolio built to showcase my work as a student and aspiring entrepreneur — blending web development, 3D visuals, and motion design.

🔗 **Live site:** [architvashisth.dev](https://architvashisth.dev) ([Vercel preview](https://portfolio-kappa-five-ihlayjr3zz.vercel.app/))

![Portfolio preview](https://architvashisth.dev/assets/seo/og-image.png)

---

## ✨ About

This portfolio highlights my journey combining hands-on web development with interactive experiences, 3D animations, and self-driven projects — including things like **Coding Ducks**, **The Booking Desk**, and **Ghostchat**. It's designed to feel less like a static resume and more like a small interactive experience, with keyboard-driven navigation, motion-rich sections, and embedded project video previews.

## 🚀 Features

- **"Press a key" tech stack reveal** — interactive hint-driven navigation through the skills section
- **Experience timeline** — professional history (e.g. Cisco Junior Cybersecurity Analyst, RineX Campus Ambassador) with associated tech/skill badges
- **Project showcase** — a grid of self-driven projects, each with a short video preview and description:
  - **PhishGuard** — browser security extension
  - **Suscode** — an "impostor" coding game
  - **Spot It** — a parking reservation app
  - **FaceFlirt AI** — an AI companion with live calls
  - **MindEase** — a student mental-health companion
  - **Salvage Crew** — an ocean survival game
  - **My Portfolio** — this site itself
- **Contact form** — direct message form plus a mailto fallback
- **Blog & Newsletter** — linked sub-pages (`/blogs`, `/news`)
- **SEO-optimized** — full Open Graph, Twitter Card, and meta configuration for rich link previews
- **Smooth, GSAP/Framer Motion–driven animations** across sections

## 🛠️ Tech Stack

| Category | Technologies |
|---|---|
| Framework | [Next.js](https://nextjs.org/), [React](https://react.dev/) |
| Styling | [Tailwind CSS](https://tailwindcss.com/) |
| Animation | [GSAP](https://gsap.com/), [Framer Motion](https://www.framer.com/motion/) |
| 3D / Visuals | [Spline](https://spline.design/) |
| Deployment | [Vercel](https://vercel.com/) |

## 📁 Project Structure

> Adjust this section to match your actual repo layout if it differs.

```
.
├── public/
│   └── assets/
│       ├── project-videos/     # Per-project preview clips (mp4)
│       └── seo/                # OG/social preview images
├── app/ or pages/              # Route-level pages (home, blogs, news)
├── components/                 # Reusable UI components (sections, cards, nav)
├── styles/                     # Global styles / Tailwind config
├── next.config.js
├── tailwind.config.js
├── package.json
└── README.md
```

## 🧑‍💻 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or later recommended)
- npm, yarn, or pnpm

### Installation

```bash
# Clone the repo
git clone https://github.com/<your-username>/<your-repo-name>.git
cd <your-repo-name>

```bash
git clone https://github.com/Naresh-Khatri/3d-portfolio.git
cd 3d-portfolio
```

2. **Install dependencies:**

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. **Set up environment variables:**

Copy `.env.example` to `.env.local` and fill in the values:

```bash
cp .env.example .env.local
```

| Variable | Required | Description |
|---|---|---|
| `RESEND_API_KEY` | Yes | API key from [Resend](https://resend.com) for the contact form |
| `NEXT_PUBLIC_WS_URL` | No | WebSocket server URL for realtime features (cursors, chat, presence) |
| `UMAMI_DOMAIN` | No | Umami analytics script URL |
| `UMAMI_SITE_ID` | No | Umami website ID |

4. **Run the development server:**

```bash
pnpm dev
```

Contact submissions are delivered online by Resend to the email address in `src/data/config.ts`. They remain available in that mailbox even if this repository or computer is deleted.

5. Open [http://localhost:3000](http://localhost:3000) and see the magic ✨

---

## 🎨 Make It Your Own

All personal info is centralized in [`src/data/config.ts`](src/data/config.ts). Edit this single file to rebrand the portfolio:

```ts
const config = {
  title: "Your Name | Your Title",
  description: {
    long: "Your long description for SEO...",
    short: "Your short description...",
  },
  keywords: ["your", "keywords"],
  author: "Your Name",
  email: "you@example.com",
  site: "https://yoursite.com",

  // GitHub stars button in the header
githubUsername: "your-github-username",
githubRepo: "your-repo-name",

  social: {
    twitter: "https://x.com/you",
    linkedin: "https://linkedin.com/in/you",
    instagram: "https://instagram.com/you",
    facebook: "https://facebook.com/you",
    github: "https://github.com/you",
  },
};
```
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### Build

```bash
npm run build
npm run start
```

## 🌐 Deployment

This project is deployed on [Vercel](https://vercel.com/). Pushing to the main branch triggers an automatic production deployment; every other branch/PR gets its own preview deployment URL.

## 📬 Contact

Reach out via the [contact form](https://architvashisth.dev/#contact) on the site, or email directly at **hello@architvashisth.dev**.

## 📄 License

© 2026 Archit Vashisth. All rights reserved.

---

<p align="center">Built with ❤️ by <a href="https://architvashisth.dev">Archit Vashisth</a></p>
