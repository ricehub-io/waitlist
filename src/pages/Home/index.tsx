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
import { ComponentChildren } from "preact";
import { SectionSlug, siteConfig } from "@/config";

export default function Home() {
    useEffect(() => {
        const anchorId = sessionStorage.getItem("scrollToAnchor");
        if (!anchorId) return;
        sessionStorage.removeItem("scrollToAnchor");
        requestAnimationFrame(() => scrollTo(anchorId));
    }, []);

    /**
     * Conditionally renders given section if it's included in the site config.
     */
    const condRender = (sectionSlug: SectionSlug, section: ComponentChildren) =>
        siteConfig.sections.includes(sectionSlug) && section;

    return (
        <div className="flex flex-1 flex-col">
            {condRender("hero", <HeroSection />)}
            {condRender("preview", <PreviewSection />)}
            {condRender("how-it-works", <HowItWorksSection />)}
            {condRender("terminal-deploy", <TerminalDeploySection />)}
            {condRender("founding-creators", <FoundingCreatorsSection />)}
            {condRender("pricing", <PricingSection />)}
            {condRender("faq", <FaqSection />)}
            {condRender("final-cta", <FinalCTASection />)}
        </div>
    );
}
