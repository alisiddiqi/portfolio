"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  ArrowRight,
  ExternalLink,
  Download,
  Code2,
  Sparkles,
  Calendar,
  Briefcase,
  Star,
  Phone,
  Moon,
  Sun,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";

// ---- Profile -------------------------------------------------------------
const PROFILE = {
  name: "Ali Siddiqi",
  role: "Software Engineer · React / Node · AI",
  location: "Calgary, AB",
  summary:
    "Software Engineering graduate with experience across frontend, backend, and AI. Skilled at building responsive apps, optimizing systems, and collaborating across diverse teams.",
  email: "ali.siddiqi110@gmail.com",
  phone: "+1 (403) 470-2634",
  github: "https://github.com/ali-siddiqi",
  linkedin: "https://linkedin.com/in/ali-siddiqi",
  resumeUrl: "/Ali_Siddiqi_Resume.pdf",
};

const HIGHLIGHTS = [
  { label: "3+ yrs", value: "Full‑stack Dev" },
  { label: "Top Skills", value: "React, Node, Python" },
  { label: "Focus", value: "AI & Cloud" },
];

const SKILLS = [
  { label: "Languages", items: ["JavaScript", "TypeScript", "Python", "Java", "C++", "SQL"] },
  { label: "Frontend", items: ["React", "Next.js", "HTML", "CSS", "TailwindCSS"] },
  { label: "Backend", items: ["Node.js", "Express", "Flask", "GraphQL", "REST"] },
  { label: "DevOps / Cloud", items: ["Docker", "Kubernetes", "Azure", "AWS", "OpenShift", "CI/CD"] },
  { label: "Quality", items: ["Jest", "Vitest", "RTL", "Playwright", "TDD"] },
];

const PROJECTS = [
  {
    title: "Learning Management System",
    blurb:
      "Full‑stack app with React.js, Flask, and MySQL. Teachers manage assignments; students submit and access lectures.",
    tags: ["React", "Flask", "MySQL", "Full‑stack"],
    href: "#projects",
    repo: "https://github.com/",
  },
  {
    title: "Hacker Tracker (Capstone)",
    blurb:
      "Cybersecurity platform with honeypots on Azure/DNS servers for real‑time threat detection and visualization.",
    tags: ["Azure", "Cybersecurity", "DNS", "Cloud"],
    href: "#projects",
    repo: "https://github.com/",
  },
  {
    title: "GitHub Insights Dashboard",
    blurb:
      "Analytics dashboard using GitHub GraphQL API with OAuth, caching, and interactive charts.",
    tags: ["Next.js", "TypeScript", "GraphQL", "Visx"],
    href: "#projects",
    repo: "https://github.com/",
  },
  {
    title: "Accessible UI Library",
    blurb:
      "Reusable, accessible React components with WAI‑ARIA compliance and Storybook docs.",
    tags: ["React", "TypeScript", "Storybook"],
    href: "#projects",
    repo: "https://github.com/",
  },
  {
    title: "Habit Tracker PWA",
    blurb:
      "Offline‑first PWA for building habits, with streaks, analytics, and sync.",
    tags: ["React", "PWA", "Workbox"],
    href: "#projects",
    repo: "https://github.com/",
  },
];

const EXPERIENCE = [
  {
    company: "Outlier (Scale AI)",
    role: "Software Engineer",
    period: "2025 – Present",
    points: [
      "Reviewed and corrected LLM‑generated code outputs across multiple languages.",
      "Enhanced training datasets with annotations, improving model accuracy by 21%.",
    ],
  },
  {
    company: "IBM",
    role: "Software Developer Intern",
    period: "2022 – 2023",
    points: [
      "Built features with React/Node using TDD and reduced API error rates by 25%.",
      "Containerized apps with Docker/Kubernetes; deployed on OpenShift, cutting manual deployments by 80%.",
    ],
  },
  {
    company: "Gyrd",
    role: "Software Developer Intern",
    period: "2021 – 2022",
    points: [
      "Optimized parking detection system by analyzing large CSV datasets.",
      "Built Selenium‑based web scraper aggregating data from 15+ sites, saving 10+ hrs weekly.",
    ],
  },
];

// ---- UI primitives -------------------------------------------------------
const Section = ({ id, title, children }: { id: string; title: string; children: React.ReactNode }) => (
  <section id={id} className="scroll-mt-24 py-16 md:py-24">
    <div className="mx-auto max-w-6xl px-4">
      <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-6 flex items-center gap-2">
        <Sparkles className="h-5 w-5" /> {title}
      </h2>
      {children}
    </div>
  </section>
);

