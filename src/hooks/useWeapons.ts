import type { Weapon } from "@/types";
import type { WeaponFilter } from "@/types/filter";
import type { WeaponSort } from "@/types/sort";
import { useWeaponContext } from "@/contexts/WeaponContext";
import { WEAPON_TYPE_ORDER } from "@/constants";


/* weaponContext からfilterかけてWeapon[]を返す */
export function useWeapons(filter: WeaponFilter, sort: WeaponSort): Weapon[] {
  const { weapons } = useWeaponContext();

  function filterWeapons(
    weapons: Weapon[],
    filter: WeaponFilter,
  ): Weapon[] {
    return weapons.filter((w) => {
      if (filter.type && w.weaponType !== filter.type) return false;
      if (filter.rarity && w.rarity !== filter.rarity) return false;
      if (filter.baseEffect && w.baseEffect !== filter.baseEffect) return false;
      if (filter.extraEffect && w.extraEffect !== filter.extraEffect) return false;
      if (filter.skillEffect && w.skillEffect !== filter.skillEffect) return false;

      return true;
    });
  }

  function sortWeapons(
    weapons: Weapon[],
    sort: WeaponSort,
  ): Weapon[] {
    if (sort.key === "default") return weapons;

    const dir = sort.order === "asc" ? 1 : -1;

    const list = [...weapons];
    switch (sort.key) {
      case "attack":
        return list.sort(
          (a, b) => (a.attack - b.attack) * dir
        );

      case "rarity":
        return list.sort(
          (a, b) => (a.rarity - b.rarity) * dir
        );

      case "weaponType":
        return list.sort(
          (a, b) => (
            WEAPON_TYPE_ORDER[a.weaponType] -
              WEAPON_TYPE_ORDER[b.weaponType] * dir
          )
        );

      default:
        return list;
    }
  }

  return sortWeapons(filterWeapons(weapons, filter), sort)
}
