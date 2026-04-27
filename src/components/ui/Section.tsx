import { cn } from "@/lib/utils";
import { ComponentChildren } from "preact";

interface SectionProps {
    children: ComponentChildren;
    id: string;
    className?: string;
}

export default function Section({ children, id, className }: SectionProps) {
    return (
        <section id={id} className={cn("py-10 sm:py-20", className)}>
            <div className="mx-auto flex w-[min(90%,355px)] flex-col gap-6 sm:w-[min(80%,1240px)] sm:gap-10">
                {children}
            </div>
        </section>
    );
}
