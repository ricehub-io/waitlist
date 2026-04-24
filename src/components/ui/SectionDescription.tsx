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
        <p className={cn("text-muted tracking-[0.019em]", className)}>{text}</p>
    );
}
