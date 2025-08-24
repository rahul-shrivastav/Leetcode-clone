import Redis from "ioredis";
import { NextResponse } from "next/server";

const redis = new Redis(process.env.REDIS_URL || "redis://localhost:6379");
export async function GET() {
    console.log("\nPINGED APIs\n");
    console.log(process.env.SUBMIT_CODE_API);
    const pong = await redis.ping();
    let res = await fetch(`${process.env.SUBMIT_CODE_API}/api_ping`, {
        method: "GET",
    });
    return NextResponse.json({ pong });
}
