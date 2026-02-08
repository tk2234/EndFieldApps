import { Card, CardContent, Typography, Box, Chip } from "@mui/material";


import WeaponIcon from "./WeaponIcon";

import type { Weapon } from "@/types";

type Props = {
  weapon: Weapon;
}

const WeaponCard: React.FC<Props> = ({ weapon }: Props) => {

  return (
    <Card
      sx={{
        display: "flex",
        gap: 2,
        p: 2,
        backgroundColor: "#f2f3f5",
        border: `1px solid #dcdfe3`,
        borderRadius: 2,
        boxShadow: "0 4px 12px rgba(0,0,0,0.12)",
      }}>
      <WeaponIcon rarity={weapon.rarity} src={weapon.src} />
      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Weapon Name */}
        <Typography variant="h6" marginBottom={0.5}>
          {weapon.name}
        </Typography>

        {/* Weapon Details */}
        <Typography variant="body2">
          攻撃力: {weapon.attack}
        </Typography>

        <Box
          sx={{
            display: "flex",
            gap: 0.5,
            mt: 0.5
          }}
        >
          <Chip label={weapon.baseEffect} size="small" />
          <Chip label={weapon.extraEffect} size="small" />
          <Chip label={weapon.skillEffect} size="small" />
        </Box>

        {/* weaponType */}
        <Box
  sx={{
    mt: 1,
    mb: 0.5,
    borderTop: "1px solid rgba(0, 0, 0, 0.5)",
  }}
/>
        <Box
          sx={{
            mt: "auto",
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <Chip
            label={weapon.weaponType}
            size="small"
            variant="filled"
            sx={{
              height: 18,
              fontSize: "0.7rem",
              border: "1px solid #cfd3da",
              backgroundColor: "#e4e6ea",
              color: "#333",
            }}
          />
        </Box>
      </Box>
    </Card>
  )
}

export default WeaponCard;