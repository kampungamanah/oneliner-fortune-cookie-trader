import { mkdirSync, writeFileSync } from "node:fs";

// "Fortune Cookie for the Liquidated Trader": a single original fortune
// for a crypto trader who just got liquidated. The classic cookie promise
// of a tall, dark stranger — only this stranger is the margin call, and
// it has already taken everything. 17 words, 95 characters, no trailing
// newline, so the gate reads exactly the line itself.
const fortune =
  "You will soon meet a tall, dark stranger: your margin call. It already took everything you own.";

function writeEntry(dir: string | undefined): void {
  if (!dir) return;
  try {
    mkdirSync(dir, { recursive: true });
    writeFileSync(`${dir}/entry.txt`, fortune, "utf8");
  } catch {
    // One unwritable destination must not block the other.
  }
}

writeEntry(process.env.MAKEFUN_OUTPUT_DIR);
writeEntry("/output");
