import Button, { ButtonType } from "@/components/ui/Button";

interface PricingCardProps {
    title: string;
    badge: string;
    price: number;
    note: string;
    benefits: string[];
    buttonLabel: string;
    buttonVariant: ButtonType;
    footerText: string;
}

export default function PricingCard({
    title,
    badge,
    price,
    note,
    benefits,
    buttonLabel,
    buttonVariant,
    footerText,
}: PricingCardProps) {
    return (
        <div className="border-slate bg-obsidian border p-10">
            <p className="border-slate font-dm-mono text-2xs text-muted mb-2 inline-block border px-2.5 py-1 tracking-[0.2em] uppercase">
                {badge}
            </p>
            <h3 className="font-syne mb-5 text-xl leading-none font-extrabold -tracking-[0.02em]">
                {title}
            </h3>
            <p className="font-syne mb-2 text-[3.25rem] leading-13 font-extrabold">
                <sup className="text-lg">$</sup>
                {price}
            </p>
            <p className="font-dm-mono text-parchment/44 text-2xs mb-5 tracking-[0.15em]">
                {note}
            </p>
            <ul className="text-parchment/44 mb-10 leading-none">
                {benefits.map((benefit, idx) => (
                    <li
                        key={idx}
                        className="before:text-phosphor flex items-center gap-2 not-last:mb-3 before:content-['→']"
                    >
                        {benefit}
                    </li>
                ))}
            </ul>
            <Button
                className="mb-2 w-full"
                label={buttonLabel}
                variant={buttonVariant}
            />
            <p className="text-slate text-2xs font-dm-mono text-center tracking-widest">
                {footerText}
            </p>
        </div>
    );
}
