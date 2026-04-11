import NotifyForm from "@/components/ui/NotifyForm";

const Sections = [
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

const Tags = ["NixOS Friendly", "Open Source", "r/unixporn"];

export default function Footer() {
    return (
        <footer className="border-obsidian border-t px-24 py-10">
            {/* top section */}
            <div className="flex justify-between">
                {/* left side */}
                <div>
                    <h3 className="font-syne mb-2 text-2xl font-extrabold">
                        Rice
                        <span className="text-phosphor">Hub</span>
                    </h3>
                    <i className="font-fraunces text-muted mb-10 block font-light">
                        "Your desktop, authored."
                    </i>
                    <NotifyForm />
                </div>
                {/* right side */}
                <div className="flex gap-10">
                    {Sections.map(({ title, links }, idx) => (
                        <div key={idx} className="font-epilogue flex flex-col">
                            <h3 className="mb-6 text-xl">{title}</h3>
                            <ul>
                                {links.map(({ label, href }, lidx) => (
                                    <li key={lidx} className="not-last:mb-3">
                                        <a
                                            href={href}
                                            className="text-muted text-sm"
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
            {/* separator */}
            <div className="mt-11 mb-8 h-px bg-white/7" />
            {/* bottom section */}
            <div className="font-dm-mono flex justify-between uppercase">
                <p className="text-parchment/16 text-2xs tracking-[0.105em]">
                    © 2026 <span className="text-phosphor">Rice Hub</span> ·
                    Building in stealth · All rights reserved
                </p>
                <ul>
                    {Tags.map((text, idx) => (
                        <li
                            key={idx}
                            className="bg-phosphor/9 border-phosphor/20 text-phosphor text-3xs inline border px-2.5 py-1 tracking-[0.105em] not-first:ml-1.5"
                        >
                            {text}
                        </li>
                    ))}
                </ul>
            </div>
        </footer>
    );
}
