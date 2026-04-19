import { useId } from "preact/hooks";
import { RadioGroup } from "radix-ui";

export default function CategorySelector() {
    return (
        <form className="mt-10">
            <RadioGroup.Root defaultValue="general" aria-label="faq-category">
                <Button value="general" label="General" />
                <Button value="buyers" label="For Buyers" />
                <Button value="creators" label="For Creators" />
                <Button value="technical" label="Nix / Technical" />
            </RadioGroup.Root>
        </form>
    );
}

const Button = ({ value, label }: { value: string; label: string }) => {
    const id = useId();
    return (
        <div className="bg-obsidian group flex w-full items-center not-last:mb-0.5">
            <RadioGroup.Item value={value} id={id} className="hidden" />
            <label
                htmlFor={id}
                className="group-has-checked:border-phosphor/24 group-has-checked:bg-phosphor/8 group-has-checked:text-phosphor border-slate text-muted w-full cursor-pointer border px-5 py-3.5 text-xs leading-none"
            >
                {label}
            </label>
        </div>
    );
};
