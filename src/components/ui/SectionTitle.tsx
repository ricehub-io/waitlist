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
                "font-fraunces my-4 text-[3.125rem] leading-none font-bold -tracking-[0.03em]",
                className,
            )}
        >
            {children}
        </h2>
    );
}
