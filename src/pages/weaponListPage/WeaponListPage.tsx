import { Box } from "@mui/material";
import { FilterBar, WeaponList, SortSelect } from "@/pages/weaponListPage";
import { FilterChip, SortChip } from "@/components/common";
import { useState } from "react";
import type { WeaponFilter } from "@/types/filter";
import type { WeaponSort } from "@/types/sort";

const DEFAULT_SORT: WeaponSort = "default"

export const WeaponListPage: React.FC = () => {
  const [filter, setFilter] = useState<WeaponFilter>({});
  const [sort, setSort] = useState<WeaponSort>(DEFAULT_SORT)

  const removeFilter = (key: keyof WeaponFilter) => {
    setFilter({ ...filter, [key]: undefined });
  };

  const resetSort = () => {
    setSort(DEFAULT_SORT)
  };

  return (
    <Box sx={{ width: "80%", margin: "0 auto", mt: 4 }}>
      <FilterBar filter={filter} onChange={setFilter} />
      <SortSelect sort={sort} onChange={setSort} />
      <FilterChip filter={filter} onRemove={removeFilter} />
      <SortChip sort={sort} onRemove={resetSort} />
      <WeaponList filter={filter} sort={sort}/>
    </Box>
  );
}