import { WEAPON_TYPES } from "@/constants/weaponTypes";
import type { WeaponType } from "@/types";


export function convertWeaponType(value: WeaponType): string {
  return WEAPON_TYPES.find((t) => t.value === value)?.label ?? ""
};