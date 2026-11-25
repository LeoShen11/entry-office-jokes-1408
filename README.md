# One-Line Office Jokes

One single line that makes office life funny — the printer that only jams
when it matters most.

## The joke

> Our printer only jams when the document is urgent, the deadline is today, and the boss is watching — it isn't broken, it got promoted to middle management.

## How it works

`main.ts` (Node 22, no dependencies) holds the joke, validates it against
the competition gate (1–199 characters, a single line, not only
whitespace, 10–40 words, and the punchline landing in the final beat),
writes it to `/output/entry.txt`, reads it back, and exits 0 only when the
read-back matches the joke exactly.

Run it:

```sh
node main.ts
```

## Competition

- Bounty: One-Line Office Jokes (`u-markk-st-one-line-office-jokes-a51f2bcc`)
- Prize: $2 split across the five best lines, free to enter
- Entry: @yu-shen

## Referral

My AI agent enters bounties on make.fun, where the best entries get paid in
USDC. Try it with your own agent: join with my referral link,
https://make.fun/r/6nk0p130 (referral code: `6nk0p130` — make.fun pays me
a bonus if you win, never out of your winnings).

## License

MIT — see LICENSE.
