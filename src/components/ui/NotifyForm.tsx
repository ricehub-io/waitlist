import { apiFetch, HttpError, HttpStatus } from "@/api";
import EmailForm from "@/components/ui/EmailForm";
import { useSignal } from "@preact/signals";
import { TargetedEvent } from "preact";
import { useEffect, useRef } from "preact/hooks";
import { Toast } from "radix-ui";

export default function NotifyForm() {
    const toastOpen = useSignal(false);
    const timerRef = useRef(0);

    useEffect(() => {
        return () => clearTimeout(timerRef.current);
    }, []);

    const onSubmit = async (e: TargetedEvent<HTMLFormElement, SubmitEvent>) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        try {
            await apiFetch("POST", "/waitlist", data);
        } catch (err) {
            if (err instanceof HttpError) {
                if (err.status === HttpStatus.Conflict) {
                    toastOpen.value = false;
                    clearTimeout(timerRef.current);
                    timerRef.current = setTimeout(() => {
                        toastOpen.value = true;
                    }, 100);
                    return;
                }
            }
            console.error("could not post waitlist email");
            console.error(err);
        }
    };

    return (
        // TODO: add sliding animation when opening a toast
        <Toast.Provider swipeDirection="up">
            <EmailForm buttonText="Notify Me" onSubmit={onSubmit} />

            <Toast.Root
                open={toastOpen.value}
                onOpenChange={(o) => (toastOpen.value = o)}
            >
                <Toast.Title>Something went wrong</Toast.Title>
                <Toast.Description>
                    Lorem ipsum dolor sit amet
                </Toast.Description>
            </Toast.Root>
            <Toast.Viewport className="fixed top-4 left-1/2 z-50 -translate-x-1/2" />
        </Toast.Provider>
    );
}
