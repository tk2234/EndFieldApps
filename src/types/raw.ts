export interface RawWeapon {
  name: string;
  rarity: number;  // 生データ
  weaponType: string;
  attack: number;
  baseEffect: string;
  extraEffect: string;
  skillEffect: string;
  src: string;
}