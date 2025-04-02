export const COUPON_CODES = {
    GOODFRI50: "GOODFRI50",
    XMAS2025: "XMAS2025",
    LASTCHANCE: "LASTCHANCE",
} as const;

export type CouponCode = keyof typeof COUPON_CODES