# Ship It!

**Role:** Creator, designer and builder  
**Company:** Tillhouse Ventures  
**Status:** Private beta  
**Built:** November 21–23, 2026

## Overview
Ship It! is a 16-bit isometric business sim about running a digital agency. You quit your job with a garage, a laptop and $2,000. You take small website gigs, plan each build, survive the incidents (and your own stress), hire a team, move into a real studio, and eventually take a whole office building.

It plays in the browser, with no install and no account. It's wholesome and cozy, with light satire about agency life: clients with vague briefs, AI bot swarms, the Cloud going down, and Big Tech recruiters you can only fight off by reminding your team about the office bunny.

## What I built
- **Three phases of play.** The garage (solo, one desk, a cat), the Studio (a team of designers, developers, marketers and a PM, plus a bunny), and the Empire (a whole floor with a skyline view and a server room).
- **A full agency loop.** Lead cards, counter-offers, a build board with stack and scope trade-offs, a live forecast, mid-build levers (crunch, bug bash, demo, freelancer), launches with grades and client reviews, and a weekly P&L.
- **Things going wrong.** Ten external threats, including bot swarms, breaches, ransom notes, heat waves and cloud outages, each with choices and visible costs.
- **The boardroom.** Nine decisions with real consequences, from return-to-office policy to Big Tech poaching your best people.
- **Your own products.** Side products that grow by shipping versions and can become your main income.
- **More than one ending.** Where you end up depends on the choices you make along the way. No spoilers here.
- **138 client leads** across local businesses, startups, mid-market companies and enterprises, each with its own brief.

## How I built it
I built Ship It! end to end with **Claude Opus 5.5 in Claude Code** over three days: a design doc, then milestone by milestone (M1 Garage, M2 Studio, M3 Empire), with playtest fixes in between. All 43 commits were made together with Opus 5.5.

My job was the product and game director role: the design doc, the pacing targets, playtesting every milestone, and deciding what made the game more fun. Claude wrote the code, the content and the tests, and ran a headless balance simulator after every change so I could tune the pacing with data instead of guesses.

A few decisions mattered most:
- **A deterministic simulation.** Game logic is pure TypeScript with no rendering in it. The same seed and the same actions always give the same game, which made saving, testing and balancing straightforward.
- **Balance by simulation.** Two reference bots (a first-time player and an optimizing one) play hundreds of games headlessly. Each milestone shipped with target times, like "move into the building at about 15 minutes," and no bankruptcies for either bot.
- **Palette-locked pixel art, drawn in code.** Every sprite goes through a fixed 32-color palette, and a test fails if anything else reaches the screen.
- **No audio files.** Three original music tracks (lo-fi, thrift-store funk and robot disco) and every sound effect are synthesized live with the Web Audio API, so there's nothing to license.
- **No runtime AI.** Content was written at build time and committed as JSON, so the game has no API costs and no keys in the client.

## Tech stack
- **Claude Code** with **Claude Opus 5.5** for design, code, content, tests and balance tuning
- **Phaser 3** for the isometric renderer and sprite animation
- **TypeScript** and **Vite**
- **Web Audio API** for generative music and sound effects
- **Vitest** for 86 tests covering determinism, saves, the economy, content and the palette
- **Next.js on Vercel** to host the private beta at tillhouse.co/shipit
- About 12,000 lines of TypeScript and 4,900 lines of content JSON

## The trailer and screenshots
The teaser trailer and the screenshots on this page were also made with Claude Opus 5.5 in Claude Code. Claude scripted Chrome to stage each scene in the real game, added cinematic title cards and camera moves, and recorded live gameplay with the game's own soundtrack and sound effects. There is no video editing software involved: every frame is the actual game running.

## Why it matters
Ship It! is a test of how far one person can get with a strong AI coding partner when they act as the director: clear design intent, fast playtest loops, and tight feedback. It went from an empty folder to three phases of playable, balanced game in three days.
