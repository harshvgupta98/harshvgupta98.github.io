import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import nciLogo from "@/assets/nci-logo.png.asset.json";
import sppuLogo from "@/assets/sppu-logo.jpg.asset.json";

export const Route = createFileRoute("/")({
  component: Index,
});

/* ------------------------------ DATA ------------------------------ */

// Skill logos via simpleicons.org (colored brand SVGs). `slug` empty → text/emoji fallback.
const SKILLS: { name: string; slug?: string; fallback?: string }[] = [
  { name: "Power BI", slug: "powerbi" },
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
  { name: "Tableau", slug: "tableau" },
  { name: "Excel", slug: "microsoftexcel" },
  { name: "VBA", fallback: "⚙️" },
  { name: "Linnworks", fallback: "📦" },
  { name: "Jupyter", slug: "jupyter" },
  { name: "Git", slug: "git" },
  { name: "GA4", slug: "googleanalytics" },
  { name: "Star Schema", fallback: "✦" },
];

const EXPERIENCE = [
  {
    year: "2024–Present",
    role: "Reporting Analyst",
    company: "Lenehans",
    location: "Dublin, Ireland",
    tags: ["Power BI", "DAX", "Linnworks", "SQL"],
    bullets: [
      "Built Power BI dashboards for buying and procurement teams across 20,000+ SKUs — cutting buying cycle time by 15%.",
      "Analysed Linnworks data to surface seasonal demand and dead stock, reducing excess stock by 8%.",
      "Designed daily stock and pricing reconciliation reports, reducing pricing errors by 5%.",
      "Leveraged AI-assisted analytics to accelerate cleaning, transformation and reporting workflows.",
    ],
  },
  {
    year: "2022–2023",
    role: "Data Analyst",
    company: "Ellora Infotech",
    location: "India",
    tags: ["Power BI", "DAX", "Power Query", "Python"],
    bullets: [
      "Delivered dashboards tracking €11M in engineering contracts, eliminating 2 days of weekly manual reporting.",
      "Engineered advanced DAX (CALCULATE, SUMX, time-intelligence) to surface cost variance 15% faster.",
      "Built Power Query ETL pipelines and Python scripts to consolidate Excel/CSV/SQL sources, cutting prep time 20%.",
      "Designed a unified KPI framework with Finance and Operations, standardising governance.",
    ],
  },
  {
    year: "2021–2022",
    role: "Junior Data Analyst",
    company: "Santosh & Associates",
    location: "India",
    tags: ["MySQL", "Excel", "Pivot Tables"],
    bullets: [
      "Profiled and validated 5,000+ records monthly across 4 government-contracted locations.",
      "Applied MySQL to cleanse and standardise data, lifting reporting accuracy by 10%.",
      "Trend analysis contributed to an 8% reduction in facility costs.",
    ],
  },
  {
    year: "2019–2021",
    role: "Admin Reporting Assistant",
    company: "Ellora EPC Pvt. Ltd.",
    location: "India",
    tags: ["ERP", "Excel", "Reporting"],
    bullets: [
      "Centralised procurement data across 3+ project sites and 30+ vendors using an ERP system.",
      "Reconciled material and vendor records weekly to maintain reporting accuracy for senior management.",
    ],
  },
];

