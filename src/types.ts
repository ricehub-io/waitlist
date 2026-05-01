import * as z from "zod";

export const PreviewRiceSchema = z.object({
    id: z.uuid(),
    title: z.string(),
    price: z.number().optional(),
    thumbnailUrl: z.url(),
    tags: z.string().array(),
    downloadCount: z.number(),
    starCount: z.number(),
});
export type PreviewRice = z.infer<typeof PreviewRiceSchema>;

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
