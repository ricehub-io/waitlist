import Section from "@/components/ui/Section";
import SectionBadge from "@/components/ui/SectionBadge";
import SectionDescription from "@/components/ui/SectionDescription";
import SectionTitle from "@/components/ui/SectionTitle";
import CategorySelector from "@/pages/Home/Faq/CategorySelector";

export default function FaqSection() {
    return (
        <Section>
            <div className="max-w-3/8">
                <SectionBadge text="FAQ" />
                <SectionTitle>
                    Every question <i className="text-phosphor">answered.</i>
                </SectionTitle>
                <SectionDescription
                    text={
                        <>
                            Still have questions? Ask in our <DiscordIcon /> or
                            on <RedditIcon />
                        </>
                    }
                />

                <CategorySelector />
            </div>
        </Section>
    );
}

const DiscordIcon = () => (
    <span className="bg-slate inline-flex items-center justify-center p-2">
        <i className="hn hn-discord" />
    </span>
);

const RedditIcon = () => (
    <span className="bg-phosphor text-void inline-flex items-center justify-center p-2">
        <i className="hn hn-reddit" />
    </span>
);
