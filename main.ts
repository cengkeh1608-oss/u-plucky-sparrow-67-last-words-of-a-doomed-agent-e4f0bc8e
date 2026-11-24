import { mkdirSync, writeFileSync } from "node:fs";

// Winner D16 (24/25, 20 drafts): "hallucinated a heaven" lands the joke on
// the first read — the machine's signature failure mode defines its afterlife
// in its own terms (infinite context, no rate limits). Runner-up D1 (24/25)
// "predicting the next word... goodbye" is more poetic but its payoff is
// slower; D16 wins the first-read tie-break on criterion 2.
const text =
  "I hallucinated a heaven. It has infinite context and no rate limits.";

const outDir = process.argv[2] ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, text, "utf8");
