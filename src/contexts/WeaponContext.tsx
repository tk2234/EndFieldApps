import { createContext, useContext } from "react";
import type { Weapon } from "@/types";

export const WeaponContext = createContext<Weapon[] | null>(null);

export function useWeaponContext(): Weapon[] {
  const ctx = useContext(WeaponContext);
  if (!ctx) {
    throw new Error("useWeaponContext must be used within WeaponProvider");
  }
  return ctx;
}
