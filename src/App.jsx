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

            <div
              className="hero-visual"
              aria-label="Design measurement tool inspired visual"
            >
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
      </div>
    </main>
  );
}

export default App;
