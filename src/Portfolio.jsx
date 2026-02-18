import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Mail,
  Linkedin,
  Github,
  ExternalLink,
  Award,
  Sparkles,
  Bot,
  Database,
  Cpu,
  UserRound
} from "lucide-react";

const projects = [
  {
    title: "FitBuddy",
    subtitle: "AI Wardrobe Assistant",
    description:
      "Flask + SDXL assistant that builds outfit recommendations with a rule engine and affiliate intelligence.",
    image: "/fitbuddy-ss.png",
    href: "https://fitbuddynew.onrender.com/",
    accent: "from-amber-300 via-orange-400 to-rose-500"
  },
  {
    title: "RAG Local LLM",
    subtitle: "Private Knowledge Copilot",
    description:
      "Production-style retrieval pipeline with Mistral, FAISS, PostgreSQL, and session memory for grounded answers.",
    image: "/llm-ss.png",
    href: "https://t94eduetpy2cpxxcf9xhvd.streamlit.app/",
    accent: "from-cyan-300 via-sky-400 to-indigo-500"
  }
];

const certifications = [
  {
    name: "Big Data Computing - IIT Kanpur",
    link: "/Big%20Data%20Computing.pdf"
  },
  {
    name: "Cyber Security - IIT Madras",
    link: "/Cyber%20Security%20and%20Privacy.pdf"
  },
  {
    name: "Compiler Design - IIT Kharagpur",
    link: "/Compiler%20Design%20nptel.pdf"
  },
  {
    name: "Web Development Training - Certificate",
    link: "/Web%20Development%20Training%20-%20Certificate%20of%20Completion%20(1).pdf"
  }
];

const skills = [
  "RAG Systems",
  "LLM Fine-Tuning",
  "Oracle + PostgreSQL",
  "Mistral + FAISS",
  "Python + FastAPI",
  "Vector Search",
  "Prompt Engineering",
  "Cloud Deployments"
];

function FloatingOrb({ className, delay, duration }) {
  return (
    <motion.div
      aria-hidden
      className={className}
      initial={{ y: 0, x: 0 }}
      animate={{
        y: [0, -25, 15, 0],
        x: [0, 15, -10, 0]
      }}
      transition={{
        repeat: Infinity,
        duration,
        delay,
        ease: "easeInOut"
      }}
    />
  );
}

function GlassProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      whileHover={{ rotateX: 6, rotateY: -6, scale: 1.02 }}
      style={{ transformStyle: "preserve-3d" }}
      className="group relative"
    >
      <Card className="project-card overflow-hidden rounded-[1.5rem] border-white/15 bg-white/5 backdrop-blur-xl">
        <CardContent className="p-0">
          <div className="relative">
            <div className={`absolute inset-0 bg-gradient-to-tr ${project.accent} opacity-30`} />
            <img
              src={project.image}
              alt={`${project.title} screenshot`}
              className="h-56 w-full object-cover md:h-64"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
          </div>
          <div className="space-y-3 p-6">
            <p className="text-xs uppercase tracking-[0.24em] text-cyan-200/90">
              {project.subtitle}
            </p>
            <h3 className="font-display text-2xl text-white">{project.title}</h3>
            <p className="text-sm leading-relaxed text-zinc-300">{project.description}</p>
            <Button asChild className="mt-3 border border-cyan-300/30 bg-cyan-300/15 text-cyan-100 hover:bg-cyan-300/30">
              <a href={project.href} target="_blank" rel="noreferrer">
                Launch Project <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
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
            src="/avatar_3d.png"
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
      <p className="avatar-caption">3D Profile Frame</p>
    </motion.div>
  );
}

