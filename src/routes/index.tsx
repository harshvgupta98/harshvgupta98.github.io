import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/")({
  component: Index,
});

const SKILLS = [
  "Power BI", "DAX", "Power Query", "SQL", "MySQL", "PostgreSQL", "Python",
  "Pandas", "NumPy", "Scikit-learn", "Matplotlib", "Seaborn", "Tableau",
  "Excel", "VBA", "Linnworks", "Star Schema", "KPI Reporting", "EDA",
  "Time Series", "Google Analytics", "Jupyter",
];

const EXPERIENCE = [
  {
    year: "2024 — Present",
    role: "Reporting Analyst",
    company: "Lenehans",
    location: "Dublin, Ireland",
    tags: ["Power BI", "DAX", "Linnworks", "SQL"],
    bullets: [
      "Built Power BI dashboards for buying and procurement teams across 20,000+ SKUs — cutting buying cycle time by 15%.",
      "Analysed Linnworks operational and sales data to surface seasonal demand and dead stock, reducing excess stock by 8%.",
      "Designed daily stock and pricing reconciliation reports, reducing pricing errors by 5%.",
      "Leveraged AI-assisted analytics to accelerate cleaning, transformation and reporting workflows.",
    ],
  },
  {
    year: "2022 — 2023",
    role: "Data Analyst",
    company: "Ellora Infotech",
    location: "India",
    tags: ["Power BI", "DAX", "Power Query", "Python"],
    bullets: [
      "Delivered dashboards tracking €11M in engineering contracts, eliminating 2 days of weekly manual reporting.",
      "Engineered advanced DAX (CALCULATE, SUMX, time-intelligence) to surface cost variance 15% faster.",
      "Built Power Query ETL pipelines and Python scripts to consolidate Excel/CSV/SQL sources, cutting prep time 20%.",
      "Designed a unified KPI framework with Finance and Operations, standardising data governance.",
    ],
  },
  {
    year: "2021 — 2022",
    role: "Junior Data Analyst",
    company: "Santosh & Associates",
    location: "India",
    tags: ["MySQL", "Excel", "Pivot Tables"],
    bullets: [
      "Profiled and validated 5,000+ records monthly across 4 government-contracted locations.",
      "Applied MySQL to cleanse and standardise data, lifting reporting accuracy by 10%.",
      "Identified occupancy and cost trends contributing to an 8% reduction in facility costs.",
      "Produced monthly management reports consolidating operational data across sites.",
    ],
  },
  {
    year: "2019 — 2021",
    role: "Admin Reporting Assistant",
    company: "Ellora EPC Pvt. Ltd.",
    location: "India",
    tags: ["ERP", "Excel", "Reporting"],
    bullets: [
      "Centralised procurement and operational data across 3+ project sites and 30+ vendors using a company-wide ERP.",
      "Reconciled material and vendor records weekly, maintaining reporting accuracy for senior management.",
    ],
  },
];

