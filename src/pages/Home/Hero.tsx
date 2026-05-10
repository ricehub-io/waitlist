import tlPolygon from "@/assets/tl_polygon.png";
import brPolygon from "@/assets/br_polygon.png";
import smallPolygon from "@/assets/hero_polygon_sm.png";
import NotifyForm from "@/components/ui/NotifyForm";
import { ComponentChildren } from "preact";
import { cn } from "@/lib/utils";
import EmailForm from "@/components/ui/EmailForm";
import {
    founderStats,
    slotsAvailable,
    slotsTaken,
    slotsTotal,
    waitlistCount,
} from "@/state";
import { useEffect } from "preact/hooks";
import { apiFetch } from "@/api";
import { FoundingCreatorStatsSchema } from "@/types";
import { computed } from "@preact/signals";

const ForCreatorsItems = [
    "Free Pro subscription — forever, no conditions",
    "Homepage placement on launch day",
    "Direct input on platform features",
    "Founding Creator badge on your profile",
];

const waitlistCountWithPlaceholder = computed(() =>
    waitlistCount.value !== null ? waitlistCount.value : "—",
);
const CounterItems = [
    { value: waitlistCountWithPlaceholder, label: "On waitlist" },
    { value: slotsTaken, label: "Creators confirmed" },
    { value: "Free Pro", label: "Competition Prize" },
    { value: "99%", label: "Deploy Success Rate" },
];

