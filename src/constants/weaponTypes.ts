import type { WeaponType } from "@/types";

export const WEAPON_TYPES: readonly {
  value: WeaponType;
  label: string;
}[] = [
  {value: "sword", label: "片手剣"},
  {value: "greatSword", label: "大剣"},
  {value: "artsUnit", label: "アーツユニット"},
  {value: "HandCannon", label: "拳銃"},
  {value: "polearm", label: "長柄武器"},
] as const