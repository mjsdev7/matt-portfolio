import { useEffect } from "react";
import "./case-study.css";

function Section({ label, title, paragraphs, children, shots }) {
  return (
    <section className="cs-section">
      <div className="cs-side reveal">
        <span className="section-label">{label}</span>
        <h2>{title}</h2>
      </div>
      <div className="cs-body reveal">
        {paragraphs && paragraphs.map((t) => <p key={t.slice(0, 24)}>{t}</p>)}
        {children}
      </div>
      {shots}
    </section>
  );
}

function Shots({ study, set }) {
  return (
    <div className="cs-shots reveal" style={{ "--shot-ratio": study.ratio }}>
      {study.shots.map((s) => (
        <figure key={s.key}>
          <div
            className="cs-shot"
            style={{
              backgroundImage: `url(/images/${study.slug}/${set}-${s.key}.jpg)`,
            }}
            role="img"
            aria-label={`${set} design, ${s.label}`}
          ></div>
          <figcaption>{s.label.toUpperCase()}</figcaption>
        </figure>
      ))}
    </div>
  );
}

function CaseStudy({ study }) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        }),
      { threshold: 0.12 },
    );
    document.querySelectorAll(".cs .reveal").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <main className="site-shell cs">
      <div className="portfolio">
        <header className="navbar">
          <a href="#home" className="brand">
            <span className="brand-name">matt swales®</span>
            <span className="brand-description">
              Designer & full-stack developer
            </span>
          </a>
          <nav className="nav-links">
            <a href="#work">← Back to work</a>
            <a href="#contact" className="nav-contact">
              Let’s talk ↗
            </a>
          </nav>
        </header>

        <section className="cs-hero">
          <span className="cs-kicker">
            <span className="location-dot"></span>
            {study.kicker}
          </span>
          <h1>
            {study.titleStart}
            <em>{study.titleEm}</em>
            {study.titleEnd}
          </h1>
          <dl className="cs-meta">
            {study.meta.map((m) => (
              <div key={m.label}>
                <dt>{m.label}</dt>
                <dd>
                  {m.href ? (
                    <a href={m.href} target="_blank" rel="noreferrer">
                      {m.value}
                    </a>
                  ) : (
                    m.value
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </section>

        <Section
          label="01 / OVERVIEW"
          title="Project overview"
          paragraphs={study.overview}
        />
        <Section
          label="02 / BEFORE"
          title="Original design"
          paragraphs={study.original}
          shots={<Shots study={study} set="original" />}
        />
        <Section
          label="03 / AFTER"
          title="The redesign"
          paragraphs={study.redesign}
          shots={<Shots study={study} set="redesign" />}
        />
        <Section label="04 / FOCUS" title="Design priorities">
          <ul className="cs-priorities">
            {study.priorities.map((p, i) => (
              <li key={p.title}>
                <span className="num">{String(i + 1).padStart(2, "0")}</span>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </li>
            ))}
          </ul>
        </Section>

        <section className="cs-outcome">
          <div className="reveal">
            <span className="section-label">05 / OUTCOME</span>
            <p className="cs-outcome-text">{study.outcome}</p>
          </div>
          <div className="cs-outcome-links">
            <a href="#work">← Back to work</a>
            <a href={study.link.href} target="_blank" rel="noreferrer">
              {study.link.label}
            </a>
            <a href={study.next.href}>{study.next.label}</a>
          </div>
        </section>
      </div>
    </main>
  );
}

export default CaseStudy;
