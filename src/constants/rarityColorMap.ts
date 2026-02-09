import type { Rarity } from "@/types";
import { RARITIES } from "./raritys";

export const RARITY_COLOR_MAP = Object.fromEntries(
  RARITIES.map( (r) => [r.value, r.color])
) as Record<Rarity, string>;