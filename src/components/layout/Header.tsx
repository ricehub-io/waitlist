import logo from "@/assets/logo.svg";
import { motion } from "motion/react";

export default function Header() {
    return (
        <header className="border-phosphor/8 font-dm-mono text-muted flex items-center border-b px-11 py-6 text-xs">
            <img className="h-8" src={logo} alt="RiceHub" />
            <nav className="tracking-[0.14em] uppercase">
                <Link label="Explore" href="#explore" />
                <Link label="How it works" href="#how-it-works" />
                <Link label="Creators" href="#creators" />
            </nav>
            <p className="mr-6 ml-auto tracking-[0.14em] uppercase">
                <span className="text-phosphor">343</span> on waitlist
            </p>
            <JoinButton />
        </header>
    );
}

const Link = ({ label, href }: { label: string; href: string }) => (
    <motion.a
        href={href}
        className="relative ml-10"
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
    </motion.a>
);

const JoinButton = () => (
    <motion.button
        className="bg-phosphor font-syne text-dark-text relative cursor-pointer overflow-hidden rounded-xs px-5 py-2.5 text-base font-extrabold"
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
