import type { Weapon, Rarity } from "@/types";
import type { RawWeapon } from "@/types/raw";

export function normalizeWeapon(raw: RawWeapon): Weapon {
  if (raw.rarity < 3 || raw.rarity > 6) {
    console.warn(`Invalid rarity value: ${raw.rarity}`);
    // throw new Error(`Invalid rarity value: ${raw.rarity}`);
  }

  return {
    ...raw,
    rarity: raw.rarity as Rarity,
  };
}