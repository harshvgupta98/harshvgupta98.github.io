import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useRef, useState } from "react";
import type { ReactNode } from "react";
import { User, Code2, Briefcase, GraduationCap } from "lucide-react";
import nciLogo from "@/assets/nci-logo.png.asset.json";
import sppuLogo from "@/assets/sppu-logo.jpg.asset.json";
import tableauLogo from "@/assets/tableau.png.asset.json";
import excelLogo from "@/assets/excel.png.asset.json";
import powerbiLogo from "@/assets/powerbi.png.asset.json";
import lenehansLogo from "@/assets/lenehans.jpg.asset.json";
import elloraLogo from "@/assets/ellora.jpg.asset.json";
import santoshLogo from "@/assets/santosh.png.asset.json";
import portraitAsset from "@/assets/harsh-portrait.jpg.asset.json";

const portrait = portraitAsset.url;

export const Route = createFileRoute("/")({
  component: Index,
});

/* ------------------------------ REVEAL ------------------------------ */

function Reveal({
  children,
  as: Tag = "div",
  className = "",
  direction = "up",
  delay = 0,
  style,
}: {
  children: ReactNode;
  as?: "div" | "section" | "li" | "article";
  className?: string;
  direction?: "up" | "left" | "right";
  delay?: number;
  style?: React.CSSProperties;
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShown(true);
            io.disconnect();
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const dirClass =
    direction === "left" ? "reveal-left" : direction === "right" ? "reveal-right" : "";

  return (
    <Tag
      ref={ref as never}
      className={`reveal ${dirClass} ${shown ? "reveal-in" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms`, ...style }}
    >
      {children}
    </Tag>
  );
}


/* ------------------------------ DATA ------------------------------ */

// Skill logos: `asset` (local CDN) → `slug` (simpleicons) → `fallback` text/emoji.
const SKILLS: { name: string; asset?: string; slug?: string; fallback?: string }[] = [
  { name: "Power BI", asset: powerbiLogo.url },
  { name: "DAX", fallback: "λ" },
  { name: "Power Query", fallback: "⚡" },
  { name: "SQL", fallback: "SQL" },
  { name: "MySQL", slug: "mysql" },
  { name: "PostgreSQL", slug: "postgresql" },
  { name: "Python", slug: "python" },
  { name: "Pandas", slug: "pandas" },
  { name: "NumPy", slug: "numpy" },
  { name: "Scikit-learn", slug: "scikitlearn" },
  { name: "Matplotlib", fallback: "📈" },
  { name: "Seaborn", fallback: "🌊" },
  { name: "Tableau", asset: tableauLogo.url },
  { name: "Excel", asset: excelLogo.url },
  { name: "VBA", fallback: "⚙️" },
  { name: "Linnworks", fallback: "📦" },
  { name: "Jupyter", slug: "jupyter" },
  { name: "Git", slug: "git" },
  { name: "Star Schema", fallback: "✦" },
];

// Extra skill icons used only inside tag chips
const EXTRA_SKILL_ICONS: Record<string, { slug?: string; fallback?: string }> = {
  "Pivot Tables": { fallback: "▦" },
  "KPI Dashboards": { fallback: "📊" },
};

function SkillIcon({ name, className = "h-3.5 w-3.5" }: { name: string; className?: string }) {
  const s:
    | { asset?: string; slug?: string; fallback?: string }
    | undefined =
    SKILLS.find((x) => x.name.toLowerCase() === name.toLowerCase()) ||
    EXTRA_SKILL_ICONS[name];
  if (!s) return <span className="text-foreground/70">◆</span>;
  if (s.asset) {
    return <img src={s.asset} alt="" className={`${className} object-contain grayscale brightness-0`} loading="lazy" />;
  }
  if (s.slug) {
    return (
      <img
        src={`https://cdn.simpleicons.org/${s.slug}`}
        alt=""
        className={`${className} object-contain grayscale brightness-0`}
        loading="lazy"
      />
    );
  }
  return <span className="text-foreground/70 text-[11px]">{s.fallback ?? "◆"}</span>;
}

