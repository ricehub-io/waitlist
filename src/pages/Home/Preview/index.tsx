import { apiFetch } from "@/api";
import Button from "@/components/ui/Button";
import Section from "@/components/ui/Section";
import SectionBadge from "@/components/ui/SectionBadge";
import SectionDescription from "@/components/ui/SectionDescription";
import SectionTitle from "@/components/ui/SectionTitle";
import RiceCard from "@/pages/Home/Preview/RiceCard";
import scrollTo from "@/scrollTo";
import { founderStats } from "@/state";
import { PreviewRice, PreviewRiceSchema } from "@/types";
import { useSignal } from "@preact/signals";
import { useEffect } from "preact/hooks";

export default function PreviewSection() {
    const rices = useSignal<PreviewRice[]>([]);

    useEffect(() => {
        apiFetch("GET", "/rices", null, PreviewRiceSchema.array()).then(
            ([, body]) => (rices.value = body),
        );
    }, []);

    return (
        <Section id="preview">
            <div className="lg:max-w-146.25">
                <SectionBadge text="Preview — At Launch" />
                <SectionTitle>
                    A taste of what's <i className="text-phosphor">coming.</i>
                </SectionTitle>
                <SectionDescription
                    text="
                    These are real rices from the community, imported with
                    explicit creator permission. They represent the quality and
                    style of configs that will be on the platform at launch.
                    Every one is Nix Flake compatible."
                />
            </div>

            <ul className="grid grid-cols-1 gap-0.5 sm:grid-cols-2 lg:grid-cols-3">
                {rices.value.map((rice) => (
                    <li key={rice.id}>
                        <RiceCard {...rice} />
                    </li>
                ))}
                <li className="md:min-h-70">
                    <div className="border-slate flex h-80 flex-col items-center justify-center gap-4 border-2 border-dashed md:h-full">
                        <button className="bg-phosphor flex aspect-square cursor-pointer items-center justify-center p-5 text-black">
                            <i class="hn hn-plus text-4xl" />
                        </button>
                        <p className="font-syne text-xl font-bold">
                            Add Your Rice
                        </p>
                    </div>
                </li>
            </ul>

            <div className="bg-phosphor/8 border-phosphor/24 flex flex-col justify-between gap-y-4 border p-4 sm:px-7 sm:py-6 xl:flex-row xl:items-center">
                <div>
                    <h3 className="font-syne mb-2 text-base leading-none font-extrabold sm:text-xl">
                        Have a rice you want featured at launch?
                    </h3>
                    <p className="font-dm-mono text-parchment/44 text-3xs leading-none tracking-[0.125em] sm:text-xs sm:tracking-[0.08em]">
                        Apply for the Founding Creator Program —{" "}
                        {founderStats.value.slotsAvailable} spots left.
                    </p>
                </div>
                <Button
                    className="w-full! lg:w-fit!"
                    label="Apply as Founding Creator"
                    onClick={() => scrollTo("founding-creators")}
                />
            </div>
        </Section>
    );
}
