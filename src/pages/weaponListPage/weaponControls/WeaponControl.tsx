import type { WeaponFilter } from "@/types/filter";
import type { WeaponSort } from "@/types/sort";
import { Box } from "@mui/material";
import React from "react";
import { WeaponPrimaryFilter } from "./WeaponPrimaryFilter";
import { WeaponSecondaryFilter } from "./WeaponSecondaryFilter";

type Props = {
  filter: WeaponFilter;
  sort: WeaponSort;
  onChangeFilter: (newFilter: WeaponFilter) => void;
  onChangeSort: (newSoer: WeaponSort) => void;
};


export const WeaponControl: React.FC<Props> = ({
  filter, sort, onChangeFilter, onChangeSort
}: Props) => {
  return (
    <Box>
      <WeaponPrimaryFilter
        filter={filter}
        onChange={onChangeFilter}
      />
      <WeaponSecondaryFilter
        filter={filter}
        sort={sort}
        onChangeFilter={onChangeFilter}
        onChangeSort={onChangeSort}
      />
    </Box>
  )
}