const EXPERIENCE = [
  {
    year: "2024-Present",
    role: "Reporting Analyst",
    company: "Lenehans",
    logo: lenehansLogo.url,
    location: "Dublin, Ireland",
    dates: "Aug 2024 - Present",
    tags: ["Power BI", "DAX", "SQL", "Power Query", "Linnworks"],
  },
  {
    year: "2022-2023",
    role: "Data Analyst",
    company: "Ellora Infotech",
    logo: elloraLogo.url,
    location: "India",
    dates: "Sep 2022 - Dec 2023",
    tags: ["Power BI", "DAX", "Power Query", "Python", "SQL"],
  },
  {
    year: "2020-2022",
    role: "Junior Data Analyst",
    company: "Santosh & Associates",
    logo: santoshLogo.url,
    location: "India",
    dates: "Jun 2020 - Jul 2022",
    tags: ["MySQL", "Excel", "Pivot Tables", "KPI Dashboards"],
  },
];


const PROJECTS = [
  {
    title: "Meta Ad Performance Dashboard",
    tags: ["Power BI", "DAX", "Star Schema"],
    desc: "Multi-page Power BI dashboard analysing 400K ad events across 50 campaigns and 9,841 users · impressions, CTR, engagement, and conversion via 12 DAX measures.",
    insight: "CTR 11.76% vs 0.61% purchase rate · flagged a leaking funnel and retargeting play.",
    href: "https://github.com/harshvgupta98/POWERBI_Meta_Ad_Performance_Dashboard",
  },
  {
    title: "Customer Shopping Behaviour",
    tags: ["Python", "PostgreSQL", "Power BI"],
    desc: "End-to-end pipeline · Python wrangling, SQLAlchemy load into PostgreSQL, and 10 SQL queries with CTEs and window functions on 3,900 transactions.",
    insight: "Segmented 3,116 loyal vs 83 new; ~50% discount dependency on key lines.",
    href: "https://github.com/harshvgupta98/PYTHON_SQL_POWERBI_Customer_Behavior_Dashboard",
  },
  {
    title: "HR Attrition Dashboard",
    tags: ["Power BI", "DAX", "HR Analytics"],
    desc: "Attrition dashboard across 1,480 employees · rate, salary bands, roles, and tenure by department on a star schema.",
    insight: "68% attrition sits in the under-€5K band; Year 1 spike of 59 employees.",
    href: "https://github.com/harshvgupta98/POWERBI_HR_Analytics_Dashboard",
  },
  {
    title: "Online Bookstore SQL",
    tags: ["SQL", "EDA", "Relational DB"],
    desc: "Exploratory SQL on a bookstore dataset · sales, customer behaviour, inventory and revenue across Books, Customers and Orders.",
    insight: "JOINs, GROUP BY, HAVING, LEFT JOIN, COALESCE, window functions, subqueries.",
    href: "https://github.com/harshvgupta98/SQL_Project_Online_Bookstore",
  },
  {
    title: "World Life Expectancy SQL",
    tags: ["SQL", "Cleaning", "EDA"],
    desc: "SQL cleaning and EDA on life expectancy across 193 countries (2007–2022) · trends and outlier regions.",
    insight: "193 countries · 15 years · full cleaning pipeline.",
    href: "https://github.com/harshvgupta98/SQL_Project_World_Life_Expectancy",
  },
  {
    title: "Sales Performance Dashboard",
    tags: ["Excel", "VBA", "Dashboard"],
    desc: "End-to-end Excel dashboard analysing 141 executives across 8 regions · advanced formulas, pivots, dynamic charts, slicers, VBA macros.",
    insight: "VBA automation · 4 pivots · dynamic charts · single-screen layout.",
    href: "https://github.com/harshvgupta98/EXCEL_Sales_Performance_Dashboard",
  },
];

