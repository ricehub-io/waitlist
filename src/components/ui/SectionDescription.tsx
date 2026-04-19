import { ComponentChildren } from "preact";

interface SectionDescriptionProps {
    text: ComponentChildren;
}

export default function SectionDescription({ text }: SectionDescriptionProps) {
    return <p className="text-muted tracking-[0.019em]">{text}</p>;
}
