import { NextRequest, NextResponse } from "next/server";

// Private beta gate for Ship It! (/shipit, a static build in public/shipit).
//
// - Password comes from the SHIPIT_PASSWORD env var (set it in Vercel).
//   If it's unset, the game stays locked: fail closed.
// - Entering the password, or opening an invite link /shipit?key=<password>,
//   sets a cookie holding a hash of the password. Changing the password in
//   Vercel logs everyone out.
// - Everything under /shipit is sent with X-Robots-Tag: noindex.
// - The preview image and favicon stay public so shared links unfurl.
//
// To launch publicly: delete this file (or remove /shipit from the matcher).

const COOKIE = "shipit_access";
const PUBLIC_FILES = new Set(["/shipit/og.jpg", "/shipit/favicon.svg"]);
const NOINDEX = { "X-Robots-Tag": "noindex, nofollow" };

async function hash(value: string): Promise<string> {
  const bytes = await crypto.subtle.digest(
    "SHA-256",
    new TextEncoder().encode(`shipit:${value}`),
  );
  return Array.from(new Uint8Array(bytes), (b) => b.toString(16).padStart(2, "0")).join("");
}

function grantAccess(res: NextResponse, token: string) {
  res.cookies.set(COOKIE, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/shipit",
    maxAge: 60 * 60 * 24 * 90,
  });
  return res;
}

export async function middleware(req: NextRequest) {
  const { pathname, searchParams } = req.nextUrl;
  if (PUBLIC_FILES.has(pathname)) {
    return NextResponse.next({ headers: NOINDEX });
  }

  const password = process.env.SHIPIT_PASSWORD;
  if (!password) return gatePage(503, "The beta is closed right now.");
  const token = await hash(password);

  if (req.cookies.get(COOKIE)?.value === token) {
    return NextResponse.next({ headers: NOINDEX });
  }

  const home = new URL("/shipit", req.url);

  // Invite link: /shipit?key=...
  const key = searchParams.get("key");
  if (key !== null) {
    if ((await hash(key)) === token) {
      return grantAccess(NextResponse.redirect(home, 303), token);
    }
    return gatePage(401, "That invite link isn't valid anymore.");
  }

  // Password form posts back to /shipit.
  if (req.method === "POST" && pathname === "/shipit") {
    const form = await req.formData().catch(() => null);
    const entered = form?.get("password");
    if (typeof entered === "string" && (await hash(entered)) === token) {
      return grantAccess(NextResponse.redirect(home, 303), token);
    }
    return gatePage(401, "Wrong password. Try again.");
  }

  // Game assets requested without access: plain 401, no page.
  if (pathname !== "/shipit" && pathname !== "/shipit/" && pathname !== "/shipit/index.html") {
    return new NextResponse("Unauthorized", { status: 401, headers: NOINDEX });
  }
  return gatePage(401);
}

function gatePage(status: number, message?: string) {
  const error = message
    ? `<p class="msg" role="alert">${message}</p>`
    : "";
  const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<meta name="robots" content="noindex, nofollow" />
<title>Ship It! — private beta</title>
<meta property="og:title" content="Ship It! — private beta" />
<meta property="og:description" content="A 16-bit digital-agency sim by Tillhouse Ventures. Invite only for now." />
<meta property="og:image" content="https://tillhouse.co/shipit/og.jpg" />
<meta name="twitter:card" content="summary_large_image" />
<link rel="icon" type="image/svg+xml" href="/shipit/favicon.svg" />
<style>
  :root { color-scheme: light; }
  * { box-sizing: border-box; }
  body { margin: 0; min-height: 100vh; display: grid; place-items: center; padding: 16px;
    background: #1b2a4a; color: #2a2433; font: 16px/1.5 system-ui, -apple-system, "Segoe UI", sans-serif; }
  .card { width: 100%; max-width: 380px; background: #f3e9d2; border: 4px solid #0f1830;
    box-shadow: 0 6px 0 #0f1830; padding: 28px 24px; text-align: center; }
  h1 { margin: 0 0 4px; font-size: 32px; letter-spacing: 1px; color: #1b2a4a; }
  h1 span { color: #e8a23a; }
  p { margin: 0 0 18px; }
  .msg { color: #b3392f; font-weight: 600; margin: -6px 0 14px; }
  input { width: 100%; padding: 12px; font: inherit; border: 3px solid #1b2a4a; background: #fff;
    color: #1b2a4a; caret-color: #1b2a4a; }
  input::placeholder { color: #7a7484; }
  button { width: 100%; margin-top: 12px; padding: 12px; font: inherit; font-weight: 700; cursor: pointer;
    background: #e8a23a; color: #1b2a4a; border: 3px solid #0f1830; box-shadow: 0 3px 0 #0f1830; }
  button:active { transform: translateY(2px); box-shadow: 0 1px 0 #0f1830; }
  .by { margin: 18px 0 0; font-size: 13px; }
  .by a { color: #1b2a4a; }
</style>
</head>
<body>
  <main class="card">
    <h1>Ship <span>It!</span></h1>
    <p>Private beta. Enter the password you were sent.</p>
    ${error}
    <form method="post" action="/shipit">
      <input type="password" name="password" aria-label="Password" placeholder="Password" autocomplete="current-password" required autofocus />
      <button type="submit">Play</button>
    </form>
    <p class="by">A game by <a href="https://tillhouse.co">Tillhouse Ventures</a><br />
      &copy; ${new Date().getFullYear()} Tillhouse Ventures. All rights reserved.</p>
  </main>
</body>
</html>`;
  return new NextResponse(html, {
    status,
    headers: { "Content-Type": "text/html; charset=utf-8", ...NOINDEX },
  });
}

export const config = {
  matcher: ["/shipit", "/shipit/:path*"],
};
