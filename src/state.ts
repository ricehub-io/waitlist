import { FoundingCreatorStats } from "@/types";
import { computed, signal } from "@preact/signals";

export const waitlistCount = signal<number | null>(null);
export const founderStats = signal<FoundingCreatorStats | null>(null);

export const slotsTotal = computed(() => founderStats.value?.slotsTotal ?? "—");
export const slotsAvailable = computed(
    () => founderStats.value?.slotsAvailable ?? "—",
);
export const slotsTaken = computed(() => founderStats.value?.slotsTaken ?? "—");
