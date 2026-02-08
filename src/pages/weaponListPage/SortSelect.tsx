import type React from "react";

import { Box, FormControl, Select, MenuItem, InputLabel, Button, Stack, Collapse, Paper } from '@mui/material';

import type { WeaponSort } from "@/types/sort";


type Props = {
  sort: WeaponSort;
  onChange: (newSort: WeaponSort) => void;
}


export const SortSelect: React.FC<Props> = ({ sort, onChange}: Props) => {
  return (
    <FormControl
      size="small"
      sx={{
        minWidth: 100,
        flex:"0 0 auto",
        mb: 2
      }}
    >
      <InputLabel id="weaoin-sort">並べ替え</InputLabel>
      <Select
        value={sort}
        label="sort"
        onChange={ (e) => onChange(e.target.value)}
      >
        <MenuItem value="rarity-desc">レア度　高い順</MenuItem>
        <MenuItem value="rarity-asc">レア度　低い順</MenuItem>
      </Select>

    </FormControl>
  )
}