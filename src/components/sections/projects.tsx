"use client";
import React from "react";
import {
  ResponsiveDialog,
  ResponsiveDialogContent,
  ResponsiveDialogTrigger,
} from "../ui/responsive-dialog";
import { FloatingDock } from "../ui/floating-dock";
import { ScrollArea } from "../ui/scroll-area";
import Link from "next/link";
import {
  ArrowUpRight,
  Code2,
  FileText,
  Gamepad2,
  Globe2,
  Radio,
  ShieldCheck,
  Video,
} from "lucide-react";
import { motion } from "motion/react";

import projects, { Project } from "@/data/projects";
import { SectionHeader } from "./section-header";

import SectionWrapper from "../ui/section-wrapper";

const ProjectsSection = () => {
  return (
    <SectionWrapper id="projects" className="max-w-7xl mx-auto md:min-h-[130vh] px-4">
      <SectionHeader id="projects" title="Projects" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </SectionWrapper>
  );
};

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div className="flex items-center justify-center">
      <ResponsiveDialog>
        <ResponsiveDialogTrigger className="bg-transparent flex justify-center w-full">
          <div
            className="group relative w-full max-w-[400px] h-auto rounded-lg overflow-hidden ring-1 ring-white/5"
            style={{ aspectRatio: "3/2" }}
          >
            <ProjectMark project={project} />
            <ProjectVideo project={project} />
            <div className="absolute w-full h-24 bottom-0 left-0 bg-gradient-to-t from-background via-background/80 to-transparent pointer-events-none z-10">
              <div className="flex flex-col h-full items-start justify-end p-4">
                <div className="text-lg text-left [text-shadow:0_1px_4px_rgba(0,0,0,0.6)]">
                  {project.title}
                </div>
                <div className="text-xs bg-primary text-primary-foreground rounded-lg w-fit px-2">
                  {project.category}
                </div>
              </div>
            </div>
          </div>
        </ResponsiveDialogTrigger>

        <ResponsiveDialogContent className="md:max-w-4xl md:h-[85vh] md:!flex md:flex-col md:overflow-hidden md:p-0 md:gap-0">
          {/* Sticky header */}
          <div className="shrink-0 border-b border-border bg-background/80 backdrop-blur-sm px-8 py-5">
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-4 min-w-0">
                <h4 className="font-display text-xl md:text-2xl font-bold text-foreground tracking-tight truncate">
                  {project.title}
                </h4>
                <span className="shrink-0 text-[11px] uppercase tracking-widest text-muted-foreground border border-border rounded-full px-3 py-0.5">
                  {project.category}
                </span>
              </div>
              <div className="shrink-0 flex items-center gap-4">
                {project.github && project.github !== "#" && (
                  <Link
                    href={project.github}
                    target="_blank"
                    className="text-xs text-muted-foreground hover:text-foreground transition-colors underline underline-offset-2"
                  >
                    Source
                  </Link>
                )}
                {project.live && project.live !== "#" && (
                  <Link href={project.live} target="_blank">
                    <button className="group flex items-center gap-2 bg-primary text-primary-foreground text-sm font-medium px-4 py-1.5 rounded-full hover:bg-primary/80 transition-colors">
                      Visit
                      <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </button>
                  </Link>
                )}
              </div>
            </div>
          </div>

          {/* Scrollable content */}
          <ScrollArea className="flex-1" type="always" data-lenis-prevent>
            <div className="px-8 py-8">
              {/* Tech stack */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="flex flex-col md:flex-row gap-6 md:gap-10 mb-10"
              >
                {project.skills.frontend?.length > 0 && (
                  <div className="flex flex-col items-center md:items-start gap-2">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-medium">
                      Frontend
                    </span>
                    <FloatingDock items={project.skills.frontend} />
                  </div>
                )}
                {project.skills.backend?.length > 0 && (
                  <div className="flex flex-col items-center md:items-start gap-2">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-medium">
                      Backend
                    </span>
                    <FloatingDock items={project.skills.backend} />
                  </div>
                )}
              </motion.div>

              {/* Divider */}
              <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mb-10" />

              {/* Project content */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {project.content}
              </motion.div>
            </div>
          </ScrollArea>

        </ResponsiveDialogContent>
      </ResponsiveDialog>
    </div>
  );
};

