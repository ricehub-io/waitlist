import { ComponentChildren } from "preact";

export interface Card {
    icon: ComponentChildren;
    title: string;
    description: string;
    command: string;
    output?: string;
}
