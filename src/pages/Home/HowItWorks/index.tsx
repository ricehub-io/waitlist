import Section from "@/components/ui/Section";
import SectionBadge from "@/components/ui/SectionBadge";
import SectionTitle from "@/components/ui/SectionTitle";
import { Card } from "@/pages/Home/HowItWorks/types";

const CARDS: Card[] = [
    {
        icon: <i class="hn hn-upload" />,
        title: "Upload your rice",
        description:
            "Screenshot first, code second. Post you aesthetic instantly — no documentation required. When you're ready to sell, our guide walks you through Nix Flake packaging.",
        command: "ricehub upload --screenshot ./desktop.png",
    },
    {
        icon: <i class="hn hn-vote-yeah" />,
        title: "We audit & Package",
        description:
            "We verify your config is clean, then package it as a Nix Flake - a cryptographic dependency graph that guarantees zero-breakage deployment on any compatible system.",
        command: "ricehub shellcheck",
        output: "passed • Entropy Normal",
    },
    {
        icon: <i class="hn hn-wallet" />,
        title: "Earn 85% of sale",
        description:
            "Keep 85% of every sale - no delayed payouts, no cancelled cheques. Compete monthly for $500 + prize pools. Your craft has an economy now.",
        command: "ricehub earnings --month march",
        output: "+$284.00 • 23 deploys • 2 competition pts",
    },
];

export default function HowItWorksSection() {
    return (
        <Section className="bg-pitch border-obsidian border-y">
            <div>
                <SectionBadge text="Simple by design" />
                <SectionTitle>
                    From terminal to <i className="text-phosphor">income.</i>
                </SectionTitle>
            </div>
            <ol className="grid grid-cols-3 gap-6">
                {CARDS.map((card, idx) => (
                    <li key={idx}>
                        <StepCard index={idx + 1} {...card} />
                    </li>
                ))}
            </ol>
        </Section>
    );
}

const StepCard = ({
    index,
    icon,
    title,
    description,
    command,
    output,
}: Card & { index: number }) => (
    <div className="bg-void border-obsidian relative flex h-full flex-col gap-10 border p-10">
        {/* rectangle in top left corner */}
        <div className="bg-phosphor absolute top-0 left-0 h-2.5 w-6" />

        {/* heading */}
        <div className="flex items-center justify-between">
            <div className="text-void bg-phosphor flex items-center justify-center p-3 text-2xl">
                {icon}
            </div>
            <h3 className="font-fraunces text-phosphor/4 text-[5.5rem] leading-none font-bold -tracking-[0.045em]">
                0{index}
            </h3>
        </div>

        {/* content */}
        <div>
            <h4 className="font-syne text-xl font-extrabold whitespace-nowrap">
                {title}
            </h4>
            <p className="text-muted mt-2 leading-6">{description}</p>
        </div>

        {/* terminal */}
        <div className="bg-pitch border-obsidian text-phosphor font-dm-mono text-2xs mt-auto border px-5 py-2.5 leading-4.5">
            <samp>
                $ {command}
                <br />
                <span className="text-phosphor-dark">{output}</span>
            </samp>
        </div>
    </div>
);