const EDUCATION = [
  {
    year: "2024–2025",
    degree: "MSc in Data Analytics",
    school: "National College of Ireland, Dublin",
    logo: nciLogo.url,
    detail:
      "NFQ Level 9. Dissertation: Predicting E-commerce Sales Using Deep Learning · LSTM, GRU and a novel Hybrid on 100,000+ records; Hybrid R² of 0.91.",
  },
  {
    year: "2015–2019",
    degree: "B.E., Computer Science",
    school: "Savitribai Phule Pune University, India",
    logo: sppuLogo.url,
    detail: "Foundation in data structures, algorithms, DBMS, OOP and data analytics.",
  },
];

const CERTIFICATIONS = [
  {
    title: "Microsoft Power BI Desktop for Business Intelligence",
    issuer: "Analyst Builder",
    date: "May 2026",
    icon: "📊",
  },
  {
    title: "MySQL for Data Analytics",
    issuer: "Analyst Builder",
    date: "Apr 2026",
    icon: "🗄️",
  },
  {
    title: "Microsoft Power BI Data Analyst (PL-300)",
    issuer: "Microsoft",
    date: "In progress",
    icon: "🎯",
  },
];

/* ------------------------------ TERMINAL ------------------------------ */

type Lang = "python" | "sql";

const SCRIPTS: Record<Lang, string[]> = {
  python: [
    'print("Hello, World! 👋 I\'m Harsh Gupta")',
    'print("Role: Data & BI Analyst · Dublin, IE")',
    'stack = ["Power BI", "DAX", "SQL", "Python"]',
    'summary = "3+ yrs turning fragmented data into dashboards"',
    'status = "Open to Data / BI / --roles"',
  ],
  sql: [
    "SELECT name, role, location",
    "FROM portfolio",
    "WHERE name = 'Harsh Gupta';",
    "-- Role: Data & BI Analyst · Dublin, IE",
    "-- Stack: Power BI, DAX, SQL, Python",
    "-- Open to Data / BI / Reporting roles",
  ],
};

