# 🚀 3D Portfolio

A jaw-dropping developer portfolio packed with interactive 3D animations, buttery smooth transitions, and a space-themed aesthetic. Not your average portfolio template! This one has a fully interactive 3D keyboard where each keycap is a skill.

> **Free to use!** This portfolio is open source. If you use it, a credit/link back would be really appreciated 🙏

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Naresh-Khatri/3d-portfolio)

![Portfolio Preview](https://github.com/Naresh-Khatri/Portfolio/blob/main/public/assets/projects-screenshots/portfolio/landing.png?raw=true)

## ✨ Features

- **Interactive 3D Keyboard** — Custom Spline keyboard where each keycap represents a skill, revealing titles and descriptions on hover/press
- **Buttery Animations** — GSAP + Framer Motion powered scroll, hover, and reveal animations
- **Space Theme** — Floating particles on a dark canvas for a cosmic vibe
- **Light & Dark Mode** — Full theme support with cheeky disclaimer toasts
- **Responsive** — Works across all screen sizes
- **Contact Form** — Email delivery via Resend
- **Analytics** _(optional)_ — Umami analytics integration

## 🛠️ Tech Stack

| Layer | Technologies |
|---|---|
| **Framework** | Next.js 14, React 18, TypeScript |
| **Styling** | Tailwind CSS, Shadcn UI, Aceternity UI |
| **Animation** | GSAP, Framer Motion |
| **3D** | Spline Runtime |
| **Email** | Resend |
| **Misc** | Lenis (smooth scroll), Zod, next-themes |

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v18+)
- pnpm (recommended), npm, or yarn

### Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/Naresh-Khatri/3d-portfolio.git
    cd 3d-portfolio
    ```

2. **Install dependencies:**

    ```bash
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

Other files you'll want to customize:

| File | What to change |
|---|---|
| `src/data/projects.tsx` | Your projects, screenshots, descriptions, and tech stacks |
| `src/data/constants.ts` | Skills list (name, description, icon) and work experience |
| `public/assets/` | Your images, OG image, and project screenshots |

---

## ⌨️ Updating the 3D Keyboard Skills

The 3D keyboard keycaps are baked into a Spline file. To update the skills displayed on the keyboard:

1. **Import** the `public/assets/skills-keyboard.spline` file into [Spline](https://spline.design/)
2. **Unhide** the keycap objects you want to edit
3. **Update** the logo images on each keycap to your new skill icons
4. **Rename** each keycap object to match the skill's `name` field in `src/data/constants.ts` (e.g. `js`, `react`, `docker`)
5. **Hide** all keycap objects again
6. **Export** the scene and overwrite `public/assets/skills-keyboard.spline`

After updating the Spline file, make sure `src/data/constants.ts` has matching entries for every skill on the keyboard:

```ts
// Each keycap object name in Spline must match a key in SKILLS
export const SKILLS: Record<SkillNames, Skill> = {
  js: { name: "js", label: "JavaScript", shortDescription: "...", ... },
  react: { name: "react", label: "React", shortDescription: "...", ... },
  // ... add/remove entries to match your keyboard
};
```

The `SkillNames` enum, `SKILLS` record, and the Spline keycap names must all stay in sync for the keyboard interactions to work correctly.

---

## 🔌 Realtime Features (Optional)

The portfolio supports optional realtime features powered by a **separate backend API**:

- 🖱️ **Live cursors** — See other visitors' cursors in realtime
- 👥 **Online presence** — Shows who's currently on the site
- 💬 **Chat** — Live chat between visitors

These features activate automatically when the `NEXT_PUBLIC_WS_URL` environment variable is set. Without it, the portfolio works perfectly fine as a static site — no realtime features, no backend dependency.

> [!NOTE]
> The backend API is **not open source**. This is intentional! Too many people have cloned the portfolio and claimed they built it from scratch. The realtime server stays private to keep the live experience unique make make it standout.


---

## 🚀 Running It Live (Deployment)

You can take this from `localhost:3000` to a real, public URL in a few minutes. The easiest path is **Vercel** (made by the creators of Next.js), but any Node-friendly host works.

### Option A — Vercel (recommended, easiest)

1. **Push this project to GitHub** (create a new repo and push your code, or use the "Deploy" button below to clone straight from the template):

    [![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Naresh-Khatri/3d-portfolio)

2. **Sign in to [vercel.com](https://vercel.com)** with your GitHub account.
3. Click **"Add New… → Project"** and import your GitHub repo.
4. Vercel auto-detects Next.js — leave the build settings as default.
5. **Add environment variables** (from your `.env.local`) under **Project Settings → Environment Variables**:
    - `RESEND_API_KEY` (required, for the contact form)
    - `NEXT_PUBLIC_WS_URL`, `UMAMI_DOMAIN`, `UMAMI_SITE_ID` (optional)
6. Click **Deploy**. Vercel builds and hosts the site, giving you a live URL like `your-project.vercel.app`.
7. From then on, every `git push` to your main branch automatically redeploys the live site.

**Custom domain:** In the Vercel dashboard, go to **Project Settings → Domains**, add your domain (e.g. `architvashisth.dev`), and update the DNS records at your domain registrar as instructed. Vercel issues a free SSL certificate automatically.

### Option B — Other hosts (Netlify, Render, your own server)

This is a standard Next.js app, so any host that supports Node.js works:

1. Build the production bundle:

    ```bash
    pnpm build
    ```

2. Start it:

    ```bash
    pnpm start
    ```

3. Point your host at the `pnpm build` / `pnpm start` commands and set the same environment variables listed above.

### Before you go live — checklist

- [ ] Personal info updated in [`src/data/config.ts`](src/data/config.ts) (name, bio, email, socials, site URL)
- [ ] `RESEND_API_KEY` set, so the contact form actually sends email
- [ ] Your own résumé PDF placed in `public/` and referenced correctly in `src/app/resume/resume-view.tsx`
- [ ] Projects, skills, and experience updated in `src/data/projects.tsx` and `src/data/constants.ts`
- [ ] OG/preview image updated at `public/assets/seo/og-image.png` for nice social-media link previews

---

## 🤝 Contributing

If you'd like to contribute or suggest improvements, feel free to open an issue or submit a pull request. All contributions are welcome!

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

If you use this portfolio, a credit or link back to the [original repo](https://github.com/Naresh-Khatri/3d-portfolio) would be much appreciated ❤️

Note on analytics: a deployed copy reports its own hostname once per browser (nothing else — no visitor, page, or referrer data) so I can see where the template gets used.
