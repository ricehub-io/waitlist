import NotifyForm from "@/components/ui/NotifyForm";

const SECTIONS = [
    {
        title: "Platform",
        links: [
            { label: "Join Waitlist", href: "#" },
            { label: "Enter Competition", href: "#" },
            { label: "How It Works", href: "#" },
            { label: "Pricing", href: "#" },
        ],
    },
    {
        title: "Creators",
        links: [
            { label: "Founding Program", href: "#" },
            { label: "Revenue Share", href: "#" },
            { label: "IP Guidelines", href: "#" },
        ],
    },
    {
        title: "Company",
        links: [
            { label: "About", href: "#" },
            { label: "Blog", href: "#" },
            { label: "Discord", href: "#" },
            { label: "Reddit", href: "#" },
        ],
    },
    {
        title: "Legal",
        links: [
            { label: "Terms of Service", href: "#" },
            { label: "Privacy Policy", href: "#" },
            { label: "Competition Rules", href: "#" },
            { label: "Creator Agreement", href: "#" },
        ],
    },
];

const TAGS = ["NixOS Friendly", "Open Source", "r/unixporn"];

export default function Footer() {
    return (
        <footer className="border-obsidian border-t px-5 py-10 sm:px-10 xl:px-24">
            <div className="flex flex-col justify-between gap-y-6 xl:flex-row">
                <div className="xs:max-w-fit xs:min-w-fit">
                    <h3 className="font-syne mb-3 text-2xl leading-none font-extrabold">
                        Rice
                        <span className="text-phosphor">Hub</span>
                    </h3>
                    <i className="font-fraunces text-muted mb-6 block leading-none font-light sm:mb-10">
                        "Your desktop, authored."
                    </i>
                    <NotifyForm />
                </div>

                <div className="grid grid-cols-2 gap-5 sm:grid-cols-4 sm:gap-10">
                    {SECTIONS.map(({ title, links }, idx) => (
                        <div key={idx} className="font-epilogue flex flex-col">
                            <h3 className="mb-4 text-base leading-none sm:mb-6 sm:text-xl">
                                {title}
                            </h3>
                            <ul>
                                {links.map(({ label, href }, lidx) => (
                                    <li
                                        key={lidx}
                                        className="text-2xs leading-none not-last:mb-3 sm:text-sm"
                                    >
                                        <a
                                            href={href}
                                            className="text-parchment/44 hover:text-phosphor"
                                        >
                                            {label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>

            <div className="my-8 h-px bg-white/7 sm:mt-11" />

            <div className="font-dm-mono flex flex-col items-center justify-between gap-y-4 uppercase lg:flex-row">
                <p className="text-parchment/16 text-2xs leading-none tracking-[0.15em]">
                    © 2026 <span className="text-phosphor">RiceHub</span> ·
                    Building in stealth · All rights reserved
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
