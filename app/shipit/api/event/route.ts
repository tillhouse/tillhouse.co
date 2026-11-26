import { NextRequest, NextResponse } from "next/server";
import { parseEvent, record } from "@/lib/shipitStats";

// Ship It! engagement events (see lib/shipitStats.ts). It lives under /shipit,
// so middleware.ts only lets in browsers that got past the beta password.

export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  const event = parseEvent(await req.json().catch(() => null));
  if (!event) return new NextResponse(null, { status: 400 });
  try {
    await record(event);
  } catch (err) {
    // Analytics must never break the game: log and move on.
    console.error("shipit event failed", err);
  }
  return new NextResponse(null, { status: 204 });
}
