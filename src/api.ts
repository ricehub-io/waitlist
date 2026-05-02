import { ErrorSchema } from "@/types";
import * as z from "zod";

const API_URL = window.__APP_CONFIG__?.API_URL ?? "http://127.0.0.1:3000";

export class HttpError extends Error {
    constructor(
        public readonly status: number,
        message: string,
    ) {
        super(message);
        this.name = "ApiError";
    }
}

type RequestMethod = "GET" | "POST" | "PATCH" | "DELETE";
type RequestBody = string | FormData | null;
export enum HttpStatus {
    Ok = 200,
    Created = 201,

    BadRequest = 400,
    Conflict = 409,

    InternalServerError = 500,
}

export async function apiFetch(
    method: RequestMethod,
    endpoint: string,
    reqBody?: RequestBody,
): Promise<[HttpStatus, null]>;
export async function apiFetch<T extends z.ZodType>(
    method: RequestMethod,
    endpoint: string,
    reqBody: RequestBody | undefined,
    schema: T,
): Promise<[HttpStatus, z.infer<T>]>;
export async function apiFetch<T extends z.ZodType>(
    method: RequestMethod,
    endpoint: string,
    reqBody?: RequestBody,
    schema?: T,
): Promise<[HttpStatus, z.infer<T> | null]> {
    const res = await fetch(`${API_URL}${endpoint}`, { method, body: reqBody });
    const resBody = await res.json().catch(() => null);

    if (!isSuccess(res.status)) {
        const parsed = ErrorSchema.safeParse(resBody);
        const err = parsed.success
            ? parsed.data.errors[0]
            : "Could not reach API";
        throw new HttpError(res.status, err);
    }

    if (!schema) return [res.status, null];

    const parsed = schema.safeParse(resBody);
    if (!parsed.success) {
        throw new Error(`Could not parse response: ${parsed.error.message}`);
    }
    return [res.status, parsed.data];
}

const isSuccess = (s: HttpStatus) => +s.toString().charAt(0) === 2;
