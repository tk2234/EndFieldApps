import type { Rarity, WeaponType } from ".";

export type WeaponFilter = {
  type?: WeaponType;
  rarity?: Rarity;
  baseEffect?: string;
  extraEffect?: string;
  skillEffect?: string;
};