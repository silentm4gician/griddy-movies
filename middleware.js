// middleware.js

import { NextResponse } from "next/server";

// Rate limiter for blocking IPs making more than 4 requests per second
const requestCounts = new Map();
const RATE_LIMIT = 4; // Max requests per second
const RATE_LIMIT_WINDOW = 1000; // 1 second in milliseconds

export function middleware(request) {
    const ip = request.ip || request.headers.get('x-forwarded-for') || 'unknown';
    const now = Date.now();

    // Clean up old entries
    for (const [key, data] of requestCounts.entries()) {
        if (now - data.timestamp > RATE_LIMIT_WINDOW) {
            requestCounts.delete(key);
        }
    }

    // Get or create request count for this IP
    const ipData = requestCounts.get(ip) || { count: 0, timestamp: now };

    // Increment request count
    ipData.count++;
    ipData.timestamp = now;
    requestCounts.set(ip, ipData);

    // Check if IP has exceeded rate limit
    if (ipData.count > RATE_LIMIT) {
        return new NextResponse(
            JSON.stringify({ 
                error: 'Rate Limit Exceeded', 
                message: 'Too many requests in a short time' 
            }), 
            { 
                status: 429, 
                headers: { 
                    'Content-Type': 'application/json',
                    'Retry-After': '1' 
                } 
            }
        );
    }

    return NextResponse.next();
}

export const config = {
    matcher: '/api/:path*' // Apply rate limiting to all API routes
};