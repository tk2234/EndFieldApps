import React from "react";
import { Box, Grid } from "@mui/material";
import { WeaponCard } from "./WeaponCard";
import { useWeapons } from "@/hooks/useWeapons";
import type { WeaponFilter } from "@/types/filter";
import type { WeaponSort } from "@/types/sort";

type Props = {
  filter: WeaponFilter;
  sort: WeaponSort
};

export const WeaponList: React.FC<Props> = ({ filter, sort }: Props) => {
  const weapons = useWeapons(filter, sort);

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