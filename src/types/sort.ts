export type WeaponSort =
  | "default"
  | "attack-desc"
  | "attack-asc"
  | "rarity-desc"
  | "rarity-asc";

export const SORT_LABEL: Record<WeaponSort, string> = {
  "default": "デフォルト",
  "attack-desc": "攻撃力 高い順",
  "attack-asc": "攻撃力 低い順",
  "rarity-desc": "レア度 高い順",
  "rarity-asc": "レア度 低い順"
}