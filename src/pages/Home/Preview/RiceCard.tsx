import { PreviewRice } from "@/types";
import { ComponentChildren } from "preact";

export default function RiceCard({
    title,
    price,
    thumbnailUrl,
    tags,
    downloadCount: downloads,
    starCount: stars,
}: PreviewRice) {
    return (
        <div className="bg-obsidian border-slate font-dm-mono relative flex h-full flex-col border">
            <img className="w-full" src={thumbnailUrl} alt="thumbnail" />
            <div className="flex h-full flex-col gap-2 px-4 py-3.5">
                <div className="flex items-center justify-between leading-none">
                    <p className="font-syne font-bold -tracking-[0.0125em]">
                        {title}
                    </p>
                    {price !== undefined ? (
                        <p className="text-phosphor">${price.toFixed(2)}</p>
                    ) : (
                        <p className="text-parchment/44">Free</p>
                    )}
                </div>

                <ul className="text-phosphor text-3xs flex gap-1 leading-none tracking-[0.1875em] uppercase">
                    {tags.map((tag, idx) => (
                        <li
                            key={idx}
                            className="border-phosphor/10 border px-2 py-0.5"
                        >
                            {tag}
                        </li>
                    ))}
                </ul>

                <div className="mt-auto h-px w-full bg-white/7 sm:h-0.5" />
                <div className="flex items-center gap-2">
                    <p className="text-2xs text-slate mr-auto tracking-[0.05em]">
                        Curated with permission
                    </p>
                    <TextWithIcon text={downloads} icon={<ArrowIcon />} />
                    <TextWithIcon text={stars} icon={<StarIcon />} />
                </div>
            </div>

            {/* TODO: use component for this */}
            <p className="text-3xs text-amber-alert bg-dark-text/80 border-amber-alert/30 absolute top-2 left-2 border px-2 py-1 tracking-[0.1875em] uppercase backdrop-blur-xs">
                At launch
            </p>
            <p className="text-3xs text-phosphor bg-dark-text/80 border-phosphor/30 absolute top-2 right-2 border px-2 py-1 tracking-[0.1875em] uppercase backdrop-blur-xs">
                Nix ✓
            </p>
        </div>
    );
}

// TODO: pass class list to icon
const TextWithIcon = ({
    icon,
    text,
}: {
    icon: ComponentChildren;
    text: number;
}) => (
    <p className="text-muted flex items-center gap-0.5 text-xs">
        {icon}
        {text}
    </p>
);

const ArrowIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-4"
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18"
        />
    </svg>
);

const StarIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-4"
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
        />
    </svg>
);
