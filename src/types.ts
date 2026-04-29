import * as z from "zod";

export interface RiceDto {
    title: string;
    price?: number;
    thumbnailUrl: string;
    tags: string[];
    downloads: number;
    stars: number;
}

export const ErrorSchema = z.object({
    errors: z.string().array(),
});

export const FoundingCreatorStatsSchema = z.object({
    slotsTotal: z.number(),
    slotsTaken: z.number(),
    slotsAvailable: z.number(),
});
export type FoundingCreatorStats = z.infer<typeof FoundingCreatorStatsSchema>;
