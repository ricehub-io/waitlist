const FEATURES = [
    {
        icon: <i className="hn hn-lock" />,
        title: "Cryptographic Dependency Lock",
        description: (
            <>
                Every package hash-pinned. Installs to{" "}
                <span className="text-phosphor">/nix/store</span>, isolated from
                your base OS. No conflicts, no clobbering.
            </>
        ),
    },
    {
        icon: <i className="hn hn-save" />,
        title: "Instant Rollback",
        description: (
            <>
                Changed your mind? One command:{" "}
                <span className="text-phosphor">home-manager generations</span>.
                No residual files, no broken state.
            </>
        ),
    },
    {
        icon: <i className="hn hn-check-circle" />,
        title: "Works on Any Distro",
        description: (
            <>
                Nix installs on Arch, Ubuntu, Fedora, openSUSE and more. No
                NixOS required — just add Nix alongside your existing package
                manager.
            </>
        ),
    },
    {
        icon: <i className="hn hn-cybersecurity" />,
        title: "Audited Before It Goes Live",
        description: (
            <>
                ShellCheck + entropy analysis runs on every upload. Malicious
                scripts never reach the marketplace.
            </>
        ),
    },
];

export default function FeatureList() {
    return (
        <ul className="flex flex-col justify-between py-2">
            {FEATURES.map(({ icon, title, description }) => (
                <li className="border-obsidian flex items-start gap-4 not-last:border-b not-last:pb-6">
                    <div className="bg-phosphor flex aspect-square items-center justify-center p-2 text-black">
                        {icon}
                    </div>
                    <div>
                        <h3 className="font-syne mb-1 text-xl leading-none font-bold">
                            {title}
                        </h3>
                        <p className="text-muted *:font-dm-mono">
                            {description}
                        </p>
                    </div>
                </li>
            ))}
        </ul>
    );
}
