import React from "react";
import { useState } from "react";
import { Box, Grid } from "@mui/material";
import WeaponCard from "@/components/WeaponCard";
import FilterBar from "@/components/FilterBar";
import { useWeapons } from "@/hooks/useWeapons";
import type { WeaponFilter } from "@/types/filter";

type Props = {
  filter: WeaponFilter;
};

const WeaponList: React.FC<Props> = ({ filter }) => {
  const weapons = useWeapons(filter);

  return (
    <Box>
      <Grid container spacing={2} justifyContent="center">
        {weapons.map((w) => (
          <Grid key={w.name}>
            <WeaponCard weapon={w} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default WeaponList;