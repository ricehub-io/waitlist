import { cn } from "@/lib/utils";
import { TargetedEvent } from "preact";
import { Form } from "radix-ui";

interface EmailFormProps {
    buttonText: string;
    className?: string;
    onSubmit?: (e: TargetedEvent<HTMLFormElement, SubmitEvent>) => void;
}

export default function EmailForm({
    buttonText,
    className,
    onSubmit,
}: EmailFormProps) {
    return (
        <Form.Root
            onSubmit={onSubmit}
            className="text-2xs relative flex sm:text-xs"
        >
            <Form.Field name="email" className="w-full">
                <div className="text-signal-red absolute left-0 -translate-y-full font-medium">
                    <Form.Message match="valueMissing">
                        Please enter your email address!
                    </Form.Message>
                    <Form.Message match="typeMismatch">
                        Please provide a valid email address!
                    </Form.Message>
                </div>
                <Form.Control asChild>
                    <input
                        className="bg-obsidian border-slate font-dm-mono placeholder-muted text-muted h-full w-full border px-4 leading-none tracking-widest outline-none sm:tracking-[0.083em]"
                        type="email"
                        placeholder="your@email.com"
                        required
                    />
                </Form.Control>
            </Form.Field>
            <Form.Field name="website">
                <Form.Control asChild>
                    <input
                        className="hidden"
                        type="text"
                        name="website"
                        aria-hidden
                        tabIndex={-1}
                        autoComplete="off"
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
