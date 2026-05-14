import { useLocation } from "preact-iso";
import NotifyForm from "@/components/ui/NotifyForm";
import scrollTo from "@/scrollTo";
import { siteConfig } from "@/config";

interface SectionLink {
    label: string;
    anchorId?: string;
    href?: string;
}
interface Section {
    title: string;
    links: SectionLink[];
}
const SECTIONS: Section[] = [
    {
        title: "Website",
        links: [
            {
                label: "Source Code",
                href: "https://github.com/ricehub-io/waitlist",
            },
        ],
    },
    {
        title: "Platform",
        links: [
            { label: "Join Waitlist", anchorId: "join-waitlist" },
            // ts broke prettier formatting :sob:
            ...(siteConfig.sections.includes("how-it-works")
                ? [
                      {
                          label: "How It Works",
                          anchorId: "how-it-works",
                      },
                  ]
                : []),
            ...(siteConfig.sections.includes("pricing")
                ? [
                      {
                          label: "Pricing",
                          anchorId: "pricing",
                      },
                  ]
                : []),
        ],
    },
    {
        title: "Creators",
        links: [{ label: "Founding Program", anchorId: "founding-creators" }],
    },
    {
        title: "Company",
        links: [
            { label: "GitHub", href: "https://github.com/ricehub-io" },
            { label: "Discord", href: "https://discord.gg/z7Zu8MeTdG" },
        ],
    },
    {
        title: "Legal",
        links: [
            { label: "Terms of Service", href: "/legal/terms-of-service" },
            { label: "Privacy Policy", href: "/legal/privacy-policy" },
        ],
    },
];

const TAGS = ["NixOS Friendly", "Open Source", "r/unixporn"];

export default function Footer() {
    const { url, route } = useLocation();

    const handleAnchorClick = (anchorId: string) => {
        if (url === "/") {
            scrollTo(anchorId);
        } else {
            sessionStorage.setItem("scrollToAnchor", anchorId);
            route("/");
        }
    };

    return (
        <footer className="border-obsidian border-t px-5 py-10 sm:px-10 xl:px-24">
            <div className="flex flex-col justify-between gap-y-12 xl:flex-row">
                <div className="w-fit">
                    <h3 className="font-syne mb-3 text-2xl leading-none font-extrabold">
                        Rice
                        <span className="text-phosphor">Hub</span>
                    </h3>
                    <i className="font-fraunces text-muted mb-6 block leading-none font-light sm:mb-10">
                        "Your desktop, authored."
                    </i>
                    <NotifyForm />
                </div>

                <div className="grid grid-cols-3 gap-5 lg:grid-cols-5 xl:gap-7">
                    {SECTIONS.map(({ title, links }, idx) => (
                        <div key={idx} className="font-epilogue flex flex-col">
                            <h3 className="mb-4 text-base leading-none sm:mb-6 sm:text-xl">
                                {title}
                            </h3>
                            <ul>
                                {links.map(
                                    ({ label, anchorId, href }, lidx) => (
                                        <li
                                            key={lidx}
                                            className="text-2xs text-parchment/44 hover:text-phosphor leading-none transition-colors not-last:mb-3 sm:text-sm"
                                        >
                                            {anchorId !== undefined ? (
                                                <input
                                                    className="cursor-pointer"
                                                    type="button"
                                                    value={label}
                                                    onClick={() =>
                                                        handleAnchorClick(
                                                            anchorId,
                                                        )
                                                    }
                                                />
                                            ) : (
                                                <a
                                                    href={href}
                                                    target={
                                                        href?.startsWith(
                                                            "https://",
                                                        )
                                                            ? "_blank"
                                                            : "_self"
                                                    }
                                                >
                                                    {label}
                                                </a>
                                            )}
                                        </li>
                                    ),
                                )}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>

            <div className="my-8 h-px bg-white/7 sm:mt-11" />

            <div className="font-dm-mono flex flex-col justify-between gap-y-4 uppercase md:flex-row md:items-center">
                <p className="text-parchment/16 text-2xs leading-none tracking-[0.15em]">
                    © 2026 <span className="text-phosphor">RiceHub</span> · All
                    rights reserved
                </p>
                <ul className="leading-0">
                    {TAGS.map((text, idx) => (
                        <li
                            key={idx}
                            className="bg-phosphor/9 border-phosphor/20 text-phosphor text-3xs inline-block border px-2.5 py-1 leading-none tracking-[0.225em] not-first:ml-1.5"
                        >
                            {text}
                        </li>
                    ))}
                </ul>
            </div>
        </footer>
    );
}
