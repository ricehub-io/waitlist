import { apiFetch } from "@/api";
import logo from "@/assets/logo.svg";
import { waitlistCount } from "@/state";
import { WaitlistEmailCountSchema } from "@/types";
import { useSignal } from "@preact/signals";
import { motion } from "motion/react";
import { useLocation } from "preact-iso";
import { useEffect } from "preact/hooks";
import { Collapsible } from "radix-ui";
import scrollTo from "@/scrollTo";

export default function Header() {
    const { route } = useLocation();

    const onLogoClick = () => {
        route("/"); // clear path
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    useEffect(() => {
        apiFetch("GET", "/waitlist", null, WaitlistEmailCountSchema).then(
            ([, body]) => (waitlistCount.value = body.count),
        );
    }, []);

    return (
        <header className="border-phosphor/8 font-dm-mono text-muted bg-void sticky top-0 left-0 z-50 flex items-center border-b px-6 py-5 text-xs sm:px-11 sm:py-6">
            <img className="h-8" src={logo} alt="RH" onClick={onLogoClick} />

            {/* small screens */}
            <BurgerMenu />

            {/* bigger screens */}
            <div className="hidden flex-1 items-center sm:flex sm:justify-end">
                <Links />
                <p className="mr-6 ml-auto hidden tracking-[0.14em] uppercase lg:block">
                    <span className="text-phosphor">{waitlistCount}</span> on
                    waitlist
                </p>
                <JoinButton />
            </div>
        </header>
    );
}

const BurgerMenu = () => {
    const open = useSignal(false);

    return (
        <Collapsible.Root
            className="ml-auto sm:hidden"
            open={open.value}
            onOpenChange={(o) => (open.value = o)}
        >
            <Collapsible.Trigger asChild>
                <button className="text-parchment flex items-center justify-center text-2xl">
                    {open.value ? (
                        <i class="hn hn-times"></i>
                    ) : (
                        <i class="hn hn-bars"></i>
                    )}
                </button>
            </Collapsible.Trigger>
            <Collapsible.Content className="bg-void border-slate absolute top-[calc(100%+1px)] left-0 w-full border-b px-6 py-4">
                <Links />
            </Collapsible.Content>
        </Collapsible.Root>
    );
};

const Links = () => (
    <nav className="flex flex-col gap-y-4 tracking-[0.167em] uppercase sm:flex-row">
        <Link label="Explore" onClick={() => scrollTo("hero")} />
        <Link label="How it works" onClick={() => scrollTo("how-it-works")} />
        <Link label="Creators" onClick={() => scrollTo("founding-creators")} />
    </nav>
);

const Link = ({ label, onClick }: { label: string; onClick: () => void }) => (
    <motion.button
        className="relative cursor-pointer leading-none uppercase sm:max-lg:not-last:mr-7 lg:ml-10"
        onClick={onClick}
        initial="rest"
        whileHover="hover"
        animate="rest"
        variants={{
            rest: { color: "var(--color-muted)" },
            hover: { color: "var(--color-phosphor)" },
        }}
        transition={{
            color: { duration: 0.2, ease: "easeOut" },
        }}
    >
        {label}
        <motion.span
            className="bg-phosphor absolute -bottom-0.5 left-0 h-px w-full origin-left"
            variants={{
                rest: { scaleX: 0.1, opacity: 0 },
                hover: { scaleX: 1, opacity: 1 },
            }}
            transition={{
                scaleX: {
                    type: "spring",
                    stiffness: 256,
                    damping: 24,
                },
            }}
        />
    </motion.button>
);

const JoinButton = () => (
    <motion.button
        onClick={() => scrollTo("join-waitlist")}
        className="bg-phosphor font-syne text-dark-text relative hidden cursor-pointer overflow-hidden rounded-xs px-5 py-2.5 text-base font-extrabold lg:block"
        initial="rest"
        whileHover="hover"
        animate="rest"
    >
        <span className="invisible">Join Waitlist</span>

        <motion.span
            className="absolute inset-0 flex items-center justify-center"
            variants={{
                rest: { y: "0%" },
                hover: { y: "-100%" },
            }}
        >
            Join Waitlist
        </motion.span>
        <motion.span
            className="absolute inset-0 flex items-center justify-center"
            variants={{
                rest: { y: "100%" },
                hover: { y: "0%" },
            }}
        >
            Join Waitlist
        </motion.span>
    </motion.button>
);
