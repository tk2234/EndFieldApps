import { Box } from "@mui/material";
import { FilterBar, WeaponList, SortSelect } from "@/pages/weaponListPage";
import { FilterChip, SortChip } from "@/components/common";
import { useState } from "react";
import type { WeaponFilter } from "@/types/filter";
import type { WeaponSort } from "@/types/sort";
import { WeaponControl } from "./weaponControls/WeaponControl";
import { useWeaponFilter } from "@/hooks";



export const WeaponListPage: React.FC = () => {
  const [sort, setSort] = useState<WeaponSort>({
    key: "default",
    order: "desc",
  })
  const { filter, setFilter, removeFilter, activeChips } = useWeaponFilter()

  const resetSort = () => {
    {/* TODO: constantsにdefaultを定義する */}
    setSort({
      key: "default",
      order: "desc",
    })
  };

  return (
    <Box sx={{ width: "80%", margin: "0 auto", mt: 4 }}>
      <WeaponControl
        filter={filter}
        sort={sort}
        onChangeFilter={setFilter}
        onChangeSort={setSort}
      />
      <FilterChip chips={activeChips} onRemove={removeFilter} />
      <SortChip sort={sort} onRemove={resetSort} />
      <WeaponList filter={filter} sort={sort}/>
    </Box>
  );
}