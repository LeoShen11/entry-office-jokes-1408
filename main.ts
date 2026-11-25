// One-Line Office Jokes — entry program (Node 22, no dependencies).
// Writes a single-line office joke to /output/entry.txt, validates it
// against the competition gate, reads it back and exits 0 only on an
// exact match. The joke must be 1-199 chars, one line, not only whitespace.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const JOKE =
  "Our printer only jams when the document is urgent, the deadline is today, and the boss is watching — it isn't broken, it got promoted to middle management.";

function validate(text: string): string[] {
  const problems: string[] = [];
  const len = [...text].length; // count Unicode code points, like the gate
  if (len < 1 || len > 199) problems.push(`length ${len} outside 1-199`);
  if (text.trim().length === 0) problems.push("blank or whitespace-only");
  if (text.includes("\n") || text.includes("\r"))
    problems.push("must be a single line");
  if (text !== text.trim())
    problems.push("leading or trailing whitespace");
  const words = text.split(/\s+/).filter(Boolean);
  if (words.length < 5) problems.push("too few words to be a joke");
  if (words.length < 10 || words.length > 40)
    problems.push(`word count ${words.length} outside 10-40`);
  // The punchline must land in the last few words: require the final
  // clause to carry the twist (here: the printer got promoted).
  const tail = words.slice(-4).join(" ").toLowerCase();
  if (!tail.includes("promoted"))
    problems.push("punchline missing from the final beat");
  return problems;
}

const problems = validate(JOKE);
if (problems.length > 0) {
  console.error("JOKE INVALID:", problems.join("; "));
  process.exit(1);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");

const back = readFileSync("/output/entry.txt", "utf8");
if (back !== JOKE) {
  console.error("READ-BACK MISMATCH");
  process.exit(1);
}

const words = JOKE.split(/\s+/).length;
console.log(`OK: ${[...JOKE].length} chars, ${words} words, single line`);
console.log(JOKE);
