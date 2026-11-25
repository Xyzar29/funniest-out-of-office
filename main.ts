// The Funniest Out-of-Office — a make.fun one-liner entry.
//
// The program writes a single out-of-office auto-reply line to
// /output/entry.txt. The line is 128 characters: one sentence setting the
// scene (on leave until Monday), then the twist — a toddler has taken over
// the inbox — with three escalating beats (approved, deleted, eaten) that
// land on the charger as the punchline. It reads like a real person wrote
// it, because the joke is a specific, lived-in detail rather than a
// generic "I'm away" template.
import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "I'm on leave until Monday. My toddler is running my inbox: she's approved your email, deleted two others, and eaten the charger.";

// The file is written with no trailing newline, so the gate counts exactly
// the 128 characters of the reply and nothing else — one line, no second
// line, no link, no image.
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
console.log(line);
