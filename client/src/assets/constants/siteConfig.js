const siteConfig = {
  brand: {
    name: "CodeHe{R} LLC",
    domain: "codeherllc.com",
    tagline: "Business Solutions Firm"
  },

  business: {
    email: "info@codeherllc.com",
    phone: "",
    location: "Arizona Based | Serving Clients Across the U.S."
  },

  navigation: {
    ctaLabel: "Start a Conversation",
    ctaTarget: "quote-modal"
  },

  hero: {
    eyebrow: "Arizona Based | Serving Clients Across the U.S.",
    heading: "Smart Websites. Powerful Infrastructure. Built for Growth.",
    description:
      "Professional website development, rebuilds, managed hosting, and technical support for businesses and organizations that need a reliable digital presence.",
    primaryCtaLabel: "Request a Quote",
    secondaryCtaLabel: "Explore Services",
    secondaryCtaHref: "#services"
  },

  truststrip: {
    heading: "",
    description: "",
    items: []
  },

  services: {
    eyebrow: "Solutions",
    heading: "Two focused paths for business growth.",
    description:
      "CodeHe{R} supports organizations through two core service areas. Workforce Solutions helps businesses strengthen hiring, retention, and long-term workforce strategy. Digital Solutions helps businesses build a professional online presence that supports credibility, visibility, and growth."
  },

  about: {
    eyebrow: "Why CodeHe{R}?",
    heading: "Solutions That Work. Execution That Lasts."
  },

  footer: {
    description:
      "CodeHe{R} helps businesses strengthen their workforce and digital presence through consulting and professional web solutions.",
    links: [
      {
        id: "footer-services",
        label: "Solutions",
        href: "#services"
      },
      {
        id: "footer-about",
        label: "About",
        href: "#about"
      }
    ]
  },

  api: {
    baseUrl: "/api",
    quoteEndpoint: "/quotes"
  }
};

export default siteConfig;