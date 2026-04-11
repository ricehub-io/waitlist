interface SectionBadgeProps {
    text: string;
}

export default function SectionBadge({ text }: SectionBadgeProps) {
    return (
        <p className="font-dm-mono text-2xs text-phosphor flex items-center gap-2 tracking-[0.3em] uppercase">
            <span className="bg-phosphor inline-block h-px w-4" />
            {text}
        </p>
    );
}
