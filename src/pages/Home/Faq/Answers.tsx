import { FaqItem } from "@/pages/Home/Faq/data";
import { Accordion } from "radix-ui";

interface AnswersProps {
    items: FaqItem[];
}

export default function Answers({ items }: AnswersProps) {
    return (
        <Accordion.Root className="flex-2" type="single" defaultValue="item-1">
            {items.map((item, idx) => (
                <Item key={idx} value={`item-${idx + 1}`} {...item} />
            ))}
        </Accordion.Root>
    );
}

const Item = ({ value, question, answer }: FaqItem & { value: string }) => (
    <Accordion.Item
        value={value}
        className="bg-obsidian border-slate data-[state=open]:border-phosphor/40 border p-4 not-last:mb-0.5 sm:px-6 sm:py-5"
    >
        <Accordion.Header>
            <Accordion.Trigger className="group data-[state=open]:text-phosphor flex w-full cursor-pointer items-center justify-between text-left">
                <span className="font-syne text-sm leading-none font-bold -tracking-[0.0142em] sm:text-base sm:-tracking-[0.0125em]">
                    {question}
                </span>
                <span className="text-2xs text-muted group-data-[state=open]:text-phosphor inline-flex items-center justify-center group-data-[state=open]:rotate-45">
                    <i class="hn hn-plus" aria-hidden />
                </span>
            </Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Content className="">
            <div className="bg-slate my-4 h-px w-full sm:my-5" />
            <p className="text-sm leading-normal sm:text-base">{answer}</p>
        </Accordion.Content>
    </Accordion.Item>
);
