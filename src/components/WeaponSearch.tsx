import React from 'react'

import { Box, Card, CardContent, Typography, Grid, FormControl, InputLabel, Select, MenuItem } from '@mui/material';

import WeaponCard from './WeaponCard';

import { useWeaponContext } from "@/contexts/WeaponContext";

import type { Weapon } from '@/types';


import effects from '@/data/effects.json';




const SELECTED_NONE = "指定なし";

const WeaponSearch = () => {
  const weapons = useWeaponContext();
  const [baseEffect, setBaseEffect] = React.useState<string>('');
  const [extraEffect, setExtraEffect] = React.useState<string>('');
  const [skillEffect, setSkillEffect] = React.useState<string>('');

  const filteredWeapons = weapons.filter((w: Weapon) => {
    return (
      (baseEffect === '' || w.baseEffect === baseEffect) &&
      (extraEffect === '' || w.extraEffect === extraEffect) &&
      (skillEffect === '' || w.skillEffect === skillEffect)
    );
  });

  return (
    <Box sx={{ p: 2 }}>
      <FormControl fullWidth sx={{ mt: 1, mb: 2 }}>
        <InputLabel id="base-effect-label">基礎効果: </InputLabel>
        <Select
          labelId="base-effect-label"
          value={baseEffect}
          label="基礎効果"
          onChange={(e) => setBaseEffect(e.target.value)}
        >
          <MenuItem key="none" value="">{SELECTED_NONE}</MenuItem>
          {effects.find(e => e.type === 'baseEffect')?.effects.map(e => (
            <MenuItem key={e} value={e}>{e}</MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl fullWidth sx={{ mt: 1, mb: 2 }}>
        <InputLabel id="extra-effect-label">追加効果: </InputLabel>
        <Select
          labelId="extra-effect-label"
          value={extraEffect}
          label="追加効果"
          onChange={(e) => setExtraEffect(e.target.value)}
        >
          <MenuItem key="none" value="">{SELECTED_NONE}</MenuItem>
          {effects.find(e => e.type === 'extraEffect')?.effects.map(e => (
            <MenuItem key={e} value={e}>{e}</MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl fullWidth sx={{ mt: 1, mb: 2 }}>
        <InputLabel id="skill-effect-label">スキル効果: </InputLabel>
        <Select
          labelId="skill-effect-label"
          value={skillEffect}
          label="スキル効果"
          onChange={(e) => setSkillEffect(e.target.value)}
        >
          <MenuItem key="none" value="">{SELECTED_NONE}</MenuItem>
          {effects.find(e => e.type === 'skillEffect')?.effects.map(e => (
            <MenuItem key={e} value={e}>{e}</MenuItem>
          ))}
        </Select>
      </FormControl>
      <Box></Box>
        <Typography variant="h6">検索結果: {filteredWeapons.length} 件</Typography>
        <Grid container spacing={2} justifyContent="center">
          {filteredWeapons.map((w) => (
            <WeaponCard key={w.name} weapon={w} />
          ))}
        </Grid>
      </Box>
  )
}

export default WeaponSearch