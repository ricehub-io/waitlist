import topLeftLines from "@/assets/final_cta_lines_tl.png";
import bottomRightLines from "@/assets/final_cta_lines_br.png";
import topLeftLinesSm from "@/assets/final_cta_lines_tl-sm.png";
import bottomRightLinesSm from "@/assets/final_cta_lines_br-sm.png";
import Button from "@/components/ui/Button";
import Section from "@/components/ui/Section";
import SectionDescription from "@/components/ui/SectionDescription";
import SectionTitle from "@/components/ui/SectionTitle";

export default function FinalCTASection() {
    return (
        <Section id="final-cta" className="sm:py-40">
            <div className="bg-pitch border-obsidian relative flex flex-col items-center gap-6 border px-5 py-10 sm:gap-10 sm:px-10 sm:py-15 lg:px-15 lg:py-20 xl:px-25">
                {/* small screen lines */}
                <img
                    src={topLeftLinesSm}
                    alt=""
                    aria-hidden
                    className="pointer-events-none absolute top-0 left-0 z-10 sm:hidden"
                />
                <img
                    src={bottomRightLinesSm}
                    alt=""
                    aria-hidden
                    className="pointer-events-none absolute right-0 bottom-0 z-10 sm:hidden"
                />

                {/* med/big screen lines */}
                <img
                    src={topLeftLines}
                    alt=""
                    aria-hidden
                    className="pointer-events-none absolute top-0 left-0 z-10 hidden sm:block"
                />
                <img
                    src={bottomRightLines}
                    alt=""
                    aria-hidden
                    className="pointer-events-none absolute right-0 bottom-0 z-10 hidden sm:block"
                />

                <div className="z-20 flex flex-col items-center text-center sm:max-w-132.5">
                    <p className="font-dm-mono text-3xs sm:text-2xs text-phosphor bg-phosphor/8 border-phosphor/24 inline-block border px-3 py-1 leading-none tracking-[0.25em] uppercase sm:px-3.5 sm:tracking-[0.2em]">
                        Pre-Launch · Waitlist Open
                    </p>
                    <SectionTitle className="leading-none sm:text-[4.875rem] sm:-tracking-[0.032em]">
                        Be there
                        <br />
                        on day <i className="text-phosphor">one.</i>
                    </SectionTitle>
                    <SectionDescription
                        className="text-base tracking-normal! sm:text-xl"
                        text="
                        340 ricers are already waiting. Join them and get early
                        access, permanent pricing, and the chance to shape
                        the platform before it goes public."
                    />
                </div>

                <div className="z-20">
                    <div className="mb-4 grid grid-cols-1 gap-x-6 gap-y-4 lg:grid-cols-2">
                        <Button label="Join the Waitlist" />
                        <Button
                            label="Apply as Founding Creator"
                            variant="outline"
                            className="bg-pitch"
                        />
                    </div>
                    <p className="font-dm-mono text-3xs sm:text-2xs text-slate text-center leading-none tracking-[0.25em] uppercase sm:tracking-[0.2em]">
                        No credit card · No spam · Cancel waitlist anytime
                    </p>
                </div>
            </div>
        </Section>
    );
}
