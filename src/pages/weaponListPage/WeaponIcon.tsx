import { Box } from "@mui/material";

import { RARITY_COLOR_MAP } from "@/constants/rarityColorMap";
import type { Rarity } from "@/types";

type Props = {
  rarity: Rarity;
  src: string;
}

export const WeaponIcon: React.FC<Props> = ({ rarity, src }: Props) => {
  return (
    <Box
      sx={{
        width: 80,
        height: 80,
        borderRadius: "1",
        background: `
          linear-gradient(
            to top,
            ${RARITY_COLOR_MAP[rarity]} 0%,
            rgba(0, 0, 0, 0.2) 30%,
            #1a1a1a 100%
          )
        `,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "inset 0 0 8px rgba(255,255,255,0.3)",
      }}
    >
      {src && (
        <Box
          component="img"
          src={`src/assets/icons/weapons/${src}.png`}
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
          }}
        />
      )}
    </Box>
  );
}