const PROJECTS = [
  {
    title: "Meta Ad Performance Dashboard",
    tags: ["Power BI", "DAX", "Star Schema"],
    desc: "Multi-page Power BI dashboard analysing 400K ad events across 50 campaigns and 9,841 users — impressions, CTR, engagement, and conversion via 12 DAX measures.",
    insight: "CTR 11.76% vs 0.61% purchase rate — flagged a leaking funnel and retargeting play.",
    href: "https://github.com/harshvgupta98/POWERBI_Meta_Ad_Performance_Dashboard",
  },
  {
    title: "Customer Shopping Behaviour",
    tags: ["Python", "PostgreSQL", "Power BI"],
    desc: "End-to-end pipeline — Python wrangling, SQLAlchemy load into PostgreSQL, and 10 SQL queries with CTEs and window functions on 3,900 transactions.",
    insight: "Segmented 3,116 loyal vs 83 new; ~50% discount dependency on key lines.",
    href: "https://github.com/harshvgupta98/PYTHON_SQL_POWERBI_Customer_Behavior_Dashboard",
  },
  {
    title: "HR Attrition Dashboard",
    tags: ["Power BI", "DAX", "HR Analytics"],
    desc: "Attrition dashboard across 1,480 employees — rate, salary bands, roles, and tenure by department on a star schema.",
    insight: "68% attrition sits in the under-€5K band; Year 1 spike of 59 employees.",
    href: "https://github.com/harshvgupta98/POWERBI_HR_Analytics_Dashboard",
  },
  {
    title: "Online Bookstore SQL",
    tags: ["SQL", "EDA", "Relational DB"],
    desc: "Exploratory SQL on a bookstore dataset — sales, customer behaviour, inventory and revenue across Books, Customers and Orders.",
    insight: "JOINs, GROUP BY, HAVING, LEFT JOIN, COALESCE, window functions, subqueries.",
    href: "https://github.com/harshvgupta98/SQL_Project_Online_Bookstore",
  },
  {
    title: "World Life Expectancy SQL",
    tags: ["SQL", "Cleaning", "EDA"],
    desc: "SQL cleaning and EDA on life expectancy across 193 countries (2007–2022) — trends and outlier regions.",
    insight: "193 countries · 15 years · full cleaning pipeline.",
    href: "https://github.com/harshvgupta98/SQL_Project_World_Life_Expectancy",
  },
  {
    title: "Sales Performance Dashboard",
    tags: ["Excel", "VBA", "Dashboard"],
    desc: "End-to-end Excel dashboard analysing 141 executives across 8 regions — advanced formulas, pivots, dynamic charts, slicers, VBA macros.",
    insight: "VBA automation · 4 pivots · dynamic charts — single-screen layout.",
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
      "NFQ Level 9. Dissertation: Predicting E-commerce Sales Using Deep Learning — LSTM, GRU and a novel Hybrid on 100,000+ records; Hybrid R² of 0.91.",
  },
  {
    year: "2015–2019",
    degree: "B.E., Computer Science",
    school: "Savitribai Phule Pune University, India",
    logo: sppuLogo.url,
    detail: "Foundation in data structures, algorithms, DBMS, OOP and data analytics.",
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
            <a href="#about" className="hover:text-accent transition">◆ About</a>
            <a href="#projects" className="hidden sm:inline hover:text-accent transition">✦ Projects</a>
            <a href="#experience" className="hidden sm:inline hover:text-accent transition">▣ Work</a>
            <a href="#education" className="hidden sm:inline hover:text-accent transition">▲ Education</a>
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
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {SKILLS.map((s, i) => (
            <div
              key={s.name}
              className="group aspect-[3/2] rounded-lg border border-border bg-card flex flex-col items-center justify-center gap-2 hover:border-accent hover:-translate-y-0.5 hover:shadow-md transition animate-fade-in"
              style={{ animationDelay: `${i * 30}ms`, animationFillMode: "both" }}
            >
              <div className="h-8 w-8 flex items-center justify-center group-hover:scale-110 transition-transform">
                {s.slug ? (
                  <img
                    src={`https://cdn.simpleicons.org/${s.slug}`}
                    alt={`${s.name} logo`}
                    className="h-8 w-8 object-contain"
                    loading="lazy"
                  />
                ) : (
                  <span className="font-mono text-lg text-accent">{s.fallback}</span>
                )}
              </div>
              <div className="font-mono text-xs text-muted-foreground group-hover:text-foreground transition">
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
      <Section id="about" n="01" label="about" title="The analyst" italic="behind the data">
        <div className="max-w-3xl mx-auto text-center space-y-4 text-muted-foreground leading-relaxed">
          <p>
            नमस्कार 🙏 I'm Harsh — a Data & BI Analyst who turns fragmented, inconsistent data into
            dashboards, KPI frameworks and analytical pipelines that help commercial and operational
            teams make faster decisions.
          </p>
          <p>
            3+ years specialised in <span className="text-foreground">Power BI (DAX, Power Query, Star Schema)</span>,{" "}
            <span className="text-foreground">SQL</span> and <span className="text-foreground">Python</span>. I've built
            dashboards tracking <span className="text-accent font-medium">€11M in contracts</span>, eliminated{" "}
            <span className="text-accent font-medium">2 days of weekly manual reporting</span>, and reduced pricing errors by{" "}
            <span className="text-accent font-medium">5%</span> through data validation at scale.
          </p>
          <p>
            MSc in Data Analytics, National College of Ireland. Dublin-based with full work authorisation —
            actively seeking Data Analyst, BI Analyst, Business Analyst or Reporting Analyst roles across Ireland.
          </p>
        </div>
      </Section>

      {/* Projects */}
      <Section id="projects" n="02" label="projects" title="What I've" italic="built">
        <div className="grid md:grid-cols-2 gap-5 max-w-5xl mx-auto">
          {PROJECTS.map((p, i) => (
            <a
              key={p.title}
              href={p.href}
              target="_blank"
              rel="noreferrer"
              className="group p-6 rounded-xl border border-border bg-card hover:border-accent hover:-translate-y-0.5 hover:shadow-md transition flex flex-col animate-fade-in text-left"
              style={{ animationDelay: `${i * 60}ms`, animationFillMode: "both" }}
            >
              <div className="flex flex-wrap gap-1.5 font-mono text-[11px] mb-3">
                {p.tags.map((t) => (
                  <span key={t} className="px-2 py-0.5 rounded bg-secondary text-muted-foreground border border-border">
                    {t}
                  </span>
                ))}
              </div>
              <h3 className="text-lg font-semibold group-hover:text-accent transition">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              <p className="mt-3 text-xs text-foreground/90 leading-relaxed">
                <span className="text-accent font-mono">insight →</span> {p.insight}
              </p>
              <div className="mt-4 font-mono text-xs text-accent opacity-70 group-hover:opacity-100">
                View on GitHub →
              </div>
            </a>
          ))}
        </div>
      </Section>

      {/* Experience */}
      <Section id="experience" n="03" label="work" title="Where I've" italic="worked">
        <div className="max-w-4xl mx-auto space-y-5">
          {EXPERIENCE.map((exp, i) => (
            <div
              key={exp.role + exp.company}
              className="grid md:grid-cols-[160px_1fr] gap-6 p-6 rounded-xl border border-border bg-card hover:border-accent/60 transition animate-fade-in text-left"
              style={{ animationDelay: `${i * 80}ms`, animationFillMode: "both" }}
            >
              <div className="font-mono text-xs text-accent">{exp.year}</div>
              <div>
                <h3 className="text-xl font-semibold">{exp.role}</h3>
                <div className="text-sm text-muted-foreground mt-1">
                  {exp.company} · {exp.location}
                </div>
                <div className="mt-3 flex flex-wrap gap-1.5 font-mono text-[11px]">
                  {exp.tags.map((t) => (
                    <span key={t} className="px-2 py-0.5 rounded bg-secondary text-muted-foreground border border-border">
                      {t}
                    </span>
                  ))}
                </div>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  {exp.bullets.map((b, j) => (
                    <li key={j} className="flex gap-3 leading-relaxed">
                      <span className="text-accent font-mono mt-1">→</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Education */}
      <Section id="education" n="04" label="education" title="Academic" italic="background">
        <div className="max-w-4xl mx-auto space-y-5">
          {EDUCATION.map((e, i) => (
            <div
              key={e.degree}
              className="grid md:grid-cols-[96px_120px_1fr] grid-cols-[64px_1fr] gap-6 items-start p-6 rounded-xl border border-border bg-card animate-fade-in text-left"
              style={{ animationDelay: `${i * 80}ms`, animationFillMode: "both" }}
            >
              <div className="h-16 w-16 md:h-20 md:w-20 rounded-md bg-background border border-border flex items-center justify-center overflow-hidden shrink-0">
                <img src={e.logo} alt={`${e.school} logo`} className="max-h-full max-w-full object-contain p-1" />
              </div>
              <div className="font-mono text-xs text-accent hidden md:block">{e.year}</div>
              <div>
                <div className="font-mono text-xs text-accent md:hidden mb-1">{e.year}</div>
                <h3 className="text-xl font-semibold">{e.degree}</h3>
                <div className="text-sm text-muted-foreground mt-1">{e.school}</div>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{e.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Contact */}
      <Section id="contact" n="05" label="contact" title="Let's" italic="connect">
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
          <div>harsh.py — built with React + TanStack</div>
        </div>
      </footer>
    </div>
  );
}

function Section({
  id,
  n,
  label,
  title,
  italic,
  children,
}: {
  id: string;
  n: string;
  label: string;
  title: string;
  italic: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="mx-auto max-w-6xl px-6 py-20 md:py-24 border-t border-border">
      <div className="text-center mb-10">
        <div className="font-mono text-xs text-muted-foreground tracking-widest">
          <span className="text-accent">//</span> {n} {label}
        </div>
        <h2 className="mt-3 text-3xl md:text-4xl font-bold">
          {title} <span className="italic text-accent">{italic}</span>
        </h2>
      </div>
      {children}
    </section>
  );
}
