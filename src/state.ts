import { FoundingCreatorStats } from "@/types";
import { signal } from "@preact/signals";

export const waitlistCount = signal(0);
export const founderStats = signal<FoundingCreatorStats>({
    slotsTotal: 0,
    slotsTaken: 0,
    slotsAvailable: 0,
});
