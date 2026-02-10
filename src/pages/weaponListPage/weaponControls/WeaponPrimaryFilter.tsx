import type { WeaponFilter } from "@/types/filter";
import type React from "react";
import { FormControl, InputLabel, MenuItem, Select, Stack } from "@mui/material";
import { RARITIES, WEAPON_TYPES } from "@/constants";



type Props = {
  filter: WeaponFilter;
  onChange: (newFilter: WeaponFilter) => void;
};



export const WeaponPrimaryFilter: React.FC<Props> = ({ filter, onChange }: Props) => {


  return (
    <Stack
      direction="row"
      spacing={2}
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
            {WEAPON_TYPES.map((type) => (
              <MenuItem key={type.value} value={type.value}>
                {type.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        { /* Rarity Filter */ }
        <FormControl size="small" sx={{ minWidth: 120, flex: "0 0 auto" }}>
          <InputLabel id="rarity-label">レアリティ</InputLabel>
          <Select
            value={filter.rarity ?? ""}
            label="レアリティ"
            onChange={ (e) =>
              onChange({ ...filter, rarity: e.target.value })
            }
          >
            <MenuItem value="">全てのレアリティ</MenuItem>
            {RARITIES.map( (r) => (
              <MenuItem key={r.value} value={r.value}>
                {r.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
    </Stack>
  )
}