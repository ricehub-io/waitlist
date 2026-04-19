import FaqSection from "@/pages/Home/Faq";
import FoundingCreatorsSection from "@/pages/Home/FoundingCreators";
import HeroSection from "@/pages/Home/Hero";
import HowItWorksSection from "@/pages/Home/HowItWorks";
import PreviewSection from "@/pages/Home/Preview";
import PricingSection from "@/pages/Home/Pricing";
import TerminalDeploySection from "@/pages/Home/TerminalDeploy";

export default function Home() {
    return (
        <div className="flex flex-1 flex-col">
            <HeroSection />
            <PreviewSection />
            <HowItWorksSection />
            <TerminalDeploySection />
            <FoundingCreatorsSection />
            <PricingSection />
            <FaqSection />
        </div>
    );
}
