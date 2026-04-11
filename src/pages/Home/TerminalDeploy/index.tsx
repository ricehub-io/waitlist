import Section from "@/components/ui/Section";
import SectionBadge from "@/components/ui/SectionBadge";
import SectionDescription from "@/components/ui/SectionDescription";
import SectionTitle from "@/components/ui/SectionTitle";

export default function TerminalDeploySection() {
    return (
        <Section>
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
        </Section>
    );
}
