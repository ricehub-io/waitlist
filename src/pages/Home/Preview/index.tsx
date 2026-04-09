import Button from "@/components/ui/Button";
import { DevRices } from "@/pages/Home/Preview/data";
import RiceCard from "@/pages/Home/Preview/RiceCard";

export default function PreviewSection() {
    return (
        <section className="mx-auto w-[min(80%,1400px)] py-20">
            {/* heading */}
            <div className="max-w-1/2">
                <p className="font-dm-mono text-2xs text-phosphor flex items-center gap-2 tracking-[0.3em] uppercase">
                    <span className="bg-phosphor inline-block h-px w-4" />
                    Preview — At Launch
                </p>
                <h2 className="font-fraunces my-4 text-[3.125rem] font-bold -tracking-[0.03em]">
                    A taste of what's <i className="text-phosphor">coming.</i>
                </h2>
                <p className="text-muted tracking-[0.019em]">
                    These are real rices from the community, imported with
                    explicit creator permission. They represent the quality and
                    style of configs that will be on the platform at launch.
                    Every one is Nix Flake compatible.
                </p>
            </div>

            {/* example rices */}
            <ul className="my-10 grid grid-cols-3 gap-0.5">
                {DevRices.map((rice) => (
                    <li>
                        <RiceCard {...rice} />
                    </li>
                ))}
            </ul>

            {/* cta */}
            <div className="bg-phosphor/8 border-phosphor/24 flex items-center justify-between border px-7 py-6">
                <div>
                    <h3 className="font-syne mb-1 text-xl font-extrabold">
                        Have a rice you want featured at launch?
                    </h3>
                    <p className="font-dm-mono text-parchment/44 text-xs tracking-[0.08em]">
                        Apply for the Founding Creator Program — 7 spots left.
                    </p>
                </div>
                <Button label="Apply as Founding Creator" />
            </div>
        </section>
    );
}
