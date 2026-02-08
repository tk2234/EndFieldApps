import { useMemo } from "react";
import type { Weapon } from "@/types";
import type { WeaponFilter } from "@/types/filter";
import { useWeaponContext } from "@/contexts/WeaponContext";


/* weaponContext からfilterかけてWeapon[]を返す */
export function useWeapons(filter: WeaponFilter): Weapon[] {
  const { weapons } = useWeaponContext();

  return useMemo(() => {
    if (!filter) return weapons;

    return weapons.filter((w) => {
      if (filter.type && w.weaponType !== filter.type) return false;
      if (filter.rarity && w.rarity !== filter.rarity) return false;
      if (filter.baseEffect && w.baseEffect !== filter.baseEffect) return false;
      if (filter.extraEffect && w.extraEffect !== filter.extraEffect) return false;
      if (filter.skillEffect && w.skillEffect !== filter.skillEffect) return false;

      return true;
    });
  }, [weapons, filter]);
}
