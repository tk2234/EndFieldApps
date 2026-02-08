import React from "react";
import { Box, Card, CardContent, Typography, Grid } from "@mui/material";
import { RARITY_BG_STYLE } from "@/constants/rarityColor";
import { useWeaponContext } from "@/contexts/WeaponContext";
import WeaponCard from "@/components/WeaponCard";



const WeaponList: React.FC = () => {
  const weapons = useWeaponContext();

  return (
    <Grid container spacing={2} justifyContent="center">
      {weapons.map((w) => (
        <Grid key={w.name}>
          <WeaponCard weapon={w} />
        </Grid>
      ))}
    </Grid>
  );
}

export default WeaponList;