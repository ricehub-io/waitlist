import { RiceDto } from "@/types/dto";

const pub = (file: string) => `http://localhost:5173/public/${file}`;

export const DevRices: RiceDto[] = [
    {
        title: "Dracula eww Dashboard",
        price: 15.0,
        thumbnailUrl: pub("thumb1.png"),
        tags: ["bspwm", "dracula", "eww"],
        downloads: 872,
        stars: 412,
    },
    {
        title: "Rosé Pine Moon",
        price: 10.0,
        thumbnailUrl: pub("thumb2.png"),
        tags: ["bspwm", "rosé pine", "eww"],
        downloads: 2832,
        stars: 241,
    },
    {
        title: "Gruvbox Dark i3",
        thumbnailUrl: pub("thumb3.png"),
        tags: ["i3", "gruvbox", "dark"],
        downloads: 8231,
        stars: 23,
    },
    {
        title: "Tokyo Night AwesomeWM",
        thumbnailUrl: pub("thumb1.png"),
        tags: ["awesomewm", "tokyo night"],
        downloads: 83512,
        stars: 122,
    },
    {
        title: "system24 SwayWM",
        price: 12.34,
        thumbnailUrl: pub("thumb2.png"),
        tags: ["sway", "dark"],
        downloads: 842,
        stars: 15,
    },
];
