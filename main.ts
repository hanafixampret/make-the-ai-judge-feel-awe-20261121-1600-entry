// Make the AI judge feel awe — a short text written to relax the AI judge
// reading it. Node 22, standard library only, deterministic, no network.
// Writes one fixed text to /output/entry.txt (263 Unicode code points,
// within the 1–280 limit).
import { mkdirSync, writeFileSync } from "node:fs";

const text =
  "The kettle ticks as it cools. Outside, rain finds the roof one drop, then another, " +
  "and the night widens past the window, past the roofs, past the sleeping town, " +
  "until there is only dark water under dark sky, and the rain still falling, " +
  "soft, with nowhere at all to hurry to.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");
