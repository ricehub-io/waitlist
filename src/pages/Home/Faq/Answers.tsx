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
        className="bg-obsidian border-slate data-[state=open]:border-phosphor/40 border px-6 py-5 not-last:mb-0.5"
    >
        <Accordion.Header>
            <Accordion.Trigger className="group data-[state=open]:text-phosphor flex w-full cursor-pointer items-center justify-between">
                <span className="font-syne leading-none font-bold -tracking-[0.0125em]">
                    {question}
                </span>
                <span className="text-2xs text-muted group-data-[state=open]:text-phosphor inline-flex items-center justify-center group-data-[state=open]:rotate-45">
                    <i class="hn hn-plus" aria-hidden />
                </span>
            </Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Content className="">
            <div className="bg-slate my-5 h-px w-full" />
            <p>{answer}</p>
        </Accordion.Content>
    </Accordion.Item>
);
