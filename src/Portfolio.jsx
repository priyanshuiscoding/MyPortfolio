import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Mail,
  Linkedin,
  Github,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Bot,
  Database,
  Cpu,
  UserRound,
  ArrowUpRight,
  FileDown
} from "lucide-react";

const assetUrl = (fileName) => `${import.meta.env.BASE_URL}${fileName}`;

const projects = [
  {
    title: "Local LLM Assistant",
    subtitle: "Private Knowledge Copilot",
    image: assetUrl("llm-ss.png"),
    summary:
      "Built a secure local RAG assistant for private knowledge querying without cloud data exposure.",
    problem: "Most AI assistants depend on cloud APIs and expose sensitive data.",
    solution:
      "Built a fully local RAG-based AI system with Mistral (Ollama), bge-base embeddings, FAISS, PostgreSQL hybrid querying, and Streamlit frontend.",
    tech: "Mistral (Ollama), bge-base, FAISS, PostgreSQL, Streamlit, Python",
    impact: ["25% faster query response", "Secure offline deployment"],
    live: "https://t94eduetpy2cpxxcf9xhvd.streamlit.app/",
    github: "https://github.com/priyanshuiscoding",
    caseStudy: "https://github.com/priyanshuiscoding",
    diagram: assetUrl("llm-ss.png"),
    demo: assetUrl("llm-ss.png"),
    accent: "from-cyan-300 via-sky-400 to-indigo-500"
  },
  {
    title: "FitBuddy",
    subtitle: "AI Wardrobe Assistant",
    image: assetUrl("fitbuddy-ss.png"),
    summary:
      "AI wardrobe recommender that turns outfit intent into practical styling suggestions and monetizable product links.",
    problem: "People struggle with outfit decisions.",
    solution:
      "Built an AI wardrobe recommender using NVIDIA SDXL and a rule-based engine to generate context-aware outfit suggestions.",
    tech: "Flask, NVIDIA SDXL, Python, Rule-based Engine",
    impact: ["Clear recommendation flow", "Affiliate monetization module integrated"],
    live: "https://fitbuddynew.onrender.com/",
    github: "https://github.com/priyanshuiscoding",
    caseStudy: "https://github.com/priyanshuiscoding",
    accent: "from-amber-300 via-orange-400 to-rose-500"
  },
  {
    title: "NeuroMonarch",
    subtitle: "AI Fashion Design & Mockup Generator",
    image: assetUrl("fitbuddy-ss.png"),
    summary:
      "Conversational AI system that converts fashion ideas into production-ready apparel mockups in a guided flow.",
    problem:
      "Fashion brands and independent designers struggle to convert abstract ideas into visual apparel designs and production previews.",
    solution:
      "Built a guided conversational workflow that bridges idea -> design -> mockup -> production preview in one continuous AI system.",
    tech: "Python, Flask/FastAPI, REST APIs, LLM engine, Image generation pipeline, Render",
    impact: [
      "Unified structured creative pipeline",
      "Production-ready mockup generation with personalization",
      "Work history tracking and optional reference upload"
    ],
    architecture:
      "User Input -> Structured Prompt Builder -> LLM Guidance Engine -> Image Generation Model -> Mockup Rendering Module -> Response Display + Work History Storage",
    technicalDepth: [
      "Context-aware conversational state handling",
      "Multi-step input refinement with controlled prompt formatting",
      "Structured output parsing for stable mockup generation",
      "Modular architecture for future AI model upgrades"
    ],
    live: "https://neuro-monarch-1.onrender.com/",
    github: "https://github.com/priyanshuiscoding",
    caseStudy: "https://github.com/priyanshuiscoding",
    accent: "from-violet-300 via-indigo-400 to-cyan-500"
  }
];

const skillGroups = [
  {
    title: "AI & LLMs",
    icon: Bot,
    items: ["RAG Systems", "Mistral", "Prompt Engineering", "Embeddings"]
  },
  {
    title: "Databases",
    icon: Database,
    items: ["Oracle", "PostgreSQL", "FAISS", "Vector Search"]
  },
  {
    title: "Backend",
    icon: Cpu,
    items: ["Python", "FastAPI", "Flask", "REST APIs"]
  },
  {
    title: "Tools",
    icon: Bot,
    items: ["GitHub", "Streamlit", "Docker", "Postman"]
  },
  {
    title: "Systems",
    icon: Cpu,
    items: ["System Design", "Deployment", "Monitoring", "Security"]
  }
];

