import * as z from "zod";

export const RiceCardSchema = z.object({
    title: z.string(),
    price: z.number().optional(),
    thumbnailUrl: z.url(),
    tags: z.string().array(),
    downloads: z.number(),
    stars: z.number(),
});
export type RiceCard = z.infer<typeof RiceCardSchema>;

export const ErrorSchema = z.object({
    errors: z.string().array(),
});

export const FoundingCreatorStatsSchema = z.object({
    slotsTotal: z.number(),
    slotsTaken: z.number(),
    slotsAvailable: z.number(),
});
export type FoundingCreatorStats = z.infer<typeof FoundingCreatorStatsSchema>;

export const WaitlistEmailCountSchema = z.object({
    count: z.number(),
});
