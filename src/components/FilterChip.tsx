import { Box, Chip } from '@mui/material';
import type { WeaponFilter } from '@/types/filter';

type Props = {
  filter: WeaponFilter;
  onRemove: (key: keyof WeaponFilter) => void;
};

const FilterChip: React.FC<Props> = ({ filter, onRemove }: Props) => {
  const chips: { label: string; key: keyof WeaponFilter }[] = [];

  if (filter.type) {
    chips.push({ label: filter.type, key: 'type' });
  }
  if (filter.rarity) {
    chips.push({ label: `${filter.rarity}★`, key: 'rarity' });
  }
  if (filter.baseEffect) {
    chips.push({ label: filter.baseEffect, key: "baseEffect"});
  }
  if (filter.extraEffect) {
    chips.push({ label: filter.extraEffect, key: "extraEffect"})
  }
  if (filter.skillEffect) {
    chips.push({ label: filter.skillEffect, key: "skillEffect"})
  }

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

export default FilterChip;