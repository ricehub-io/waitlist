import HeroSection from "@/pages/Home/Hero";
import HowItWorksSection from "@/pages/Home/HowItWorks";
import PreviewSection from "@/pages/Home/Preview";
import TerminalDeploySection from "@/pages/Home/TerminalDeploy";

export default function Home() {
    return (
        <div className="flex flex-1 flex-col">
            <HeroSection />
            <PreviewSection />
            <HowItWorksSection />
            <TerminalDeploySection />
        </div>
    );
}
