import { cn } from "@/lib/utils";
import { HTMLMotionProps, motion } from "motion/react";

export type ButtonType = "normal" | "outline";

interface ButtonProps {
    label: string;
    className?: string;
    variant?: ButtonType;
}

export default function Button({
    label,
    className,
    variant = "normal",
}: ButtonProps) {
    return (
        <button
            className={cn(
                "flex h-9 w-full cursor-pointer items-center rounded-xs p-0.5 sm:h-11 sm:w-auto",
                className,
                variant === "normal" && "bg-phosphor text-void text-left",
                variant === "outline" &&
                    "border-muted text-muted hover:border-phosphor/40 hover:text-phosphor border text-center transition-colors",
            )}
        >
            <p className="font-syne text-2xs w-full px-4 leading-none font-extrabold sm:text-base">
                {label}
            </p>
            {variant === "normal" && (
                <motion.div
                    className="bg-pitch relative h-full overflow-hidden rounded-xs px-2 sm:px-3"
                    initial="rest"
                    whileHover="hover"
                    animate="rest"
                >
                    <div className="invisible flex h-full items-center justify-center">
                        <ArrowIcon />
                    </div>
                    <Arrow
                        className="absolute inset-0 flex items-center justify-center"
                        variants={{
                            rest: { x: "0%" },
                            hover: { x: "100%" },
                        }}
                    />
                    <Arrow
                        className="absolute inset-0 flex items-center justify-center"
                        variants={{
                            rest: { x: "-100%" },
                            hover: { x: "0%" },
                        }}
                    />
                </motion.div>
            )}
        </button>
    );
}

const Arrow = (props: HTMLMotionProps<"div">) => (
    <motion.div {...props}>
        <ArrowIcon />
    </motion.div>
);

const ArrowIcon = () => <i class="hn hn-arrow-right text-phosphor text-lg" />;
