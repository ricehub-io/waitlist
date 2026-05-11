const ALL_SECTIONS: string[] = [
    "hero",
    "preview",
    "how-it-works",
    "terminal-deploy",
    "founding-creators",
    "pricing",
    "faq",
    "final-cta",
] as const;

export type SectionSlug = (typeof ALL_SECTIONS)[number];

interface SiteConfig {
    sections: SectionSlug[];
}

const PROD: SiteConfig = {
    sections: ["hero", "preview", "founding-creators", "final-cta"],
};

const DEV: SiteConfig = {
    sections: [...ALL_SECTIONS],
};

export const siteConfig: SiteConfig =
    import.meta.env.VITE_SITE_VARIANT === "prod" ? PROD : DEV;
