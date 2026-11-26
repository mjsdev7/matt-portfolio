import "./App.css";

function App() {
  return (
    <main className="site-shell">
      <div className="portfolio">
        <header className="navbar">
          <a href="#" className="brand">
            <span className="brand-name">matt swales®</span>
            <span className="brand-description">
              Designer & full-stack developer
            </span>
          </a>

          <nav className="nav-links">
            <a href="#work">Work</a>
            <a href="#about">About</a>
            <a href="/Matt-Swales-CV.pdf" target="_blank">
              Resume
            </a>
            <a href="#contact" className="nav-contact">
              Let's talk ↗
            </a>
          </nav>
        </header>

        <section className="hero">
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

              <a href="#contact" className="hero-button">
                Let's make something matter <span>↗</span>
              </a>

              <div className="hero-caption">
                STRATEGY · INTERFACE · CODE. Thoughtful from the first sketch to
                the final pixel.
              </div>
            </div>

            <div className="hero-visual">
              <div className="ruler">
                {Array.from({ length: 48 }, (_, i) => (
                  <span key={i}></span>
                ))}
              </div>

              <div className="visual-content">
                <div className="visual-label">DESIGN / DETAIL / PRECISION</div>

                <div className="circle-row small-circles">
                  {Array.from({ length: 11 }, (_, i) => (
                    <span key={i}></span>
                  ))}
                </div>

                <div className="circle-row medium-circles">
                  {Array.from({ length: 8 }, (_, i) => (
                    <span key={i}></span>
                  ))}
                </div>

                <div className="circle-row large-circles">
                  {Array.from({ length: 4 }, (_, i) => (
                    <span key={i}></span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="hero-bottom-line"></div>
        </section>

        <section className="work-section" id="work">
          <div className="work-heading">
            <div>
              <span className="section-label">01 / SELECTED WORK</span>
              <h2>
                Useful by <em>design.</em>
              </h2>
            </div>

            <span className="work-count">
              Two self-initiated concepts / 2026
            </span>
          </div>

          <div className="projects">
            <article className="project">
              <a
                href="https://github.com/mjsdev7/Meal-Navi"
                target="_blank"
                rel="noreferrer"
                className="project-preview"
              >
                <img
                  src="/meal-navi-preview.png"
                  alt="Meal-Navi application preview"
                />
              </a>

              <div className="project-details">
                <div className="project-title">
                  <span className="project-type">
                    01 / MEAL PLANNING · RESPONSIVE WEB APP
                  </span>
                  <a
                    href="https://github.com/mjsdev7/Meal-Navi"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Meal-Navi ↗
                  </a>
                </div>

                <div className="project-description">
                  <p>
                    Less "what's for dinner?" More room for living.
                    <br />
                    Built with React, Node, Express and MongoDB, with JWT login
                    and a recipe API.
                  </p>

                  <div className="project-meta">
                    <span>UX/UI design · Full-stack development</span>
                    <a
                      href="https://github.com/mjsdev7/Meal-Navi"
                      target="_blank"
                      rel="noreferrer"
                    >
                      View project ↗
                    </a>
                  </div>
                </div>
              </div>
            </article>

            <article className="project">
              <a
                href="https://camp-navi.vercel.app/"
                target="_blank"
                rel="noreferrer"
                className="project-preview"
              >
                <img
                  src="/camp-navi-preview.png"
                  alt="Camp-Navi website preview"
                />
              </a>

              <div className="project-details">
                <div className="project-title">
                  <span className="project-type">
                    02 / CAMPING DISCOVERY · RESPONSIVE WEB APP
                  </span>
                  <a
                    href="https://camp-navi.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Camp-Navi ↗
                  </a>
                </div>

                <div className="project-description">
                  <p>
                    Less searching. More outside.
                    <br />
                    Built with Node, Express and MongoDB, with Passport login
                    and image uploads.
                  </p>

                  <div className="project-meta">
                    <span>UX/UI design · Full-stack development</span>
                    <a
                      href="https://camp-navi.vercel.app/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      View project ↗
                    </a>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </section>
      </div>
    </main>
  );
}

export default App;
