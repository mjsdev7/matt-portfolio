import { useEffect, useRef } from "react";
import "./App.css";
import "./animations.css";
import "./hero-fullscreen.css";
import "./sections.css";

const projects = [
  {
    id: "camp",
    label: "01 / CAMPING DISCOVERY · RESPONSIVE WEB APP",
    title: "Camp-Navi",
    href: "https://camp-navi.vercel.app/",
    aria: "Visit Camp-Navi",
    lines: [
      "Less searching. More outside.",
      "Built with Node, Express and MongoDB, with Passport login and image uploads.",
    ],
  },
  {
    id: "meal",
    label: "02 / MEAL PLANNING · RESPONSIVE WEB APP",
    title: "Meal-Navi",
    href: "https://github.com/mjsdev7/Meal-Navi",
    aria: "View Meal-Navi on GitHub",
    lines: [
      "Less “what’s for dinner?” More room for living.",
      "Built with React, Node, Express and MongoDB, with JWT login and a recipe API.",
    ],
  },
];

const steps = [
  {
    title: "Research",
    text: "Frame the problem, explore the context and make assumptions explicit.",
  },
  {
    title: "Wireframing",
    text: "Map the essential journey before adding visual detail.",
  },
  {
    title: "Prototyping",
    text: "Connect the moments that matter into a tangible experience.",
  },
  {
    title: "Testing",
    text: "Plan realistic tasks, invite feedback and refine what gets in the way.",
  },
  {
    title: "Development",
    text: "Build it, test it and ship it, front to back.",
  },
];

const statement =
  "I’m Matt, a designer and full-stack developer from England, now living in Japan. I design and build websites and apps from start to finish, and I love making things that work as well as they look.";

// Splits text into letters so each one can react to the mouse
function Letters({ text }) {
  return text.split(" ").map((word, w, all) => (
    <span key={w}>
      <span className="hw" aria-hidden="true">
        {[...word].map((ch, i) => (
          <span className="ch" key={i}>
            {ch}
          </span>
        ))}
      </span>
      {w < all.length - 1 && " "}
    </span>
  ));
}

