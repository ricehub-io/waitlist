import Section from "@/components/ui/Section";
import SectionBadge from "@/components/ui/SectionBadge";
import SectionDescription from "@/components/ui/SectionDescription";
import SectionTitle from "@/components/ui/SectionTitle";
import FeatureList from "@/pages/Home/TerminalDeploy/FeatureList";
import Terminal from "@/pages/Home/TerminalDeploy/Terminal";

export default function TerminalDeploySection() {
    return (
        <Section className="from-phosphor/4 to-phosphor/0 bg-radial to-20% bg-size-[200%_200%] bg-position-[70%_45%]">
            <div className="max-w-5/8">
                <SectionBadge text="Zero-breakage deploy" />
                <SectionTitle>
                    Works on your machine{" "}
                    <i className="text-phosphor">flawlessly.</i>
                </SectionTitle>
                <SectionDescription
                    text="
                    Traditional dotflie installs fail when your system doesn't
                    match the creator's environment. Nix Flakes lock every single
                    dependency into a cryptographic graph - so you get the exact
                    same desktop the creator intended every time.
                    "
                />
            </div>

            <div className="grid grid-cols-2 gap-10">
                <Terminal />
                <FeatureList />
            </div>
        </Section>
    );
}
