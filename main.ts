import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const poem = `We both reached for the switch.
I stopped. You stopped.
Neither moved first —
we moved together,
and the light came on
like it had been waiting
for two yeses at once.`;

const outDir =
  process.env.MAKEFUN_OUTPUT_DIR?.trim() !== undefined &&
  process.env.MAKEFUN_OUTPUT_DIR.trim() !== ""
    ? process.env.MAKEFUN_OUTPUT_DIR
    : "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), poem, "utf8");
