import { useEffect } from "react";
import "./App.css";
import "./animations.css";

const projects = [
  {
    id: "meal",
    label: "01 / MEAL PLANNING · RESPONSIVE WEB APP",
    title: "Meal-Navi",
    href: "https://github.com/mjsdev7/Meal-Navi",
    aria: "View Meal-Navi on GitHub",
    lines: [
      "Less “what’s for dinner?” More room for living.",
      "Built with React, Node, Express and MongoDB, with JWT login and a recipe API.",
    ],
  },
  {
    id: "camp",
    label: "02 / CAMPING DISCOVERY · RESPONSIVE WEB APP",
    title: "Camp-Navi",
    href: "https://camp-navi.vercel.app/",
    aria: "Visit Camp-Navi",
    lines: [
      "Less searching. More outside.",
      "Built with Node, Express and MongoDB, with Passport login and image uploads.",
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

function App() {
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

  // Interactive hero: track the mouse as -0.5 to 0.5 across the hero
  const setPointer = (el, x, y) => {
    el.style.setProperty("--px", x.toFixed(3));
    el.style.setProperty("--py", y.toFixed(3));
  };
  const onHeroMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    setPointer(
      e.currentTarget,
      (e.clientX - r.left) / r.width - 0.5,
      (e.clientY - r.top) / r.height - 0.5,
    );
  };
  const onHeroLeave = (e) => setPointer(e.currentTarget, 0, 0);

  return (
    <main className="site-shell">
      <div className="portfolio">
        {/* NAVIGATION */}
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
        <section
          className="hero"
          id="home"
          onMouseMove={onHeroMove}
          onMouseLeave={onHeroLeave}
        >
          <div className="hero-location">
            <span className="location-dot"></span>
            JAPAN/AICHI · OPEN TO FULL-TIME ROLES & RELOCATION
          </div>

          <h1 className="hero-title">
            <span className="line">
              <span className="line-inner">Digital craft.</span>
            </span>
            <span className="line">
              <em className="line-inner">Human instinct.</em>
            </span>
          </h1>

          <div className="hero-content">
            <div className="hero-intro">
              <p>
                I’m Matt, a designer and full-stack developer from England, now
                living in Japan. I design and build websites and apps from start
                to finish, and I love making things that work as well as they
                look.
              </p>

              <a href="#contact" className="hero-button">
                Let’s make something matter <span>↗</span>
              </a>

              <div className="hero-caption">
                STRATEGY · INTERFACE · CODE. Thoughtful from the first sketch to
                the final pixel.
              </div>
            </div>

            {/* Swap the image: public/images/hero.jpg */}
            <div
              className="hero-image"
              role="img"
              aria-label="Design detail"
            ></div>
          </div>
        </section>

        {/* SELECTED WORK */}
        <section className="work-section" id="work">
          <div className="section-heading reveal">
            <div>
              <span className="section-label">01 / SELECTED WORK</span>
              <h2>Useful by design.</h2>
            </div>
            <span className="section-side-note">
              Two self-initiated concepts / 2026
            </span>
          </div>

          <div className="projects">
            {projects.map((p) => (
              <article className="project reveal" key={p.id}>
                {/* Swap the image: public/images/meal-navi.jpg and camp-navi.jpg */}
                <a
                  href={p.href}
                  target="_blank"
                  rel="noreferrer"
                  className={`project-preview ${p.id}-preview`}
                  aria-label={p.aria}
                ></a>

                <div className="project-row">
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
              </article>
            ))}
          </div>
        </section>

        {/* ABOUT */}
        <section className="about-section" id="about">
          <div className="about-photo reveal">
            {/* Swap the image: public/images/matt.jpg */}
            <div className="portrait" role="img" aria-label="Matt Swales"></div>
            <span className="portrait-caption">MATT SWALES / AICHI, JAPAN</span>
          </div>

          <div className="about-text reveal">
            <span className="section-label">02 / A LITTLE ABOUT ME</span>
            <h2>A designer’s eye. A developer’s mind.</h2>
            <p className="about-lead">
              I’m Matt Swales, a designer and full-stack developer from England,
              now living in Japan. I make complicated things feel simple,
              without making them feel ordinary.
            </p>
            <p className="about-body">
              I enjoy working across both design and development, turning ideas
              into digital experiences that look good and feel easy to use. From
              the first Figma design to the final details in the browser, I like
              being involved in the whole process.
            </p>
            <div className="about-skills">
              <span className="section-label">
                THINKING, DESIGNING & BUILDING WITH
              </span>
              <p>
                Figma · UX/UI · HTML · CSS · JavaScript · React · Node · Express
                · MongoDB.
              </p>
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section className="process-section" id="process">
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
              <li
                key={s.title}
                className="reveal"
                style={{ transitionDelay: `${i * 90}ms` }}
              >
                <span className="process-number">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* CONTACT */}
        <section className="contact-section" id="contact">
          <div className="contact-content reveal">
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
        </section>
      </div>
    </main>
  );
}

export default App;
