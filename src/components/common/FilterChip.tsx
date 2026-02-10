import { Box, Chip } from '@mui/material';
import type { WeaponFilter } from '@/types/filter';
import { convertWeaponType } from '@/utils/convertWeaponLabel';
import { RARITIES } from '@/constants';
import type { FilterChipItem } from '@/hooks';

type Props = {
  chips: FilterChipItem[];
  onRemove: (key: FilterChipItem["key"]) => void;
};

export const FilterChip: React.FC<Props> = ({ chips, onRemove }: Props) => {
  if (chips.length === 0 ) return null;

  return (
    <Box
      sx={{
        display: 'flex',
        gap: 1,
        flexWrap: 'wrap',
        mb: 2,
      }}
    >
      {chips.map((chip) => (
        <Chip
          key={chip.key}
          label={chip.label}
          size="small"
          onDelete={() => onRemove(chip.key)}
        />
      ))}
    </Box>
  );
}