const experiences = [
  {
    org: "BHEL",
    role: "Engineering Intern",
    summary:
      "Improved operational data workflows by structuring reporting pipelines and reducing manual tracking friction.",
    outcomes: ["Faster reporting cycles", "Higher reliability in decision data"]
  },
  {
    org: "Cognifyz",
    role: "Software/AI Intern",
    summary:
      "Built AI-backed product modules focused on real user use-cases and production-style backend execution.",
    outcomes: ["Improved feature delivery speed", "Stronger implementation quality"]
  }
];

const insights = [
  "How I Built a Local LLM from Scratch",
  "FAISS vs PostgreSQL for Vector Search",
  "What I Learned Deploying AI with Oracle"
];

function FloatingOrb({ className, delay, duration }) {
  return (
    <motion.div
      aria-hidden
      className={className}
      initial={{ y: 0, x: 0 }}
      animate={{ y: [0, -25, 15, 0], x: [0, 15, -10, 0] }}
      transition={{ repeat: Infinity, duration, delay, ease: "easeInOut" }}
    />
  );
}

function ProfessionalAvatar() {
  const [imgError, setImgError] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, rotateY: -10 }}
      animate={{ opacity: 1, y: 0, rotateY: 0 }}
      transition={{ duration: 0.9, delay: 0.25 }}
      whileHover={{ rotateY: 8, rotateX: -4, scale: 1.02 }}
      style={{ transformStyle: "preserve-3d" }}
      className="avatar-panel"
    >
      <motion.span
        aria-hidden
        className="avatar-ring avatar-ring-one"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
      />
      <motion.span
        aria-hidden
        className="avatar-ring avatar-ring-two"
        animate={{ rotate: -360 }}
        transition={{ repeat: Infinity, duration: 16, ease: "linear" }}
      />

      <div className="avatar-shell">
        {!imgError ? (
          <img
            src={assetUrl("avatar_3d.png")}
            alt="Priyanshu avatar"
            className="avatar-image"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="avatar-fallback">
            <UserRound className="h-10 w-10 text-cyan-200" />
            <p>Add `public/avatar_3d.png`</p>
          </div>
        )}
      </div>
      <p className="avatar-caption">AI Engineer Profile</p>
    </motion.div>
  );
}

function NeuralPulse() {
  const nodes = [
    { left: "12%", top: "52%", delay: 0.1 },
    { left: "33%", top: "26%", delay: 0.3 },
    { left: "54%", top: "60%", delay: 0.5 },
    { left: "75%", top: "35%", delay: 0.7 },
    { left: "89%", top: "64%", delay: 0.9 }
  ];

  return (
    <div className="neural-pulse" aria-hidden>
      <motion.div
        className="neural-scanline"
        initial={{ x: "-28%" }}
        animate={{ x: ["-28%", "120%"] }}
        transition={{ repeat: Infinity, duration: 3.2, ease: "linear" }}
      />
      {nodes.map((node) => (
        <motion.span
          key={`${node.left}-${node.top}`}
          className="neural-node"
          style={{ left: node.left, top: node.top }}
          animate={{ scale: [1, 1.35, 1], opacity: [0.4, 1, 0.4] }}
          transition={{ repeat: Infinity, duration: 2.4, delay: node.delay, ease: "easeInOut" }}
        />
      ))}
      <svg viewBox="0 0 300 120" className="neural-lines">
        <path d="M10 72 C52 20, 105 25, 140 60 S224 106, 290 44" />
      </svg>
      <p className="neural-label">Neural Pipeline Active</p>
    </div>
  );
}

