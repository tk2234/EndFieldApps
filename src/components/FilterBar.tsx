import { useState } from 'react';
import { Box, FormControl, Select, MenuItem, InputLabel, Button, Stack, Collapse, Paper } from '@mui/material';
import { ExpandMore } from '@mui/icons-material';

import type { WeaponFilter } from '@/types/filter';

import effects from '@/data/effects.json';


type Props = {
  filter: WeaponFilter;
  onChange: (newFilter: WeaponFilter) => void;
};

const FilterBar: React.FC<Props> = ({ filter, onChange }: Props) => {
  const [open, setOpen] = useState(false);

  const handleToggleAdditionalFilters = () => {
    setOpen(!open);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        mb: 2,
      }}
    >
      { /* 上段filter */}
      <Stack
        direction="row"
        spacing={2}
        alignItems="center"
      >
        { /* Weapon Type Filter */ }
        <FormControl size="small" sx={{ minWidth: 120, flex: "0 0 auto" }}>
          <InputLabel id="weapon-type-label">武器種</InputLabel>
          <Select
            value={filter.type ?? ""}
            label="武器種"
            onChange={ (e) =>
              onChange({ ...filter, type: e.target.value || undefined })
            }
          >
            <MenuItem value="">全ての武器種</MenuItem>
            <MenuItem value="sword">片手剣</MenuItem>
          </Select>
        </FormControl>

        { /* Rarity Filter */ }
        <FormControl size="small" sx={{ minWidth: 120, flex: "0 0 auto" }}>
          <InputLabel id="rarity-label">レアリティ</InputLabel>
          <Select
            value={filter.rarity ?? ""}
            label="レアリティ"
            onChange={ (e) =>
              onChange({ ...filter, rarity: e.target.value ? Number(e.target.value) : undefined })
            }
          >
            <MenuItem value="">全てのレアリティ</MenuItem>
            {[1,2,3,4,5,6].map((r) => (
              <MenuItem key={r} value={r}>{r}★</MenuItem>
            ))}
          </Select>
        </FormControl>

        { /* open addtional filter */}
        <Button
          size="small"
          sx={{
            minWidth: 120,
            flex: "0 0 auto",
          }}
          endIcon={<ExpandMore />}
          onClick={handleToggleAdditionalFilters}
        >
          詳細フィルター
        </Button>
      </Stack>

      { /* 下段filter */ }
      <Collapse in={open}>
        <Paper
          variant='outlined'
          sx={{
            p: 2,
            bgcolor: "grey.300",
            borderRadius: 2,
          }}
        >
          <Stack direction="row" spacing={2}>
            {/* Base Effect Filter */ }
            <FormControl size="small" sx={{ minWidth: 120, flex: "0 0 auto" }}>
              <InputLabel id="base-effect-label">基礎効果</InputLabel>
              <Select
                value={filter.baseEffect ?? ""}
                label="baseEffect"
                onChange={ (e) =>
                  onChange({ ...filter, baseEffect: e.target.value || undefined })
                }
              >
                <MenuItem value="">全ての基礎効果</MenuItem>
                {effects.find((e => e.type === "baseEffect"))?.effects.map((effect) => (
                  <MenuItem key={effect} value={effect}>{effect}</MenuItem>
                ))}
              </Select>
            </FormControl>

            {/* Extra Effect Filter */ }
            <FormControl size="small" sx={{ minWidth: 120, flex: "0 0 auto" }}>
              <InputLabel id="extra-effect-label">追加効果</InputLabel>
              <Select
                value={filter.extraEffect ?? ""}
                label="extraEffects"
                onChange={ (e) =>
                  onChange({ ...filter, extraEffect: e.target.value || undefined })
                }
              >
                <MenuItem value="">全ての追加効果</MenuItem>
                {effects.find((e => e.type === "extraEffect"))?.effects.map((effect) => (
                  <MenuItem key={effect} value={effect}>{effect}</MenuItem>
                ))}
              </Select>
            </FormControl>

            {/* Skill Effect Filter */ }
            <FormControl size="small" sx={{ minWidth: 120, flex: "0 0 auto" }}>
              <InputLabel id="skill-effect-label">スキル効果</InputLabel>
              <Select
                value={filter.skillEffect ?? ""}
                label="skillEffect"
                onChange={ (e) =>
                  onChange({ ...filter, skillEffect: e.target.value || undefined })
                }
              >
                <MenuItem value="">全てのスキル効果</MenuItem>
                {effects.find((e => e.type === "skillEffect"))?.effects.map((effect) => (
                  <MenuItem key={effect} value={effect}>{effect}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Stack>
        </Paper>
      </Collapse>
    </Box>
  )
}

export default FilterBar;