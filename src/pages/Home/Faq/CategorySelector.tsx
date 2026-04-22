import { FaqCategory } from "@/pages/Home/Faq/data";
import { useId } from "preact/hooks";
import { RadioGroup } from "radix-ui";

interface CategorySelectorProps {
    categories: readonly FaqCategory[];
    onSelect: (v: string) => void;
}

export default function CategorySelector({
    categories,
    onSelect,
}: CategorySelectorProps) {
    return (
        <form className="mt-10">
            <RadioGroup.Root
                defaultValue={categories[0].label}
                onValueChange={onSelect}
                aria-label="faq-category"
            >
                {categories.map((c, idx) => (
                    <Button key={idx} value={c.label} {...c} />
                ))}
            </RadioGroup.Root>
        </form>
    );
}

const Button = ({
    value,
    label,
    questionCount,
}: FaqCategory & { value: string }) => {
    const id = useId();
    return (
        <div className="bg-obsidian group flex w-full items-center select-none not-last:mb-0.5">
            <RadioGroup.Item value={value} id={id} className="hidden" />
            <label
                htmlFor={id}
                className="group-has-checked:border-phosphor/24 group-has-checked:bg-phosphor/8 group-has-checked:text-phosphor border-slate text-muted flex w-full cursor-pointer items-center justify-between border px-5 py-3.5 text-xs leading-none"
            >
                {label}
                <span className="font-dm-mono">{questionCount}</span>
            </label>
        </div>
    );
};
