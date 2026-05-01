import Section from "@/components/ui/Section";
import SectionDescription from "@/components/ui/SectionDescription";
import SectionTitle from "@/components/ui/SectionTitle";
import PricingCard from "@/pages/Home/Pricing/Card";
import scrollTo from "@/scrollTo";

const EXPLORER_BENEFITS = [
    <p>Browse and discover all rices</p>,
    <p>Deploy free rices (one-click Nix)</p>,
    <p>Upload unlimited rices publicly</p>,
    <p>4 competition entries per year</p>,
    <p>Basic earnings dashboard</p>,
];

const EXPLORER_NO_BENEFITS = [
    <p>Unlimited competition entries</p>,
    <p>22x visibility boost</p>,
    <p>20% discount on premium rices</p>,
];

const PRO_BENEFITS = [
    <p>Everything in Explorer</p>,
    <p className="text-parchment">Unlimited competition entries</p>,
    <p>
        <span className="text-parchment">22x visibility</span> in discovery
        algorithm
    </p>,
    <p>
        <span className="text-parchment">20% off</span> on all premium rices
    </p>,
    <p>Priority security audit (6h turnaround)</p>,
    <p>Featured creator profile placement</p>,
    <p>Profile customization</p>,
];

export default function PricingSection() {
    return (
        <Section
            id="pricing"
            className="*:items-center *:gap-y-10 *:sm:w-[min(80%,900px)]"
        >
            <div className="text-center sm:max-w-145.5">
                <p className="text-phosphor font-dm-mono text-3xs sm:text-2xs leading-none tracking-[0.375em] uppercase sm:tracking-[0.3em]">
                    Pricing
                </p>
                <SectionTitle>
                    Simple, honest <i className="text-phosphor">pricing.</i>
                </SectionTitle>
                <SectionDescription
                    text="
                    Join the waitlist now and lock in early access pricing.
                    The 20% discount for waitlist members is permanent — it never goes away."
                />
            </div>

            <div className="grid grid-cols-1 gap-4 sm:gap-6 lg:grid-cols-2">
                <PricingCard
                    title="Explorer"
                    badge="Free Tier"
                    price={0}
                    note="Forever free"
                    buttonLabel="Join Waitlist — Free"
                    footerText="No credit card. No commitment."
                    benefits={EXPLORER_BENEFITS}
                    noBenefits={EXPLORER_NO_BENEFITS}
                    onJoin={() => scrollTo("join-waitlist")}
                />
                <PricingCard
                    variant="accent"
                    title="RiceHub Pro"
                    badge="Pro Pass"
                    price={9}
                    note="Per month · Cancel anytime · Waitlist members lock this price forever"
                    buttonLabel="Join Waitlist — Pro"
                    footerText="Lock in your price forever"
                    benefits={PRO_BENEFITS}
                />
            </div>
        </Section>
    );
}
