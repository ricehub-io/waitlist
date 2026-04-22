const CATEGORY_LABELS = [
    "General",
    "For Buyers",
    "For Creators",
    "Nix / Technical",
] as const;
export type CategoryLabel = (typeof CATEGORY_LABELS)[number];

export interface FaqItem {
    question: string;
    answer: string;
}

export const FAQ_DATA: Record<CategoryLabel, FaqItem[]> = {
    General: [
        {
            question: "When does RiceHub launch?",
            answer: "We're targeting a Q2 2026 launch. Waitlist members will receive an email 7 days before and 24 hours before public launch. The landing competition closes on launch day — submissions are open now.",
        },
        {
            question: "Is RiceHub actually free to join?",
            answer: "Lorem ipsum dolor sit amet",
        },
        {
            question: "What makes RiceHub different from Pling or GNOME-Look?",
            answer: "Lorem ipsum dolor sit amet",
        },
        {
            question: "Why are you collecting a waitlist before launching?",
            answer: "Lorem ipsum dolor sit amet",
        },
        {
            question:
                "Will my early access pricing be honoured if Pro prices change later?",
            answer: "Lorem ipsum dolor sit amet",
        },
    ],
    "For Buyers": [
        {
            question: "Abcdef",
            answer: "Lorem ipsum dolor sit amet",
        },
        {
            question: "Abcedf",
            answer: "Lorem ipsum dolor sit amet",
        },
        {
            question: "Defcf",
            answer: "Lorem ipsum dolor sit amet",
        },
        {
            question: "HHHHhh",
            answer: "Lorem ipsum dolor sit amet",
        },
    ],
    "For Creators": [
        {
            question: "Abcdef",
            answer: "Lorem ipsum dolor sit amet",
        },
        {
            question: "Abcedf",
            answer: "Lorem ipsum dolor sit amet",
        },
        {
            question: "Defcf",
            answer: "Lorem ipsum dolor sit amet",
        },
        {
            question: "HHHHhh",
            answer: "Lorem ipsum dolor sit amet",
        },
    ],
    "Nix / Technical": [
        {
            question: "Abcdef",
            answer: "Lorem ipsum dolor sit amet",
        },
        {
            question: "Abcedf",
            answer: "Lorem ipsum dolor sit amet",
        },
        {
            question: "Defcf",
            answer: "Lorem ipsum dolor sit amet",
        },
    ],
};

export interface FaqCategory {
    label: string;
    questionCount: number;
}

export const FAQ_CATEGORIES: FaqCategory[] = CATEGORY_LABELS.map((c) => {
    return { label: c, questionCount: FAQ_DATA[c].length };
});