function ThemeToggle() {
  const [dark, setDark] = useState(true);
  useEffect(() => {
    const el = document.documentElement;
    if (dark) el.classList.add("dark");
    else el.classList.remove("dark");
  }, [dark]);
  return (
    <Button variant="ghost" size="icon" aria-label="Toggle theme" onClick={() => setDark((d) => !d)}>
      {dark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
    </Button>
  );
}

// ---- Nav -----------------------------------------------------------------
const Nav = () => {
  const [open, setOpen] = useState(false);
  const link = (href: string, label: string) => (
    <a
      href={href}
      className="px-3 py-2 text-sm font-medium hover:text-primary"
      onClick={() => setOpen(false)}
    >
      {label}
    </a>
  );
  return (
    <header className="sticky top-0 z-50 border-b bg-background/70 backdrop-blur">
      <div className="mx-auto max-w-6xl px-4 h-16 flex items-center justify-between">
        <a href="#home" className="font-semibold tracking-tight flex items-center gap-2">
          <Code2 className="h-5 w-5" /> {PROFILE.name}
        </a>
        <nav className="hidden md:flex items-center">
          {link("#projects", "Projects")}
          {link("#skills", "Skills")}
          {link("#experience", "Experience")}
          {link("#about", "About")}
          {link("#contact", "Contact")}
          <a href={PROFILE.resumeUrl} className="ml-2">
            <Button size="sm" variant="default">
              <Download className="h-4 w-4 mr-2" />Resume
            </Button>
          </a>
          <div className="ml-2">
            <ThemeToggle />
          </div>
        </nav>
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <button onClick={() => setOpen(!open)} aria-label="Toggle menu">
            <svg
              className="h-6 w-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t bg-background">
          <div className="mx-auto max-w-6xl px-4 py-3 flex flex-col">
            {link("#projects", "Projects")}
            {link("#skills", "Skills")}
            {link("#experience", "Experience")}
            {link("#about", "About")}
            {link("#contact", "Contact")}
            <a href={PROFILE.resumeUrl} className="mt-2">
              <Button size="sm" className="w-full">
                <Download className="h-4 w-4 mr-2" />Resume
              </Button>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

// ---- Sections ------------------------------------------------------------
const Hero = () => (
  <section id="home" className="pt-10 md:pt-16">
    <div className="mx-auto max-w-6xl px-4 grid md:grid-cols-2 gap-8 items-center">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
        <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs md:text-sm mb-4">
          <MapPin className="h-4 w-4" /> {PROFILE.location}
        </div>
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight">
          {PROFILE.name}
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mt-2">{PROFILE.role}</p>
        <p className="mt-4 text-sm md:text-base text-muted-foreground max-w-prose">
          {PROFILE.summary}
        </p>
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <a href="#projects">
            <Button>
              View Projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </a>
          <a href={PROFILE.resumeUrl}>
            <Button variant="secondary">
              <Download className="mr-2 h-4 w-4" />Resume
            </Button>
          </a>
          <a href={PROFILE.github} target="_blank" rel="noreferrer">
            <Button variant="ghost">
              <Github className="mr-2 h-4 w-4" />GitHub
            </Button>
          </a>
          <a href={PROFILE.linkedin} target="_blank" rel="noreferrer">
            <Button variant="ghost">
              <Linkedin className="mr-2 h-4 w-4" />LinkedIn
            </Button>
          </a>
        </div>
        <div className="mt-6 grid grid-cols-3 gap-3">
          {HIGHLIGHTS.map((h) => (
            <div key={h.label} className="rounded-2xl border p-4">
              <div className="text-sm text-muted-foreground">{h.label}</div>
              <div className="text-xl font-semibold">{h.value}</div>
            </div>
          ))}
        </div>
      </motion.div>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="md:justify-self-end">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Star className="h-5 w-5" /> Featured Project
            </CardTitle>
            <CardDescription>Recent work I’m proud of</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="font-medium">GitHub Insights Dashboard</div>
              <p className="text-sm text-muted-foreground">
                GraphQL‑powered analytics, OAuth, and cached API routes with accessible charts.
              </p>
              <div className="flex flex-wrap gap-2 mt-2">
                {["Next.js", "TypeScript", "GraphQL", "OAuth", "Visx"].map((t) => (
                  <Badge key={t} variant="secondary">
                    {t}
                  </Badge>
                ))}
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex gap-2">
            <a href="#projects">
              <Button size="sm">
                Live Demo
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </a>
            <a href="https://github.com/" target="_blank" rel="noreferrer">
              <Button size="sm" variant="secondary">
                <Github className="mr-2 h-4 w-4" />Repo
              </Button>
            </a>
          </CardFooter>
        </Card>
      </motion.div>
    </div>
  </section>
);

const Projects = () => (
  <Section id="projects" title="Projects">
    <div className="grid md:grid-cols-2 gap-6">
      {PROJECTS.map((p) => (
        <Card key={p.title} className="flex flex-col">
          <CardHeader>
            <CardTitle className="text-lg">{p.title}</CardTitle>
            <CardDescription>{p.blurb}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <Badge key={t} variant="secondary">
                  {t}
                </Badge>
              ))}
            </div>
          </CardContent>
          <CardFooter className="mt-auto flex gap-2">
            <a href={p.href} target="_blank" rel="noreferrer">
              <Button size="sm">
                Live
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </a>
            <a href={p.repo} target="_blank" rel="noreferrer">
              <Button size="sm" variant="secondary">
                <Github className="mr-2 h-4 w-4" />Code
              </Button>
            </a>
          </CardFooter>
        </Card>
      ))}
    </div>
  </Section>
);

