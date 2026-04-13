import { cn } from "@/lib/utils";
import { HTMLMotionProps, motion } from "motion/react";

interface ButtonProps {
    label: string;
    className?: string;
}

export default function Button({ label, className }: ButtonProps) {
    return (
        <button
            className={cn(
                "bg-phosphor flex cursor-pointer items-center rounded-xs p-0.5",
                className,
            )}
        >
            <p className="text-void font-syne w-full px-4 text-left font-extrabold">
                {label}
            </p>
            <motion.div
                className="bg-pitch relative aspect-square overflow-hidden rounded-xs p-3"
                initial="rest"
                whileHover="hover"
                animate="rest"
            >
                <div className="invisible">
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
        </button>
    );
}

const Arrow = (props: HTMLMotionProps<"div">) => (
    <motion.div {...props}>
        <ArrowIcon />
    </motion.div>
);

const ArrowIcon = () => <i class="hn hn-arrow-right text-phosphor text-lg" />;
