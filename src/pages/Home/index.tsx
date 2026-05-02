import { useEffect } from "preact/hooks";
import FaqSection from "@/pages/Home/Faq";
import FinalCTASection from "@/pages/Home/FinalCTA";
import FoundingCreatorsSection from "@/pages/Home/FoundingCreators";
import HeroSection from "@/pages/Home/Hero";
import HowItWorksSection from "@/pages/Home/HowItWorks";
import PreviewSection from "@/pages/Home/Preview";
import PricingSection from "@/pages/Home/Pricing";
import TerminalDeploySection from "@/pages/Home/TerminalDeploy";
import scrollTo from "@/scrollTo";

export default function Home() {
    useEffect(() => {
        const anchorId = sessionStorage.getItem("scrollToAnchor");
        if (!anchorId) return;
        sessionStorage.removeItem("scrollToAnchor");
        requestAnimationFrame(() => scrollTo(anchorId));
    }, []);

    return (
        <div className="flex flex-1 flex-col">
            <HeroSection />
            <PreviewSection />
            <HowItWorksSection />
            <TerminalDeploySection />
            <FoundingCreatorsSection />
            <PricingSection />
            <FaqSection />
            <FinalCTASection />
        </div>
    );
}