const Skills = () => (
  <Section id="skills" title="Skills & Tools">
    <div className="grid md:grid-cols-2 gap-6">
      {SKILLS.map((group) => (
        <Card key={group.label}>
          <CardHeader>
            <CardTitle className="text-base">{group.label}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {group.items.map((s) => (
                <Badge key={s} variant="outline">
                  {s}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
      <Card>
        <CardHeader>
          <CardTitle className="text-base">Strength Focus</CardTitle>
          <CardDescription>Areas I double down on</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <div className="mb-1 text-sm">Accessibility (A11y)</div>
            <Progress value={85} />
          </div>
          <div>
            <div className="mb-1 text-sm">Performance</div>
            <Progress value={80} />
          </div>
          <div>
            <div className="mb-1 text-sm">Testing & CI</div>
            <Progress value={82} />
          </div>
        </CardContent>
      </Card>
    </div>
  </Section>
);

const Experience = () => (
  <Section id="experience" title="Experience">
    <div className="space-y-4">
      {EXPERIENCE.map((e) => (
        <Card key={e.company}>
          <CardHeader>
            <CardTitle className="text-base">
              {e.role} @ {e.company}
            </CardTitle>
            <CardDescription>{e.period}</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              {e.points.map((pt, idx) => (
                <li key={idx}>{pt}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
      ))}
    </div>
  </Section>
);

const About = () => (
  <Section id="about" title="About">
    <p className="text-sm">
      I’ve lived in Qatar, Pakistan, and Canada. Outside of coding, I practice meditation,
      solo travel, and volunteer as a mental health facilitator.
    </p>
  </Section>
);

const Contact = () => (
  <Section id="contact" title="Contact">
    <Card>
      <CardHeader>
        <CardTitle>Let’s connect</CardTitle>
        <CardDescription>
          Feel free to reach out for collaborations or opportunities.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-3 text-sm">
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <a className="underline" href={`mailto:${PROFILE.email}`}>
                {PROFILE.email}
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" /> {PROFILE.phone}
            </div>
            <div className="flex items-center gap-2">
              <Github className="h-4 w-4" />
              <a className="underline" href={PROFILE.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Linkedin className="h-4 w-4" />
              <a className="underline" href={PROFILE.linkedin} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </div>
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert("Thanks! Demo form submitted.");
            }}
            className="space-y-3"
          >
            <Input placeholder="Your name" required />
            <Input placeholder="Email" type="email" required />
            <Textarea placeholder="Message" rows={5} required />
            <Button type="submit">
              Send
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </form>
        </div>
      </CardContent>
    </Card>
  </Section>
);

// ---- Main export ---------------------------------------------------------
export default function PortfolioSite() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <Experience />
        <About />
        <Contact />
      </main>
      <footer className="border-t mt-12">
        <div className="mx-auto max-w-6xl px-4 h-16 flex items-center justify-between text-xs text-muted-foreground">
          <p>
            © {new Date().getFullYear()} {PROFILE.name}. All rights reserved.
          </p>
          <p className="flex items-center gap-2">
            <Star className="h-3 w-3" /> Built with React + Tailwind + shadcn/ui
          </p>
        </div>
      </footer>
    </div>
  );
}
