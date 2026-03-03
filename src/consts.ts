// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

interface SocialLink {
  href: string;
  label: string;
}

interface Site {
  website: string;
  author: string;
  profile: string;
  desc: string;
  title: string;
  ogImage: string;
  lightAndDarkMode: boolean;
  postPerIndex: number;
  postPerPage: number;
  scheduledPostMargin: number;
  showArchives: boolean;
  showBackButton: boolean;
  editPost: {
    enabled: boolean;
    text: string;
    url: string;
  };
  dynamicOgImage: boolean;
  lang: string;
  timezone: string;
}

// Site configuration
export const SITE: Site = {
  website: "https://joshestep.me/",
  author: "Josh Estep",
  profile: "https://joshestep.me/about",
  desc: "Senior Network Engineer focused on network architecture, infrastructure automation, and resilient systems. Exploring AI agents for operational engineering.",
  title: "Josh Estep",
  ogImage: "profile.png", // Make sure this file exists in /public
  lightAndDarkMode: true,
  postPerIndex: 10,
  postPerPage: 10,
  scheduledPostMargin: 15 * 60 * 1000,
  showArchives: false,
  showBackButton: false,
  editPost: {
    enabled: false,
    text: "Edit on GitHub",
    url: "https://github.com/joshestep/joshestep.me/edit/main/",
  },
  dynamicOgImage: true,
  lang: "en",
  timezone: "America/Chicago",
};

export const SITE_TITLE = SITE.title;
export const SITE_DESCRIPTION = SITE.desc;

// Navigation links
export const NAV_LINKS: SocialLink[] = [
  {
    href: "/",
    label: "Blog",
  },
  {
    href: "/about",
    label: "About",
  },
];

// Social media links
export const SOCIAL_LINKS: SocialLink[] = [
  {
    href: "https://github.com/joshestep",
    label: "GitHub",
  },
  {
    href: "https://twitter.com/joshcestep",
    label: "Twitter",
  },
  {
    href: "https://instagram.com/joshestep",
    label: "Instagram",
  },
  {
    href: "/rss.xml",
    label: "RSS",
  },
];

// Icon map for social media
export const ICON_MAP: Record<string, string> = {
  GitHub: "github",
  Twitter: "twitter",
  Instagram: "instagram",
  RSS: "rss",
  Email: "mail",
};
