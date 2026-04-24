import bg from "@/assets/final_cta_bg.png";
import Button from "@/components/ui/Button";
import Section from "@/components/ui/Section";
import SectionDescription from "@/components/ui/SectionDescription";
import SectionTitle from "@/components/ui/SectionTitle";

export default function FinalCTASection() {
    return (
        <Section className="py-40">
            <div className="relative flex flex-col items-center gap-10 px-25 py-20">
                <img
                    className="absolute top-0 left-0 z-10 h-full w-full"
                    src={bg}
                    alt=""
                    aria-hidden
                />
                <div className="z-20 flex max-w-4/7 flex-col items-center text-center">
                    <p className="font-dm-mono text-2xs text-phosphor bg-phosphor/8 border-phosphor/24 inline-block border px-3.5 py-1 leading-none tracking-[0.2em] uppercase">
                        Pre-Launch · Waitlist Open
                    </p>
                    <SectionTitle className="text-[4.875rem] leading-none -tracking-[0.032em]">
                        Be there
                        <br />
                        on day <i className="text-phosphor">one.</i>
                    </SectionTitle>
                    <SectionDescription
                        className="text-xl tracking-normal"
                        text="
                    340 ricers are already waiting. Join them and get early
                    access, permanent pricing, and the chance to shape
                    the platform before it goes public."
                    />
                </div>
                <div className="z-20">
                    <div className="mb-4 grid grid-cols-2 gap-x-6">
                        <Button label="Join the Waitlist" />
                        <Button
                            label="Apply as Founding Creator"
                            variant="outline"
                        />
                    </div>
                    <p className="font-dm-mono text-2xs text-slate text-center leading-none tracking-[0.2em] uppercase">
                        No credit card · No spam · Cancel waitlist anytime
                    </p>
                </div>
            </div>
        </Section>
    );
}
