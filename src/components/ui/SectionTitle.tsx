import { ComponentChildren } from "preact";

interface SectionTitleProps {
    children: ComponentChildren;
}

export default function SectionTitle({ children }: SectionTitleProps) {
    return (
        <h2 className="font-fraunces my-4 text-[3.125rem] font-bold -tracking-[0.03em]">
            {children}
        </h2>
    );
}
