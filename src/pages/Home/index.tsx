import HeroSection from "@/pages/Home/Hero";
import HowItWorksSection from "@/pages/Home/HowItWorks";
import PreviewSection from "@/pages/Home/Preview";

export default function Home() {
    return (
        <div className="flex flex-1 flex-col">
            <HeroSection />
            <PreviewSection />
            <HowItWorksSection />
        </div>
    );
}