function ProjectCard({ project }) {
  return (
    <Card className="project-card project-shell h-full overflow-hidden rounded-[1.5rem] border-white/15 bg-white/5 backdrop-blur-xl">
      <CardContent className="p-0">
        <div className="relative">
          <div className="project-spotlight" />
          <div className={`absolute inset-0 bg-gradient-to-tr ${project.accent} opacity-30`} />
          <img src={project.image} alt={`${project.title} screenshot`} className="project-media" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
          <span className="project-chip">{project.subtitle}</span>
        </div>

        <div className="project-content space-y-3 p-6">
          <h3 className="font-display text-3xl text-white">{project.title}</h3>
          <p className="text-sm text-zinc-200">{project.summary}</p>
          <p className="text-sm text-zinc-300"><strong>Tech:</strong> {project.tech}</p>

          <details className="project-details">
            <summary>View details</summary>
            <p className="mt-2 text-sm text-zinc-200"><strong>Problem:</strong> {project.problem}</p>
            <p className="mt-2 text-sm text-zinc-200"><strong>Solution:</strong> {project.solution}</p>
            <ul className="mt-2 list-inside list-disc text-sm text-zinc-300">
              {project.impact.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
            {project.architecture && (
              <p className="mt-2 text-sm text-zinc-200"><strong>Architecture:</strong> {project.architecture}</p>
            )}
            {project.technicalDepth && (
              <ul className="mt-2 list-inside list-disc text-sm text-zinc-300">
                {project.technicalDepth.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            )}
          </details>

          <div className="project-actions mt-auto flex flex-wrap gap-2 pt-2">
            <Button asChild className="launch-cta border border-cyan-300/30 text-cyan-100">
              <a href={project.live} target="_blank" rel="noreferrer">Live <ExternalLink className="ml-2 h-4 w-4" /></a>
            </Button>
            <Button variant="outline" asChild className="border-white/25 bg-white/5 text-zinc-100 hover:bg-white/15">
              <a href={project.github} target="_blank" rel="noreferrer">GitHub</a>
            </Button>
            <Button variant="outline" asChild className="border-white/25 bg-white/5 text-zinc-100 hover:bg-white/15">
              <a href={project.caseStudy} target="_blank" rel="noreferrer">
                Case Study
              </a>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function ProjectCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const total = projects.length;

  const handlePrev = () => setActiveIndex((prev) => (prev - 1 + total) % total);
  const handleNext = () => setActiveIndex((prev) => (prev + 1) % total);

  return (
    <div className="project-carousel">
      <motion.div
        className="project-track"
        animate={{ x: `-${activeIndex * 100}%` }}
        transition={{ type: "spring", stiffness: 80, damping: 18 }}
      >
        {projects.map((project) => (
          <div key={project.title} className="project-slide">
            <ProjectCard project={project} />
          </div>
        ))}
      </motion.div>

      <div className="project-controls">
        <button type="button" onClick={handlePrev} className="carousel-btn" aria-label="Previous project">
          <ChevronLeft className="h-4 w-4" />
        </button>
        <div className="carousel-dots">
          {projects.map((project, idx) => (
            <button
              key={project.title}
              type="button"
              className={`dot ${idx === activeIndex ? "dot-active" : ""}`}
              onClick={() => setActiveIndex(idx)}
              aria-label={`Go to ${project.title}`}
            />
          ))}
        </div>
        <button type="button" onClick={handleNext} className="carousel-btn" aria-label="Next project">
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}

export default function Portfolio() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-midnight text-zinc-100">
      <div className="pointer-events-none absolute inset-0 opacity-85">
        <FloatingOrb className="absolute left-[-10rem] top-[-6rem] h-80 w-80 rounded-full bg-rose-400/20 blur-3xl" delay={0} duration={12} />
        <FloatingOrb className="absolute right-[-8rem] top-[10rem] h-72 w-72 rounded-full bg-sky-400/25 blur-3xl" delay={1.5} duration={11} />
        <FloatingOrb className="absolute bottom-[-8rem] left-[30%] h-96 w-96 rounded-full bg-cyan-300/18 blur-3xl" delay={0.8} duration={14} />
      </div>

      <section className="relative mx-auto max-w-6xl px-6 pb-16 pt-20 md:px-10 md:pt-28">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="hero-panel relative overflow-hidden rounded-[2rem] border p-8 shadow-[0_25px_100px_-40px_rgba(56,189,248,0.45)] backdrop-blur-xl md:p-12"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(34,211,238,0.20),transparent_55%)]" />
          <div className="relative z-10 grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-300/40 bg-cyan-300/10 px-4 py-2 text-xs uppercase tracking-[0.2em] text-cyan-100">
                <Sparkles className="h-4 w-4" />
                AI Engineer Portfolio
              </p>
              <h1 className="font-display text-5xl leading-tight text-white md:text-7xl">PRIYANSHU AHIRWAR</h1>
              <p className="mt-4 max-w-3xl text-lg text-zinc-200 md:text-xl">
                AI & Data Engineer building real-world LLM systems.
              </p>

              <NeuralPulse />

              <div className="mt-7 flex flex-wrap gap-3">
                <Button variant="outline" asChild className="border-fuchsia-300/30 bg-fuchsia-300/10 text-fuchsia-100 hover:bg-fuchsia-300/20 hover:text-fuchsia-50">
                  <a href="#projects">View Projects</a>
                </Button>
                <Button asChild className="resume-cta border-0">
                  <a href="https://drive.google.com/file/d/1sBpGJGa-NcI7WJ283ir6-8oiN2eHCHaI/view?usp=drive_link" target="_blank" rel="noreferrer">
                    <span className="resume-cta-shimmer" />
                    <span className="relative z-10 inline-flex items-center gap-2">Download Resume <FileDown className="h-4 w-4" /></span>
                  </a>
                </Button>
              </div>
            </div>
            <ProfessionalAvatar />
          </div>
        </motion.div>
      </section>

      <section className="relative mx-auto max-w-6xl px-6 pb-12 md:px-10">
        <div className="glass-section">
          <h2 className="font-display text-3xl text-white">About</h2>
          <p className="mt-3 max-w-4xl text-zinc-200">
            I design and deploy AI-powered systems using LLMs, vector databases, and Oracle technologies.
            My focus is building scalable, secure, and production-ready solutions, not just prototypes.
          </p>
        </div>
      </section>

      <section id="projects" className="relative mx-auto max-w-6xl px-6 py-8 md:px-10">
        <motion.h2
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="font-display mb-10 text-4xl text-white md:text-5xl"
        >
          Projects
        </motion.h2>

        <ProjectCarousel />
      </section>

      <section className="relative mx-auto max-w-6xl px-6 py-12 md:px-10">
        <h2 className="font-display mb-8 text-4xl text-white md:text-5xl">Technical Skills</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {skillGroups.map((group) => {
            const Icon = group.icon;
            return (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="skill-block"
              >
                <div className="mb-3 flex items-center gap-2 text-cyan-200">
                  <Icon className="h-4 w-4" />
                  <h3 className="text-sm uppercase tracking-[0.16em]">{group.title}</h3>
                </div>
                <p className="text-sm text-zinc-200">{group.items.join(" • ")}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      <section className="relative mx-auto max-w-6xl px-6 py-12 md:px-10">
        <h2 className="font-display mb-8 text-4xl text-white md:text-5xl">Experience</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {experiences.map((exp) => (
            <div key={exp.org} className="glass-section">
              <h3 className="text-xl text-white">{exp.org}</h3>
              <p className="mt-1 text-xs uppercase tracking-[0.18em] text-cyan-200/90">{exp.role}</p>
              <p className="mt-3 text-zinc-200">{exp.summary}</p>
              <ul className="mt-3 list-inside list-disc text-sm text-zinc-300">
                {exp.outcomes.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="relative mx-auto max-w-6xl px-6 py-12 md:px-10">
        <h2 className="font-display mb-8 text-4xl text-white md:text-5xl">Insights</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {insights.map((post) => (
            <div key={post} className="glass-section">
              <p className="text-sm uppercase tracking-[0.14em] text-cyan-200/85">Article Idea</p>
              <p className="mt-3 text-zinc-100">{post}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="relative border-t border-white/10 px-6 py-10 md:px-10">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4">
          <h2 className="font-display text-2xl text-white">Contact</h2>
          <div className="flex flex-wrap gap-5 text-sm">
            <a href="mailto:priyanshuahirwar1002@gmail.com" className="inline-flex items-center gap-2 text-zinc-300 hover:text-cyan-200">
              <Mail className="h-4 w-4" /> Email
            </a>
            <a href="https://linkedin.com/in/priyanshuahirwar" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-zinc-300 hover:text-cyan-200">
              <Linkedin className="h-4 w-4" /> LinkedIn
            </a>
            <a href="https://github.com/priyanshuiscoding" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-zinc-300 hover:text-cyan-200">
              <Github className="h-4 w-4" /> GitHub
            </a>
            <a href="https://drive.google.com/file/d/1sBpGJGa-NcI7WJ283ir6-8oiN2eHCHaI/view?usp=drive_link" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-zinc-300 hover:text-cyan-200">
              Resume <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
