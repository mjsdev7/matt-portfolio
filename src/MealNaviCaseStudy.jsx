import { useEffect } from "react";
import "./case-study.css";

const shots = (set) => [
  { src: `/images/meal-navi/${set}-home.jpg`, label: "Homepage" },
  { src: `/images/meal-navi/${set}-planner.jpg`, label: "Weekly planner" },
  { src: `/images/meal-navi/${set}-shopping.jpg`, label: "Shopping list" },
];

const priorities = [
  {
    title: "Information hierarchy",
    text: "Clear structure for better navigation.",
  },
  {
    title: "User engagement",
    text: "A welcoming experience that encourages return visits.",
  },
  { title: "Interaction design", text: "Intuitive components and states." },
  {
    title: "Visual priorities",
    text: "A cohesive design language across the application.",
  },
];

function Section({ label, title, set, children }) {
  return (
    <section className="cs-section">
      <div className="cs-side reveal">
        <span className="section-label">{label}</span>
        <h2>{title}</h2>
      </div>
      <div className="cs-body reveal">{children}</div>
      {set && (
        <div className="cs-shots reveal">
          {shots(set).map((s) => (
            <figure key={s.label}>
              <div
                className="cs-shot"
                style={{ backgroundImage: `url(${s.src})` }}
                role="img"
                aria-label={`${set} design, ${s.label}`}
              ></div>
              <figcaption>{s.label.toUpperCase()}</figcaption>
            </figure>
          ))}
        </div>
      )}
    </section>
  );
}

function MealNaviCaseStudy() {
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
            CASE STUDY · MEAL PLANNING · RESPONSIVE WEB APP
          </span>
          <h1>
            The redesign of the <em>Meal-Navi</em> experience.
          </h1>
          <dl className="cs-meta">
            <div>
              <dt>ROLE</dt>
              <dd>UX/UI design · Full-stack development</dd>
            </div>
            <div>
              <dt>STACK</dt>
              <dd>React · Node · Express · MongoDB</dd>
            </div>
            <div>
              <dt>YEAR</dt>
              <dd>2026</dd>
            </div>
            <div>
              <dt>CODE</dt>
              <dd>
                <a
                  href="https://github.com/mjsdev7/Meal-Navi"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub ↗
                </a>
              </dd>
            </div>
          </dl>
        </section>

        <Section label="01 / OVERVIEW" title="Project overview">
          <p>
            Meal-Navi is a meal-planning application designed to bring weekly
            meal planning and shopping-list management into one cohesive
            experience. Combining front-end and back-end development with UI
            design, the project focuses on making everyday meal planning simple,
            intuitive and enjoyable.
          </p>
          <p>
            I initially built Meal-Navi around its core functionality,
            developing the homepage, weekly planner and shopping list. After
            implementing and testing the application myself, I felt the user
            experience and visual design weren’t fully aligned with my original
            vision. Although the core features worked, the overall experience
            lacked the distinctive identity and engaging feel I wanted the
            product to have.
          </p>
          <p>
            This led me to revisit the project in Figma and rethink the
            direction of the application.
          </p>
        </Section>

        <Section label="02 / BEFORE" title="Original design" set="original">
          <p>
            The original interface established the foundations of Meal-Navi,
            using a warm colour palette, bold typography and food photography to
            create an approachable introduction to the product.
          </p>
          <p>
            However, reviewing the application in practice revealed
            opportunities to strengthen the visual hierarchy, improve
            consistency across screens, and create a more engaging overall
            experience.
          </p>
          <p>
            My goal was not simply to refresh the appearance, but to reconsider
            how the design could better support the product’s purpose and
            encourage users to return to it.
          </p>
        </Section>

        <Section label="03 / AFTER" title="The redesign" set="redesign">
          <p>
            I explored a more editorial visual direction, combining expressive
            serif typography, immersive food and lifestyle photography, and a
            more considered use of colour and whitespace. This established a
            stronger visual identity while keeping the interface focused on its
            core purpose.
          </p>
          <p>
            I carried the new direction across the homepage, weekly planner and
            shopping list, refining layouts, typography, spacing and component
            consistency. I also worked on interactive components and their
            states to create a more coherent experience across the application.
          </p>
          <p>
            The redesign balanced visual character with simplicity. I wanted
            Meal-Navi to feel polished and inviting without making everyday meal
            planning unnecessarily complicated.
          </p>
        </Section>

        <Section label="04 / FOCUS" title="Design priorities">
          <ul className="cs-priorities">
            {priorities.map((p, i) => (
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
            <p className="cs-outcome-text">
              The redesign gives Meal-Navi a distinctive visual identity and a
              stronger foundation across its core features, combining thoughtful
              design with full-stack development to create a seamless and
              engaging user experience.
            </p>
          </div>
          <div className="cs-outcome-links">
            <a href="#work">← Back to work</a>
            <a
              href="https://github.com/mjsdev7/Meal-Navi"
              target="_blank"
              rel="noreferrer"
            >
              View on GitHub ↗
            </a>
            <a href="#contact">Let’s talk ↗</a>
          </div>
        </section>
      </div>
    </main>
  );
}

export default MealNaviCaseStudy;
