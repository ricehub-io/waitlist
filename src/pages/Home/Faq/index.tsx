import Section from "@/components/ui/Section";
import SectionBadge from "@/components/ui/SectionBadge";
import SectionDescription from "@/components/ui/SectionDescription";
import SectionTitle from "@/components/ui/SectionTitle";
import Answers from "@/pages/Home/Faq/Answers";
import CategorySelector from "@/pages/Home/Faq/CategorySelector";
import { FAQ_DATA, CategoryLabel, FAQ_CATEGORIES } from "@/pages/Home/Faq/data";
import { useComputed, useSignal } from "@preact/signals";

export default function FaqSection() {
    const category = useSignal<CategoryLabel>("General");
    const items = useComputed(() => FAQ_DATA[category.value]);

    return (
        <Section className="bg-pitch border-obsidian border-y *:gap-y-10 *:xl:flex-row">
            <div className="flex-1">
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
                    className="mb-6 sm:mb-10"
                />

                <CategorySelector
                    categories={FAQ_CATEGORIES}
                    onSelect={(v) => (category.value = v as CategoryLabel)}
                />
            </div>

            <Answers items={items.value} />
        </Section>
    );
}

const DiscordIcon = () => (
    <span className="bg-slate inline-flex items-center justify-center p-1 text-base sm:p-2">
        <i className="hn hn-discord" />
    </span>
);

const RedditIcon = () => (
    <span className="bg-phosphor text-void inline-flex items-center justify-center p-1 text-base sm:p-2">
        <i className="hn hn-reddit" />
    </span>
);
