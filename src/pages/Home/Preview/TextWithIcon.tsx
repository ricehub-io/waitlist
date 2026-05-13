import { ComponentChildren } from "preact";

export default function TextWithIcon({
    icon,
    text,
}: {
    icon: ComponentChildren;
    text: string | number;
}) {
    return (
        <p className="text-muted flex items-center gap-0.5 text-xs">
            {icon}
            {text}
        </p>
    );
}
