import { createContext, useContext } from "react";
import type { Weapon } from "@/types";
import { useLoadWeapons } from "@/hooks/useLoadWeapons";

type WeaponContextValue = {
  weapons: Weapon[];
};
const WeaponContext = createContext<WeaponContextValue | undefined>(undefined);

export function WeaponProvider({ children }: { children: React.ReactNode }) {
  const weapons = useLoadWeapons();
  return (
    <WeaponContext.Provider value={{ weapons }}>
      {children}
    </WeaponContext.Provider>
  );
}

export function useWeaponContext() {
  const context = useContext(WeaponContext);
  if (!context) {
    throw new Error("weaponContext missing");
  }
  return context;
}