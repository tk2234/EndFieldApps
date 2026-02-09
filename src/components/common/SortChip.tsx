import { Box, Chip } from "@mui/material";
import { SORT_LABEL } from "@/types/sort";
import type { WeaponSort } from "@/types/sort";
import type React from "react";


type Props = {
  sort: WeaponSort;
  onRemove: (key: WeaponSort) => void;
}

export const SortChip: React.FC<Props> = ({ sort, onRemove}: Props) => {
  if (sort === "default") { return }
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
        label={SORT_LABEL[sort]}
        size="small"
        onDelete={() => onRemove(sort)}
      />
    </Box>
  )
}