import type { WeaponSortKey } from "@/types/sort";


export const WEAPON_SORT_KEYS: readonly {
  key: WeaponSortKey;
  label: string;
}[] = [
  {key: "default", label: "デフォルト"},
  {key: "attack", label: "攻撃力"},
  {key: "rarity", label: "レア度"},
  {key: "weaponType", label: "武器種"},
] as const