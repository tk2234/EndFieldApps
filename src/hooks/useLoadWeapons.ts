import rawWeapons from "@/data/weapons.json";
import type { Weapon } from "@/types";
import type { RawWeapon } from "@/types/raw";
import { normalizeWeapon } from "@/utils/normalizeWeapon";

export function useLoadWeapons(): Weapon[] {
  return (rawWeapons as RawWeapon[]).map(normalizeWeapon);
}