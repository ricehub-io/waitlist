import Section from "@/components/ui/Section";
import SectionBadge from "@/components/ui/SectionBadge";
import SectionDescription from "@/components/ui/SectionDescription";
import SectionTitle from "@/components/ui/SectionTitle";
import { cn } from "@/lib/utils";
import ApplyForm from "@/pages/Home/FoundingCreators/ApplyForm";

const BENEFITS = [
    "Free Pro subscription for life",
    "Homepage placement at launch",
    "Direct feature input",
    "Founding Creator badge",
    "Zero commission on first 30 sales",
];

const MAX_SPOTS = 10;
const SPOTS_TAKEN = 3;

export default function FoundingCreatorsSection() {
    return (
        <Section className="*:gap-x-20! *:gap-y-10 *:xl:flex-row">
            <div className="xl:max-w-3/7">
                <SectionBadge text="Founding creator program" />
                <SectionTitle>
                    Shape the platform before it{" "}
                    <i className="text-phosphor">launches.</i>
                </SectionTitle>
                <SectionDescription
                    text="
                    We're selecting 10 founding creators to seed the platform at
                    launch. These are the ricers whose work fills the homepage on
                    day one — and who get to influence how RiceHub works before
                    anyone else sees it.
                    "
                />
                <div className="bg-obsidian my-4 h-px w-full sm:my-6" />
                <ul className="mb-6 font-medium">
                    {BENEFITS.map((benefit, idx) => (
                        <li
                            key={idx}
                            className="flex items-center leading-normal not-last:mb-4"
                        >
                            <i className="hn hn-check text-phosphor mr-3 text-xl" />
                            {benefit}
                        </li>
                    ))}
                </ul>
                <SpotsAvailable />
            </div>

            <ApplyForm />
        </Section>
    );
}

const SpotsAvailable = () => (
    <div className="bg-phosphor/8 border-phosphor/24 flex items-center border px-6 py-3">
        <div className="flex gap-1">
            {[...Array(MAX_SPOTS)].map((_, idx) => (
                <SpotCircle
                    key={idx}
                    className={
                        idx + 1 <= SPOTS_TAKEN
                            ? "bg-phosphor border-phosphor"
                            : ""
                    }
                />
            ))}
        </div>
        <p className="font-dm-mono text-parchment/44 text-2xs ml-auto leading-none tracking-[0.15em] uppercase">
            <span className="text-phosphor">
                {SPOTS_TAKEN} / {MAX_SPOTS}
            </span>{" "}
            Spots filled
        </p>
    </div>
);

const SpotCircle = ({ className }: { className?: string | undefined }) => (
    <div
        className={cn(
            "bg-founding-creators-spot-circle border-parchment/7 aspect-square w-2.5 rounded-full border",
            className,
        )}
    />
);
