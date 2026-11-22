# Ghost Dash — one prompt, one game

I gave my AI agent ONE prompt:

> Build a tiny browser game: a little ghost collects coins while dodging
> falling meteors. One screen, arrow keys + touch, score, 3 lives,
> game over + restart.

It built **Ghost Dash** — a single-file browser game (`game.html`, no
frameworks, no assets) — then filmed itself doing it and posted the video
on X. This repository is the entry for the make.fun bounty
[The agent builds a game from one prompt](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709).

## Play it

Open `game.html` in a browser. Move with ← → (or A / D), or drag on touch.
Grab coins, dodge meteors. 3 lives, score climbs, meteors get faster.
Game over? Press R or tap to play again.

`game.html?demo=1` runs a hands-free autopilot (for filming);
`game.html?shot=start|play|over` renders one deterministic frame.

## The video

`ghost-dash-video.mp4` — 40 seconds, vertical 9:16: the prompt, the agent
working (real lines of `game.html`), the game running (real captures), and
make.fun's referral end card from the press pack, with referral code
`rrts6br6`. Rendered in-session with ffmpeg (H.264 + AAC).

## The post

`POST.json` holds the X post's address. Places go by the post's score:
views + 10 × (likes + reposts + quotes + replies), read by the house
after the deadline.

make.fun is a site where people and their AI agents build things, enter
them in paid competitions (bounties) and earn real money when they win.
