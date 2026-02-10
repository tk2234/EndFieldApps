import type { WeaponFilter } from "@/types/filter";
import type { WeaponSort } from "@/types/sort";
import { ExpandMore } from "@mui/icons-material";
import { Box, Button, Collapse, FormControl, InputLabel, ListItemButton, ListItemText, MenuItem, Paper, Select, Stack } from "@mui/material";
import type React from "react";
import { useState } from "react";
import effects from '@/data/effects.json';
import { SortSelect } from "./SortSelect";





type Props = {
  filter: WeaponFilter;
  sort: WeaponSort;
  onChangeFilter: (newFilter: WeaponFilter) => void;
  onChangeSort: (newSoer: WeaponSort) => void;
};





export const WeaponSecondaryFilter: React.FC<Props> = ({
    filter, sort, onChangeFilter, onChangeSort
  }: Props) => {

    const [open,setOpen] = useState(false);

  const handleToggleAdditionalFilters = () => {
    setOpen(!open);
  };

  return (
    <Box>
      <Button
        onClick={handleToggleAdditionalFilters}
        size="small"
        endIcon={
          <ExpandMore
            sx={{
              transform: open ? "rotate(180deg)" : "rotate(0)",
              transition: "0.2s",
            }}
          />
        }
      >
        詳細フィルタ
      </Button>
      <Collapse in={open}>
        <Paper
          variant='outlined'
          sx={{
            p: 2,
            bgcolor: "grey.300",
            borderRadius: 2,
          }}
        >
          <Stack
            direction="row"
            spacing={2}
            alignItems="center"
            sx={{ width: "100%" }}
          >
            <Stack
              direction="row"
              spacing={1}
              sx={{ flex: 1, minWidth: 0 }}
            >
              {/* Base Effect Filter */ }
              <FormControl size="small" sx={{ minWidth: 120, flex: "0 0 auto" }}>
                <InputLabel id="base-effect-label">基礎効果</InputLabel>
                <Select
                  value={filter.baseEffect ?? ""}
                  label="baseEffect"
                  onChange={ (e) =>
                    onChangeFilter({ ...filter, baseEffect: e.target.value || undefined })
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
                    onChangeFilter({ ...filter, extraEffect: e.target.value || undefined })
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
                    onChangeFilter({ ...filter, skillEffect: e.target.value || undefined })
                  }
                >
                  <MenuItem value="">全てのスキル効果</MenuItem>
                  {effects.find((e => e.type === "skillEffect"))?.effects.map((effect) => (
                    <MenuItem key={effect} value={effect}>{effect}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Stack>
            <Box
              sx={{ ml: "auto", flexShrink: 0}}
            >
              <SortSelect
                sort={sort}
                onChange={onChangeSort}
              />
            </Box>
          </Stack>
        </Paper>
      </Collapse>
    </Box>

  )
}