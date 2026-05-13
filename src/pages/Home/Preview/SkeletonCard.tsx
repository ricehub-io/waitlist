import ArrowIcon from "@/pages/Home/Preview/ArrowIcon";
import StarIcon from "@/pages/Home/Preview/StarIcon";
import TextWithIcon from "@/pages/Home/Preview/TextWithIcon";
import { AspectRatio } from "radix-ui";

export default function SkeletonCard() {
    return (
        <div className="bg-obsidian border-slate font-dm-mono relative flex h-full flex-col border">
            <AspectRatio.Root ratio={16 / 9}>
                <div className="bg-muted/30 h-full w-full animate-pulse" />
            </AspectRatio.Root>
            <div className="flex h-full flex-col gap-2 px-4 py-3.5">
                <div className="flex items-center justify-between leading-none">
                    <p className="font-syne font-bold -tracking-[0.0125em]">
                        —
                    </p>
                    <p className="text-parchment/44">—</p>
                </div>

                <ul className="text-phosphor text-3xs flex gap-1 leading-none tracking-[0.1875em] uppercase">
                    <li className="border-phosphor/10 border px-2 py-0.5">
                        ————
                    </li>
                </ul>

                <div className="mt-auto h-px w-full bg-white/7 sm:h-0.5" />
                <div className="flex items-center gap-2">
                    <p className="text-2xs text-slate mr-auto tracking-[0.05em]">
                        Curated with permission
                    </p>
                    <TextWithIcon text="—" icon={<ArrowIcon />} />
                    <TextWithIcon text="—" icon={<StarIcon />} />
                </div>
            </div>

            <p className="text-3xs text-amber-alert bg-dark-text/80 border-amber-alert/30 absolute top-2 left-2 border px-2 py-1 tracking-[0.1875em] uppercase backdrop-blur-xs">
                At launch
            </p>
        </div>
    );
}
