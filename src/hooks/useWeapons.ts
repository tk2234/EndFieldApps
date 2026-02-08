import { useMemo } from "react";
import rawWeapons from "@/data/weapons.json";
import type { Weapon } from "@/types";
import { normalizeWeapon } from "@/utils/normalizeWeapon";

export function useWeapons(): Weapon[] {
  return useMemo(() => {
    return rawWeapons.map(normalizeWeapon);
  }, []);
}