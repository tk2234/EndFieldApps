// useWeaponFilter.ts
import { useMemo, useState } from "react";
import type { WeaponFilter } from "@/types/filter";
import { convertWeaponType } from "@/utils/convertWeaponLabel";
import { RARITIES } from "@/constants";

export type FilterChipItem = {
  key: keyof WeaponFilter;
  label: string;
};

export const useWeaponFilter = () => {
  const [filter, setFilter] = useState<WeaponFilter>({})

  const removeFilter = (key: keyof WeaponFilter) => {
    setFilter((prev) => ({
      ...prev,
      [key]: undefined,
    }));
  };

  const resetFilter = () => {
    setFilter({});
  };


  const activeChips = useMemo<FilterChipItem[]>(() => {
    const chips: FilterChipItem[] = [];

    if (filter.type) {
      chips.push({
        key: "type",
        label: convertWeaponType(filter.type),
      });
    }

    if (filter.rarity) {
      chips.push({
        key: "rarity",
        label:
          RARITIES.find((r) => r.value === filter.rarity)?.label ??
          String(filter.rarity),
      });
    }

    if (filter.baseEffect) {
      chips.push({ key: "baseEffect", label: filter.baseEffect });
    }

    if (filter.extraEffect) {
      chips.push({ key: "extraEffect", label: filter.extraEffect });
    }

    if (filter.skillEffect) {
      chips.push({ key: "skillEffect", label: filter.skillEffect });
    }

    return chips;
  }, [filter]);

  return {
    filter,
    setFilter,
    activeChips,
    removeFilter,
    resetFilter,
    isActive: activeChips.length > 0,
    activeCount: activeChips.length,
  };
};
