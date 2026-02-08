import { Box } from "@mui/material";
import WeaponList from "@/components/WeaponList";
import FilterBar from "@/components/FilterBar";
import { useState } from "react";
import type { WeaponFilter } from "@/types/filter";

const WeaponListPage: React.FC = () => {
  const [filter, setFilter] = useState<WeaponFilter>({});
  return (
    <Box sx={{ width: "80%", margin: "0 auto", mt: 4 }}>
      <FilterBar filter={filter} onChange={setFilter} />
      <WeaponList filter={filter} />
    </Box>
  );
}

export default WeaponListPage;