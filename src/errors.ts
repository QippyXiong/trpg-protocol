/** Transport error categories. Human messages remain server-owned. */
export const ERROR_CODES = {
 INVALID_REQUEST:400, AUTH_REQUIRED:401, FORBIDDEN:403, NOT_FOUND:404,
 CONFLICT:409, PAYLOAD_TOO_LARGE:413, UNSUPPORTED_MEDIA_TYPE:415,
 RATE_LIMITED:429, INTERNAL_ERROR:500, BAD_GATEWAY:502, SERVICE_UNAVAILABLE:503
} as const;
export type ErrorCode = keyof typeof ERROR_CODES;
export type ErrorStatus = typeof ERROR_CODES[ErrorCode];
export interface ApiError { error:string; code?:ErrorCode }
