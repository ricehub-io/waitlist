interface SectionDescriptionProps {
    text: string;
}

export default function SectionDescription({ text }: SectionDescriptionProps) {
    return <p className="text-muted tracking-[0.019em]">{text}</p>;
}