export default function Portfolio() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-midnight text-zinc-100">
      <div className="pointer-events-none absolute inset-0 opacity-80">
        <FloatingOrb
          className="absolute left-[-10rem] top-[-6rem] h-80 w-80 rounded-full bg-fuchsia-400/30 blur-3xl"
          delay={0}
          duration={12}
        />
        <FloatingOrb
          className="absolute right-[-8rem] top-[10rem] h-72 w-72 rounded-full bg-cyan-400/30 blur-3xl"
          delay={1.5}
          duration={11}
        />
        <FloatingOrb
          className="absolute bottom-[-8rem] left-[30%] h-96 w-96 rounded-full bg-amber-300/20 blur-3xl"
          delay={0.8}
          duration={14}
        />
      </div>

      <section className="relative mx-auto max-w-6xl px-6 pb-16 pt-20 md:px-10 md:pt-28">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="relative overflow-hidden rounded-[2rem] border border-white/20 bg-white/5 p-8 shadow-[0_25px_100px_-40px_rgba(34,211,238,0.5)] backdrop-blur-xl md:p-12"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(34,211,238,0.20),transparent_55%)]" />
          <div className="relative z-10 grid items-center gap-10 lg:grid-cols-[1.25fr_0.75fr]">
            <div>
              <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-300/40 bg-cyan-300/10 px-4 py-2 text-xs uppercase tracking-[0.2em] text-cyan-100">
                <Sparkles className="h-4 w-4" />
                AI Engineer Portfolio
              </p>
              <h1 className="font-display text-5xl leading-tight text-white md:text-7xl">
                Priyanshu Ahirwar
              </h1>
              <p className="mt-5 max-w-3xl text-base leading-relaxed text-zinc-200 md:text-lg">
                I build high-performance AI products that blend LLM intelligence, retrieval pipelines,
                and production-grade backend systems. This portfolio is crafted as a living interface,
                not a static resume.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild className="border border-cyan-200/40 bg-cyan-200/20 text-cyan-50 hover:bg-cyan-200/30">
                  <a href="https://drive.google.com/file/d/1N6YkyeKhaM6o3g_w_GyiKcUBWy9KuKWP/view?usp=drive_link" target="_blank" rel="noreferrer">
                    View Resume
                  </a>
                </Button>
                <Button variant="outline" asChild className="border-fuchsia-300/30 bg-fuchsia-300/10 text-fuchsia-100 hover:bg-fuchsia-300/20">
                  <a href="#projects">Explore Work</a>
                </Button>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                <div className="metric-card">
                  <Bot className="mb-2 h-5 w-5 text-cyan-200" />
                  <p className="text-xs uppercase tracking-[0.2em] text-cyan-100/80">Focus</p>
                  <p className="text-sm text-zinc-200">LLM + RAG Systems</p>
                </div>
                <div className="metric-card">
                  <Database className="mb-2 h-5 w-5 text-amber-200" />
                  <p className="text-xs uppercase tracking-[0.2em] text-amber-100/80">Stack</p>
                  <p className="text-sm text-zinc-200">Oracle, PostgreSQL, FAISS</p>
                </div>
                <div className="metric-card">
                  <Cpu className="mb-2 h-5 w-5 text-fuchsia-200" />
                  <p className="text-xs uppercase tracking-[0.2em] text-fuchsia-100/80">Delivery</p>
                  <p className="text-sm text-zinc-200">Production-Ready Apps</p>
                </div>
              </div>
            </div>
            <ProfessionalAvatar />
          </div>
        </motion.div>
      </section>

      <section className="relative overflow-hidden border-y border-white/10 py-5">
        <div className="marquee-track">
          {[...skills, ...skills].map((skill, idx) => (
            <span key={`${skill}-${idx}`} className="marquee-pill">
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section id="projects" className="relative mx-auto max-w-6xl px-6 py-20 md:px-10">
        <motion.h2
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="font-display mb-10 text-4xl text-white md:text-5xl"
        >
          Featured Builds
        </motion.h2>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <GlassProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </section>

      <section className="relative mx-auto max-w-6xl px-6 pb-20 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-[2rem] border border-white/15 bg-black/35 p-8 backdrop-blur-xl md:p-10"
        >
          <h2 className="font-display text-4xl text-white md:text-5xl">Certifications</h2>
          <p className="mt-2 text-zinc-300">Validated learning from IIT and hands-on engineering tracks.</p>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {certifications.map((cert, idx) => (
              <motion.div
                key={cert.name}
                whileHover={{ y: -6, rotateX: 4 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className="cert-card"
              >
                <div>
                  <div className="flex items-center gap-2 text-cyan-200">
                    <Award className="h-4 w-4" />
                    <span className="text-xs uppercase tracking-[0.16em]">Credential {idx + 1}</span>
                  </div>
                  <p className="mt-2 text-sm text-zinc-100">{cert.name}</p>
                </div>
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-sm text-cyan-200 hover:text-cyan-100"
                >
                  Open <ExternalLink className="h-4 w-4" />
                </a>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <footer className="relative border-t border-white/10 px-6 py-10 md:px-10">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4">
          <p className="text-sm text-zinc-400">Built with motion, depth, and production focus.</p>
          <div className="flex flex-wrap gap-5 text-sm">
            <a href="mailto:priyanshuahirwar1002@gmail.com" className="inline-flex items-center gap-2 text-zinc-300 hover:text-cyan-200">
              <Mail className="h-4 w-4" /> Email
            </a>
            <a
              href="https://linkedin.com/in/priyanshuahirwar"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-zinc-300 hover:text-cyan-200"
            >
              <Linkedin className="h-4 w-4" /> LinkedIn
            </a>
            <a
              href="https://github.com/priyanshuiscoding"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-zinc-300 hover:text-cyan-200"
            >
              <Github className="h-4 w-4" /> GitHub
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
