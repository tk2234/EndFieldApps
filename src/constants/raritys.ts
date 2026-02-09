import type { Rarity } from "@/types";

export const RARITIES: readonly {
  value: Rarity;
  label: string;
  color: string;
}[] = [
  { value: 3, label: "★3", color: "#2196f3" },
  { value: 4, label: "★4", color: "#9c27b0" },
  { value: 5, label: "★5", color: "#ff9800" },
  { value: 6, label: "★6", color: "#f44336" },
] as const;
