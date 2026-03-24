import {
  Award,
  BarChart2,
  BookOpen,
  Briefcase,
  CheckCircle,
  ChevronRight,
  FileText,
  Linkedin,
  Mail,
  Menu,
  Phone,
  Search,
  Shield,
  Star,
  TrendingUp,
  Users,
  X,
  XCircle,
  Zap,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

function Section({
  id,
  className = "",
  style,
  children,
}: {
  id?: string;
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) el.classList.add("visible");
      },
      { threshold: 0.1 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return (
    <section
      id={id}
      ref={ref}
      className={`section-fade-in ${className}`}
      style={style}
    >
      {children}
    </section>
  );
}

function GoldBadge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block text-[11px] font-bold tracking-widest uppercase text-gold border border-gold/40 px-3 py-1 rounded-sm mb-4">
      {children}
    </span>
  );
}

function NavBar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);
  const links = [
    { label: "About", target: "about" },
    { label: "Services", target: "services" },
    { label: "Elite", target: "elite" },
    { label: "Results", target: "results" },
    { label: "Packages", target: "packages" },
    { label: "Contact", target: "contact" },
  ];
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-shadow duration-300 ${scrolled ? "shadow-lg" : ""}`}
      style={{ background: "oklch(var(--navy))" }}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
        <button
          type="button"
          onClick={() => scrollTo("hero")}
          className="font-serif font-bold text-xl tracking-widest"
          style={{ color: "oklch(var(--gold))" }}
          data-ocid="nav.link"
        >
          POOJA PATIL
        </button>
        <div className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <button
              type="button"
              key={l.target}
              onClick={() => scrollTo(l.target)}
              className="text-sm font-medium tracking-wide text-white/70 hover:text-white transition-colors"
              data-ocid="nav.link"
            >
              {l.label}
            </button>
          ))}
        </div>
        <button
          type="button"
          onClick={() => scrollTo("contact")}
          className="hidden lg:block text-xs font-bold tracking-widest uppercase px-5 py-2.5 border border-gold text-gold hover:bg-gold hover:text-navy transition-all duration-200"
          data-ocid="nav.primary_button"
        >
          BOOK CONSULTATION
        </button>
        <button
          type="button"
          className="lg:hidden text-white"
          onClick={() => setOpen(!open)}
          data-ocid="nav.toggle"
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden overflow-hidden"
            style={{ background: "oklch(var(--navy))" }}
          >
            <div className="px-6 pb-6 flex flex-col gap-4">
              {links.map((l) => (
                <button
                  type="button"
                  key={l.target}
                  onClick={() => {
                    scrollTo(l.target);
                    setOpen(false);
                  }}
                  className="text-left text-white/80 hover:text-white text-sm font-medium py-1 border-b border-white/10"
                  data-ocid="nav.link"
                >
                  {l.label}
                </button>
              ))}
              <button
                type="button"
                onClick={() => {
                  scrollTo("contact");
                  setOpen(false);
                }}
                className="text-xs font-bold tracking-widest uppercase px-5 py-2.5 border border-gold text-gold w-fit"
                data-ocid="nav.primary_button"
              >
                BOOK CONSULTATION
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

// ── 1. Hero — POLISHED: removed duplicate subtitle, editorial stats panel right column, fluid H1 size
function HeroSection() {
  const heroStats = [
    { value: "100+", label: "Resumes Crafted" },
    { value: "3+", label: "Years Positioning Careers" },
    { value: "95%", label: "Client Interview Rate" },
  ];
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden pt-16"
      style={{
        background:
          "linear-gradient(150deg, oklch(0.18 0.055 243) 0%, oklch(0.24 0.065 243) 60%, oklch(0.28 0.07 243) 100%)",
      }}
    >
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, oklch(var(--gold)) 0px, oklch(var(--gold)) 1px, transparent 1px, transparent 80px), repeating-linear-gradient(90deg, oklch(var(--gold)) 0px, oklch(var(--gold)) 1px, transparent 1px, transparent 80px)",
        }}
      />
      <div
        className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ background: "oklch(var(--gold))" }}
      />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 w-full py-24 lg:py-32">
        <div className="grid lg:grid-cols-[1fr_420px] gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 44 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.95, ease: "easeOut" }}
          >
            <GoldBadge>Resume Strategist · LinkedIn Branding Expert</GoldBadge>
            <div className="flex items-stretch gap-5 mb-7">
              <div
                className="w-1 rounded-full shrink-0"
                style={{ background: "oklch(var(--gold))" }}
              />
              <h1
                className="font-serif font-bold leading-[0.95] tracking-tight text-white"
                style={{ fontSize: "clamp(4rem, 9vw, 7rem)" }}
              >
                POOJA
                <br />
                <span style={{ color: "oklch(var(--gold))" }}>PATIL</span>
              </h1>
            </div>
            <p className="text-white/60 text-base lg:text-lg leading-relaxed mb-10 max-w-md font-light">
              Helping professionals get{" "}
              <strong className="text-white font-semibold">
                shortlisted, noticed,
              </strong>{" "}
              and hired — through strategic career positioning and personal
              branding.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                type="button"
                onClick={() => scrollTo("contact")}
                className="inline-flex items-center gap-2.5 px-8 py-4 text-[11px] font-bold tracking-[0.15em] uppercase transition-all duration-200 hover:brightness-105 active:scale-[0.98]"
                style={{
                  background: "oklch(var(--gold))",
                  color: "oklch(var(--navy))",
                }}
                data-ocid="hero.primary_button"
              >
                Start Your Transformation
                <ChevronRight size={15} strokeWidth={2.5} />
              </button>
              <button
                type="button"
                onClick={() => scrollTo("about")}
                className="inline-flex items-center gap-2 px-8 py-4 text-[11px] font-bold tracking-[0.15em] uppercase border border-white/25 text-white/80 hover:border-white/60 hover:text-white transition-all duration-200"
                data-ocid="hero.secondary_button"
              >
                See My Work
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.35, ease: "easeOut" }}
            className="hidden lg:block"
          >
            <div
              className="rounded-lg overflow-hidden"
              style={{
                border: "1px solid oklch(var(--gold) / 0.25)",
                background: "oklch(var(--navy-light) / 0.5)",
                backdropFilter: "blur(8px)",
              }}
            >
              <div
                className="px-8 py-5 border-b"
                style={{ borderColor: "oklch(var(--gold) / 0.2)" }}
              >
                <p
                  className="text-[10px] font-bold tracking-[0.2em] uppercase"
                  style={{ color: "oklch(var(--gold))" }}
                >
                  Career Positioning Results
                </p>
              </div>
              <div
                className="divide-y"
                style={{ borderColor: "oklch(var(--gold) / 0.1)" }}
              >
                {heroStats.map((s, i) => (
                  <motion.div
                    key={s.value}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + i * 0.15 }}
                    className="px-8 py-6 flex items-center justify-between gap-6"
                  >
                    <p className="text-white/55 text-sm leading-snug max-w-[160px]">
                      {s.label}
                    </p>
                    <p
                      className="font-serif text-4xl font-bold shrink-0"
                      style={{ color: "oklch(var(--gold))" }}
                    >
                      {s.value}
                    </p>
                  </motion.div>
                ))}
              </div>
              <div
                className="px-8 py-5 border-t"
                style={{ borderColor: "oklch(var(--gold) / 0.2)" }}
              >
                <button
                  type="button"
                  onClick={() => scrollTo("packages")}
                  className="text-[10px] font-bold tracking-[0.2em] uppercase flex items-center gap-2 transition-opacity hover:opacity-70"
                  style={{ color: "oklch(var(--gold))" }}
                >
                  View Packages <ChevronRight size={12} />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function HookSection() {
  return (
    <Section
      id="about"
      className="py-24 lg:py-32 text-center"
      style={{ background: "oklch(var(--navy))" } as React.CSSProperties}
    >
      <div className="max-w-4xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p
            className="text-xs font-bold tracking-widest uppercase mb-8"
            style={{ color: "oklch(var(--gold))" }}
          >
            The Real Problem
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-8">
            Still not getting
            <br />
            <span style={{ color: "oklch(var(--gold))" }}>
              interview calls?
            </span>
          </h2>
          <div
            className="w-16 h-0.5 mx-auto mb-8"
            style={{ background: "oklch(var(--gold))" }}
          />
          <p className="text-white/60 text-lg lg:text-xl font-light mb-4">
            Your resume is not the problem.
          </p>
          <p className="text-white text-2xl lg:text-3xl font-serif font-semibold">
            Your <em style={{ color: "oklch(var(--gold))" }}>positioning</em>{" "}
            is.
          </p>
        </motion.div>
      </div>
    </Section>
  );
}

function ProofSection() {
  const stats = [
    { value: "100+", label: "Resumes Created", icon: FileText },
    { value: "3+", label: "Years Experience", icon: Award },
    { value: "∞", label: "Clients Hired", icon: Users },
  ];
  return (
    <Section id="proof" className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-16">
          <GoldBadge>Credibility</GoldBadge>
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-foreground">
            Results That Speak
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bg-card border border-border rounded-lg p-10 text-center shadow-card hover:shadow-card-hover transition-shadow"
              data-ocid={"proof.card"}
            >
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-6"
                style={{ background: "oklch(var(--gold) / 0.1)" }}
              >
                <s.icon size={22} style={{ color: "oklch(var(--gold))" }} />
              </div>
              <p
                className="font-serif text-6xl font-bold mb-3"
                style={{ color: "oklch(var(--gold))" }}
              >
                {s.value}
              </p>
              <p className="text-muted-foreground font-medium tracking-wide text-sm uppercase">
                {s.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}

function WhatIDoSection() {
  return (
    <Section
      id="whatido"
      className="py-24"
      style={{ background: "oklch(var(--navy))" } as React.CSSProperties}
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <GoldBadge>What I Do</GoldBadge>
            <h2 className="font-serif text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
              This Is Not{" "}
              <span style={{ color: "oklch(var(--gold))" }}>
                Resume Writing.
              </span>
            </h2>
            <div
              className="w-16 h-0.5 mb-8"
              style={{ background: "oklch(var(--gold))" }}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <p className="text-white/70 text-lg leading-relaxed mb-6">
              Most professionals get basic resume rewrites and wonder why
              nothing changes. I do something fundamentally different.
            </p>
            <p className="text-white text-lg leading-relaxed mb-6">
              I position you as a{" "}
              <strong style={{ color: "oklch(var(--gold))" }}>
                premium professional
              </strong>{" "}
              — not just a job seeker. Every word, every line, every section of
              your profile is crafted to communicate your unique value and
              command attention.
            </p>
            <p className="text-white/70 text-lg leading-relaxed">
              This is{" "}
              <strong className="text-white">
                career positioning and personal branding
              </strong>{" "}
              — built on strategy, not templates.
            </p>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}

function ServicesSection() {
  const services = [
    {
      icon: FileText,
      title: "Resume Writing",
      desc: "ATS-optimized and impact-driven resumes that don't just pass software filters — they compel human reviewers to pick up the phone.",
      tags: ["ATS Optimized", "Impact-Driven", "Tailored"],
    },
    {
      icon: BookOpen,
      title: "Cover Letter Strategy",
      desc: "Role-specific, persuasive cover letters that tell a compelling narrative — making you the obvious choice before the interview.",
      tags: ["Role-Specific", "Persuasive", "Strategic"],
    },
    {
      icon: Linkedin,
      title: "LinkedIn Transformation",
      desc: "Complete profile overhaul for maximum visibility, recruiter engagement, and personal brand authority in your industry.",
      tags: ["Visibility", "Branding", "Authority"],
    },
  ];
  return (
    <Section id="services" className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-16">
          <GoldBadge>Services</GoldBadge>
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-foreground">
            What You Get
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bg-card border border-border rounded-lg p-8 shadow-card hover:shadow-card-hover transition-all hover:-translate-y-1 duration-200"
              data-ocid={"services.card"}
            >
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center mb-6"
                style={{ background: "oklch(var(--navy))" }}
              >
                <s.icon size={22} style={{ color: "oklch(var(--gold))" }} />
              </div>
              <h3 className="font-serif text-xl font-bold text-foreground mb-3">
                {s.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                {s.desc}
              </p>
              <div className="flex flex-wrap gap-2">
                {s.tags.map((t) => (
                  <span
                    key={t}
                    className="text-[10px] font-bold tracking-widest uppercase px-2 py-1 rounded-sm"
                    style={{
                      color: "oklch(var(--gold))",
                      border: "1px solid oklch(var(--gold) / 0.3)",
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}

function EliteSection() {
  const points = [
    {
      icon: Search,
      title: "Deep Profile Audit",
      desc: "Every element examined — gaps identified, strengths amplified.",
    },
    {
      icon: Zap,
      title: "Strategic Positioning",
      desc: "Defined narrative, unique value proposition, market-aligned.",
    },
    {
      icon: FileText,
      title: "Resume + Cover Letter",
      desc: "Crafted to convert — every word earns its place.",
    },
    {
      icon: Linkedin,
      title: "LinkedIn Transformation",
      desc: "Complete profile built for recruiter visibility and brand authority.",
    },
    {
      icon: Phone,
      title: "1:1 Career Strategy Call",
      desc: "Dedicated session to align your goals and plan your move.",
    },
    {
      icon: TrendingUp,
      title: "Job Search Guidance",
      desc: "Targeted application strategy to maximize your interview rate.",
    },
  ];
  return (
    <Section
      id="elite"
      className="py-24"
      style={{ background: "oklch(var(--navy))" } as React.CSSProperties}
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-16">
          <GoldBadge>Premium Service</GoldBadge>
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-white">
            The Elite Experience
          </h2>
          <p className="text-white/50 mt-4 max-w-xl mx-auto">
            A complete career repositioning — not a document edit.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {points.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-lg p-6 border"
              style={{
                background: "oklch(var(--navy-light) / 0.5)",
                borderColor: "oklch(var(--gold) / 0.2)",
              }}
              data-ocid="elite.card"
            >
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center mb-4"
                style={{ background: "oklch(var(--gold) / 0.12)" }}
              >
                <p.icon size={18} style={{ color: "oklch(var(--gold))" }} />
              </div>
              <h3 className="font-semibold text-white mb-2">{p.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}

// ── 7. Before vs After — POLISHED: distinct color-coded header bars, stronger contrast
function BeforeAfterSection() {
  const before = [
    "Generic resume — no clear positioning or narrative",
    "LinkedIn profile with zero visibility or recruiter activity",
    "Sending applications everywhere, hearing nothing back",
    "No clarity on personal value or competitive edge",
    "Mounting frustration and missed opportunities",
  ];
  const after = [
    "Strategically positioned resume that commands attention",
    "LinkedIn profile generating inbound recruiter messages",
    "Targeted applications with 3× higher response rates",
    "Clear, compelling personal brand narrative",
    "Multiple interview calls and competitive offers",
  ];
  return (
    <Section id="transformation" className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-16">
          <GoldBadge>Transformation</GoldBadge>
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-foreground">
            Before vs. After
          </h2>
          <p className="text-muted-foreground mt-4 max-w-lg mx-auto text-sm">
            The difference is not effort — it is strategy.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {/* Before */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-lg overflow-hidden shadow-card border border-border"
            data-ocid="transformation.card"
          >
            <div
              className="px-8 py-4 flex items-center gap-3"
              style={{ background: "oklch(0.94 0.008 25)" }}
            >
              <XCircle size={18} style={{ color: "oklch(0.52 0.14 25)" }} />
              <span
                className="font-serif font-bold text-base tracking-wide"
                style={{ color: "oklch(0.38 0.1 25)" }}
              >
                BEFORE
              </span>
              <span
                className="ml-auto text-[10px] font-bold tracking-widest uppercase"
                style={{ color: "oklch(0.52 0.14 25 / 0.7)" }}
              >
                Invisible Profile
              </span>
            </div>
            <div className="bg-card px-8 py-7">
              <ul className="space-y-4">
                {before.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div
                      className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0"
                      style={{ background: "oklch(0.65 0.08 25)" }}
                    />
                    <span className="text-muted-foreground text-sm leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* After */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="rounded-lg overflow-hidden"
            style={{
              border: "1px solid oklch(var(--gold) / 0.4)",
              boxShadow: "0 8px 32px oklch(var(--gold) / 0.08)",
            }}
            data-ocid="transformation.card"
          >
            <div
              className="px-8 py-4 flex items-center gap-3"
              style={{ background: "oklch(var(--gold))" }}
            >
              <CheckCircle size={18} style={{ color: "oklch(var(--navy))" }} />
              <span
                className="font-serif font-bold text-base tracking-wide"
                style={{ color: "oklch(var(--navy))" }}
              >
                AFTER
              </span>
              <span
                className="ml-auto text-[10px] font-bold tracking-widest uppercase"
                style={{ color: "oklch(var(--navy) / 0.6)" }}
              >
                Positioned to Win
              </span>
            </div>
            <div
              className="px-8 py-7"
              style={{ background: "oklch(var(--navy))" }}
            >
              <ul className="space-y-4">
                {after.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle
                      size={15}
                      className="mt-0.5 shrink-0"
                      style={{ color: "oklch(var(--gold))" }}
                    />
                    <span className="text-white text-sm font-medium leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}

function ResultsSection() {
  const outcomes = [
    {
      icon: TrendingUp,
      title: "Increased Interview Calls",
      desc: "Clients report a dramatic increase in recruiter outreach and interview invitations within weeks of the transformation.",
    },
    {
      icon: Briefcase,
      title: "Better Opportunities",
      desc: "From stagnant applications to conversations with top-tier companies — the right positioning opens the right doors.",
    },
    {
      icon: Star,
      title: "Strong Personal Brand",
      desc: "A compelling online presence that works for you 24/7 — attracting opportunities even when you're not actively searching.",
    },
  ];
  return (
    <Section id="results" className="py-24 bg-muted">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-16">
          <GoldBadge>Outcomes</GoldBadge>
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-foreground">
            Real Results
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {outcomes.map((o, i) => (
            <motion.div
              key={o.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bg-card border border-border rounded-lg p-8 shadow-card"
              data-ocid={"results.card"}
            >
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center mb-5"
                style={{ background: "oklch(var(--navy) / 0.06)" }}
              >
                <o.icon size={22} style={{ color: "oklch(var(--navy))" }} />
              </div>
              <h3 className="font-serif text-lg font-bold text-foreground mb-3">
                {o.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {o.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}

function ProcessSection() {
  const steps = [
    {
      num: "01",
      title: "Understanding Your Profile",
      desc: "Deep dive into your background, goals, and target role.",
    },
    {
      num: "02",
      title: "Identifying Gaps",
      desc: "Pinpoint exactly what's missing or misaligned in your current positioning.",
    },
    {
      num: "03",
      title: "Creating Strategy",
      desc: "Build a tailored narrative and brand positioning framework.",
    },
    {
      num: "04",
      title: "Draft + Revisions",
      desc: "Craft all deliverables with collaborative feedback rounds.",
    },
    {
      num: "05",
      title: "Final Delivery",
      desc: "Polished, ready-to-use documents and profile — launch ready.",
    },
  ];
  return (
    <Section id="process" className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-16">
          <GoldBadge>How It Works</GoldBadge>
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-foreground">
            The Process
          </h2>
        </div>
        <div className="hidden lg:flex items-start gap-0">
          {steps.map((s, i) => (
            <div
              key={s.num}
              className="flex-1 flex flex-col items-center text-center relative"
            >
              {i < steps.length - 1 && (
                <div
                  className="absolute top-8 left-1/2 w-full h-0.5 -z-0"
                  style={{ background: "oklch(var(--gold) / 0.25)" }}
                />
              )}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative z-10"
              >
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center font-serif text-lg font-bold mb-4"
                  style={{
                    background: "oklch(var(--navy))",
                    color: "oklch(var(--gold))",
                    border: "2px solid oklch(var(--gold) / 0.4)",
                  }}
                >
                  {s.num}
                </div>
                <h3 className="font-semibold text-foreground text-sm mb-2 px-2">
                  {s.title}
                </h3>
                <p className="text-muted-foreground text-xs leading-relaxed px-4">
                  {s.desc}
                </p>
              </motion.div>
            </div>
          ))}
        </div>
        <div className="lg:hidden space-y-6">
          {steps.map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex gap-5"
              data-ocid={`process.item.${i + 1}`}
            >
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center font-serif font-bold shrink-0"
                style={{
                  background: "oklch(var(--navy))",
                  color: "oklch(var(--gold))",
                  border: "2px solid oklch(var(--gold) / 0.4)",
                }}
              >
                {s.num}
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">
                  {s.title}
                </h3>
                <p className="text-muted-foreground text-sm">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}

function IdealClientsSection() {
  const qualifiers = [
    {
      icon: TrendingUp,
      label: "Serious about career growth",
      desc: "You're not playing around — you want real, measurable results.",
    },
    {
      icon: BarChart2,
      label: "Not getting interview calls",
      desc: "You've been applying, but the silence is becoming loud.",
    },
    {
      icon: Shield,
      label: "Ready to invest in results",
      desc: "You understand that quality positioning has a price — and a return.",
    },
  ];
  return (
    <Section
      id="clients"
      className="py-24"
      style={{ background: "oklch(var(--navy))" } as React.CSSProperties}
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-16">
          <GoldBadge>Who This Is For</GoldBadge>
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-white">
            Ideal Clients
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8 mb-14">
          {qualifiers.map((q, i) => (
            <motion.div
              key={q.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="rounded-lg p-7 border"
              style={{
                background: "oklch(var(--navy-light) / 0.5)",
                borderColor: "oklch(var(--gold) / 0.2)",
              }}
              data-ocid="clients.card"
            >
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center mb-4"
                style={{ background: "oklch(var(--gold) / 0.12)" }}
              >
                <q.icon size={18} style={{ color: "oklch(var(--gold))" }} />
              </div>
              <h3 className="font-semibold text-white mb-2">{q.label}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{q.desc}</p>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div
            className="inline-block px-8 py-5 rounded-lg border max-w-2xl"
            style={{
              borderColor: "oklch(var(--gold) / 0.3)",
              background: "oklch(var(--gold) / 0.05)",
            }}
          >
            <p
              className="font-serif text-lg font-semibold italic"
              style={{ color: "oklch(var(--gold))" }}
            >
              "This is not for people looking for cheap or basic resumes."
            </p>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}

// ── 11. Packages — POLISHED: Elite card gets gold top bar + scale lift + larger price + hover states
function PackagesSection() {
  const packages = [
    {
      name: "Resume",
      price: "₹3,500",
      sub: "Essential positioning",
      features: [
        "ATS-optimized resume",
        "Impact-driven content",
        "Tailored to target role",
        "1 revision round",
      ],
      highlight: false,
    },
    {
      name: "Resume + Cover Letter",
      price: "₹5,000",
      sub: "Story-led application",
      features: [
        "Everything in Resume",
        "Role-specific cover letter",
        "Persuasive narrative",
        "2 revision rounds",
      ],
      highlight: false,
    },
    {
      name: "Full Branding",
      price: "₹8,000",
      sub: "Complete digital presence",
      features: [
        "Resume + Cover Letter",
        "LinkedIn profile overhaul",
        "Brand narrative",
        "3 revision rounds",
      ],
      highlight: false,
    },
    {
      name: "Elite Career Transformation",
      price: "₹12,000+",
      sub: "The full experience",
      features: [
        "Complete Elite Experience",
        "1:1 career strategy call",
        "Job search guidance",
        "Priority delivery",
        "Unlimited revisions",
      ],
      highlight: true,
    },
  ];
  return (
    <Section id="packages" className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-16">
          <GoldBadge>Investment</GoldBadge>
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-foreground">
            Packages &amp; Pricing
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 items-end">
          {packages.map((pkg, i) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`flex flex-col rounded-lg overflow-hidden ${pkg.highlight ? "lg:-translate-y-5 lg:shadow-2xl" : "shadow-card"}`}
              style={
                pkg.highlight
                  ? {
                      background: "oklch(var(--navy))",
                      border: "1.5px solid oklch(var(--gold) / 0.5)",
                    }
                  : {
                      background: "oklch(var(--card))",
                      border: "1px solid oklch(var(--border))",
                    }
              }
              data-ocid={"packages.card"}
            >
              {/* Solid gold top bar — Elite only */}
              {pkg.highlight && (
                <div
                  className="h-1 w-full"
                  style={{ background: "oklch(var(--gold))" }}
                />
              )}

              <div className="p-7 flex flex-col flex-1">
                {pkg.highlight && (
                  <span
                    className="self-start text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-sm mb-4"
                    style={{
                      background: "oklch(var(--gold))",
                      color: "oklch(var(--navy))",
                    }}
                  >
                    MOST POPULAR
                  </span>
                )}
                <h3
                  className={`font-serif font-bold mb-1 ${pkg.highlight ? "text-white text-xl" : "text-foreground text-lg"}`}
                >
                  {pkg.name}
                </h3>
                <p
                  className={`text-xs mb-5 ${pkg.highlight ? "text-white/45" : "text-muted-foreground"}`}
                >
                  {pkg.sub}
                </p>
                <p
                  className={`font-serif font-bold mb-6 leading-none ${pkg.highlight ? "text-5xl" : "text-3xl"}`}
                  style={{ color: "oklch(var(--gold))" }}
                >
                  {pkg.price}
                </p>
                <ul className="space-y-2.5 mb-8 flex-1">
                  {pkg.features.map((f) => (
                    <li
                      key={f}
                      className={`flex items-start gap-2.5 text-sm ${pkg.highlight ? "text-white/80" : "text-muted-foreground"}`}
                    >
                      <CheckCircle
                        size={13}
                        className="mt-0.5 shrink-0"
                        style={{ color: "oklch(var(--gold))" }}
                      />
                      {f}
                    </li>
                  ))}
                </ul>
                <button
                  type="button"
                  onClick={() => scrollTo("contact")}
                  className="w-full py-3 text-[11px] font-bold tracking-[0.15em] uppercase transition-all duration-200 hover:opacity-90"
                  style={
                    pkg.highlight
                      ? {
                          background: "oklch(var(--gold))",
                          color: "oklch(var(--navy))",
                        }
                      : {
                          border: "1.5px solid oklch(var(--navy) / 0.3)",
                          color: "oklch(var(--navy))",
                          background: "transparent",
                        }
                  }
                  onMouseEnter={(e) => {
                    if (!pkg.highlight) {
                      const btn = e.currentTarget as HTMLButtonElement;
                      btn.style.background = "oklch(var(--navy))";
                      btn.style.color = "white";
                      btn.style.borderColor = "oklch(var(--navy))";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!pkg.highlight) {
                      const btn = e.currentTarget as HTMLButtonElement;
                      btn.style.background = "transparent";
                      btn.style.color = "oklch(var(--navy))";
                      btn.style.borderColor = "oklch(var(--navy) / 0.3)";
                    }
                  }}
                  data-ocid="packages.primary_button"
                >
                  Get Started
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}

function ClosingSection() {
  return (
    <Section
      id="contact"
      className="py-28 text-center"
      style={{ background: "oklch(var(--navy))" } as React.CSSProperties}
    >
      <div className="max-w-4xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <GoldBadge>Take Action</GoldBadge>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-8">
            If you're serious about your career,
            <br />
            <span style={{ color: "oklch(var(--gold))" }}>
              stop guessing — start positioning.
            </span>
          </h2>
          <div
            className="w-16 h-0.5 mx-auto mb-10"
            style={{ background: "oklch(var(--gold))" }}
          />
          <div
            className="inline-flex items-center gap-3 rounded-lg px-6 py-4 mb-10 border"
            style={{
              background: "oklch(var(--gold) / 0.07)",
              borderColor: "oklch(var(--gold) / 0.3)",
            }}
          >
            <Mail size={20} style={{ color: "oklch(var(--gold))" }} />
            <p className="text-white text-lg">
              DM{" "}
              <span
                className="font-bold font-serif text-xl"
                style={{ color: "oklch(var(--gold))" }}
              >
                "PROFILE"
              </span>{" "}
              to get started
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:pooja@example.com"
              className="inline-flex items-center gap-2 px-10 py-4 text-sm font-bold tracking-widest uppercase transition-all duration-200 hover:opacity-90"
              style={{
                background: "oklch(var(--gold))",
                color: "oklch(var(--navy))",
              }}
              data-ocid="contact.primary_button"
            >
              <Mail size={16} />
              Book Consultation
            </a>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}

function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";
  const utmUrl = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`;
  return (
    <footer
      className="py-10 border-t"
      style={{
        background: "oklch(var(--navy))",
        borderColor: "oklch(var(--gold) / 0.15)",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <p
            className="font-serif font-bold text-lg tracking-widest"
            style={{ color: "oklch(var(--gold))" }}
          >
            POOJA PATIL
          </p>
          <p className="text-white/40 text-xs mt-1">
            Resume Strategist · LinkedIn Branding Expert
          </p>
        </div>
        <div className="text-center text-white/40 text-xs">
          <p>© {year} Pooja Patil. All rights reserved.</p>
          <p className="mt-1">
            Built with ❤️ using{" "}
            <a
              href={utmUrl}
              target="_blank"
              rel="noreferrer"
              className="hover:text-white/70 transition-colors"
            >
              caffeine.ai
            </a>
          </p>
        </div>
        <button
          type="button"
          onClick={() => scrollTo("hero")}
          className="text-white/40 hover:text-white/70 text-xs transition-colors"
        >
          Back to Top
        </button>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen">
      <NavBar />
      <main>
        <HeroSection />
        <HookSection />
        <ProofSection />
        <WhatIDoSection />
        <ServicesSection />
        <EliteSection />
        <BeforeAfterSection />
        <ResultsSection />
        <ProcessSection />
        <IdealClientsSection />
        <PackagesSection />
        <ClosingSection />
      </main>
      <Footer />
    </div>
  );
}
