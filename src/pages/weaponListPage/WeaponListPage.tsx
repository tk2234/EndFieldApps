import { Box } from "@mui/material";
import { FilterBar } from "@/pages/weaponListPage/FilterBar";
import { WeaponList } from "@/pages/weaponListPage/WeaponList";
import { SortSelect } from "@/pages/weaponListPage/SortSelect";
import FilterChip from "@/components/common/FilterChip";
import { useState } from "react";
import type { WeaponFilter } from "@/types/filter";
import type { WeaponSort } from "@/types/sort";


export const WeaponListPage: React.FC = () => {
  const [filter, setFilter] = useState<WeaponFilter>({});
  const [sort, setSort] = useState<WeaponSort>("rarity-desc")

  const removeFilter = (key: keyof WeaponFilter) => {
    setFilter({ ...filter, [key]: undefined });
  };

  return (
    <Box sx={{ width: "80%", margin: "0 auto", mt: 4 }}>
      <FilterBar filter={filter} onChange={setFilter} />
      <SortSelect sort={sort} onChange={setSort} />
      <FilterChip filter={filter} onRemove={removeFilter} />
      <WeaponList filter={filter} sort={sort}/>
    </Box>
  );
}