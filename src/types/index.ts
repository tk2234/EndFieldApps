export interface Weapon {
  name: string;
  rarity: Rarity;
  weaponType: string;
  attack: number;
  baseEffect: string;
  extraEffect: string;
  skillEffect: string;
  src: string;
}

export interface Quest {
  id: number;
  name: string;
  dropTable: {
    baseEffects: string[];
    extraEffects: string[];
    skillEffects: string[];
  };
}

export interface EffectType {
  type: 'baseEffect' | 'extraEffect' | 'skillEffect';
  effects: string[];
}

export type Rarity =  3 | 4 | 5 | 6;