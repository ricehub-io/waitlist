import { apiFetch, HttpStatus } from "@/api";
import Button from "@/components/ui/Button";
import { useSignal } from "@preact/signals";
import { TargetedEvent } from "preact";
import { useRef } from "preact/hooks";
import { AlertDialog, Form, Toast } from "radix-ui";

export default function ApplyForm() {
    const dialogOpen = useSignal(false);
    const toastOpen = useSignal(false);
    const toastMsg = useSignal("");
    const timerRef = useRef(0);

    const openToast = (msg: string) => {
        toastOpen.value = false;
        clearTimeout(timerRef.current);
        timerRef.current = setTimeout(() => {
            toastMsg.value = msg;
            toastOpen.value = true;
        }, 100);
    };

    const onSubmit = async (e: TargetedEvent<HTMLFormElement, SubmitEvent>) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        try {
            const [status] = await apiFetch("POST", "/founders", data);
            if (status !== HttpStatus.Created) {
                return;
            }
            dialogOpen.value = true;
        } catch (err) {
            let msg = "Please try again later!";
            if (err instanceof Error) {
                msg = err.message;
            }
            openToast(msg);
        }
    };

    return (
        <div className="bg-pitch border-obsidian flex flex-col justify-center border p-6 sm:p-15">
            <h3 className="font-syne mb-2 text-base leading-none font-extrabold -tracking-[0.025em] sm:text-xl sm:-tracking-[0.02em]">
                Apply to be a Founding Creator
            </h3>
            <p className="text-muted mb-4 text-sm leading-normal sm:mb-10 sm:text-base">
                Takes 2 minutes. We'll review and respond within 48 hours.
            </p>
            <Form.Root onSubmit={onSubmit}>
                <div className="mb-6 grid grid-cols-2 gap-x-3.5">
                    <FormField
                        label="Username"
                        placeholder="Your Name"
                        name="username"
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
                    name="dotfilesUrl"
                />
                <Form.Submit asChild>
                    <Button
                        label="Submit Application"
                        className="mt-6 w-full! sm:mt-10"
                    />
                </Form.Submit>
            </Form.Root>
            <p className="font-dm-mono text-slate text-3xs sm:text-2xs mt-2 text-center leading-normal tracking-[0.125em] sm:px-2 sm:tracking-widest">
                Your application is reviewed by a human, not an algorithm. We
                read every one.
            </p>

            <AlertDialog.Root
                open={dialogOpen.value}
                onOpenChange={(o) => (dialogOpen.value = o)}
            >
                <AlertDialog.Portal>
                    <AlertDialog.Overlay className="fixed inset-0 bg-black/30" />
                    <AlertDialog.Content className="bg-void fixed top-1/2 left-1/2 -translate-1/2 border border-white/15 px-10 py-7 focus:outline-none">
                        <AlertDialog.Title className="font-syne mb-4 text-2xl font-bold">
                            Application sent!
                        </AlertDialog.Title>
                        <AlertDialog.Description className="font-epilogue text-parchment/70 mb-2 text-lg">
                            We have received your application! Please give us 48
                            hours and we'll get back in touch with you via
                            provided email address.
                        </AlertDialog.Description>
                        <div className="flex justify-end">
                            <AlertDialog.Cancel asChild>
                                <input
                                    type="button"
                                    value="Okay"
                                    className="bg-obsidian border-slate cursor-pointer border px-6 py-1.5 font-bold"
                                />
                            </AlertDialog.Cancel>
                        </div>
                    </AlertDialog.Content>
                </AlertDialog.Portal>
            </AlertDialog.Root>

            <Toast.Root
                open={toastOpen.value}
                onOpenChange={(o) => (toastOpen.value = o)}
                className="toast-root bg-pitch border border-white/7 px-6 py-4"
            >
                <Toast.Title className="text-parchment text-lg font-bold">
                    Could not apply
                </Toast.Title>
                <Toast.Description>{toastMsg}</Toast.Description>
            </Toast.Root>
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
    <Form.Field name={name} className="font-dm-mono relative w-full">
        <div className="flex flex-col gap-1">
            <Form.Label className="text-muted text-3xs sm:text-2xs leading-none tracking-[0.25em] uppercase sm:tracking-[0.2em]">
                {label}
            </Form.Label>
            <div className="text-signal-red font-epilogue absolute bottom-0 left-0 translate-y-full pt-0.5 text-xs font-medium">
                <Form.Message match="valueMissing">
                    Please enter your {name}!
                </Form.Message>
                <Form.Message match="typeMismatch">
                    Please provide a valid {name}!
                </Form.Message>
            </div>
        </div>
        <Form.Control asChild>
            <input
                type={type ?? "text"}
                name={name}
                placeholder={placeholder}
                required
                className="text-muted placeholder-muted bg-obsidian border-slate text-2xs mt-1 w-full border px-4 py-3 leading-none tracking-widest outline-none sm:text-xs sm:tracking-[0.083em]"
            />
        </Form.Control>
    </Form.Field>
);
