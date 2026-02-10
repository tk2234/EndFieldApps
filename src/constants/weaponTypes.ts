import type { Weapon, WeaponType } from "@/types";

export const WEAPON_TYPES: readonly {
  value: WeaponType;
  label: string;
  order: number;
}[] = [
  {value: "sword", label: "片手剣", order: 1},
  {value: "greatSword", label: "大剣", order: 2},
  {value: "HandCannon", label: "拳銃", order: 3},
  {value: "artsUnit", label: "アーツユニット", order: 4},
  {value: "polearm", label: "長柄武器", order: 5},
] as const

export const WEAPON_TYPE_ORDER: Record<WeaponType, number> =
Object.fromEntries(
  WEAPON_TYPES.map( (t) => [t.value, t.order])
) as Record<WeaponType, number>