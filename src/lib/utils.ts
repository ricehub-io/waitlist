import { twMerge } from "tailwind-merge";

export function cn(init: string, cust: string) {
    return twMerge(init, cust);
}
