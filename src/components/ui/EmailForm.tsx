import { cn } from "@/lib/utils";
import { Form } from "radix-ui";

interface EmailFormProps {
    buttonText: string;
    className?: string;
}

export default function EmailForm({ buttonText, className }: EmailFormProps) {
    return (
        <Form.Root className="flex text-xs">
            <Form.Field name="email" className="w-full">
                <Form.Message match="valueMissing">
                    Please enter your email address
                </Form.Message>
                <Form.Message match="typeMismatch">
                    Please provide a valid email address
                </Form.Message>
                <Form.Control asChild>
                    <input
                        className="bg-obsidian border-slate font-dm-mono text-muted h-full w-full border px-4 tracking-[0.08em] outline-none"
                        type="email"
                        placeholder="your@email.com"
                        required
                    />
                </Form.Control>
            </Form.Field>
            <Form.Submit asChild>
                <button
                    className={cn(
                        "bg-phosphor text-dark-text font-syne px-6 py-3 font-extrabold whitespace-nowrap",
                        className,
                    )}
                >
                    {buttonText}
                </button>
            </Form.Submit>
        </Form.Root>
    );
}
