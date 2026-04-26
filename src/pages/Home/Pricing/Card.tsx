import Button from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { ComponentChildren } from "preact";

interface PricingCardProps {
    title: string;
    badge: string;
    price: number;
    note: string;
    benefits: ComponentChildren[];
    noBenefits?: ComponentChildren[];
    variant?: "normal" | "accent";
    buttonLabel: string;
    footerText: string;
}

export default function PricingCard({
    title,
    badge,
    price,
    note,
    benefits,
    noBenefits = [],
    variant = "normal",
    buttonLabel,
    footerText,
}: PricingCardProps) {
    return (
        <div
            className={cn(
                "border-slate bg-obsidian relative flex overflow-hidden border p-6 sm:p-10",
                variant === "accent" && "border-phosphor/20 bg-void",
            )}
        >
            {variant === "accent" && (
                <>
                    {/* gradient */}
                    <div className="from-phosphor/7 to-phosphor/0 absolute top-0 left-0 z-10 h-full w-full bg-radial to-60% bg-size-[200%_200%] bg-position-[100%_90%]" />
                    {/* top right badge */}
                    <p className="text-parchment/44 font-dm-mono text-3xs absolute top-4 right-5 border border-white/7 px-2 py-1 tracking-[0.25em] uppercase">
                        Early Access
                    </p>
                </>
            )}

            <div className="z-20 flex h-full w-full flex-col items-start">
                <p
                    className={`${variant === "normal" ? "border-slate text-muted border" : "bg-phosphor text-dark-text"} font-dm-mono text-2xs mb-2 px-2.5 py-1 leading-none tracking-[0.2em] uppercase`}
                >
                    {badge}
                </p>
                <h3 className="font-syne mb-5 text-xl leading-none font-extrabold -tracking-[0.02em]">
                    {title}
                </h3>

                <p
                    className={cn(
                        "font-syne mb-1 text-[3.25rem] leading-13 font-extrabold sm:mb-2",
                        variant === "accent" && "text-phosphor",
                    )}
                >
                    <sup className="text-lg">$</sup>
                    {price}
                </p>
                <p className="font-dm-mono text-parchment/44 text-2xs mb-5 tracking-[0.15em]">
                    {note}
                </p>

                <ul className="text-parchment/44 mb-15 leading-none sm:mb-10">
                    {benefits.map((el, idx) => (
                        <li
                            key={idx}
                            className="before:text-phosphor flex items-center gap-2 not-last:mb-3 before:content-['→']"
                        >
                            {el}
                        </li>
                    ))}
                    {noBenefits.map((el, idx) => (
                        <li
                            key={idx}
                            className="before:text-slate text-slate flex items-center gap-2 not-last:mb-3 before:content-['→']"
                        >
                            {el}
                        </li>
                    ))}
                </ul>

                <Button
                    className="mt-auto mb-2 w-full!"
                    label={buttonLabel}
                    variant={variant === "normal" ? "outline" : "normal"}
                />
                <p
                    className={`${variant === "accent" ? "text-muted" : "text-slate"} text-2xs font-dm-mono w-full text-center leading-none tracking-widest`}
                >
                    {footerText}
                </p>
            </div>
        </div>
    );
}
