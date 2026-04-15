import Section from "@/components/ui/Section";
import SectionDescription from "@/components/ui/SectionDescription";
import SectionTitle from "@/components/ui/SectionTitle";
import PricingCard from "@/pages/Home/Pricing/Card";

export default function PricingSection() {
    return (
        <Section className="*:w-[min(80%,900px)] *:items-center">
            <div className="max-w-5/7 text-center">
                <p className="text-phosphor font-dm-mono text-2xs leading-none tracking-[0.3em] uppercase">
                    Pricing
                </p>
                <SectionTitle>
                    Simple, honest <i className="text-phosphor">pricing.</i>
                </SectionTitle>
                <SectionDescription
                    text="
                Join the waitlist now and lock in early access pricing.
                The 20% discount for waitlist members is permanent — it never goes away.
                "
                />
            </div>
            <div className="grid grid-cols-2 gap-6">
                <PricingCard
                    title="Explorer"
                    badge="Free Tier"
                    price={0}
                    note="Forever free"
                    buttonLabel="Join Waitlist — Free"
                    buttonVariant="outline"
                    footerText="No credit card. No commitment."
                    benefits={[
                        "Browse and discover all rices",
                        "Deploy free rices (one-click Nix)",
                        "Upload unlimited rices publicly",
                        "4 competition entries per year",
                        "Basic earnings dashboard",
                    ]}
                />
                <PricingCard
                    title="RiceHub Pro"
                    badge="Pro Pass"
                    price={9}
                    note="Per month · Cancel anytime · Waitlist members lock this price forever"
                    buttonLabel="Join Waitlist — Pro"
                    buttonVariant="normal"
                    footerText="Lock in your price forever"
                    benefits={[
                        "Everything in Explorer",
                        "Unlimited competition entries",
                        "22x visibility in discovery algorithm",
                        "20% off on all premium rices",
                        "Priority security audit (6h turnaround)",
                        "Featured creator profile placement",
                        "Profile customization",
                    ]}
                />
            </div>
        </Section>
    );
}
