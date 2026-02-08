import React from "react";
import { Box, Card, CardContent, Typography, Grid } from "@mui/material";
import { RARITY_BG_STYLE } from "@/constants/rarityColor";
import { useWeaponContext } from "@/contexts/WeaponContext";



const WeaponList: React.FC = () => {
  const weapons = useWeaponContext();

  return (
    <Grid container spacing={2} justifyContent="center">
      {weapons.map((w) => (
        <Grid key={w.name}>
          <Card sx={{ minWidth: 300 }}>
            <CardContent>
              <Box
                display={"flex"}
                alignItems={"center"}
              >
                <Box
                  sx={{
                    width: 40,
                    height: 40,
                    borderRadius: "1",
                    background: RARITY_BG_STYLE[w.rarity],
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    mr: 1,
                  }}
                >
                  <img
                    src={`src/assets/icons/weapons/${w.src}.png`}
                    alt={w.src}
                    width={40}
                  />
                </Box>
                <Typography variant="h6">{w.name}</Typography>
              </Box>
              <Typography>レア度: {w.rarity}</Typography>
              <Typography>攻撃力: {w.attack}</Typography>
              <Typography>基礎効果: {w.baseEffect}</Typography>
              <Typography>付加効果: {w.extraEffect}</Typography>
              <Typography>スキル効果: {w.skillEffect}</Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

export default WeaponList;