import { cn } from "@/lib/utils";
import { ComponentChildren } from "preact";

interface SectionTitleProps {
    children: ComponentChildren;
    className?: string;
}

export default function SectionTitle({
    children,
    className,
}: SectionTitleProps) {
    return (
        <h2
            className={cn(
                "font-fraunces my-2 text-[2.5rem] leading-tight font-bold -tracking-[0.025em] sm:my-4 sm:text-[3.125rem] sm:leading-none sm:-tracking-[0.03em]",
                className,
            )}
        >
            {children}
        </h2>
    );
}
