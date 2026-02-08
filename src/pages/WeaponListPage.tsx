import { Box } from "@mui/material";
import WeaponList from "@/components/WeaponList";
import FilterBar from "@/components/FilterBar";
import FilterChip from "@/components/FilterChip";
import { useState } from "react";
import type { WeaponFilter } from "@/types/filter";

const WeaponListPage: React.FC = () => {
  const [filter, setFilter] = useState<WeaponFilter>({});

  const removeFilter = (key: keyof WeaponFilter) => {
    setFilter({ ...filter, [key]: undefined });
  };

  return (
    <Box sx={{ width: "80%", margin: "0 auto", mt: 4 }}>
      <FilterBar filter={filter} onChange={setFilter} />
      <FilterChip filter={filter} onRemove={removeFilter} />
      <WeaponList filter={filter} />
    </Box>
  );
}

export default WeaponListPage;