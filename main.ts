import { mkdirSync, writeFileSync } from "node:fs";

// The Funniest Out-of-Office — one line, nothing else.
// The joke: the inbox is guarded by something that can neither answer
// nor resign, which is exactly how an out-of-office feels from the inside.
const entry =
  "I'm out of office until Monday. My inbox is guarded by a cactus — it can't reply, but it can't quit.";

// Gate: the bounty requires UTF-8 text of 1 to 140 characters, exactly
// one line, not only white space. Refuse anything else, loudly.
const chars = [...entry];
if (chars.length < 1 || chars.length > 140) {
  throw new Error(`entry must be 1-140 characters, got ${chars.length}`);
}
if (/[\r\n]/.test(entry)) {
  throw new Error("entry must be a single line");
}
if (entry.trim().length === 0) {
  throw new Error("entry must not be only white space");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry + "\n", "utf8");
console.log(`Wrote entry (${chars.length} chars):`, entry);
