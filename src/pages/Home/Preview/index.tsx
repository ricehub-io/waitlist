import Button from "@/components/ui/Button";
import Section from "@/components/ui/Section";
import SectionBadge from "@/components/ui/SectionBadge";
import SectionDescription from "@/components/ui/SectionDescription";
import SectionTitle from "@/components/ui/SectionTitle";
import { DevRices } from "@/pages/Home/Preview/data";
import RiceCard from "@/pages/Home/Preview/RiceCard";

export default function PreviewSection() {
    return (
        <Section>
            {/* heading */}
            <div className="sm:max-w-146.25">
                <SectionBadge text="Preview — At Launch" />
                <SectionTitle>
                    A taste of what's <i className="text-phosphor">coming.</i>
                </SectionTitle>
                <SectionDescription
                    text="
                    These are real rices from the community, imported with
                    explicit creator permission. They represent the quality and
                    style of configs that will be on the platform at launch.
                    Every one is Nix Flake compatible.
                    "
                />
            </div>

            {/* example rices */}
            <ul className="grid grid-cols-1 gap-0.5 sm:grid-cols-3">
                {DevRices.map((rice, idx) => (
                    <li key={idx}>
                        <RiceCard {...rice} />
                    </li>
                ))}
                <li>
                    <div className="border-slate flex h-80 flex-col items-center justify-center gap-4 border-2 border-dashed sm:h-full">
                        <button className="bg-phosphor flex aspect-square items-center justify-center p-5 text-black">
                            <i class="hn hn-plus text-4xl" />
                        </button>
                        <p className="font-syne text-xl font-bold">
                            Add Your Rice
                        </p>
                    </div>
                </li>
            </ul>

            {/* cta */}
            <div className="bg-phosphor/8 border-phosphor/24 flex flex-col items-center justify-between gap-y-4 border p-4 sm:flex-row sm:px-7 sm:py-6">
                <div>
                    <h3 className="font-syne mb-2 text-base leading-none font-extrabold sm:text-xl">
                        Have a rice you want featured at launch?
                    </h3>
                    <p className="font-dm-mono text-parchment/44 text-3xs leading-none tracking-[0.125em] sm:text-xs sm:tracking-[0.08em]">
                        Apply for the Founding Creator Program — 7 spots left.
                    </p>
                </div>
                <Button label="Apply as Founding Creator" />
            </div>
        </Section>
    );
}
