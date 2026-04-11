import tlPolygon from "@/assets/tl_polygon.png";
import brPolygon from "@/assets/br_polygon.png";
import NotifyForm from "@/components/ui/NotifyForm";
import { ComponentChildren } from "preact";
import { cn } from "@/lib/utils";
import EmailForm from "@/components/ui/EmailForm";

const ForCreatorsItems = [
    "Free Pro subscription — forever, no conditions",
    "Homepage placement on launch day",
    "Direct input on platform features",
    "Founding Creator badge on your profile",
];

const CounterItems = [
    { value: "343", label: "On waitlist" },
    { value: "3", label: "Creators confirmed" },
    { value: "Free Pro", label: "Competition Prize" },
    { value: "99%", label: "Deploy Success Rate" },
];

export default function HeroSection() {
    return (
        <section className="relative flex-1 overflow-hidden">
            <img
                src={tlPolygon}
                alt=""
                width={247}
                height={281}
                className="pointer-events-none absolute top-0 left-0 -z-10"
            />
            <img
                src={brPolygon}
                alt=""
                width={192}
                height={250}
                className="pointer-events-none absolute right-0 bottom-10 -z-10"
            />

            <div className="mx-auto flex w-[min(80%,900px)] flex-col items-center gap-10 py-20">
                <div className="flex flex-col items-center gap-6">
                    <div className="font-dm-mono text-xs tracking-[0.14em] uppercase">
                        <p className="bg-phosphor/8 border-phosphor/24 text-phosphor inline-block border px-4 py-2 align-middle font-medium">
                            Pre-launch
                        </p>
                        <div className="border-slate bg-obsidian inline-flex items-center gap-2 border px-4 py-2 align-middle">
                            <Dot />
                            <p className="text-amber-alert">
                                Stealth Mode — Coming Soon
                            </p>
                        </div>
                    </div>
                    <h1 className="font-fraunces text-center text-[4.875rem] leading-none font-bold -tracking-[0.035em]">
                        The marketplace for
                        <br />
                        Linux ricing{" "}
                        <i className="text-phosphor">is almost here.</i>
                    </h1>
                </div>
                <p className="text-parchment/44 text-center font-light">
                    <span className="text-parchment font-medium">Rice Hub</span>{" "}
                    is a premium marketplace for Linux deskto configurations —
                    with{" "}
                    <span className="text-parchment font-medium">
                        one-click Nix Flake deployment
                    </span>
                    ,<br />
                    creator monetization, and monthly cash competitions. We
                    launch soon. Be first.
                </p>
                <div>
                    <div className="grid grid-cols-2 gap-0.5">
                        <Panel>
                            <PanelTextWithDot
                                text="For buyers"
                                className="bg-phosphor"
                            />
                            <div>
                                <PanelHeading text="Get early access" />
                                <p className="leading-normal">
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
                                <p className="font-dm-mono text-2xs mt-2 tracking-widest">
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
                                <p className="leading-normal">
                                    We're selecting 10 founding creators to
                                    launch the platform. Your rice on the
                                    homepage.{" "}
                                    <span className="text-cyan">
                                        Free Pro for life.
                                    </span>
                                </p>
                                <ul className="mt-4 list-inside p-0 text-xs">
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
                                <p className="font-dm-mono text-2xs mt-2 tracking-widest">
                                    Only{" "}
                                    <span className="text-cyan">7 spots</span>{" "}
                                    remaining.
                                </p>
                            </div>
                        </Panel>
                    </div>
                    <div className="mt-0.5 grid grid-cols-4 gap-0.5">
                        {CounterItems.map(({ value, label }, idx) => (
                            <div
                                key={idx}
                                className="border border-white/7 bg-white/2 px-4.5 py-3"
                            >
                                <p
                                    className={`font-syne mb-1 text-2xl font-extrabold ${idx % 2 == 0 ? "text-phosphor" : ""}`}
                                >
                                    {value}
                                </p>
                                <p className="font-dm-mono text-parchment/44 text-xs tracking-[0.17em] uppercase">
                                    {label}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {/* bottom banner */}
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

const Panel = ({ children }: { children: ComponentChildren }) => (
    <div className="border-obsidian bg-pitch text-muted flex flex-1 flex-col gap-10 border p-10">
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
    <p className="font-dm-mono flex items-center gap-2 text-xs tracking-[0.21em] uppercase">
        <Dot className={className} />
        {text}
    </p>
);

const PanelHeading = ({ text }: { text: string }) => (
    <h2 className="font-syne text-parchment mb-2 text-xl font-extrabold -tracking-[0.02em]">
        {text}
    </h2>
);

const ArrowLi = ({ text }: { text: string }) => (
    <li className="before:text-cyan flex items-center gap-2 before:text-lg before:content-['→']">
        {text}
    </li>
);

const ScrollingText = () => {
    const AccentDot = () => <Dot className="bg-phosphor" />;
    const Text = ({ children }: { children: ComponentChildren }) => (
        <p className="border-obsidian flex items-center justify-center gap-3 border-r px-7 py-3">
            {children}
        </p>
    );

    return (
        <div className="bg-pitch border-obsidian text-muted w-full border-t border-b">
            <div className="text-scroll-container font-dm-mono flex text-xs tracking-[0.17em] whitespace-nowrap uppercase">
                {[0, 1].map((v) => (
                    <div key={v} className="flex shrink-0">
                        <Text>
                            <AccentDot />
                            Coming soon{" "}
                            <span className="text-phosphor">RICE HUB</span> -
                            THE MARKETPLACE FOR LINUX RICING
                        </Text>
                        <Text>
                            <AccentDot />
                            LAUNCH COMPETITION OPEN NOW -{" "}
                            <span className="text-phosphor">
                                SUBMIT YOUR RICE
                            </span>
                        </Text>
                        <Text>
                            <AccentDot />
                            10 FOUNDING CREATOR SPOTS -{" "}
                            <span className="text-cyan">7 REMAINING</span>
                        </Text>
                    </div>
                ))}
            </div>
        </div>
    );
};
