import { cn } from "@/lib/utils";

// prettier-ignore
const LINES = [
    <>   → Fetching flake from registry...</>,
    <>   → Resolving dependency graph via Nix...</>,
    <>     └─ hyprland 0.42.0</>,
    <>     └─ catppuccin-gtk 4.3.1</>,
    <>     └─ JetBrainsMono-NF 3.1.1</>,
    <>     └─ waybar 0.10.4 · rofi 1.7.5</>,
    <><span className="text-phosphor">     47 packages locked · hashes verified</span></>,
    <>   → Applying Home Manager config...</>,
    <><span className="text-terminal-success">   ✓ ~/.config/hypr/hyprland.conf</span></>,
    <><span className="text-terminal-success">   ✓ ~/.config/waybar/config.jsonc</span></>,
    <><span className="text-terminal-success">   ✓ ~/.config/rofi/theme.rasi</span></>,
    <><span className="text-terminal-success">   ✓ GTK3 / GTK4 theme symlinked</span></>,
    <>   → Generating rollback snapshot...</>,
    <><span className="text-phosphor">   ✓ Deploy complete in 3.8s</span></>,
    <><span className="text-parchment/18">   # Undo: ricehub rollback --last</span></>,
];

export default function Terminal() {
    return (
        <div className="terminal bg-terminal border-phosphor/16 overflow-hidden rounded-sm border">
            <TitleBar />
            <Body />
        </div>
    );
}

const TitleBar = () => (
    <div className="bg-terminal-title-bar relative flex items-center gap-2 border-b border-white/4 px-3.5 py-3 text-center">
        <ColoredCircle className="bg-[#ff5f57]" />
        <ColoredCircle className="bg-[#febc2e]" />
        <ColoredCircle className="bg-[#28c840]" />
        <h4 className="font-dm-mono text-3xs text-parchment/20 absolute left-1/2 -translate-x-1/2 tracking-[0.1875em] uppercase">
            ricehub — deploy — 120×36
        </h4>
    </div>
);

const Body = () => (
    <div className="font-dm-mono px-6 pt-4 pb-10 text-xs">
        <p className="text-phosphor/50 leading-6">
            ❯
            <span className="text-parchment ml-2">
                ricehub deploy catppuccin-mocha-pro
            </span>
        </p>
        <pre className="font-dm-mono text-parchment/40 leading-6 whitespace-pre">
            {LINES.map((line, idx) => (
                <div key={idx}>{line}</div>
            ))}
        </pre>
    </div>
);

const ColoredCircle = ({ className }: { className: string }) => (
    <div className={cn("aspect-square w-2.25 rounded-full", className)} />
);
