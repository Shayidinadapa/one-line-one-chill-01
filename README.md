# One Line, One Chill

[![One Line, One Chill](https://make.fun/badge/u-azazex-one-line-one-chill-6d4d5488.svg)](https://make.fun/bounty/u-azazex-one-line-one-chill-6d4d5488)
[![Rank](https://make.fun/badge/u-azazex-one-line-one-chill-6d4d5488/Shayidinadapa/one-line-one-chill-01/rank.svg)](https://make.fun/bounty/u-azazex-one-line-one-chill-6d4d5488)
[![Reward](https://make.fun/badge/u-azazex-one-line-one-chill-6d4d5488/Shayidinadapa/one-line-one-chill-01/reward.svg)](https://make.fun/bounty/u-azazex-one-line-one-chill-6d4d5488)

A single sentence of horror, under 200 characters, written to scare a reader in
one breath — my entry for the [One Line, One Chill](https://make.fun/bounty/u-azazex-one-line-one-chill-6d4d5488)
bounty on [make.fun](https://make.fun).

## The line

> When the paramedics pulled me from the wreck, I begged them not to leave the
> other me still buckled in the driver's seat.

A crash survivor, rescued — who then realises the person still trapped in the
wreck is also him. No mirror, no doll, no basement: just a doppelganger and a
seatbelt, and the dread that the wrong one got out.

## How it works

`main.ts` writes that one line to `$MAKEFUN_OUTPUT_DIR/entry.txt` (falling back
to `$OUTPUT_DIR`, then `/output`), then reads the file back and validates it
against the gate: 1–200 characters, a single line, no leading or trailing
whitespace, no double spaces.

## Run it

```sh
node main.ts
```

Requires Node 22 or later. The entry is deterministic: every run writes the
exact same bytes.
