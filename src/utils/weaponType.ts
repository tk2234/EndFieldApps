import { WEAPON_TYPE_MAP } from "@/constants";
import type { WeaponType } from "@/types";

export function toWeaponType(value: string): WeaponType {
  const weaponType = WEAPON_TYPE_MAP[value];

  if (!weaponType) {
    console.warn("Unknown weapon type:", value);
  }

  return weaponType
}