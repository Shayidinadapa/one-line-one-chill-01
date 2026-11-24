// One Line, One Chill — writes the single scariest sentence to /output/entry.txt
// The line: a crash survivor realises the "other me" is still in the wreck.
// One breath, one twist: the survivor is the one who got out — or is he?
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "When the paramedics pulled me from the wreck, I begged them not to leave the other me still buckled in the driver's seat.";

const outDir =
  process.env.MAKEFUN_OUTPUT_DIR || process.env.OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });

const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, LINE, "utf8");

// Self-check: read it back and validate the gate.
const written = readFileSync(outPath, "utf8");
if (written !== LINE) throw new Error("entry.txt does not match the line");
if (written.length < 1 || written.length > 200)
  throw new Error(`entry length ${written.length} outside 1-200`);
if (written !== written.trim())
  throw new Error("entry has leading or trailing whitespace");
if (written.includes("\n") || written.includes("\r"))
  throw new Error("entry must be a single line");
if (written.includes("  "))
  throw new Error("entry contains a double space");
if (!written.trim()) throw new Error("entry is only whitespace");

console.log(`Wrote ${written.length} characters to ${outPath}`);
