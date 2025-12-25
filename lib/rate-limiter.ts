// Rate Limiter for Edge/Node.js API Routes
// Protects public endpoints from abuse

interface RateLimitEntry {
    count: number;
    firstRequest: number;
    lastRequest: number;
}

// In-memory store (works per-instance, resets on redeploy)
const rateLimitStore = new Map<string, RateLimitEntry>();

// Configuration
const RATE_LIMIT_CONFIG = {
    // Requests allowed per window
    maxRequests: 10,
    // Time window in milliseconds (1 minute)
    windowMs: 60 * 1000,
    // Cooldown period after hitting limit (5 minutes)
    cooldownMs: 5 * 60 * 1000,
    // Daily limit per IP
    dailyLimit: 50,
    // Daily window (24 hours)
    dailyWindowMs: 24 * 60 * 60 * 1000,
};

// Clean up old entries periodically
function cleanupOldEntries() {
    const now = Date.now();
    for (const [key, entry] of rateLimitStore.entries()) {
        if (now - entry.lastRequest > RATE_LIMIT_CONFIG.dailyWindowMs) {
            rateLimitStore.delete(key);
        }
    }
}

// Run cleanup every 10 minutes
if (typeof setInterval !== 'undefined') {
    setInterval(cleanupOldEntries, 10 * 60 * 1000);
}

export interface RateLimitResult {
    allowed: boolean;
    remaining: number;
    resetIn: number; // milliseconds until reset
    reason?: string;
}

/**
 * Check if a request should be rate limited
 * @param identifier - Usually the client IP address
 * @returns RateLimitResult indicating if request is allowed
 */
export function checkRateLimit(identifier: string): RateLimitResult {
    const now = Date.now();
    const key = identifier;

    let entry = rateLimitStore.get(key);

    // First request from this identifier
    if (!entry) {
        entry = {
            count: 1,
            firstRequest: now,
            lastRequest: now,
        };
        rateLimitStore.set(key, entry);

        return {
            allowed: true,
            remaining: RATE_LIMIT_CONFIG.maxRequests - 1,
            resetIn: RATE_LIMIT_CONFIG.windowMs,
        };
    }

    // Check if window has expired
    const windowAge = now - entry.firstRequest;

    if (windowAge > RATE_LIMIT_CONFIG.windowMs) {
        // Check daily limit
        if (entry.count >= RATE_LIMIT_CONFIG.dailyLimit) {
            const dailyWindowAge = now - entry.firstRequest;
            if (dailyWindowAge < RATE_LIMIT_CONFIG.dailyWindowMs) {
                return {
                    allowed: false,
                    remaining: 0,
                    resetIn: RATE_LIMIT_CONFIG.dailyWindowMs - dailyWindowAge,
                    reason: 'Daily limit reached. Please try again tomorrow.',
                };
            }
        }

        // Reset window
        entry.count = 1;
        entry.firstRequest = now;
        entry.lastRequest = now;
        rateLimitStore.set(key, entry);

        return {
            allowed: true,
            remaining: RATE_LIMIT_CONFIG.maxRequests - 1,
            resetIn: RATE_LIMIT_CONFIG.windowMs,
        };
    }

    // Check if in cooldown (hit rate limit previously)
    if (entry.count >= RATE_LIMIT_CONFIG.maxRequests) {
        const cooldownRemaining = RATE_LIMIT_CONFIG.windowMs - windowAge;

        return {
            allowed: false,
            remaining: 0,
            resetIn: cooldownRemaining,
            reason: `Too many requests. Please wait ${Math.ceil(cooldownRemaining / 1000)} seconds.`,
        };
    }

    // Increment count
    entry.count++;
    entry.lastRequest = now;
    rateLimitStore.set(key, entry);

    return {
        allowed: true,
        remaining: RATE_LIMIT_CONFIG.maxRequests - entry.count,
        resetIn: RATE_LIMIT_CONFIG.windowMs - windowAge,
    };
}

/**
 * Get client IP from request headers
 * Works with Vercel, Cloudflare, and direct connections
 */
export function getClientIP(req: Request): string {
    // Check common headers in order of preference
    const headers = [
        'x-real-ip',
        'x-forwarded-for',
        'cf-connecting-ip', // Cloudflare
        'x-vercel-forwarded-for', // Vercel
    ];

    for (const header of headers) {
        const value = req.headers.get(header);
        if (value) {
            // x-forwarded-for can have multiple IPs, take the first
            return value.split(',')[0].trim();
        }
    }

    // Fallback - won't work in production but helps in dev
    return 'unknown';
}

/**
 * Create rate limit error response
 */
export function rateLimitResponse(result: RateLimitResult): Response {
    return new Response(
        JSON.stringify({
            error: 'Rate limit exceeded',
            message: result.reason || 'Too many requests. Please slow down.',
            retryAfter: Math.ceil(result.resetIn / 1000),
        }),
        {
            status: 429,
            headers: {
                'Content-Type': 'application/json',
                'Retry-After': String(Math.ceil(result.resetIn / 1000)),
                'X-RateLimit-Remaining': String(result.remaining),
                'X-RateLimit-Reset': String(Math.ceil(result.resetIn / 1000)),
            },
        }
    );
}
