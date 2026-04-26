interface SectionBadgeProps {
    text: string;
}

export default function SectionBadge({ text }: SectionBadgeProps) {
    return (
        <p className="font-dm-mono text-3xs sm:text-2xs text-phosphor flex items-center gap-2 leading-none tracking-[0.375em] uppercase sm:tracking-[0.3em]">
            <span className="bg-phosphor inline-block h-px w-4" />
            {text}
        </p>
    );
}
