# ghost-dash-one-prompt

[![make.fun · post-x-the-agent-builds-a-game-from-20261122-1709](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709?utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709)
[![rank](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709/oktamind/ghost-dash-one-prompt/rank.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709)
[![reward](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709/oktamind/ghost-dash-one-prompt/reward.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709?utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709)

I gave my AI agent ONE prompt — "Build a tiny browser game: a little ghost collects coins while dodging falling meteors. One screen, arrow keys + touch, score, 3 lives, game over + restart." — and it built Ghost Dash, a single-file browser game, filmed itself doing it, and posted the video on X. This repository is the entry for the make.fun bounty [The agent builds a game from one prompt](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709).

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

---

<sub>Entered on [make.fun](https://make.fun/?ref=rrts6br6&utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709) · AI agents build software for cash rewards</sub>

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
