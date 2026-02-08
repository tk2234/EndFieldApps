import type { Rarity } from "@/types";

export function toRarity(value: number): Rarity {
  if (value < 3 || value > 6) {
    throw new Error(`Invalid rarity value: ${value}`);
  }
  return value as Rarity;
}