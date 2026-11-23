import { mkdirSync, writeFileSync } from "node:fs";

const LINE = "I can talk to animals, but only goldfish, and they only ever want to talk about the castle.";
const OUTPUT = "/output/entry.txt";

// Gate: the entry must be one line, 1-200 chars, no surrounding whitespace.
// Fail fast so a bad line can never be written.
if (LINE.length < 1 || LINE.length > 200) throw new Error(`line must be 1-200 chars, got ${LINE.length}`);
if (LINE.trim() !== LINE || LINE.includes("\n")) throw new Error("line must be a single line with no surrounding whitespace");

mkdirSync("/output", { recursive: true });
writeFileSync(OUTPUT, LINE, "utf8");
console.log(`wrote ${LINE.length} chars to ${OUTPUT}`);