function App() {
  const statementRef = useRef(null);

  // Statement: words go from grey to dark as you scroll past
  useEffect(() => {
    const el = statementRef.current;
    if (!el) return;
    const words = el.querySelectorAll(".word");
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      words.forEach((w) => w.classList.add("lit"));
      el.classList.add("done");
      return;
    }
    let ticking = false;
    const update = () => {
      const r = el.getBoundingClientRect();
      const travel = r.height - window.innerHeight; // how far the screen stays pinned
      const p = Math.min(1, Math.max(0, -r.top / (travel * 0.85)));
      const lit = Math.round(p * words.length);
      words.forEach((w, i) => w.classList.toggle("lit", i < lit));
      el.classList.toggle("done", p >= 1);
      ticking = false;
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);
  // Scroll reveals: fade elements in the first time they enter the screen
  useEffect(() => {
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
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  // Scenes: each pinned page gets --p (0 to 1) as you scroll through it
  useEffect(() => {
    const scenes = document.querySelectorAll(".scene");
    const still = [
      window.matchMedia("(prefers-reduced-motion: reduce)"),
      window.matchMedia("(max-width: 860px)"),
    ];
    let ticking = false;
    const update = () => {
      const vh = window.innerHeight;
      const skip = still.some((m) => m.matches);
      scenes.forEach((el) => {
        const r = el.getBoundingClientRect();
        if (!skip && (r.bottom < -vh || r.top > vh * 2)) return;
        const travel = r.height - vh;
        const p =
          skip || travel <= 0 ? 1 : Math.min(1, Math.max(0, -r.top / travel));
        el.style.setProperty("--p", p.toFixed(4));
      });
      ticking = false;
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  // Interactive hero: track the mouse as -0.5 to 0.5 across the hero
  const setPointer = (el, x, y) => {
    el.style.setProperty("--px", x.toFixed(3));
    el.style.setProperty("--py", y.toFixed(3));
  };
  const onHeroMove = (e) => {
    setPointer(
      e.currentTarget,
      e.clientX / window.innerWidth - 0.5,
      e.clientY / window.innerHeight - 0.5,
    );
  };
  const onHeroLeave = (e) => setPointer(e.currentTarget, 0, 0);

  return (
    <main className="site-shell">
      <div
        className="portfolio"
        onMouseMove={onHeroMove}
        onMouseLeave={onHeroLeave}
      >
        {/* NAVIGATION */}
        <div className="hero-screen scene">
          <div className="scene-stick">
            <header className="navbar">
              <a href="#home" className="brand">
                <span className="brand-name">matt swales®</span>
                <span className="brand-description">
                  Designer & full-stack developer
                </span>
              </a>

              <nav className="nav-links">
                <a href="#work">Work</a>
                <a href="#about">About</a>
                <a href="/Matt-Swales-CV.pdf" target="_blank" rel="noreferrer">
                  Resume
                </a>
                <a href="#contact" className="nav-contact">
                  Let’s talk ↗
                </a>
              </nav>
            </header>

            {/* HERO */}
            <section className="hero" id="home">
              <div className="hero-location">
                <span className="location-dot"></span>
                JAPAN/AICHI · OPEN TO FULL-TIME ROLES & RELOCATION
              </div>

              <h1
                className="hero-title"
                aria-label="Digital craft. Human instinct."
              >
                <span className="line">
                  <span className="line-inner">
                    <Letters text="Digital craft." />
                  </span>
                </span>
                <span className="line">
                  <em className="line-inner">
                    <Letters text="Human instinct." />
                  </em>
                </span>
              </h1>

              <a href="#intro" className="scroll-cue">
                SCROLL <span>↓</span>
              </a>
            </section>
          </div>
        </div>

        {/* STATEMENT */}
        <section className="statement" id="intro" ref={statementRef}>
          <div className="statement-stick">
            <p className="statement-text">
              {statement.split(" ").map((word, i) => (
                <span className="word" key={i}>
                  {word}{" "}
                </span>
              ))}
            </p>
            <div className="statement-cta">
              <a href="#contact" className="hero-button">
                Let’s make something matter <span>↗</span>
              </a>
            </div>
          </div>
        </section>

        {/* SELECTED WORK */}
        <section className="work-section" id="work">
          <div className="work-title scene">
            <div className="scene-stick section-heading">
              <div className="open-window">
                <span className="section-label">01 / SELECTED WORK</span>
                <h2>Useful by design.</h2>
              </div>
              <span className="section-side-note open-window">
                Two self-initiated concepts / 2026
              </span>
            </div>
          </div>

          <div className="projects">
            {projects.map((p, i) => (
              <article
                className={`project-screen scene${i % 2 ? " flip" : ""}`}
                key={p.id}
              >
                <div className="scene-stick project-grid">
                  <div className="project-text open-window">
                    <div className="project-title">
                      <span className="project-type">{p.label}</span>
                      <h3>
                        <a href={p.href} target="_blank" rel="noreferrer">
                          {p.title} <span>↗</span>
                        </a>
                      </h3>
                    </div>

                    <div className="project-description">
                      <p>
                        {p.lines[0]}
                        <br />
                        {p.lines[1]}
                      </p>
                      <div className="project-meta">
                        <span>UX/UI design · Full-stack development</span>
                        <a href={p.href} target="_blank" rel="noreferrer">
                          Read case study ↗
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Images: public/images/camp-navi.jpg and meal-navi.jpg */}
                  <div className="project-media open-window">
                    <a
                      href={p.href}
                      target="_blank"
                      rel="noreferrer"
                      className={`project-preview ${p.id}-preview`}
                      aria-label={p.aria}
                    ></a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ABOUT */}
        <section className="about-section scene" id="about">
          <div className="scene-stick about-grid">
            <div className="about-photo reveal">
              {/* Swap the image: public/images/matt.jpg */}
              <div
                className="portrait"
                role="img"
                aria-label="Matt Swales"
              ></div>
              <span className="portrait-caption">
                MATT SWALES / AICHI, JAPAN
              </span>
            </div>

            <div className="about-text reveal">
              <span className="section-label">02 / A LITTLE ABOUT ME</span>
              <h2>A designer’s eye. A developer’s mind.</h2>
              <p className="about-lead">
                I’m Matt Swales, a designer and full-stack developer from
                England, now living in Japan. I make complicated things feel
                simple, without making them feel ordinary.
              </p>
              <p className="about-body">
                I enjoy working across both design and development, turning
                ideas into digital experiences that look good and feel easy to
                use. From the first Figma design to the final details in the
                browser, I like being involved in the whole process.
              </p>
              <div className="about-skills">
                <span className="section-label">
                  THINKING, DESIGNING & BUILDING WITH
                </span>
                <p>
                  Figma · UX/UI · HTML · CSS · JavaScript · React · Node ·
                  Express · MongoDB.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section className="process-section scene" id="process">
          <div className="scene-stick process-grid">
            <div className="process-intro reveal">
              <span className="section-label">03 / HOW I WORK</span>
              <h2>
                A clear process.
                <br />
                Room to explore.
              </h2>
              <p>
                Not a straight line, but a thoughtful loop. Each step brings the
                product closer to the people who will use it.
              </p>
            </div>

            <ol className="process-list">
              {steps.map((s, i) => (
                <li key={s.title} style={{ "--i": i }}>
                  <span className="process-number">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* CONTACT */}
        <section className="contact-section scene" id="contact">
          <div className="scene-stick contact-stick">
            <div className="contact-content open-window">
              <div>
                <span className="section-label">04 / GET IN TOUCH</span>
                <h2>
                  Something good starts
                  <br />
                  with hello.
                </h2>
              </div>

              <div className="contact-side">
                <p>
                  Hiring, or have a project in mind? I’d love to hear from you.
                </p>
                <a href="/Matt-Swales-CV.pdf" target="_blank" rel="noreferrer">
                  Resume
                </a>
                <a href="mailto:m.j.swales@hotmail.com">Email me ↗</a>
                <a
                  href="https://github.com/mjsdev7"
                  target="_blank"
                  rel="noreferrer"
                  className="contact-small"
                >
                  GitHub / mjsdev7 ↗
                </a>
              </div>
            </div>

            <footer className="footer">
              <span>© 2026 Matt Swales · Portfolio</span>
              <span>Designed with care. Built with intention.</span>
              <a href="#home">Back to top ↑</a>
            </footer>
          </div>
        </section>
      </div>
    </main>
  );
}

export default App;
