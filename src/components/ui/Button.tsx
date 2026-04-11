import { HTMLMotionProps, motion } from "motion/react";

interface ButtonProps {
    label: string;
}

export default function Button({ label }: ButtonProps) {
    return (
        <button className="bg-phosphor flex cursor-pointer items-center rounded-xs p-0.5">
            <span className="text-void font-syne px-4 font-extrabold">
                {label}
            </span>
            <motion.div
                className="bg-pitch relative aspect-square overflow-hidden rounded-xs p-2.5"
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
