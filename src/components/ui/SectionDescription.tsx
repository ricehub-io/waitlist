import { cn } from "@/lib/utils";
import { ComponentChildren } from "preact";

interface SectionDescriptionProps {
    text: ComponentChildren;
    className?: string;
}

export default function SectionDescription({
    text,
    className,
}: SectionDescriptionProps) {
    return (
        <p
            className={cn(
                "text-muted text-sm leading-normal tracking-[0.021em] sm:text-base sm:tracking-[0.019em]",
                className,
            )}
        >
            {text}
        </p>
    );
}
