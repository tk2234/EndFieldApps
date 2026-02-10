export type WeaponSortKey =
  | "default"
  | "attack"
  | "rarity"
  | "weaponType";

export type SortOrder = "asc" | "desc";

export interface WeaponSort {
  key: WeaponSortKey;
  order: SortOrder;
}