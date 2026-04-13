import Button from "@/components/ui/Button";
import { Form } from "radix-ui";

export default function ApplyForm() {
    return (
        <div className="bg-pitch border-obsidian flex flex-col justify-center border p-15">
            <h3 className="font-syne text-xl leading-none font-extrabold -tracking-[0.02em]">
                Apply to be a Founding Creator
            </h3>
            <p className="text-muted mt-2">
                Takes 2 minutes. We'll review and respond within 48 hours.
            </p>
            <Form.Root className="mt-10">
                <div className="flex gap-3.5">
                    <FormField
                        label="Handle"
                        placeholder="Your Name"
                        name="handle"
                    />
                    <FormField
                        label="Email"
                        placeholder="your@email.com"
                        name="email"
                        type="email"
                    />
                </div>
                <FormField
                    label="Link to your dotfiles / r/unixporn post"
                    placeholder="https://github.com/example/my-dotfiles"
                    name="dotfiles"
                />
                <Form.Submit asChild>
                    <Button
                        label="Submit Application"
                        className="mt-10 w-full"
                    />
                </Form.Submit>
            </Form.Root>
            <p className="font-dm-mono text-slate text-2xs mt-2 text-center tracking-widest">
                Your application is reviewed by a human, not an algorithm. We
                read every one.
            </p>
        </div>
    );
}

const FormField = ({
    label,
    placeholder,
    name,
    type,
}: {
    label: string;
    placeholder: string;
    name: string;
    type?: "text" | "email";
}) => (
    <Form.Field name={name} className="font-dm-mono w-full not-last:mb-4">
        <div>
            <Form.Label className="text-muted text-2xs leading-none tracking-[0.2em] uppercase">
                {label}
            </Form.Label>
            <Form.Message match="valueMissing">
                Please enter your {name}
            </Form.Message>
        </div>
        <Form.Control asChild>
            <input
                type={type ?? "text"}
                name={name}
                placeholder={placeholder}
                required
                className="text-muted placeholder-muted bg-obsidian border-slate w-full border px-4 py-3 text-xs leading-none tracking-[0.083em] outline-none"
            />
        </Form.Control>
    </Form.Field>
);
