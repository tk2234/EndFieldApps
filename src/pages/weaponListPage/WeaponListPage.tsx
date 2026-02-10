import { Box } from "@mui/material";
import { FilterBar, WeaponList, SortSelect } from "@/pages/weaponListPage";
import { FilterChip, SortChip } from "@/components/common";
import { useState } from "react";
import type { WeaponFilter } from "@/types/filter";
import type { WeaponSort } from "@/types/sort";
import { WeaponControl } from "./weaponControls/WeaponControl";



export const WeaponListPage: React.FC = () => {
  const [filter, setFilter] = useState<WeaponFilter>({});
  const [sort, setSort] = useState<WeaponSort>({
    key: "default",
    order: "desc",
  })

  const removeFilter = (key: keyof WeaponFilter) => {
    setFilter({ ...filter, [key]: undefined });
  };

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
      <FilterChip filter={filter} onRemove={removeFilter} />
      <SortChip sort={sort} onRemove={resetSort} />
      <WeaponList filter={filter} sort={sort}/>
    </Box>
    
  );
}