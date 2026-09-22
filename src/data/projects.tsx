import AceTernityLogo from "@/components/logos/aceternity";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";
// Spline has no thesvg entry — keep the Three.js mark as its stand-in.
import { SiThreedotjs } from "react-icons/si";
// Renders a brand SVG from /public as a monochrome glyph that inherits the
// surrounding text color (the skill dock styles every icon via currentColor),
// so full-color marks like Mistral flatten to match the rest of the set.
const MaskIcon = ({ src, title }: { src: string; title?: string }) => (
  <span
    role="img"
    aria-label={title}
    className="block bg-current"
    style={{
      width: "1em",
      height: "1em",
      WebkitMaskImage: `url(${src})`,
      maskImage: `url(${src})`,
      WebkitMaskRepeat: "no-repeat",
      maskRepeat: "no-repeat",
      WebkitMaskPosition: "center",
      maskPosition: "center",
      WebkitMaskSize: "contain",
      maskSize: "contain",
    }}
  />
);

const ProjectsLinks = ({ live, repo }: { live?: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      {live && live !== "#" && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={live}
        >
          <Button variant={"default"} size={"sm"}>
            Visit Website
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
      {repo && repo !== "#" && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={repo}
        >
          <Button variant={"default"} size={"sm"}>
            Github
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};
// Brand chips sourced from thesvg CLI mono SVGs in /public/assets/logos,
// rendered via MaskIcon so each one inherits the dock's currentColor.
const brand = (title: string, file: string): Skill => ({
  title,
  bg: "black",
  fg: "white",
  icon: <MaskIcon src={`/assets/logos/${file}`} title={title} />,
});
const PROJECT_SKILLS = {
  next: brand("Next.js", "nextdotjs-mono.svg"),
  chakra: brand("Chakra UI", "chakra-ui-mono.svg"),
  node: brand("Node.js", "nodedotjs-mono.svg"),
  python: brand("Python", "python-mono.svg"),
  prisma: brand("Prisma", "prisma-mono.svg"),
  postgres: brand("PostgreSQL", "postgresql-mono.svg"),
  mongo: brand("MongoDB", "mongodb-mono.svg"),
  express: brand("Express", "express-mono.svg"),
  reactQuery: brand("React Query", "react-query-mono.svg"),
  shadcn: brand("shadcn/ui", "shadcn-ui-mono.svg"),
  // Not in the thesvg registry — keep the existing custom logo.
  aceternity: {
    title: "Aceternity",
    bg: "black",
    fg: "white",
    icon: <AceTernityLogo />,
  },
  tailwind: brand("Tailwind", "tailwind-css-mono.svg"),
  docker: brand("Docker", "docker-mono.svg"),
  // Not in the thesvg registry — keep the text mark.
  yjs: {
    title: "Y.js",
    bg: "black",
    fg: "white",
    icon: (
      <span>
        <strong>Y</strong>js
      </span>
    ),
  },
  firebase: brand("Firebase", "firebase-mono.svg"),
  sockerio: brand("Socket.io", "socketdotio-mono.svg"),
  js: brand("JavaScript", "javascript-mono.svg"),
  ts: brand("TypeScript", "typescript-mono.svg"),
  vue: brand("Vue.js", "vuedotjs-mono.svg"),
  react: brand("React.js", "react-mono.svg"),
  sanity: brand("Sanity", "sanity-mono.svg"),
  // Not in the thesvg registry — keep the Three.js stand-in.
  spline: {
    title: "Spline",
    bg: "black",
    fg: "white",
    icon: <SiThreedotjs />,
  },
  gsap: brand("GSAP", "gsap-mono.svg"),
  motion: brand("Motion", "motion.svg"),
  supabase: brand("Supabase", "supabase-mono.svg"),
  trpc: brand("tRPC", "trpc-mono.svg"),
  drizzle: brand("Drizzle ORM", "drizzle-mono.svg"),
  hono: brand("Hono", "hono-mono.svg"),
  redis: brand("Redis / BullMQ", "redis-mono.svg"),
  cloudflare: brand("Cloudflare", "cloudflare-mono.svg"),
  // React Native reuses the React mark.
  reactNative: brand("React Native", "react-mono.svg"),
  betterAuth: brand("Better Auth", "better-auth-mono.svg"),
  // Not in the thesvg registry — keep the text marks.
  zustand: {
    title: "Zustand",
    bg: "black",
    fg: "white",
    icon: <span className="text-xs font-bold">Zu</span>,
  },
  partykit: {
    title: "PartyKit",
    bg: "black",
    fg: "white",
    icon: <span className="text-base">🎈</span>,
  },
  hocuspocus: {
    title: "Hocuspocus",
    bg: "black",
    fg: "white",
    icon: <span className="text-xs font-bold">Hp</span>,
  },
  // React Flow ships under the xyflow brand.
  reactFlow: brand("React Flow", "xyflow-mono.svg"),
  codemirror: brand("CodeMirror", "codemirror-mono.svg"),
  // "Satori / sharp" — uses the sharp mark.
  satori: brand("Satori / sharp", "sharp-mono.svg"),
  turborepo: brand("Turborepo", "turborepo-mono.svg"),
  // Vercel AI SDK uses the Vercel mark.
  aiSDK: brand("Vercel AI SDK", "vercel-mono.svg"),
  anthropic: brand("Anthropic Claude", "anthropic-mono.svg"),
  mistral: brand("Mistral AI", "mistral-ai-mono.svg"),
  // Not in the thesvg registry — keep the text mark.
  nextIntl: {
    title: "next-intl",
    bg: "black",
    fg: "white",
    icon: <span className="text-xs font-bold">i18n</span>,
  },
  // Not in the thesvg registry — keep the text marks.
  expo: {
    title: "Expo",
    bg: "black",
    fg: "white",
    icon: <span className="text-xs font-bold">Expo</span>,
  },
  mcp: {
    title: "MCP",
    bg: "black",
    fg: "white",
    icon: <span className="text-xs font-bold">MCP</span>,
  },
};
export type Project = {
  id: string;
  category: string;
  title: string;
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live: string;
};
const projects: Project[] = [
  {
    id: "storekit",
    category: "Browser security extension",
    title: "PhishGuard",
    skills: {
      frontend: [
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.reactNative,
        PROJECT_SKILLS.tailwind,
      ],
      backend: [
        PROJECT_SKILLS.hono,
        PROJECT_SKILLS.trpc,
        PROJECT_SKILLS.drizzle,
        PROJECT_SKILLS.postgres,
        PROJECT_SKILLS.redis,
        PROJECT_SKILLS.betterAuth,
        PROJECT_SKILLS.cloudflare,
        PROJECT_SKILLS.docker,
      ],
    },
    live: "https://archit147.github.io/Phishguard/",
    github: "https://github.com/Archit147/Phishguard",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Real-time phishing detection, fully local.
          </TypographyP>
          <TypographyP className="font-mono">
            PhishGuard is a free, open-source browser extension that detects
            phishing and credential-harvesting attacks the instant you land on
            a page. It uses local heuristic analysis instead of blacklists that
            lag behind new attacks, so no data ever leaves your machine.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />

          <TypographyH3 className="my-4 mt-8">Why PhishGuard</TypographyH3>
          <p className="font-mono mb-2">
            Most phishing extensions rely on a central blacklist, which means
            they only catch a threat after it has already been reported.
            PhishGuard runs a local heuristic engine on every page load and
            makes a decision in milliseconds, entirely on-device.
          </p>

          <TypographyH3 className="my-4 mt-8">Features</TypographyH3>
          <ul className="font-mono mb-2 list-disc space-y-2 pl-6">
            <li><strong>Heuristic DOM &amp; URL Analysis:</strong> scans page DOM, URLs, SSL certificates, and domain patterns in real time.</li>
            <li><strong>Instant Warning Overlay:</strong> blocks page interaction when a threat is detected.</li>
            <li><strong>Zero-Day Detection:</strong> catches new phishing attacks without depending on a blacklist.</li>
            <li><strong>Local Whitelisting:</strong> trust a site with one click and save that decision locally.</li>
            <li><strong>Privacy-First Local Processing:</strong> no cloud transmission, tracking, or data collection.</li>
            <li><strong>Real-Time Analysis:</strong> checks complete in milliseconds without slowing down browsing.</li>
          </ul>

          <TypographyH3 className="my-4 mt-8">How It Works</TypographyH3>
          <ol className="font-mono mb-2 list-decimal space-y-2 pl-6">
            <li><strong>Page load:</strong> the content script activates automatically.</li>
            <li><strong>Capture:</strong> the DOM structure and full URL are read locally, in memory only.</li>
            <li><strong>Analyze:</strong> the local heuristic engine scores URL patterns, DOM structure, SSL chain, keyword density, and domain age.</li>
            <li><strong>Score:</strong> every signal contributes weighted points to a single 0-100 risk score.</li>
            <li><strong>Decide:</strong> 0-30 is safe, 30-60 is suspicious, and 60-100 is dangerous.</li>
            <li><strong>Protect:</strong> dangerous pages are blocked before you can enter a password or click a malicious link.</li>
          </ol>

          <TypographyH3 className="my-4 mt-8">Installation</TypographyH3>
          <ol className="font-mono mb-2 list-decimal space-y-2 pl-6">
            <li>Clone the repository.</li>
            <li>Open <code>chrome://extensions</code> or <code>edge://extensions</code>.</li>
            <li>Enable Developer mode.</li>
            <li>Click Load unpacked and select the extension folder.</li>
          </ol>

          <TypographyH3 className="my-4 mt-8">Privacy</TypographyH3>
          <p className="font-mono mb-2">
            PhishGuard performs all analysis locally on your machine. No URLs,
            page content, or any other data is sent to an external server,
            tracked, logged, or sold.
          </p>

          <TypographyH3 className="my-4 mt-8">Compatibility &amp; Contributing</TypographyH3>
          <p className="font-mono mb-2">
            PhishGuard works alongside other extensions on Chrome and Edge
            without interfering with browser functionality. Issues and pull
            requests are welcome, especially reports of false positives and
            false negatives to help tune the heuristic engine.
          </p>

          <TypographyH3 className="my-4 mt-8">License</TypographyH3>
          <p className="font-mono mb-2">MIT License - free to use, modify, and distribute.</p>
        </div>
      );
    },
  },
  {
    id: "codingducks",
    category: "Impostor coding game",
    title: "Suscode",
    skills: {
      frontend: [
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.codemirror,
        PROJECT_SKILLS.reactFlow,
      ],
      backend: [
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.trpc,
        PROJECT_SKILLS.drizzle,
        PROJECT_SKILLS.postgres,
        PROJECT_SKILLS.yjs,
        PROJECT_SKILLS.hocuspocus,
        PROJECT_SKILLS.betterAuth,
        PROJECT_SKILLS.docker,
      ],
    },
    live: "https://www.codingducks.xyz/",
    github: "https://github.com/Archit-Vashisth/Coding-Ducks",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            A real-time coding game where one player secretly becomes the
            impostor.
          </TypographyP>
          <TypographyP className="font-mono ">
            Suscode turns debugging and problem solving into a social deduction
            match. Crewmates work together to complete coding tasks while an
            impostor sabotages progress and tries to stop the team from winning.
            It combines the tension of Among Us with the satisfaction of
            solving real programming challenges.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />

          <TypographyH3 className="my-4 mt-8">
            Complete the mission
          </TypographyH3>
          <p className="font-mono mb-2">
            Each round gives the crew a coding task to solve under pressure.
            Players share the same match, race against the clock, and use their
            observations to decide who is helping and who is sabotaging them.
          </p>
          <TypographyH3 className="my-4 mt-8">
            The impostor
          </TypographyH3>
          <p className="font-mono mb-2">
            The hidden impostor gets the same coding environment, but a
            different objective: break teamwork, waste time, and quietly keep
            the crewmates from completing their tasks before the round ends.
          </p>
          <TypographyH3 className="my-4 mt-8">
            Social deduction through code
          </TypographyH3>
          <p className="font-mono mb-2">
            Suscode is built around conversation, suspicion, and visible
            progress. Winning is not only about writing correct code; it is also
            about reading the room and catching the player working against you.
          </p>
        </div>
      );
    },
  },
  {
    id: "gumbalup",
    category: "Parking reservation app",
    title: "Spot It",
    skills: {
      frontend: [
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.motion,
      ],
      backend: [
        PROJECT_SKILLS.trpc,
        PROJECT_SKILLS.partykit,
        PROJECT_SKILLS.drizzle,
        PROJECT_SKILLS.postgres,
        PROJECT_SKILLS.betterAuth,
        PROJECT_SKILLS.cloudflare,
        PROJECT_SKILLS.docker,
      ],
    },
    live: "https://gumbalup.com/",
    // Private repo (commercial product) — intentionally no public source link
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Reserve a parking spot before you reach the mall.
          </TypographyP>
          <TypographyP className="font-mono ">
            Spot It helps drivers find and reserve parking in malls and other
            busy locations. Drivers can choose a space ahead of time at no
            extra cost, arrive with a plan, and avoid circling while searching
            for an available spot.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />

          <TypographyH3 className="my-4 mt-8">
            Find the right place
          </TypographyH3>
          <p className="font-mono mb-2">
            Search nearby malls, parking lots, and other supported locations,
            then compare availability before leaving home. The experience is
            designed to make parking feel predictable instead of stressful.
          </p>

          <TypographyH3 className="my-4 mt-8">
            Reserve with no extra fee
          </TypographyH3>
          <p className="font-mono mb-2">
            Select a space, reserve it in advance, and spend less time navigating
            a crowded car park. Spot It keeps the flow simple for drivers and
            gives parking operators a clearer view of demand.
          </p>
        </div>
      );
    },
  },
  {
    id: "waku",
    category: "AI companion & live calls",
    title: "FaceFlirt AI",
    skills: {
      frontend: [
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.tailwind,
      ],
      backend: [
        PROJECT_SKILLS.trpc,
        PROJECT_SKILLS.drizzle,
        PROJECT_SKILLS.postgres,
        PROJECT_SKILLS.satori,
        PROJECT_SKILLS.betterAuth,
        PROJECT_SKILLS.cloudflare,
        PROJECT_SKILLS.turborepo,
        PROJECT_SKILLS.docker,
      ],
    },
    live: "https://waku.architvashisth.dev",
    github: "https://github.com/Archit-Vashisth/waku",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            An AI girlfriend companion with a live way to meet new people.
          </TypographyP>
          <TypographyP className="font-mono ">
            FaceFlirt AI gives users an always-available AI girlfriend
            companion for natural conversation, emotional support, and playful
            connection. It also includes a live video-call experience where
            users can meet and talk with strangers, inspired by the spontaneity
            of Omegle.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />

          <TypographyH3 className="my-4 mt-8">
            An AI companion that remembers the conversation
          </TypographyH3>
          <p className="font-mono mb-2">
            Users can chat with a persistent AI character that responds with
            context, personality, and warmth. The companion is designed for
            quick check-ins as well as longer conversations when someone wants
            company.
          </p>

          <TypographyH3 className="my-4 mt-8">
            Live calls with strangers
          </TypographyH3>
          <p className="font-mono mb-2">
            The live video area makes the experience more social: join a quick
            call, discover someone new, and move on whenever the conversation
            ends. Privacy, consent, reporting, and moderation should remain
            central to every interaction.
          </p>
        </div>
      );
    },
  },
  {
    id: "peakposts",
    category: "Student mental-health companion",
    title: "MindEase",
    skills: {
      frontend: [
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.motion,
        PROJECT_SKILLS.nextIntl,
      ],
      backend: [
        PROJECT_SKILLS.trpc,
        PROJECT_SKILLS.drizzle,
        PROJECT_SKILLS.postgres,
        PROJECT_SKILLS.betterAuth,
        PROJECT_SKILLS.aiSDK,
        PROJECT_SKILLS.anthropic,
        PROJECT_SKILLS.mistral,
        PROJECT_SKILLS.cloudflare,
      ],
    },
    // Private repo (commercial product) — intentionally no public source link
    live: "https://peakposts.ai/",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            A gentle AI companion for students facing anxiety, depression, and
            mental-health challenges.
          </TypographyP>
          <TypographyP className="font-mono ">
            MindEase gives students a private place to slow down, describe what
            they are feeling, and receive calm, supportive guidance from an AI
            chatbot. It is intended to make reaching for support feel easier
            during difficult moments, while encouraging professional help when
            a situation needs more care than an AI can provide.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />

          <TypographyH3 className="my-4 mt-8">
            A conversation without judgment
          </TypographyH3>
          <p className="font-mono mb-2">
            Students can check in about stress, loneliness, low mood, exams,
            sleep, or whatever is weighing on them. MindEase responds with
            empathy and practical next steps instead of pretending to replace a
            therapist, counselor, doctor, or trusted person.
          </p>

          <TypographyH3 className="my-4 mt-8">
            Small steps toward feeling better
          </TypographyH3>
          <p className="font-mono mb-2">
            Guided breathing, reflection prompts, grounding exercises, and
            simple routines help turn an overwhelming moment into one manageable
            next step. Clear crisis guidance points students toward immediate
            human support when there may be a risk of harm.
          </p>

          <TypographyH3 className="my-4 mt-8">
            Built with care
          </TypographyH3>
          <p className="font-mono mb-2">
            MindEase should be supportive, transparent about its limits, and
            careful with sensitive conversations. The experience is designed to
            complement campus resources, trusted relationships, and qualified
            mental-health professionals.
          </p>
        </div>
      );
    },
  },
  {
    id: "kanbi",
    category: "Ocean survival game",
    title: "Salvage Crew",
    skills: {
      frontend: [
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.reactNative,
        PROJECT_SKILLS.expo,
        PROJECT_SKILLS.tailwind,
      ],
      backend: [
        PROJECT_SKILLS.trpc,
        PROJECT_SKILLS.drizzle,
        PROJECT_SKILLS.postgres,
        PROJECT_SKILLS.betterAuth,
        PROJECT_SKILLS.mcp,
        PROJECT_SKILLS.cloudflare,
        PROJECT_SKILLS.turborepo,
        PROJECT_SKILLS.docker,
      ],
    },
    live: "https://kanbi.architvashisth.dev",
    github: "https://github.com/archit-Khatri/kanbi",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            A cooperative ocean survival game inspired by Lethal Company.
          </TypographyP>
          <TypographyP className="font-mono ">
            Salvage Crew drops a team into the dangerous depths of the ocean,
            where everyone must work together to recover valuable salvage and
            make it back alive. It keeps the tense teamwork, strange discoveries,
            and high-risk extraction of Lethal Company, but moves the whole
            adventure below the waves.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />

          <TypographyH3 className="my-4 mt-8">
            Dive, salvage, survive
          </TypographyH3>
          <p className="font-mono mb-2">
            Coordinate dives, search abandoned wrecks, collect resources, and
            manage the limited time and equipment available to the crew. Every
            trip asks whether the next piece of salvage is worth the danger.
          </p>

          <TypographyH3 className="my-4 mt-8">
            Better together in the deep
          </TypographyH3>
          <p className="font-mono mb-2">
            Communication is part of survival. Players divide responsibilities,
            watch each other&apos;s oxygen and tools, and decide when to abandon a
            run. The ocean stays unpredictable, so a good crew needs trust,
            courage, and a plan that can change quickly.
          </p>

          <TypographyH3 className="my-4 mt-8">
            A world beneath the surface
          </TypographyH3>
          <p className="font-mono mb-2">
            Salvage Crew uses the ocean as both setting and threat: dark water,
            fragile visibility, isolated wrecks, and the pressure of returning to
            the surface before the crew runs out of what it needs.
          </p>
        </div>
      );
    },
  },
  {
    id: "portfolio",
    category: "Interactive developer portfolio",
    title: "My Portfolio",
    live: "http://architvashisth.vercel.app",
    github: "https://github.com/Archit-Vashisth/Portfolio",
    skills: {
      frontend: [
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.motion,
        PROJECT_SKILLS.spline,
      ],
      backend: [],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            A living portfolio built to show how I think, build, and play with
            the web.
          </TypographyP>
          <TypographyP className="font-mono">
            This is the website you are exploring now: an interactive home for
            my projects, experiments, skills, and contact information. It uses
            motion, 3D interaction, realtime details, and playful surprises to
            make a developer portfolio feel more like an experience.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Interactive 3D skills</TypographyH3>
          <p className="font-mono mb-2">
            The interactive keyboard turns skills into something you can
            explore. Hovering and pressing keycaps reveals the technologies I
            work with, making the stack part of the interface instead of a list.
          </p>
          <TypographyH3 className="my-4">Motion and atmosphere</TypographyH3>
          <p className="font-mono mb-2">
            Smooth scrolling, reveal animations, floating particles, theme
            changes, and small hidden interactions give the site a distinct
            visual language while keeping the important information easy to
            reach.
          </p>
          <TypographyH3 className="my-4 mt-8">Projects</TypographyH3>

          <p className="font-mono mb-2">
            The project section is the center of the portfolio: each project has
            its own looping visual identity, technology stack, links, and a
            concise story about what it does.
          </p>
          <p className="font-mono mb-2 mt-8 text-center">
            This site&apos;s not just a portfolio — it&apos;s a whole vibe.
          </p>
        </div>
      );
    },
  },
];
export default projects;