// TODO: split hero section into multiple components
export default function HeroSection() {
    useEffect(() => {
        apiFetch("GET", "/founders", null, FoundingCreatorStatsSchema).then(
            ([, body]) => (founderStats.value = body),
        );
    }, []);

    return (
        <section
            id="hero"
            className="relative flex-1 overflow-hidden pt-3 sm:pt-0"
        >
            <img
                src={tlPolygon}
                alt=""
                width={247}
                height={281}
                className="pointer-events-none absolute top-0 left-0 -z-10 hidden sm:block"
            />
            <img
                src={brPolygon}
                alt=""
                width={192}
                height={250}
                className="pointer-events-none absolute right-0 bottom-10 -z-10 hidden sm:block"
            />
            <img
                src={smallPolygon}
                alt=""
                width={64}
                height={109}
                className="pointer-events-none absolute top-0 left-0 -z-10 -translate-y-1/3 sm:hidden"
            />

            <div className="mx-auto flex w-[min(90%,355px)] flex-col items-center gap-y-6 py-10 sm:w-[min(80%,900px)] sm:gap-y-10 sm:px-0 sm:py-20">
                <div className="flex flex-col items-center gap-y-4 sm:gap-y-6">
                    <div className="font-dm-mono text-3xs tracking-[0.25em] uppercase sm:text-xs sm:tracking-[0.14em]">
                        <p className="bg-phosphor/8 border-phosphor/24 text-phosphor inline-block border px-2 py-1 align-middle font-medium sm:px-4 sm:py-2">
                            Pre-launch
                        </p>
                        <div className="border-slate bg-obsidian inline-flex items-center gap-2 border px-2 py-1 align-middle sm:px-4 sm:py-2">
                            <Dot />
                            <p className="text-amber-alert">
                                Stealth Mode — Coming Soon
                            </p>
                        </div>
                    </div>
                    <h1 className="font-fraunces text-center text-[2.5rem] leading-none font-bold -tracking-[0.025em] sm:text-[4.875rem] sm:-tracking-[0.035em]">
                        The marketplace for <br className="hidden lg:block" />{" "}
                        Linux ricing <br className="sm:hidden" />
                        <i className="text-phosphor">is almost here.</i>
                    </h1>
                </div>

                <p
                    id="join-waitlist"
                    className="text-parchment/44 text-center text-sm font-light sm:text-base"
                >
                    <span className="text-parchment font-medium">RiceHub</span>{" "}
                    is a premium marketplace for Linux{" "}
                    <br className="sm:hidden" /> desktop configurations — with{" "}
                    <span className="text-parchment font-medium">
                        one-click Nix Flake deployment
                    </span>
                    , <br className="hidden lg:block" />
                    creator monetization, and monthly cash competitions. We
                    launch soon. Be first.
                </p>

                <div>
                    <div className="grid grid-cols-1 gap-0.5 lg:grid-cols-2">
                        <Panel>
                            <PanelTextWithDot
                                text="For buyers"
                                className="bg-phosphor"
                            />
                            <div>
                                <PanelHeading text="Get early access" />
                                <p className="text-sm leading-normal sm:text-base">
                                    Be first to browse and deploy when we go
                                    live. Early access members get a permanent{" "}
                                    <span className="text-phosphor">
                                        20% discount
                                    </span>{" "}
                                    on all premium rices, forever.
                                </p>
                            </div>
                            <div>
                                <NotifyForm />
                                <p className="font-dm-mono text-3xs sm:text-2xs mt-2 leading-none tracking-[0.125em] sm:tracking-widest">
                                    Early access ={" "}
                                    <span className="text-phosphor">
                                        20% off all rices
                                    </span>{" "}
                                    at launch. No spam.
                                </p>
                            </div>
                        </Panel>
                        <Panel>
                            <PanelTextWithDot
                                text="For creators"
                                className="bg-cyan"
                            />
                            <div>
                                <PanelHeading text="Founding Creator" />
                                <p className="text-sm leading-normal sm:text-base">
                                    We're selecting {slotsTotal} founding
                                    creators to launch the platform. Your rice
                                    on the homepage.{" "}
                                    <span className="text-cyan">
                                        Free Pro for life.
                                    </span>
                                </p>
                                <ul className="text-3xs mt-2 list-inside p-0 sm:mt-4 sm:text-xs">
                                    {ForCreatorsItems.map((text, idx) => (
                                        <ArrowLi key={idx} text={text} />
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <EmailForm
                                    buttonText="Apply Now"
                                    className="bg-cyan"
                                />
                                <p className="font-dm-mono text-3xs sm:text-2xs mt-2 leading-none tracking-[0.125em] sm:tracking-widest">
                                    Only{" "}
                                    <span className="text-cyan">
                                        {slotsAvailable} spots
                                    </span>{" "}
                                    remaining.
                                </p>
                            </div>
                        </Panel>
                    </div>

                    <div className="mt-0.5 grid grid-cols-2 gap-0.5 lg:grid-cols-4">
                        {CounterItems.map(({ value, label }, idx) => (
                            <div
                                key={idx}
                                className="flex h-full flex-col justify-center border border-white/7 bg-white/2 p-6 sm:px-4.5 sm:py-3"
                            >
                                <p
                                    className={`font-syne mb-2.5 text-xl leading-none font-extrabold -tracking-[0.05em] sm:mb-2 sm:text-2xl sm:-tracking-[0.042em] ${idx % 2 == 0 ? "text-phosphor" : ""}`}
                                >
                                    {value}
                                </p>
                                <p className="font-dm-mono text-parchment/44 text-3xs leading-none tracking-[0.25em] uppercase sm:text-xs sm:tracking-[0.17em]">
                                    {label}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <ScrollingText />
        </section>
    );
}

const Dot = ({ className }: { className?: string }) => (
    <span
        className={cn(
            "bg-amber-alert inline-block aspect-square w-1.5 rounded-full",
            className,
        )}
    />
);

const Panel = ({
    id,
    children,
}: {
    id?: string;
    children: ComponentChildren;
}) => (
    <div
        id={id}
        className="border-obsidian bg-pitch text-muted flex flex-1 flex-col gap-y-6 border p-6 sm:gap-y-10 sm:p-10"
    >
        {children}
    </div>
);

const PanelTextWithDot = ({
    text,
    className,
}: {
    text: string;
    className: string;
}) => (
    <p className="font-dm-mono text-3xs flex items-center gap-2 leading-none tracking-[0.3125em] uppercase sm:text-xs sm:tracking-[0.21em]">
        <Dot className={className} />
        {text}
    </p>
);

const PanelHeading = ({ text }: { text: string }) => (
    <h2 className="font-syne text-parchment mb-2 text-base leading-none font-extrabold -tracking-[0.025em] sm:text-xl sm:-tracking-[0.02em]">
        {text}
    </h2>
);

const ArrowLi = ({ text }: { text: string }) => (
    <li className="before:text-cyan flex items-center gap-2 leading-none before:text-xs before:content-['→'] before:sm:text-lg">
        {text}
    </li>
);

const ScrollingText = () => {
    const AccentDot = () => <Dot className="bg-phosphor" />;
    const Text = ({ children }: { children: ComponentChildren }) => (
        <p className="border-obsidian flex items-center justify-center gap-3 border-r px-7 py-3 leading-none">
            {children}
        </p>
    );

    return (
        <div className="bg-pitch border-obsidian text-muted w-full border-t border-b">
            <div className="text-scroll-container font-dm-mono text-3xs flex overflow-clip tracking-[0.25em] whitespace-nowrap uppercase sm:text-xs sm:tracking-[0.17em]">
                {[0, 1, 2].map((v) => (
                    <div key={v} className="flex shrink-0">
                        <Text>
                            <AccentDot />
                            Coming soon{" "}
                            <span className="text-phosphor">RICEHUB</span> - THE
                            MARKETPLACE FOR LINUX RICING
                        </Text>
                        <Text>
                            <AccentDot />
                            {slotsTotal} FOUNDING CREATOR SPOTS -
                            <span className="text-cyan">
                                {slotsAvailable} REMAINING
                            </span>
                        </Text>
                    </div>
                ))}
            </div>
        </div>
    );
};
