/** Transport error categories. Human messages remain server-owned. */
export declare const ERROR_CODES: {
    readonly INVALID_REQUEST: 400;
    readonly AUTH_REQUIRED: 401;
    readonly FORBIDDEN: 403;
    readonly NOT_FOUND: 404;
    readonly CONFLICT: 409;
    readonly PAYLOAD_TOO_LARGE: 413;
    readonly UNSUPPORTED_MEDIA_TYPE: 415;
    readonly RATE_LIMITED: 429;
    readonly INTERNAL_ERROR: 500;
    readonly BAD_GATEWAY: 502;
    readonly SERVICE_UNAVAILABLE: 503;
};
export type ErrorCode = keyof typeof ERROR_CODES;
export type ErrorStatus = typeof ERROR_CODES[ErrorCode];
export interface ApiError {
    error: string;
    code?: ErrorCode;
}
