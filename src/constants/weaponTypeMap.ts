import { WEAPON_TYPES } from "./weaponTypes";

export const WEAPON_TYPE_MAP = Object.fromEntries(
  WEAPON_TYPES.map((t) => [t.label, t.value])
);