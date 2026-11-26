import "./App.css";

const skills = [
  "Figma",
  "UX/UI Design",
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Node.js",
  "Express",
  "MongoDB",
  "Git & GitHub",
];

const process = [
  {
    number: "01",
    title: "Understand",
    description:
      "Start with the problem. Understand who the product is for, what they need and what a better experience should look like.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "Explore ideas, organise information and shape the experience in Figma before bringing the interface to life.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "Turn the design into a working product, connecting the interface, application logic and data.",
  },
  {
    number: "04",
    title: "Refine",
    description:
      "Test the experience, improve the details and make sure everything feels considered across different screen sizes.",
  },
];

function App() {
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
            <a href="#process">Process</a>
            <a href="/Matt-Swales-CV.pdf" target="_blank" rel="noreferrer">
              Resume
            </a>
            <a href="#contact" className="nav-contact">
              Let's talk ↗
            </a>
          </nav>
        </header>

        {/* HERO */}

        <section className="hero" id="home">
          <div className="hero-location">
            <span className="location-dot"></span>
            JAPAN / AICHI · OPEN TO FULL-TIME ROLES & RELOCATION
          </div>

          <h1 className="hero-title">
            Digital craft.
            <span>Human instinct.</span>
          </h1>

          <div className="hero-content">
            <div className="hero-intro">
              <p>
                I'm Matt, a designer and full-stack developer from England, now
                living in Japan. I design and build websites and apps from start
                to finish, and I love making things that work as well as they
                look.
              </p>

              <a href="#work" className="hero-button">
                Explore my work <span>↗</span>
              </a>

              <div className="hero-caption">
                STRATEGY · INTERFACE · CODE. Thoughtful from the first sketch to
                the final pixel.
              </div>
            </div>

            <div className="hero-visual">
              <div className="hero-visual-top">
                <span>DESIGN / DETAIL / PRECISION</span>
                <span>01 — 26</span>
              </div>

              <div className="hero-graphic">
                <div className="graphic-ring ring-one"></div>
                <div className="graphic-ring ring-two"></div>
                <div className="graphic-ring ring-three"></div>
                <div className="graphic-cross"></div>
                <span className="graphic-coordinate">36° 09' N</span>
              </div>

              <div className="hero-visual-bottom">
                <span>FORM FOLLOWS FUNCTION</span>
                <span>EST. 2026</span>
              </div>
            </div>
          </div>

          <div className="hero-bottom-line"></div>
        </section>

        {/* SELECTED WORK */}

        <section className="work-section" id="work">
          <div className="section-heading">
            <div>
              <span className="section-label">01 / SELECTED WORK</span>
              <h2>
                Useful by <em>design.</em>
              </h2>
            </div>

            <span className="section-side-note">
              TWO SELF-INITIATED PROJECTS · 2026
            </span>
          </div>

          <div className="projects">
            <article className="project">
              <a
                href="https://github.com/mjsdev7/Meal-Navi"
                target="_blank"
                rel="noreferrer"
                className="project-preview meal-preview"
                aria-label="View Meal-Navi on GitHub"
              >
                <div className="preview-placeholder meal-placeholder">
                  <span className="placeholder-label">MEAL-NAVI</span>
                  <div className="placeholder-copy">
                    <span>Plan smarter.</span>
                    <em>Cook easier.</em>
                  </div>
                  <span className="placeholder-note">
                    PROJECT SCREENSHOT TO BE ADDED
                  </span>
                </div>
              </a>

              <div className="project-details">
                <div className="project-title">
                  <span className="project-type">
                    01 / MEAL PLANNING · RESPONSIVE WEB APP
                  </span>
                  <h3>Meal-Navi</h3>
                </div>

                <div className="project-description">
                  <p>
                    Less "what's for dinner?" More room for living. A meal
                    planning application designed to make organising recipes,
                    planning meals and everyday cooking easier.
                  </p>

                  <div className="project-meta">
                    <span>UX/UI DESIGN · FULL-STACK DEVELOPMENT</span>
                    <a
                      href="https://github.com/mjsdev7/Meal-Navi"
                      target="_blank"
                      rel="noreferrer"
                    >
                      VIEW ON GITHUB ↗
                    </a>
                  </div>
                </div>
              </div>

              <div className="project-tags">
                <span>React</span>
                <span>Node.js</span>
                <span>Express</span>
                <span>MongoDB</span>
                <span>Figma</span>
              </div>
            </article>

            <article className="project">
              <a
                href="https://camp-navi.vercel.app/"
                target="_blank"
                rel="noreferrer"
                className="project-preview camp-preview"
                aria-label="Visit Camp-Navi"
              >
                <div className="preview-placeholder camp-placeholder">
                  <span className="placeholder-label">
                    CAMP-NAVI / DISCOVER JAPAN
                  </span>
                  <div className="placeholder-copy">
                    <span>Find your</span>
                    <em>next escape.</em>
                  </div>
                  <span className="placeholder-note">
                    PROJECT SCREENSHOT TO BE ADDED
                  </span>
                </div>
              </a>

              <div className="project-details">
                <div className="project-title">
                  <span className="project-type">
                    02 / CAMPING DISCOVERY · RESPONSIVE WEB APP
                  </span>
                  <h3>Camp-Navi</h3>
                </div>

                <div className="project-description">
                  <p>
                    Less searching. More outside. A campground discovery
                    platform built to help people explore places to stay and
                    discover destinations across Japan.
                  </p>

                  <div className="project-meta">
                    <span>UX/UI DESIGN · FULL-STACK DEVELOPMENT</span>
                    <a
                      href="https://camp-navi.vercel.app/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      VISIT WEBSITE ↗
                    </a>
                  </div>
                </div>
              </div>

              <div className="project-tags">
                <span>JavaScript</span>
                <span>Node.js</span>
                <span>Express</span>
                <span>MongoDB</span>
                <span>Maps</span>
              </div>
            </article>
          </div>
        </section>

        {/* ABOUT */}

        <section className="about-section" id="about">
          <div className="section-heading">
            <div>
              <span className="section-label">02 / ABOUT ME</span>
              <h2>
                Design-minded.
                <br />
                <em>Curious by nature.</em>
              </h2>
            </div>
          </div>

          <div className="about-content">
            <div className="about-intro">
              <p className="about-lead">
                I enjoy working where design and technology meet.
              </p>

              <p>
                I'm Matt, originally from England and now based in Aichi, Japan.
                My interest is in creating digital experiences that feel clear,
                useful and enjoyable to use.
              </p>

              <p>
                I bring together UX/UI design and hands-on development, taking
                ideas from early concepts in Figma through to building and
                refining working web applications.
              </p>

              <p>
                I care about the details, but always keep the bigger picture in
                mind: making something that genuinely works for the people using
                it.
              </p>
            </div>

            <div className="about-skills">
              <span className="section-label">TOOLS & TECHNOLOGIES</span>

              <div className="skills-list">
                {skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>

              <div className="about-note">
                <span className="location-dot"></span>
                BASED IN AICHI, JAPAN · PERMANENT RESIDENT
              </div>
            </div>
          </div>
        </section>

        {/* PROCESS */}

        <section className="process-section" id="process">
          <div className="section-heading">
            <div>
              <span className="section-label">03 / MY APPROACH</span>
              <h2>
                From idea to <em>interface.</em>
              </h2>
            </div>

            <p className="section-side-note">
              A considered approach to making digital products.
            </p>
          </div>

          <div className="process-grid">
            {process.map((step) => (
              <article className="process-card" key={step.number}>
                <span className="process-number">{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            ))}
          </div>
        </section>

        {/* CONTACT */}

        <section className="contact-section" id="contact">
          <span className="section-label">04 / GET IN TOUCH</span>

          <div className="contact-content">
            <div>
              <h2>
                Have something
                <br />
                in <em>mind?</em>
              </h2>

              <p>
                I'm open to opportunities in design, frontend and full-stack
                development. If you have a project or role in mind, I'd love to
                hear from you.
              </p>

              <a
                href="mailto:m.j.swales@hotmail.com"
                className="contact-button"
              >
                Get in touch <span>↗</span>
              </a>
            </div>

            <div className="contact-links">
              <a href="mailto:m.j.swales@hotmail.com">
                EMAIL <span>↗</span>
              </a>

              <a
                href="https://github.com/mjsdev7"
                target="_blank"
                rel="noreferrer"
              >
                GITHUB <span>↗</span>
              </a>

              <a href="/Matt-Swales-CV.pdf" target="_blank" rel="noreferrer">
                RESUME <span>↗</span>
              </a>
            </div>
          </div>

          <footer className="footer">
            <span>© 2026 MATT SWALES</span>
            <span>DESIGNED & BUILT WITH CARE</span>
            <a href="#home">BACK TO TOP ↑</a>
          </footer>
        </section>
      </div>
    </main>
  );
}

export default App;
