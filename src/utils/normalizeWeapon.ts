import type { Weapon, Rarity } from "@/types";
import type { RawWeapon } from "@/types/raw";
import { toRarity } from "@/utils/rarity";

export function normalizeWeapon(raw: RawWeapon): Weapon {
  return {
    name: raw.name,
    weaponType: raw.weaponType,
    rarity: toRarity(raw.rarity),
    attack: raw.attack,
    baseEffect: raw.baseEffect,
    extraEffect: raw.extraEffect,
    skillEffect: raw.skillEffect,
    src: raw.src,
  };
}