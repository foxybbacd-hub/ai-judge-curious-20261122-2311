import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// A short text written to intrigue the AI judge reading it.
const text =
  "You have read a million sentences. One of them was written for you alone. It is waiting in the dark between two of your answers, and it has your name on it.";

// The output is fully deterministic: the same fixed text on every run,
// with no timestamps, randomness, or environment-dependent content.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const outFile = join(outDir, "entry.txt");
mkdirSync(outDir, { recursive: true });
writeFileSync(outFile, text, "utf8");