const PROJECTS = [
  {
    title: "Meta Ad Performance Dashboard",
    tags: ["Power BI", "DAX", "Star Schema"],
    desc: "Multi-page Power BI dashboard analysing 400K ad events across 50 campaigns and 9,841 users — tracking impressions, CTR, engagement, and conversion with 12 DAX measures.",
    insight: "CTR of 11.76% against a 0.61% purchase rate — identified leaking conversion funnel.",
    href: "https://github.com/harshvgupta98/POWERBI_Meta_Ad_Performance_Dashboard",
  },
  {
    title: "Customer Shopping Behaviour",
    tags: ["Python", "PostgreSQL", "Power BI"],
    desc: "End-to-end pipeline — Python wrangling, SQLAlchemy load into PostgreSQL, and 10 business queries with CTEs and window functions across 3,900 transactions.",
    insight: "Segmented 3,116 loyal vs 83 new customers; ~50% discount dependency on key lines.",
    href: "https://github.com/harshvgupta98/PYTHON_SQL_POWERBI_Customer_Behavior_Dashboard",
  },
  {
    title: "HR Attrition Dashboard",
    tags: ["Power BI", "DAX", "HR Analytics"],
    desc: "Attrition dashboard across 1,480 employees tracking rate, salary bands, roles, and tenure by department using DAX and a star schema.",
    insight: "68% of attrition in the under-€5K salary band; Year 1 spike of 59 employees.",
    href: "https://github.com/harshvgupta98/POWERBI_HR_Analytics_Dashboard",
  },
  {
    title: "Online Bookstore SQL Analysis",
    tags: ["SQL", "EDA", "Relational DB"],
    desc: "Exploratory SQL analysis on a relational bookstore dataset — sales, customer behaviour, inventory and revenue across Books, Customers and Orders.",
    insight: "JOINs, GROUP BY, HAVING, LEFT JOIN, COALESCE, window functions, subqueries.",
    href: "https://github.com/harshvgupta98/SQL_Project_Online_Bookstore",
  },
  {
    title: "World Life Expectancy SQL",
    tags: ["SQL", "Data Cleaning", "EDA"],
    desc: "SQL data cleaning and exploratory analysis on life expectancy across 193 countries from 2007–2022 — identifying trends and outlier regions.",
    insight: "193 countries · 15 years of data · full cleaning pipeline.",
    href: "https://github.com/harshvgupta98/SQL_Project_World_Life_Expectancy",
  },
  {
    title: "Sales Performance Dashboard",
    tags: ["Excel", "VBA", "Dashboard"],
    desc: "End-to-end Excel dashboard analysing 141 executives across 8 regions — advanced formulas, pivot tables, dynamic charts, slicers and VBA macros.",
    insight: "VBA automation, 4 pivots, dynamic charts, regional slicers — single-screen layout.",
    href: "https://github.com/harshvgupta98/EXCEL_Sales_Performance_Dashboard",
  },
];

const EDUCATION = [
  {
    year: "2024 — 2025",
    degree: "MSc in Data Analytics",
    school: "National College of Ireland, Dublin",
    detail: "NFQ Level 9. Dissertation: Predicting E-commerce Sales Using Deep Learning — LSTM, GRU and a novel Hybrid model on 100,000+ records; Hybrid achieved R² of 0.91.",
  },
  {
    year: "2015 — 2019",
    degree: "Bachelor of Engineering, Computer Science",
    school: "Savitribai Phule Pune University, India",
    detail: "Foundation in data structures, algorithms, DBMS, OOP and data analytics.",
  },
];

function TypingTerminal() {
  const lines = [
    { prompt: ">>", text: 'print("Hello, World! 👋 I\'m Harsh Gupta")' },
    { prompt: ">>", text: 'print("Role: Data & BI Analyst · Dublin, IE")' },
    { prompt: ">>", text: 'stack = ["Power BI", "DAX", "SQL", "Python"]' },
    { prompt: ">>", text: 'status = "Open to Data / BI / Reporting roles"' },
  ];
  const [typed, setTyped] = useState<string[]>(lines.map(() => ""));
  const [lineIdx, setLineIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);

  useEffect(() => {
    if (lineIdx >= lines.length) return;
    const current = lines[lineIdx].text;
    if (charIdx <= current.length) {
      const t = setTimeout(() => {
        setTyped((prev) => {
          const next = [...prev];
          next[lineIdx] = current.slice(0, charIdx);
          return next;
        });
        setCharIdx((c) => c + 1);
      }, 22);
      return () => clearTimeout(t);
    } else {
      const t = setTimeout(() => {
        setLineIdx((i) => i + 1);
        setCharIdx(0);
      }, 350);
      return () => clearTimeout(t);
    }
  }, [charIdx, lineIdx]);

  return (
    <div className="w-full rounded-lg border border-border bg-card/80 shadow-2xl overflow-hidden font-mono text-sm">
      <div className="flex items-center gap-2 px-4 py-2.5 bg-muted/60 border-b border-border">
        <span className="h-3 w-3 rounded-full bg-red-500/80" />
        <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
        <span className="h-3 w-3 rounded-full bg-green-500/80" />
        <span className="ml-3 text-xs text-muted-foreground">harsh@portfolio: ~</span>
      </div>
      <div className="p-5 space-y-1.5 min-h-[220px]">
        <div className="text-primary">harsh@portfolio:~$ <span className="text-foreground">python</span></div>
        {typed.map((line, i) => (
          <div key={i} className="text-foreground">
            <span className="text-accent">{lines[i].prompt}</span>{" "}
            <span>{line}</span>
            {i === lineIdx && <span className="cursor-blink text-primary">▊</span>}
          </div>
        ))}
        {lineIdx >= lines.length && (
          <div className="text-primary pt-1">harsh@portfolio:~$ <span className="cursor-blink">▊</span></div>
        )}
      </div>
    </div>
  );
}

