import type React from "react";

import { Box, FormControl, Select, MenuItem, InputLabel, Button, Stack, Collapse, Paper, IconButton } from '@mui/material';

import type { WeaponSort, WeaponSortKey } from "@/types/sort";
import { WEAPON_SORT_KEYS } from "@/constants";
import { ArrowDownward, ArrowUpward } from "@mui/icons-material";


type Props = {
  sort: WeaponSort;
  onChange: (newSort: WeaponSort) => void;
}


export const SortSelect: React.FC<Props> = ({ sort, onChange}: Props) => {
  return (
    <Stack
      direction="row"
      spacing={0.5}
    >
      <FormControl
        size="small"
        sx={{
          minWidth: 100,
          flex:"0 0 auto",
          mb: 2,
        }}
      >
        <InputLabel id="weaoin-sort">並べ替え</InputLabel>
        <Select
          value={sort.key}
          label="sort"
          onChange={ (e) => onChange({
            ...sort,
            key: e.target.value as WeaponSortKey
          })}
        >
          { WEAPON_SORT_KEYS.map( (k) => (
            <MenuItem key={k.key} value={k.key}>{k.label}</MenuItem>
          ))}
        </Select>
      </FormControl>
      <IconButton
      size="small"
        onClick={() =>
          onChange({
            ...sort,
            order: sort.order === "asc" ? "desc" : "asc"
          })
        }
      >
        {sort.order === "asc"
          ? <ArrowUpward sx={{ fontSize: 18 }}/>
          : <ArrowDownward sx={{ fontSize: 18 }}/>}
      </IconButton>
    </Stack>
  )
}