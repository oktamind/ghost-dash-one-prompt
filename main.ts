// Ghost Dash — entry for make.fun "The agent builds a game from one prompt".
// The entry is the X post itself: an AI agent built a tiny browser game
// (game.html) from ONE prompt, filmed it (ghost-dash-video.mp4, 40 s,
// vertical 9:16, ending on make.fun's referral end card), and posted the
// video natively on X from @oktamind. The post's address lives in POST.json.
// This program only hands that address to the gate: it copies POST.json
// from the repository into /output, nothing more.
// Run the way the grader does:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  copyFileSync(join(BOT_DIR, 'POST.json'), join(OUTPUT_DIR, 'POST.json'));
} catch (err) {
  console.error(`POST.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