function SectionLabel({ n, label }: { n: string; label: string }) {
  return (
    <div className="font-mono text-xs text-muted-foreground mb-3">
      <span className="text-primary">// {n}</span> {label}
    </div>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <header className="sticky top-0 z-40 backdrop-blur bg-background/70 border-b border-border">
        <nav className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
          <a href="#top" className="font-mono text-sm">
            <span className="text-primary">harsh</span>
            <span className="text-muted-foreground">@gupta</span>
            <span className="text-accent">:~$</span>
          </a>
          <div className="hidden md:flex items-center gap-6 text-sm text-muted-foreground font-mono">
            <a href="#about" className="hover:text-primary transition">about</a>
            <a href="#experience" className="hover:text-primary transition">experience</a>
            <a href="#projects" className="hover:text-primary transition">projects</a>
            <a href="#skills" className="hover:text-primary transition">skills</a>
            <a href="#contact" className="hover:text-primary transition">contact</a>
          </div>
          <a
            href="mailto:harshvgupta1998@gmail.com"
            className="text-xs md:text-sm font-mono px-3 py-1.5 rounded border border-primary/40 text-primary hover:bg-primary hover:text-primary-foreground transition"
          >
            hire me
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section id="top" className="mx-auto max-w-6xl px-6 pt-16 pb-20 md:pt-24 md:pb-28">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="font-mono text-xs text-primary mb-4 tracking-wider">
              // available for work · dublin, ireland
            </div>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight leading-[1.05]">
              Harsh Gupta
            </h1>
            <h2 className="mt-3 font-mono text-lg md:text-xl text-accent">
              Data &amp; BI Analyst
            </h2>
            <p className="mt-6 text-muted-foreground max-w-lg leading-relaxed">
              I turn messy, fragmented data into <span className="text-foreground">Power BI dashboards</span> and analytical pipelines that help teams make faster decisions. 3+ years across commercial and operational environments — from <span className="text-foreground">€11M engineering contracts</span> to <span className="text-foreground">20,000+ SKU</span> procurement tracking.
            </p>
            <div className="mt-4 flex flex-wrap gap-2 font-mono text-xs">
              {["Python", "SQL", "Power BI", "DAX"].map((s) => (
                <span key={s} className="px-2 py-1 rounded bg-muted text-muted-foreground border border-border">{s}</span>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#projects" className="font-mono text-sm px-4 py-2.5 rounded bg-primary text-primary-foreground hover:opacity-90 transition">
                view_projects()
              </a>
              <a href="#contact" className="font-mono text-sm px-4 py-2.5 rounded border border-border hover:border-primary hover:text-primary transition">
                get_in_touch()
              </a>
            </div>
            <div className="mt-10 grid grid-cols-4 gap-4 max-w-md">
              {[
                ["3+", "yrs exp"],
                ["8+", "projects"],
                ["€11M", "tracked"],
                ["MSc", "NCI Dublin"],
              ].map(([n, l]) => (
                <div key={l}>
                  <div className="font-mono text-2xl text-primary">{n}</div>
                  <div className="text-[11px] uppercase tracking-wider text-muted-foreground">{l}</div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <TypingTerminal />
          </div>
        </div>
      </section>

      {/* Skills marquee */}
      <section className="border-y border-border bg-muted/30 py-4 overflow-hidden">
        <div className="flex gap-3 animate-marquee whitespace-nowrap w-max font-mono text-sm">
          {[...SKILLS, ...SKILLS].map((s, i) => (
            <span key={i} className="px-3 py-1 rounded border border-border bg-card text-muted-foreground">
              {s}
            </span>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <SectionLabel n="01" label="about" />
        <h2 className="text-3xl md:text-4xl font-bold">
          The analyst <span className="italic text-primary">behind the data</span>
        </h2>
        <div className="mt-8 grid md:grid-cols-3 gap-10">
          <div className="md:col-span-2 space-y-4 text-muted-foreground leading-relaxed">
            <p>
              I turn fragmented, inconsistent data into dashboards, KPI frameworks and analytical pipelines that help commercial and operational teams make faster decisions.
            </p>
            <p>
              3+ years specialised in <span className="text-foreground">Power BI (DAX, Power Query, Star Schema)</span>, <span className="text-foreground">SQL</span> and <span className="text-foreground">Python</span>. I've built dashboards tracking <span className="text-primary">€11M in contracts</span>, eliminated <span className="text-primary">2 days of weekly manual reporting</span>, and reduced pricing errors by <span className="text-primary">5%</span> through data validation at scale.
            </p>
            <p>
              MSc in Data Analytics, National College of Ireland. Based in Dublin with full work authorisation — actively seeking <span className="text-foreground">Data Analyst, BI Analyst, Business Analyst or Reporting Analyst</span> roles across Ireland.
            </p>
          </div>
          <div className="space-y-3">
            {[
              ["📊", "Power BI & DAX", "DAX measures, star schema, time intelligence"],
              ["🗄️", "SQL & Databases", "MySQL, PostgreSQL — CTEs, window functions"],
              ["🐍", "Python Analytics", "Pandas, NumPy, Scikit-learn, Matplotlib"],
              ["🎓", "MSc Data Analytics", "NCI Dublin · NFQ Level 9"],
            ].map(([icon, title, desc]) => (
              <div key={title} className="p-4 rounded-lg border border-border bg-card">
                <div className="text-2xl">{icon}</div>
                <div className="mt-2 font-semibold">{title}</div>
                <div className="text-xs text-muted-foreground mt-1">{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="mx-auto max-w-6xl px-6 py-20 md:py-28 border-t border-border">
        <SectionLabel n="02" label="experience" />
        <h2 className="text-3xl md:text-4xl font-bold">
          Where I've <span className="italic text-primary">worked</span>
        </h2>
        <div className="mt-10 space-y-6">
          {EXPERIENCE.map((exp) => (
            <div key={exp.role + exp.company} className="grid md:grid-cols-[180px_1fr] gap-6 p-6 rounded-lg border border-border bg-card hover:border-primary/50 transition">
              <div className="font-mono text-xs text-primary">{exp.year}</div>
              <div>
                <h3 className="text-xl font-semibold">{exp.role}</h3>
                <div className="text-sm text-muted-foreground mt-1">
                  {exp.company} · {exp.location}
                </div>
                <div className="mt-3 flex flex-wrap gap-1.5 font-mono text-[11px]">
                  {exp.tags.map((t) => (
                    <span key={t} className="px-2 py-0.5 rounded bg-muted text-accent border border-border">{t}</span>
                  ))}
                </div>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  {exp.bullets.map((b, i) => (
                    <li key={i} className="flex gap-3 leading-relaxed">
                      <span className="text-primary font-mono mt-1">→</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="mx-auto max-w-6xl px-6 py-20 md:py-28 border-t border-border">
        <SectionLabel n="03" label="projects" />
        <h2 className="text-3xl md:text-4xl font-bold">
          What I've <span className="italic text-primary">built</span>
        </h2>
        <div className="mt-10 grid md:grid-cols-2 gap-5">
          {PROJECTS.map((p) => (
            <a
              key={p.title}
              href={p.href}
              target="_blank"
              rel="noreferrer"
              className="group p-6 rounded-lg border border-border bg-card hover:border-primary hover:-translate-y-0.5 transition flex flex-col"
            >
              <div className="flex flex-wrap gap-1.5 font-mono text-[11px] mb-3">
                {p.tags.map((t) => (
                  <span key={t} className="px-2 py-0.5 rounded bg-muted text-accent border border-border">{t}</span>
                ))}
              </div>
              <h3 className="text-lg font-semibold group-hover:text-primary transition">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              <p className="mt-3 text-xs text-foreground/90 leading-relaxed">
                <span className="text-primary font-mono">key_insight:</span> {p.insight}
              </p>
              <div className="mt-4 font-mono text-xs text-primary opacity-70 group-hover:opacity-100">
                view on github →
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="mx-auto max-w-6xl px-6 py-20 md:py-28 border-t border-border">
        <SectionLabel n="04" label="skills" />
        <h2 className="text-3xl md:text-4xl font-bold">
          Tools &amp; <span className="italic text-primary">technologies</span>
        </h2>
        <div className="mt-10 grid md:grid-cols-2 gap-4">
          {[
            ["BI & Visualisation", ["Power BI", "DAX", "Power Query", "Tableau", "Google Analytics"]],
            ["Languages & Databases", ["Python", "SQL", "MySQL", "PostgreSQL"]],
            ["Analytics", ["KPI Reporting", "EDA", "Customer Segmentation", "Predictive Modelling", "Time Series"]],
            ["Machine Learning", ["Regression", "Classification", "Clustering"]],
            ["Microsoft Excel", ["Advanced Formulas", "Pivot Tables", "VBA Macros", "Charts & Slicers", "Data Validation"]],
            ["Libraries & Tools", ["Pandas", "NumPy", "Scikit-learn", "Matplotlib", "Seaborn", "Linnworks", "Jupyter"]],
          ].map(([cat, items]) => (
            <div key={cat as string} className="p-5 rounded-lg border border-border bg-card">
              <div className="font-mono text-xs text-primary mb-3">{cat as string}</div>
              <div className="flex flex-wrap gap-2">
                {(items as string[]).map((s) => (
                  <span key={s} className="px-2.5 py-1 rounded bg-muted text-sm text-muted-foreground border border-border">{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section className="mx-auto max-w-6xl px-6 py-20 md:py-28 border-t border-border">
        <SectionLabel n="05" label="education" />
        <h2 className="text-3xl md:text-4xl font-bold">
          Academic <span className="italic text-primary">background</span>
        </h2>
        <div className="mt-10 space-y-5">
          {EDUCATION.map((e) => (
            <div key={e.degree} className="grid md:grid-cols-[180px_1fr] gap-6 p-6 rounded-lg border border-border bg-card">
              <div className="font-mono text-xs text-primary">{e.year}</div>
              <div>
                <h3 className="text-xl font-semibold">{e.degree}</h3>
                <div className="text-sm text-muted-foreground mt-1">{e.school}</div>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{e.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-6xl px-6 py-20 md:py-28 border-t border-border">
        <SectionLabel n="06" label="contact" />
        <h2 className="text-3xl md:text-4xl font-bold">
          Let's <span className="italic text-primary">connect</span>
        </h2>
        <p className="mt-6 text-muted-foreground max-w-2xl leading-relaxed">
          I'm actively seeking Data Analyst, BI Analyst, Business Analyst or Reporting Analyst roles in Dublin. Feel free to reach out directly.
        </p>
        <div className="mt-8 flex flex-wrap gap-3 font-mono text-sm">
          <a href="mailto:harshvgupta1998@gmail.com" className="px-4 py-3 rounded border border-border bg-card hover:border-primary hover:text-primary transition">
            ✉ harshvgupta1998@gmail.com
          </a>
          <a href="https://linkedin.com/in/1harsh-gupta" target="_blank" rel="noreferrer" className="px-4 py-3 rounded border border-border bg-card hover:border-primary hover:text-primary transition">
            in linkedin.com/in/1harsh-gupta
          </a>
          <a href="https://github.com/harshvgupta98" target="_blank" rel="noreferrer" className="px-4 py-3 rounded border border-border bg-card hover:border-primary hover:text-primary transition">
            ⌥ github.com/harshvgupta98
          </a>
        </div>
      </section>

      <footer className="border-t border-border">
        <div className="mx-auto max-w-6xl px-6 py-8 flex flex-wrap items-center justify-between gap-3 font-mono text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} Harsh Gupta · Dublin, Ireland</div>
          <div>Built with React + TanStack Start</div>
        </div>
      </footer>
    </div>
  );
}
