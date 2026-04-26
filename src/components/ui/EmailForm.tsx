import { cn } from "@/lib/utils";
import { Form } from "radix-ui";

interface EmailFormProps {
    buttonText: string;
    className?: string;
}

export default function EmailForm({ buttonText, className }: EmailFormProps) {
    return (
        <Form.Root className="text-2xs flex sm:text-xs">
            <Form.Field name="email" className="w-full">
                <Form.Message match="valueMissing">
                    Please enter your email address
                </Form.Message>
                <Form.Message match="typeMismatch">
                    Please provide a valid email address
                </Form.Message>
                <Form.Control asChild>
                    <input
                        className="bg-obsidian border-slate font-dm-mono placeholder-muted text-muted h-full w-full border px-4 leading-none tracking-widest outline-none sm:tracking-[0.083em]"
                        type="email"
                        placeholder="your@email.com"
                        required
                    />
                </Form.Control>
            </Form.Field>
            <Form.Submit asChild>
                <button
                    className={cn(
                        "bg-phosphor text-dark-text font-syne cursor-pointer px-6 py-3 leading-none font-extrabold whitespace-nowrap",
                        className,
                    )}
                >
                    {buttonText}
                </button>
            </Form.Submit>
        </Form.Root>
    );
}