function Terminal() {
  const [lang, setLang] = useState<Lang>("python");
  const lines = SCRIPTS[lang];
  const [typed, setTyped] = useState<string[]>([]);
  const [lineIdx, setLineIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);

  // reset when lang changes
  useEffect(() => {
    setTyped([]);
    setLineIdx(0);
    setCharIdx(0);
  }, [lang]);

  useEffect(() => {
    if (lineIdx >= lines.length) return;
    const target = lines[lineIdx];
    if (charIdx <= target.length) {
      const t = setTimeout(() => {
        setTyped((prev) => {
          const next = [...prev];
          next[lineIdx] = target.slice(0, charIdx);
          return next;
        });
        setCharIdx((c) => c + 1);
      }, 22);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => {
      setLineIdx((i) => i + 1);
      setCharIdx(0);
    }, 380);
    return () => clearTimeout(t);
  }, [charIdx, lineIdx, lines]);

  const prefix = lang === "python" ? ">>>" : "sql>";
  const cmd = lang === "python" ? "python" : "psql";

  return (
    <div className="w-full max-w-2xl mx-auto rounded-xl border border-border bg-card shadow-lg overflow-hidden">
      {/* Tabs */}
      <div className="flex items-center gap-1 px-3 pt-3 pb-0 bg-card">
        {(["python", "sql"] as Lang[]).map((l) => (
          <button
            key={l}
            onClick={() => setLang(l)}
            className={`text-xs font-mono px-3 py-1.5 rounded-md transition ${
              lang === l
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {l === "python" ? "Python" : "SQL"}
          </button>
        ))}
      </div>
      <div className="mx-3 mt-2 rounded-lg bg-secondary/50 border border-border font-mono text-[13px] leading-relaxed p-4 min-h-[220px] mb-3">
        <div className="flex items-center gap-2 text-muted-foreground pb-2">
          <span>✉</span>
          <span>harsh@portfolio:~$</span>
          <span className="text-accent">{cmd}</span>
        </div>
        {typed.map((line, i) => (
          <div key={i} className="text-foreground/90">
            <span className="text-accent">{prefix}</span>{" "}
            <span className="whitespace-pre-wrap break-words">{line}</span>
            {i === lineIdx && <span className="cursor-blink text-primary">▊</span>}
          </div>
        ))}
        {lineIdx >= lines.length && (
          <div className="text-muted-foreground pt-1">
            <span className="text-accent">{prefix}</span>{" "}
            <span className="cursor-blink text-primary">▊</span>
          </div>
        )}
      </div>
    </div>
  );
}

/* ------------------------------ SIDE RAILS ------------------------------ */

function LeftRail() {
  return (
    <div className="hidden md:flex fixed left-6 bottom-0 flex-col items-center gap-5 z-40">
      <a
        href="https://github.com/harshvgupta98"
        target="_blank"
        rel="noreferrer"
        className="text-muted-foreground hover:text-accent hover:-translate-y-0.5 transition"
        aria-label="GitHub"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55v-2.15c-3.2.7-3.87-1.36-3.87-1.36-.53-1.35-1.29-1.71-1.29-1.71-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.71 1.26 3.37.96.1-.75.4-1.26.72-1.55-2.55-.29-5.23-1.28-5.23-5.68 0-1.25.45-2.28 1.19-3.08-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.21-1.49 3.18-1.18 3.18-1.18.63 1.59.23 2.76.11 3.05.74.8 1.19 1.83 1.19 3.08 0 4.41-2.69 5.39-5.25 5.67.41.35.78 1.05.78 2.12v3.14c0 .3.21.67.8.55A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z"/></svg>
      </a>
      <a
        href="https://linkedin.com/in/1harsh-gupta"
        target="_blank"
        rel="noreferrer"
        className="text-muted-foreground hover:text-accent hover:-translate-y-0.5 transition"
        aria-label="LinkedIn"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.95v5.66H9.36V9h3.4v1.56h.05a3.73 3.73 0 0 1 3.36-1.85c3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45ZM22.23 0H1.77C.79 0 0 .78 0 1.73v20.53C0 23.22.79 24 1.77 24h20.46c.98 0 1.77-.78 1.77-1.74V1.73C24 .78 23.21 0 22.23 0Z"/></svg>
      </a>
      <a
        href="mailto:harshvgupta1998@gmail.com"
        className="text-muted-foreground hover:text-accent hover:-translate-y-0.5 transition"
        aria-label="Email"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>
      </a>
      <div className="w-px h-24 bg-border" />
    </div>
  );
}

function RightRail() {
  return (
    <div className="hidden md:flex fixed right-6 bottom-0 flex-col items-center gap-5 z-40">
      <a
        href="mailto:harshvgupta1998@gmail.com"
        className="font-mono text-xs tracking-widest text-muted-foreground hover:text-accent transition"
        style={{ writingMode: "vertical-rl" }}
      >
        harshvgupta1998@gmail.com
      </a>
      <div className="w-px h-24 bg-border" />
    </div>
  );
}

/* ------------------------------ PAGE ------------------------------ */

function Index() {
  const skillsDoubled = useMemo(() => [...SKILLS, ...SKILLS], []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <LeftRail />
      <RightRail />

      {/* Nav */}
      <header className="sticky top-0 z-30 backdrop-blur bg-background/70 border-b border-border">
        <nav className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
          <a href="#top" className="font-mono text-base md:text-lg font-semibold">
            <span>harsh</span>
            <span className="text-accent">.py</span>
          </a>
          <div className="flex items-center gap-4 md:gap-8 text-sm font-mono">
            <a href="#about" className="flex items-center gap-1.5 hover:text-accent transition"><User className="h-4 w-4" /> About</a>
            <a href="#projects" className="hidden sm:flex items-center gap-1.5 hover:text-accent transition"><Code2 className="h-4 w-4" /> Projects</a>
            <a href="#experience" className="hidden sm:flex items-center gap-1.5 hover:text-accent transition"><Briefcase className="h-4 w-4" /> Work</a>
            <a href="#education" className="hidden sm:flex items-center gap-1.5 hover:text-accent transition"><GraduationCap className="h-4 w-4" /> Education</a>
            <a href="#certifications" className="hidden md:flex items-center gap-1.5 hover:text-accent transition"><Code2 className="h-4 w-4" /> Certifications</a>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section id="top" className="mx-auto max-w-4xl px-6 pt-16 md:pt-24 pb-16 text-center animate-fade-in">
        <div className="font-mono text-xs text-muted-foreground tracking-widest mb-4">
          // available for work · dublin, ireland
        </div>
        <h1 className="font-mono text-5xl md:text-7xl font-bold tracking-tight">
          Harsh Gupta
        </h1>
        <p className="mt-4 font-mono text-lg md:text-xl text-muted-foreground">
          Data &amp; BI Analyst
        </p>

        <div className="mt-10">
          <Terminal />
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#about"
            className="font-mono text-sm px-5 py-2.5 rounded-md bg-primary text-primary-foreground hover:opacity-90 transition"
          >
            About Me
          </a>
          <a
            href="#contact"
            className="font-mono text-sm px-5 py-2.5 rounded-md border border-border hover:border-accent hover:text-accent transition"
          >
            Get in touch
          </a>
        </div>
      </section>

      {/* Skills grid */}
      <section id="skills" className="mx-auto max-w-5xl px-6 pb-16">
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-2">
          {SKILLS.map((s, i) => (
            <div
              key={s.name}
              className="group py-2 rounded-lg border border-border bg-card flex flex-col items-center justify-center gap-1 hover:border-accent hover:-translate-y-0.5 hover:shadow-md transition animate-fade-in"
              style={{ animationDelay: `${i * 30}ms`, animationFillMode: "both" }}
            >
              <div className="h-6 w-6 flex items-center justify-center group-hover:scale-110 transition-transform">
                {s.asset ? (
                  <img src={s.asset} alt={`${s.name} logo`} className="h-6 w-6 object-contain grayscale brightness-0" loading="lazy" />
                ) : s.slug ? (
                  <img
                    src={`https://cdn.simpleicons.org/${s.slug}`}
                    alt={`${s.name} logo`}
                    className="h-6 w-6 object-contain grayscale brightness-0"
                    loading="lazy"
                  />
                ) : (
                  <span className="font-mono text-sm text-foreground">{s.fallback}</span>
                )}
              </div>
              <div className="font-mono text-[10px] text-muted-foreground group-hover:text-foreground transition">
                {s.name}
              </div>
            </div>
          ))}
        </div>
        {/* Marquee ribbon */}
        <div className="mt-10 overflow-hidden border-y border-border py-3 bg-secondary/40">
          <div className="flex gap-3 animate-marquee whitespace-nowrap w-max font-mono text-xs">
            {skillsDoubled.map((s, i) => (
              <span key={i} className="px-3 py-1 rounded border border-border bg-card text-muted-foreground">
                {s.name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <Section id="about" label="About" title="The analyst" italic="behind the data">
        <div className="grid md:grid-cols-[1fr_auto] gap-10 items-start max-w-5xl mx-auto">
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              नमस्कार 🙏 I'm Harsh, a Data Analyst with 3+ years of experience streamlining reporting
              and inventory decisions across retail and project based environments. I work mainly in
              Power BI, SQL and Python, with a focus on DAX modelling, ETL/ELT pipelines, KPI framework
              design and AI assisted analytics.
            </p>
            <p>
              After three years working as a data analyst across project based and administrative
              environments in India, I moved to Dublin to pursue an MSc in Data Analytics at the National
              College of Ireland. That year sharpened my grip on predictive analytics, statistical
              modelling and the kind of data governance that actually holds up once it reaches a dashboard,
              and it's where I built the hybrid LSTM plus GRU model that still anchors my proudest project.
            </p>
            <p>When I'm not analysing dashboards, you might find me:</p>
            <div className="pl-4 space-y-1">
              <p>🏀 Playing competitive basketball, represented India at junior national level in 2014</p>
              <p>🏍️ Planning the next motorcycle route, already conquered Umling La, the world's highest motorable road</p>
              <p>💪 In the gym, training year round</p>
            </div>
            <p>
              Currently based in Dublin with full work authorisation, actively looking for Data Analyst,
              BI Analyst or Reporting Analyst roles across Ireland.
            </p>
          </div>
          <div className="mx-auto md:mx-0 md:mt-6">
            <div className="rotate-2 hover:rotate-0 transition-transform duration-500 rounded-md border border-border bg-card p-2 shadow-md">
              <img
                src={portrait}
                alt="Harsh Gupta portrait"
                width={768}
                height={896}
                loading="lazy"
                className="w-56 h-64 md:w-64 md:h-72 object-cover rounded-sm"
              />
              <div className="mt-2 text-center font-mono text-[10px] text-muted-foreground">// harsh.gupta</div>
            </div>
          </div>
        </div>
      </Section>

      {/* Projects */}
      <Section id="projects" label="Projects" title="What I've" italic="built">
        <div className="grid md:grid-cols-2 gap-5 max-w-5xl mx-auto">
          {PROJECTS.map((p, i) => (
            <Reveal key={p.title} direction={i % 2 === 0 ? "left" : "right"} delay={i * 60}>
              <a
                href={p.href}
                target="_blank"
                rel="noreferrer"
                className="group p-6 rounded-xl border border-border bg-card hover:border-foreground/40 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 flex flex-col text-left h-full"
              >
                <div className="flex flex-wrap gap-1.5 font-mono text-[11px] mb-3">
                  {p.tags.map((t) => (
                    <span key={t} className="px-2 py-0.5 rounded bg-secondary text-muted-foreground border border-border inline-flex items-center gap-1">
                      <SkillIcon name={t} />
                      {t}
                    </span>
                  ))}
                </div>
                <h3 className="text-lg font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                <div className="mt-4 font-mono text-xs text-foreground/70 opacity-70 group-hover:opacity-100">
                  View on GitHub →
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Experience */}
      <Section id="experience" label="Work" title="Work" italic="experience">
        <div className="max-w-2xl mx-auto relative">
          <div className="absolute left-1/2 top-6 bottom-6 w-px bg-border -translate-x-1/2 hidden md:block" />
          <div className="space-y-6">
            {EXPERIENCE.map((exp, i) => (
              <Reveal
                key={exp.role + exp.company}
                direction={i % 2 === 0 ? "left" : "right"}
                delay={i * 100}
                className="relative"
              >
                <div className="flex justify-center mb-2 relative z-10">
                  <span className="font-mono text-[10px] px-2.5 py-0.5 rounded-full bg-foreground text-background shadow-sm">
                    {exp.year}
                  </span>
                </div>
                <div className="rounded-xl border border-border bg-card p-4 hover:border-foreground/40 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 text-left">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 shrink-0 rounded-lg bg-background border border-border flex items-center justify-center overflow-hidden">
                      <img
                        src={exp.logo}
                        alt={`${exp.company} logo`}
                        className="max-h-full max-w-full object-contain p-1"
                        loading="lazy"
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="font-mono text-sm font-semibold truncate">{exp.role}</h3>
                      <div className="text-xs text-muted-foreground truncate">
                        {exp.company} · {exp.location}
                      </div>
                    </div>
                    <div className="font-mono text-[10px] text-muted-foreground/80 shrink-0 hidden sm:block">
                      {exp.dates}
                    </div>
                  </div>
                  <div className="mt-3 flex flex-wrap gap-x-3 gap-y-1.5 font-mono text-[11px] text-muted-foreground">
                    {exp.tags.map((t) => (
                      <span key={t} className="inline-flex items-center gap-1">
                        <SkillIcon name={t} />
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>



      {/* Education */}
      <Section id="education" label="Education" title="Academic" italic="background">
        <div className="max-w-2xl mx-auto relative">
          <div className="absolute left-1/2 top-6 bottom-6 w-px bg-border -translate-x-1/2 hidden md:block" />
          <div className="space-y-6">
            {EDUCATION.map((e, i) => (
              <Reveal
                key={e.degree}
                direction={i % 2 === 0 ? "left" : "right"}
                delay={i * 100}
                className="relative"
              >
                <div className="flex justify-center mb-2 relative z-10">
                  <span className="font-mono text-[10px] px-2.5 py-0.5 rounded-full bg-foreground text-background shadow-sm">
                    {e.year}
                  </span>
                </div>
                <div className="rounded-xl border border-border bg-card p-4 hover:border-foreground/40 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 text-left">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 shrink-0 rounded-lg bg-background border border-border flex items-center justify-center overflow-hidden">
                      <img
                        src={e.logo}
                        alt={`${e.school} logo`}
                        className="max-h-full max-w-full object-contain p-1"
                        loading="lazy"
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="font-mono text-sm font-semibold">{e.degree}</h3>
                      <div className="text-xs text-muted-foreground">{e.school}</div>
                    </div>
                  </div>
                  <p className="mt-2 text-xs text-muted-foreground leading-relaxed">{e.detail}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* Certifications */}
      <Section id="certifications" label="Certifications" title="Learning" italic="in progress">
        <div className="max-w-3xl mx-auto grid sm:grid-cols-2 gap-4">
          {CERTIFICATIONS.map((c, i) => (
            <Reveal key={c.title} direction={i % 2 === 0 ? "left" : "right"} delay={i * 80}>
              <div className="rounded-xl border border-border bg-card p-4 hover:border-foreground/40 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 h-full">
                <div className="flex items-start gap-3">
                  <div className="h-9 w-9 shrink-0 rounded-lg bg-background border border-border flex items-center justify-center text-base">
                    {c.icon}
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-mono text-sm font-semibold leading-snug">{c.title}</h3>
                    <div className="mt-1 text-xs text-muted-foreground">
                      {c.issuer} · <span className="font-mono">{c.date}</span>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>


      {/* Contact */}
      <Section id="contact" label="Contact" title="Let's" italic="connect">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-muted-foreground leading-relaxed">
            I'm actively seeking Data Analyst, BI Analyst, Business Analyst or Reporting Analyst roles in Dublin.
            Feel free to reach out directly.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3 font-mono text-sm">
            <a
              href="mailto:harshvgupta1998@gmail.com"
              className="px-4 py-3 rounded-md border border-border bg-card hover:border-accent hover:text-accent transition"
            >
              ✉ harshvgupta1998@gmail.com
            </a>
            <a
              href="https://linkedin.com/in/1harsh-gupta"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-3 rounded-md border border-border bg-card hover:border-accent hover:text-accent transition"
            >
              in LinkedIn
            </a>
            <a
              href="https://github.com/harshvgupta98"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-3 rounded-md border border-border bg-card hover:border-accent hover:text-accent transition"
            >
              ⌥ GitHub
            </a>
          </div>
        </div>
      </Section>

      <footer className="border-t border-border">
        <div className="mx-auto max-w-6xl px-6 py-8 flex flex-wrap items-center justify-between gap-3 font-mono text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} Harsh Gupta · Dublin, Ireland</div>
          <div>harsh.py · built with React + TanStack</div>
        </div>
      </footer>
    </div>
  );
}

function Section({
  id,
  label,
  title,
  italic,
  children,
}: {
  id: string;
  n?: string;
  label: string;
  title: string;
  italic: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="mx-auto max-w-6xl px-6 py-16 md:py-20 border-t border-border">
      <Reveal className="text-center mb-10">
        <h2 className="font-mono text-3xl md:text-4xl font-bold flex items-center justify-center gap-3 tracking-tight">
          <span className="text-foreground/70">&lt;/&gt;</span>
          <span className="capitalize">{label}</span>
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          {title} <span className="italic">{italic}</span>
        </p>
      </Reveal>
      {children}
    </section>
  );
}

