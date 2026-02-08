
export const RARITY_BG_COLOR: Record<number, string> = {
  3: "#2196f3", // ブルー
  4: "#9c27b0", // パープル
  5: "#ff9800", // オレンジ
  6: "#f44336", // レッド
};

import type { Rarity } from "@/types";

export const RARITY_BG_STYLE: Record<Rarity, string> = {
  3: "linear-gradient(135deg, #64b5f6, #1976d2)",
  4: "linear-gradient(135deg, #ce93d8, #7b1fa2)",
  5: "linear-gradient(135deg, #ffcc80, #f57c00)",
  6: "linear-gradient(135deg, #ef9a9a, #d32f2f)",
};