const ProjectVideo = ({ project }: { project: Project }) => {
  const [videoReady, setVideoReady] = React.useState(false);

  return (
    <video
      className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${videoReady ? "opacity-100" : "opacity-0"}`}
      src={`/assets/project-videos/${project.id}.mp4`}
      autoPlay
      loop
      muted
      playsInline
      preload="metadata"
      aria-label={`${project.title} project video`}
      onLoadedData={() => setVideoReady(true)}
      onError={() => setVideoReady(false)}
    />
  );
};

const projectMarkConfig = {
  storekit: {
    Icon: ShieldCheck,
    accent: "from-rose-500/30 via-orange-400/10 to-transparent",
    line: "bg-rose-300/70",
    orb: "bg-rose-300/20",
  },
  codingducks: {
    Icon: Code2,
    accent: "from-cyan-400/30 via-blue-500/10 to-transparent",
    line: "bg-cyan-300/70",
    orb: "bg-cyan-300/20",
  },
  gumbalup: {
    Icon: Gamepad2,
    accent: "from-lime-400/30 via-emerald-500/10 to-transparent",
    line: "bg-lime-300/70",
    orb: "bg-lime-300/20",
  },
  waku: {
    Icon: Radio,
    accent: "from-violet-400/30 via-fuchsia-500/10 to-transparent",
    line: "bg-violet-300/70",
    orb: "bg-violet-300/20",
  },
  peakposts: {
    Icon: FileText,
    accent: "from-amber-300/30 via-orange-500/10 to-transparent",
    line: "bg-amber-200/70",
    orb: "bg-amber-200/20",
  },
  kanbi: {
    Icon: Video,
    accent: "from-sky-400/30 via-indigo-500/10 to-transparent",
    line: "bg-sky-300/70",
    orb: "bg-sky-300/20",
  },
  portfolio: {
    Icon: Globe2,
    accent: "from-pink-400/30 via-red-500/10 to-transparent",
    line: "bg-pink-300/70",
    orb: "bg-pink-300/20",
  },
} as const;

const ProjectMark = ({ project }: { project: Project }) => {
  const config = projectMarkConfig[project.id as keyof typeof projectMarkConfig] ?? projectMarkConfig.portfolio;
  const { Icon } = config;
  const initials = project.title
    .split(/\s+/)
    .map((word) => word[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div
      className={`absolute inset-0 overflow-hidden bg-neutral-950 bg-gradient-to-br ${config.accent}`}
      role="img"
      aria-label={`${project.title} project mark`}
    >
      <div className={`absolute -right-12 -top-16 h-44 w-44 rounded-full blur-2xl ${config.orb}`} />
      <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px)] [background-size:36px_36px]" />
      <div className="absolute inset-x-8 top-8 flex items-center justify-between text-white/50">
        <span className="font-mono text-[10px] uppercase tracking-[0.3em]">Project / {project.id}</span>
        <Icon className="h-5 w-5" strokeWidth={1.5} />
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative flex h-28 w-28 items-center justify-center rounded-[2rem] border border-white/20 bg-white/[0.08] shadow-2xl shadow-black/30 backdrop-blur-sm transition-transform duration-500 group-hover:rotate-6 group-hover:scale-105">
          <div className={`absolute -inset-3 rounded-[2.4rem] border ${config.line} opacity-40 transition-transform duration-700 group-hover:rotate-12`} />
          <Icon className="absolute h-9 w-9 -translate-y-5 text-white/90" strokeWidth={1.4} />
          <span className="mt-10 font-display text-2xl font-bold tracking-tight text-white">{initials}</span>
        </div>
      </div>
      <div className="absolute bottom-5 left-8 right-8 flex items-center gap-3 text-white/50">
        <span className={`h-px flex-1 ${config.line}`} />
        <span className="font-mono text-[9px] uppercase tracking-[0.28em]">{project.category}</span>
      </div>
    </div>
  );
};

export default ProjectsSection;
