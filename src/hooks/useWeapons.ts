import { useMemo } from "react";
import type { Weapon } from "@/types";
import type { WeaponFilter } from "@/types/filter";
import type { WeaponSort } from "@/types/sort";
import { useWeaponContext } from "@/contexts/WeaponContext";


/* weaponContext からfilterかけてWeapon[]を返す */
export function useWeapons(filter: WeaponFilter, sort: WeaponSort): Weapon[] {
  const { weapons } = useWeaponContext();

  const filtered = weapons.filter((w) => {
      if (filter.type && w.weaponType !== filter.type) return false;
      if (filter.rarity && w.rarity !== filter.rarity) return false;
      if (filter.baseEffect && w.baseEffect !== filter.baseEffect) return false;
      if (filter.extraEffect && w.extraEffect !== filter.extraEffect) return false;
      if (filter.skillEffect && w.skillEffect !== filter.skillEffect) return false;

      return true;
    });

    const sorted = [...filtered].sort((a, b) => {
      switch (sort) {
        case "attack-desc":
          return b.attack - a.attack;
        case "attack-asc":
          return a.attack - b.attack;
        case "rarity-desc":
          return b.rarity - a.rarity;
        case "rarity-asc":
          return a.rarity - b.rarity;
        default:
          return 0;
      }
    });

  return sorted
}
