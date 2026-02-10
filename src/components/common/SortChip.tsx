import { Box, Chip } from "@mui/material";
import type { WeaponSort } from "@/types/sort";
import type React from "react";
import { WEAPON_SORT_KEYS } from "@/constants";


type Props = {
  sort: WeaponSort;
  onRemove: (key: WeaponSort) => void;
}

export const SortChip: React.FC<Props> = ({ sort, onRemove}: Props) => {
  if (sort.key === "default") { return }
  return (
    <Box
      sx={{
        display: 'flex',
        gap: 1,
        flexWrap: 'wrap',
        mb: 2,
      }}
    >
      <Chip
        label={WEAPON_SORT_KEYS.find( (k) => k.key === sort.key)?.label}
        size="small"
        onDelete={() => onRemove(sort)}
      />
    </Box>
  )
}