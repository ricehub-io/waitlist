import { apiFetch, HttpStatus } from "@/api";
import EmailForm from "@/components/ui/EmailForm";
import { useSignal } from "@preact/signals";
import { TargetedEvent } from "preact";
import { useEffect, useRef } from "preact/hooks";
import { Toast } from "radix-ui";

export default function NotifyForm() {
    const toastOpen = useSignal(false);
    const timerRef = useRef(0);
    const toastTitle = useSignal("");
    const toastMsg = useSignal("");

    const openToast = (title: string, msg: string) => {
        toastOpen.value = false;
        clearTimeout(timerRef.current);
        timerRef.current = setTimeout(() => {
            toastTitle.value = title;
            toastMsg.value = msg;
            toastOpen.value = true;
        }, 100);
    };

    useEffect(() => {
        return () => clearTimeout(timerRef.current);
    }, []);

    const onSubmit = async (e: TargetedEvent<HTMLFormElement, SubmitEvent>) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        try {
            const [status] = await apiFetch("POST", "/waitlist", data);
            if (status !== HttpStatus.Created) {
                return;
            }
            openToast(
                "Subscribed",
                "your email has been added to the wailist!",
            );
        } catch (err) {
            let msg = "Please try again later!";
            if (err instanceof Error) {
                msg = err.message;
            }
            openToast("Could not subscribe", msg);
        }
    };

    return (
        <>
            <EmailForm buttonText="Notify Me" onSubmit={onSubmit} />

            <Toast.Root
                open={toastOpen.value}
                onOpenChange={(o) => (toastOpen.value = o)}
                className="toast-root bg-pitch border border-white/7 px-6 py-4"
            >
                <Toast.Title className="text-parchment text-lg font-bold">
                    {toastTitle}
                </Toast.Title>
                <Toast.Description>{toastMsg}</Toast.Description>
            </Toast.Root>
        </>
    );
}
