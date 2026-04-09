interface ButtonProps {
    label: string;
}

// TODO: make it interactive
// TODO: use better icon for the arrow
export default function Button({ label }: ButtonProps) {
    return (
        <button className="bg-phosphor flex cursor-pointer items-center rounded-xs p-0.5">
            <span className="text-void font-syne px-4 font-extrabold">
                {label}
            </span>
            <div className="bg-pitch rounded-xs p-2">
                <ArrowRight />
            </div>
        </button>
    );
}

const ArrowRight = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        className="text-phosphor size-6"
    >
        <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
        />
    </svg>
);
