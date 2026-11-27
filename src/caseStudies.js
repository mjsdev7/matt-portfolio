const caseStudies = {
  "meal-navi": {
    slug: "meal-navi",
    kicker: "CASE STUDY · MEAL PLANNING · RESPONSIVE WEB APP",
    titleStart: "The redesign of the ",
    titleEm: "Meal-Navi",
    titleEnd: " experience.",
    meta: [
      { label: "ROLE", value: "UX/UI design · Full-stack development" },
      { label: "STACK", value: "React · Node · Express · MongoDB" },
      { label: "YEAR", value: "2026" },
      { label: "CODE", value: "GitHub ↗", href: "https://github.com/mjsdev7/Meal-Navi" },
    ],
    overview: [
      "Meal-Navi is a meal-planning application designed to bring weekly meal planning and shopping-list management into one cohesive experience. Combining front-end and back-end development with UI design, the project focuses on making everyday meal planning simple, intuitive and enjoyable.",
      "I initially built Meal-Navi around its core functionality, developing the homepage, weekly planner and shopping list. After implementing and testing the application myself, I felt the user experience and visual design weren’t fully aligned with my original vision. Although the core features worked, the overall experience lacked the distinctive identity and engaging feel I wanted the product to have.",
      "This led me to revisit the project in Figma and rethink the direction of the application.",
    ],
    original: [
      "The original interface established the foundations of Meal-Navi, using a warm colour palette, bold typography and food photography to create an approachable introduction to the product.",
      "However, reviewing the application in practice revealed opportunities to strengthen the visual hierarchy, improve consistency across screens, and create a more engaging overall experience.",
      "My goal was not simply to refresh the appearance, but to reconsider how the design could better support the product’s purpose and encourage users to return to it.",
    ],
    redesign: [
      "I explored a more editorial visual direction, combining expressive serif typography, immersive food and lifestyle photography, and a more considered use of colour and whitespace. This established a stronger visual identity while keeping the interface focused on its core purpose.",
      "I carried the new direction across the homepage, weekly planner and shopping list, refining layouts, typography, spacing and component consistency. I also worked on interactive components and their states to create a more coherent experience across the application.",
      "The redesign balanced visual character with simplicity. I wanted Meal-Navi to feel polished and inviting without making everyday meal planning unnecessarily complicated.",
    ],
    shots: [
      { key: "home", label: "Homepage" },
      { key: "planner", label: "Weekly planner" },
      { key: "shopping", label: "Shopping list" },
    ],
    ratio: "5 / 7",
    priorities: [
      { title: "Information hierarchy", text: "Clear structure for better navigation." },
      { title: "User engagement", text: "A welcoming experience that encourages return visits." },
      { title: "Interaction design", text: "Intuitive components and states." },
      { title: "Visual priorities", text: "A cohesive design language across the application." },
    ],
    outcome:
      "The redesign gives Meal-Navi a distinctive visual identity and a stronger foundation across its core features, combining thoughtful design with full-stack development to create a seamless and engaging user experience.",
    link: { label: "View on GitHub ↗", href: "https://github.com/mjsdev7/Meal-Navi" },
    next: { label: "Next: Camp-Navi →", href: "#/camp-navi" },
  },

  "camp-navi": {
    slug: "camp-navi",
    kicker: "CASE STUDY · CAMPING DISCOVERY · RESPONSIVE WEB APP",
    titleStart: "Finding a new direction for ",
    titleEm: "Camp-Navi",
    titleEnd: ".",
    meta: [
      { label: "ROLE", value: "UX/UI design · Full-stack development" },
      { label: "STACK", value: "Node · Express · MongoDB · Passport" },
      { label: "YEAR", value: "2026" },
      { label: "LIVE", value: "Visit site ↗", href: "https://camp-navi.vercel.app/" },
    ],
    overview: [
      "Camp-Navi is a campground discovery platform built to help people explore places to stay and discover destinations across Japan. Campgrounds appear on an interactive map and in a list, each with its own page for photos, location, price and reviews. It combines full-stack development, including Passport login and image uploads, with UI design.",
      "I built the first version around the core functionality. Once it was working, I looked at it with fresh eyes and felt it looked too simple. The experience worked, but it didn’t capture the feeling of getting outside that the product is about.",
      "So I went back to Figma and changed the direction.",
    ],
    original: [
      "The first version put the core features in place: a map of campgrounds across Japan, a list to browse, and a page for each campground with photos, details, a map and a review form. It also included a dark mode toggle and login.",
      "It worked, but it relied on default-looking components, and the result looked simple. Most screens read as standard pages rather than a product with its own personality, and nothing about the layout guided people towards finding the right place to stay.",
      "My aim was to move beyond a functional first pass and give Camp-Navi a character of its own.",
    ],
    redesign: [
      "I moved to a more immersive direction, built around full-bleed forest photography, a light and confident headline style with a warm gold accent, and generous space. The first screen should feel like arriving somewhere, not browsing a list.",
      "I carried the new direction across the homepage and the main pages, refining layouts, typography and spacing so the interface stays consistent across screen sizes.",
      "The result keeps the product focused on helping people find a place to stay, with a visual character that matches the idea of getting outside.",
    ],
    shots: [
      { key: "home", label: "Homepage" },
      { key: "explore", label: "Campgrounds" },
      { key: "campground", label: "Campground page" },
    ],
    ratio: "16 / 10",
    priorities: [
      { title: "Atmosphere", text: "Immersive photography that sets the tone." },
      { title: "Discovery", text: "Clear paths to explore places to stay." },
      { title: "Clarity", text: "A simple structure that is easy to scan." },
      { title: "Consistency", text: "One visual language across the application." },
    ],
    outcome:
      "The redesign gives Camp-Navi a distinctive identity and a stronger foundation, combining thoughtful design with full-stack development to create an engaging way to discover places to camp across Japan.",
    link: { label: "Visit site ↗", href: "https://camp-navi.vercel.app/" },
    next: { label: "Next: Meal-Navi →", href: "#/meal-navi" },
  },
};

export default caseStudies;